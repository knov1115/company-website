import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/db';
import { KlimaFormSubmission, COLLECTION_NAME } from '$lib/db/models/KlimaFormSubmission';

/**
 * POST handler - Klíma kalkulátor űrlap adatok mentése
 */
export async function POST({ request }) {
  try {
    // Adatok kinyerése
    const formData = await request.json();
    console.log('Beérkezett űrlap adatok:', formData);

    // Fájl adatok előkészítése (csak metaadatok mentése DB-be)
    const fileMetadata = Array.isArray(formData.files) 
      ? formData.files.map(file => ({
          name: file.name || 'ismeretlen fájl',
          type: file.type || 'application/octet-stream',
          size: file.size || 0,
          lastModified: file.lastModified || Date.now()
        })) 
      : [];
      
    console.log('Fájl metaadatok:', fileMetadata);

    // Kapcsolódás az adatbázishoz
    const { db } = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);

    // Új beküldés létrehozása
    const submission = new KlimaFormSubmission({
      name: formData.name,
      location: formData.location,
      email: formData.email,
      phone: formData.phone,
      usage: formData.usage,
      squareMeters: formData.squareMeters,
      megbizhatosag: formData.megbizhatosag,
      ar: formData.ar,
      design: formData.design,
      energiaHatekonysag: formData.energiaHatekonysag,
      csendesMusik: formData.csendesMusik,
      files: fileMetadata,
      message: formData.message,
    });

    // Validálás
    if (!submission.validate()) {
      console.error('Validációs hiba:', submission);
      return json({ 
        success: false, 
        message: 'Hiányzó vagy érvénytelen adatok' 
      }, { status: 400 });
    }

    // Mentés az adatbázisba
    const result = await collection.insertOne(submission.toJSON());
    console.log('Sikeres mentés az adatbázisba:', result.insertedId);

    // TODO: Email küldés a felhasználónak és adminisztrátoroknak
    // await sendConfirmationEmail(submission);
    // await sendNotificationToAdmin(submission);

    return json({ 
      success: true, 
      message: 'Köszönjük! Adatait sikeresen rögzítettük, kollégánk hamarosan felveszi Önnel a kapcsolatot.' 
    });
  } catch (error) {
    console.error('Hiba a klíma kalkulátor adatok mentése során:', error);
    return json({ 
      success: false, 
      message: 'Hiba történt az adatok mentése során. Kérjük próbálja újra később.' 
    }, { status: 500 });
  }
} 