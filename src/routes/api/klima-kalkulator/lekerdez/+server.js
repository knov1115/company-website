import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/db';
import { COLLECTION_NAME } from '$lib/db/models/KlimaFormSubmission';

/**
 * GET handler - Klíma kalkulátor beküldések lekérdezése
 */
export async function GET() {
  try {
    // Kapcsolódás az adatbázishoz
    const { db } = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);

    // Adatok lekérése
    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();

    return json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Hiba a klíma kalkulátor beküldések lekérése során:', error);
    return json({ 
      success: false, 
      message: 'Hiba történt az adatok lekérése során.' 
    }, { status: 500 });
  }
} 