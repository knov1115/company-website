import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Ellenőrzés
    if (!formData.name || !formData.email || !formData.message) {
      return json({ success: false, error: 'Minden mező kitöltése kötelező!' }, { status: 400 });
    }
    
    // Email küldéshez transporter létrehozása
    const transporter = nodemailer.createTransport({
      host: env.EMAIL_HOST,
      port: env.EMAIL_PORT,
      secure: env.EMAIL_PORT === '465',
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });
    
    // Email beállítások
    const mailOptions = {
      from: env.EMAIL_FROM,
      to: env.EMAIL_TO,
      subject: `Új kapcsolatfelvétel: ${formData.name}`,
      text: `
        Név: ${formData.name}
        Email: ${formData.email}
        Telefon: ${formData.phone || 'Nincs megadva'}
        
        Üzenet:
        ${formData.message}
      `,
      html: `
        <h2>Új kapcsolatfelvétel érkezett a weboldalról</h2>
        <p><strong>Név:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone || 'Nincs megadva'}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Email küldése
    await transporter.sendMail(mailOptions);
    
    return json({ success: true, message: 'Üzenet sikeresen elküldve!' });
    
  } catch (error) {
    console.error('Email küldési hiba:', error);
    return json(
      { success: false, error: 'Az üzenet küldése sikertelen. Kérjük, próbálja újra később.' },
      { status: 500 }
    );
  }
} 