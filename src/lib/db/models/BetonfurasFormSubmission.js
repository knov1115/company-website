import { ObjectId } from 'mongodb';

/**
 * Betonfúrás kalkulátor űrlap beküldések adatmodell
 */
export class BetonfurasFormSubmission {
  constructor(data) {
    this._id = data._id || new ObjectId();
    this.nev = data.nev;
    this.cim = data.cim;
    this.email = data.email;
    this.telefon = data.telefon;
    this.anyagSelect = data.anyagSelect;
    this.furatMelyseg = data.furatMelyseg;
    this.furatAtmero = data.furatAtmero;
    this.iranyitoszam = data.iranyitoszam;
    this.telepules = data.telepules;
    this.vizRendelkezesre = data.vizRendelkezesre;
    this.nettoAr = data.nettoAr;
    this.megjegyzes = data.megjegyzes || '';
    this.addedItems = data.addedItems || [];
    this.status = data.status || 'new'; // ['new', 'processing', 'completed', 'canceled']
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = new Date();
  }

  /**
   * Űrlap adatok ellenőrzése
   * @returns {boolean} Sikeres-e az ellenőrzés
   */
  validate() {
    if (!this.nev || typeof this.nev !== 'string') return false;
    if (!this.email || typeof this.email !== 'string') return false;
    if (!this.telefon || typeof this.telefon !== 'string') return false;
    return true;
  }

  /**
   * Objektum átalakítása adatbázis formátumra
   * @returns {Object} Adatbázisba menthető objektum
   */
  toJSON() {
    return {
      _id: this._id,
      nev: this.nev,
      cim: this.cim,
      email: this.email,
      telefon: this.telefon,
      anyagSelect: this.anyagSelect,
      furatMelyseg: this.furatMelyseg,
      furatAtmero: this.furatAtmero,
      iranyitoszam: this.iranyitoszam,
      telepules: this.telepules,
      vizRendelkezesre: this.vizRendelkezesre,
      nettoAr: this.nettoAr,
      megjegyzes: this.megjegyzes,
      addedItems: this.addedItems,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Objektum létrehozása adatbázis adatokból
   * @param {Object} data Adatbázisból származó adatok
   * @returns {BetonfurasFormSubmission} Új BetonfurasFormSubmission objektum
   */
  static fromDB(data) {
    if (!data) return null;
    return new BetonfurasFormSubmission(data);
  }
}

/**
 * Betonfúrás kalkulátor űrlap beküldések gyűjtemény neve
 */
export const COLLECTION_NAME = 'betonfurasFormSubmissions'; 