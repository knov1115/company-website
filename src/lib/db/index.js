import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Memória-alapú MongoDB szerver példány
let mongoMemoryServer;

// MongoDB kapcsolati URI - környezeti változóból vagy memória szerver
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/klima-kalkulator';

// Singleton kapcsolat kezelése - cache a kapcsolat fenntartásához fejlesztési módban
let cachedClient = null;
let cachedDb = null;

/**
 * Kapcsolódás a MongoDB adatbázishoz
 * @returns {Promise<{client: MongoClient, db: Db}>} Az adatbázis és kliens objektumok
 */
export async function connectToDatabase() {
  // Ha már van kapcsolat, használjuk azt
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Ha nincs éles MongoDB szerver, használjunk memória szervert
    if (process.env.NODE_ENV !== 'production' && !process.env.MONGODB_URI) {
      console.log('Memória-alapú MongoDB szerver használata fejlesztési módban...');
      mongoMemoryServer = await MongoMemoryServer.create();
      MONGODB_URI = mongoMemoryServer.getUri();
      console.log('Memória MongoDB szerver URI:', MONGODB_URI);
    }

    // Új kapcsolat létrehozása
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db();

    // Cache-eljük a kapcsolatot
    cachedClient = client;
    cachedDb = db;

    console.log('Sikeres kapcsolódás a MongoDB adatbázishoz');
    return { client, db };
  } catch (error) {
    console.error('Hiba a MongoDB kapcsolódás során:', error);
    throw new Error('Nem sikerült kapcsolódni az adatbázishoz');
  }
}

/**
 * Kapcsolat bezárása (használható tesztekhez vagy tisztításhoz)
 */
export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
  
  if (mongoMemoryServer) {
    await mongoMemoryServer.stop();
    mongoMemoryServer = null;
  }
}

export default connectToDatabase; 