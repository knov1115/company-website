/**
 * Magyar irányítószám és település kereső szolgáltatás a HUR API segítségével
 * API forrás: https://hur.webmania.cc/
 */

/**
 * Lekéri az adott irányítószámhoz tartozó településeket
 * @param {string} zipCode - Az irányítószám
 * @returns {Promise<Array>} - A településeket tartalmazó tömb
 */
export async function getSettlementsByZipCode(zipCode) {
  try {
    // Érvénytelen vagy hiányzó irányítószám esetén üres tömböt adunk vissza
    if (!zipCode || zipCode.length !== 4) {
      return [];
    }

    // API kérés elküldése
    const response = await fetch(`https://hur.webmania.cc/zips/${zipCode}.json`);
    
    // Hibakezelés
    if (!response.ok) {
      console.error('Irányítószám lekérési hiba:', response.status);
      return [];
    }
    
    // Adatok feldolgozása
    const data = await response.json();
    return data.zips || [];
  } catch (error) {
    console.error('Hiba az irányítószámok lekérése során:', error);
    return [];
  }
}

/**
 * Lekéri az adott településhez tartozó irányítószámokat
 * @param {string} settlementName - A település neve
 * @returns {Promise<Array>} - Az irányítószámokat tartalmazó tömb
 */
export async function getZipCodesBySettlement(settlementName) {
  try {
    // Érvénytelen vagy hiányzó településnév esetén üres tömböt adunk vissza
    if (!settlementName || settlementName.trim().length < 2) {
      return [];
    }

    // API kérés elküldése
    const response = await fetch(`https://hur.webmania.cc/zips/${encodeURIComponent(settlementName)}.json`);
    
    // Hibakezelés
    if (!response.ok) {
      console.error('Település lekérési hiba:', response.status);
      return [];
    }
    
    // Adatok feldolgozása
    const data = await response.json();
    return data.zips || [];
  } catch (error) {
    console.error('Hiba a települések lekérése során:', error);
    return [];
  }
} 