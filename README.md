# Klíma Weboldal Projekt

## Áttekintés
Ez a projekt egy klíma szolgáltatásokat kínáló cég weboldalát tartalmazza, amely Svelte és SvelteKit technológiával készült. Az oldal lehetőséget biztosít a látogatóknak klíma/hőszivattyú és egyéb berendezések/szolgáltatások igénylésére egy kalkulátor segítségével, valamint tartalmaz cégismertető részeket és szakmai cikkeket is.

## Fő funkciók
- Responsive design
- Klíma kalkulátor űrlap 
- Betonfúrás kalkulátor űrlap
- Admin felület a beküldések kezeléséhez (nincs azonosításhoz kötve)
- Blog/cikk rendszer (Markdown alapú)
- Kapcsolatfelvételi lehetőség

## Technikai részletek
- **Frontend**: SvelteKit, Tailwind CSS
- **Backend**: Node.js, SvelteKit API routes
- **Adatbázis**: MongoDB
- **Autentikáció**: -

## Projektstruktúra
- `src/routes` - Az oldal útvonalai és API végpontjai
- `src/components` - Újrafelhasználható komponensek
- `src/lib` - Közös könyvtárak és segédfüggvények
- `src/lib/db` - Adatbázis kapcsolatok és modellek
- `static` - Statikus fájlok (képek, ikonok)

## Admin funkciók
- Klíma kalkulátor beküldések kezelése / megtekintése
- Beküldések státuszának módosítása (új, folyamatban, befejezett, törölve)

## API dokumentáció

### Klíma kalkulátor API végpontok

#### `POST /api/klima-kalkulator`
- **Feladat**: Klíma kalkulátor űrlap adatok fogadása és mentése az adatbázisba
- **Request body**: JSON formátumban
  ```json
  {
    "name": "Felhasználó neve",
    "location": "Helyszín (város/cím)",
    "email": "Email cím",
    "phone": "Telefonszám",
    "usage": "hutes|futes|mindketto", 
    "squareMeters": "Helyiség négyzetméter",
    "megbizhatosag": 1-5 értékelés,
    "ar": 1-5 értékelés,
    "design": 1-5 értékelés,
    "energiaHatekonysag": 1-5 értékelés,
    "csendesMusik": 1-5 értékelés,
    "files": [{ name, type, size, lastModified }],
    "message": "További üzenet"
  }
  ```
- **Response**: JSON válasz
  ```json
  {
    "success": true|false,
    "message": "Sikeres vagy hibaüzenet"
  }
  ```
- **Hibakezelés**: 400-as státuszkód validációs hiba esetén, 500-as szerveroldali hiba esetén

### Beküldések API végpontok

#### `GET /admin/bekuldesek`
- **Feladat**: Az összes beküldés lekérdezése az admin felület számára
- **Response**: Server-side renderelt oldal a beküldésekkel

#### `GET /api/admin/bekuldesek`
- **Feladat**: Az összes beküldés lekérdezése JSON formátumban
- **Response**: Beküldések listája
  ```json
  [
    {
      "_id": "MongoDB azonosító",
      "name": "Ügyfél neve",
      "email": "Email cím",
      "type": "klima|betonfuras|stb",
      "status": "new|processing|completed|canceled",
      "createdAt": "Létrehozás időpontja",
      "updatedAt": "Frissítés időpontja"
    },
    ...
  ]
  ```
- **Szűrési lehetőségek**: `?status=new&type=klima`

### Külső API integráció

#### Irányítószám API
- **Leírás**: Magyar irányítószám és település adatok lekérdezésére szolgáló API
- **Fájl**: `src/lib/utils/iranyitoszam.js`
- **Funkciók**:
  - `getSettlementsByZip(zipCode)`: Irányítószám alapján települések lekérdezése
  - `getZipsBySettlement(settlement)`: Település neve alapján irányítószámok lekérdezése
  - `validateZipCode(zipCode)`: Irányítószám ellenőrzése (létezik-e)
- **Használat példa**:
  ```javascript
  import { getSettlementsByZip } from '$lib/utils/iranyitoszam';
  
  // Irányítószám alapján települések lekérdezése
  const settlements = await getSettlementsByZip('1074');
  // Eredmény: ['Budapest VII. kerület']
  ```

### Betonfúrás kalkulátor API végpontok
Hasonló szerkezettel rendelkeznek mint a klíma kalkulátor API-k, a megfelelő adatmodellel.

### Adatbázis modellek

#### KlimaFormSubmission
A klíma kalkulátor űrlapok adatainak tárolására szolgáló modell:
- `_id`: MongoDB azonosító
- `name`: Ügyfél neve
- `location`: Helyszín
- `email`: Email cím
- `phone`: Telefonszám
- `usage`: Használat típusa (hűtés/fűtés/mindkettő)
- `squareMeters`: Helyiség mérete
- `ratings`: Értékelések különböző szempontok szerint
- `files`: Feltöltött fájlok metaadatai
- `message`: További üzenet
- `status`: Beküldés státusza
- `createdAt`: Létrehozás időpontja
- `updatedAt`: Frissítés időpontja

## Telepítés és futtatás
1. Klónozd a repót: `git clone [repo URL]`
2. Telepítsd a függőségeket: `npm install`
3. Futtatás fejlesztői módban: `npm run dev`
4. Buildelés: `npm run build`

## Környezeti változók
A következő környezeti változók szükségesek:
- `MONGODB_URI` - MongoDB kapcsolódási URL

