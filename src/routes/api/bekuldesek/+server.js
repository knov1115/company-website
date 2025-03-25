import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/db';
import { COLLECTION_NAME as KLIMA_COLLECTION } from '$lib/db/models/KlimaFormSubmission';
import { COLLECTION_NAME as BETONFURAS_COLLECTION } from '$lib/db/models/BetonfurasFormSubmission';

/**
 * GET handler - Kalkulátor beküldések lekérdezése
 */
export async function GET() {
  try {
    // Kapcsolódás az adatbázishoz
    const { db } = await connectToDatabase();
    
    // Klíma kalkulátor beküldések lekérése
    const klimaCollection = db.collection(KLIMA_COLLECTION);
    const klimaSubmissions = await klimaCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();
      
    // Klíma beküldések típusának megjelölése
    const klimaSubmissionsWithType = klimaSubmissions.map(item => ({
      ...item,
      type: 'klima'
    }));
    
    // Betonfúrás kalkulátor beküldések lekérése
    const betonfurasCollection = db.collection(BETONFURAS_COLLECTION);
    const betonfurasSubmissions = await betonfurasCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();
      
    // Betonfúrás beküldések típusának megjelölése
    const betonfurasSubmissionsWithType = betonfurasSubmissions.map(item => ({
      ...item,
      type: 'betonfuras'
    }));
    
    // Összes beküldés összefűzése és rendezése dátum szerint
    const allSubmissions = [...klimaSubmissionsWithType, ...betonfurasSubmissionsWithType]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return json({
      success: true,
      data: allSubmissions
    });
  } catch (error) {
    console.error('Hiba a kalkulátor beküldések lekérése során:', error);
    return json({ 
      success: false, 
      message: 'Hiba történt az adatok lekérése során.' 
    }, { status: 500 });
  }
} 