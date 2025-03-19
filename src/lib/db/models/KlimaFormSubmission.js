import { ObjectId } from 'mongodb';

/**
 * Klíma kalkulátor űrlap beküldések adatmodell
 */
export class KlimaFormSubmission {
  constructor(data) {
    this._id = data._id || new ObjectId();
    this.name = data.name;
    this.location = data.location;
    this.email = data.email;
    this.phone = data.phone;
    this.usage = data.usage;
    this.squareMeters = data.squareMeters;
    this.ratings = {
      megbizhatosag: data.megbizhatosag || 3,
      ar: data.ar || 3,
      design: data.design || 3,
      energiaHatekonysag: data.energiaHatekonysag || 3,
      csendesMusik: data.csendesMusik || 3
    };
    this.files = data.files || [];
    this.message = data.message || '';
    this.status = data.status || 'new'; // ['new', 'processing', 'completed', 'canceled']
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = new Date();
  }

  /**
   * Űrlap adatok ellenőrzése
   * @returns {boolean} Sikeres-e az ellenőrzés
   */
  validate() {
    if (!this.name || typeof this.name !== 'string') return false;
    if (!this.email || typeof this.email !== 'string') return false;
    if (!this.location || typeof this.location !== 'string') return false;
    if (!this.phone || typeof this.phone !== 'string') return false;
    if (!this.usage || !['hutes', 'futes', 'mindketto'].includes(this.usage)) return false;
    if (!this.squareMeters) return false;
    return true;
  }

  /**
   * Objektum átalakítása adatbázis formátumra
   * @returns {Object} Adatbázisba menthető objektum
   */
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      location: this.location,
      email: this.email,
      phone: this.phone,
      usage: this.usage,
      squareMeters: this.squareMeters,
      ratings: this.ratings,
      files: this.files,
      message: this.message,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Objektum létrehozása adatbázis adatokból
   * @param {Object} data Adatbázisból származó adatok
   * @returns {KlimaFormSubmission} Új KlimaFormSubmission objektum
   */
  static fromDB(data) {
    if (!data) return null;
    return new KlimaFormSubmission(data);
  }
}

/**
 * Klíma kalkulátor űrlap beküldések gyűjtemény neve
 */
export const COLLECTION_NAME = 'klimaFormSubmissions'; 