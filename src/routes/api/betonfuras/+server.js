import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/db';
import { BetonfurasFormSubmission, COLLECTION_NAME } from '$lib/db/models/BetonfurasFormSubmission';

/**
 * POST handler - Betonfúrás kalkulátor űrlap adatok mentése
 */
export async function POST({ request }) {
  try {
    // Adatok kinyerése
    const formData = await request.json();
    console.log('Beérkezett betonfúrás űrlap adatok:', formData);

    // Kapcsolódás az adatbázishoz
    const { db } = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);

    // Új beküldés létrehozása
    const submission = new BetonfurasFormSubmission({
      nev: formData.nev,
      cim: formData.cim,
      email: formData.email,
      telefon: formData.telefon,
      anyagSelect: formData.anyagSelect,
      furatMelyseg: formData.furatMelyseg,
      furatAtmero: formData.furatAtmero,
      iranyitoszam: formData.iranyitoszam,
      telepules: formData.telepules,
      vizRendelkezesre: formData.vizRendelkezesre,
      nettoAr: formData.nettoAr,
      megjegyzes: formData.megjegyzes,
      addedItems: Array.isArray(formData.addedItems) ? formData.addedItems : [],
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
    console.error('Hiba a betonfúrás kalkulátor adatok mentése során:', error);
    return json({ 
      success: false, 
      message: 'Hiba történt az adatok mentése során. Kérjük próbálja újra később.' 
    }, { status: 500 });
  }
} 