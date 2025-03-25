<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { getSettlementsByZipCode, getZipCodesBySettlement } from '$lib/services/iranyitoszam';
  
  const dispatch = createEventDispatcher();
  
  let anyagSelect = '';
  let furatMelyseg = '';
  let furatAtmero = '';
  let iranyitoszam = '';
  let telepules = '';
  let telepulesekLathato = false;
  let vizRendelkezesre = 'igen';
  let nev = '';
  let cim = '';
  let email = '';
  let telefon = '';
  let megjegyzes = '';
  let elfogadva = false;
  let iranyitoszamKeresesiEredmeny = [];
  let keresesFolyamatban = false;
  
  // Visszajelzés kezelése
  let showFeedback = true;
  let addedItems = [];
  
  const anyagOpciok = [
    { value: 'beton', label: 'Beton' },
    { value: 'vasbeton', label: 'Vasbeton' },
    { value: 'tegla', label: 'Tégla' },
    { value: 'ytong', label: 'Ytong' },
    { value: 'egyeb', label: 'Egyéb' }
  ];
  
  // Irányítószám keresés a HUR API-val
  async function keresIranyitoszam() {
    if (iranyitoszam && iranyitoszam.length >= 2) {
      keresesFolyamatban = true;
      
      try {
        console.log("API hívás indítása...");
        iranyitoszamKeresesiEredmeny = await getSettlementsByZipCode(iranyitoszam);
        console.log("API válasz:", iranyitoszamKeresesiEredmeny);
        
        // Ha csak egy településünk van, azt automatikusan beállítjuk
        if (iranyitoszamKeresesiEredmeny.length === 1) {
          telepules = iranyitoszamKeresesiEredmeny[0].name;
        }
        
        telepulesekLathato = iranyitoszamKeresesiEredmeny.length > 0;
      } catch (error) {
        console.error("Hiba az irányítószámok lekérdezésekor:", error);
        iranyitoszamKeresesiEredmeny = [];
        telepulesekLathato = false;
      } finally {
        keresesFolyamatban = false;
      }
    } else {
      iranyitoszamKeresesiEredmeny = [];
      telepulesekLathato = false;
    }
  }
  
  // Irányítószám/település beviteli mező kezelése
  function handleIranyitoszamInput() {
    if (iranyitoszam) {
      keresIranyitoszam();
    } else {
      telepulesekLathato = false;
    }
  }
  
  // Település kiválasztása a legördülő listából
  function valasztTelepules(item) {
    iranyitoszam = item.zip;
    telepules = item.name;
    telepulesekLathato = false;
  }
  
  // Gombokhoz kapcsolódó funkciók
  function szamitas() {
    // Egyszerű számítási logika példa
    const anyagSzorzo = anyagSelect === 'beton' ? 1 : 
                        anyagSelect === 'vasbeton' ? 1.4 : 
                        anyagSelect === 'tegla' ? 0.8 :
                        anyagSelect === 'ytong' ? 0.6 : 1.2;
    
    const melysegSzorzo = parseInt(furatMelyseg) || 0;
    const darabszam = parseInt(furatAtmero) || 0;
    const vizSzorzo = vizRendelkezesre === 'igen' ? 1 : 1.2;
    
    // Alapár + anyag szorzó + mélység * darabszám * víz felár
    nettoAr = Math.round((15000 + (anyagSzorzo * 5000) + (melysegSzorzo * 200)) * darabszam * vizSzorzo);
    
    dispatch('szamitas', { nettoAr });
    return false;
  }
  
  function ajanlat() {
    // Anyag megnevezés lekérése
    const anyagNev = anyagOpciok.find(opcio => opcio.value === anyagSelect)?.label || '';
    
    // Létrehozunk egy objektumot az ajánlathoz adott tételről
    const newItem = {
      id: Date.now(),
      anyag: anyagNev,
      furatMelyseg: furatMelyseg + " mm",
      darabszam: furatAtmero,
      telepules: telepules,
      vizRendelkezesre: vizRendelkezesre === 'igen' ? 'Igen' : 'Nem',
      nettoAr: nettoAr
    };
    
    // Hozzáadjuk a tételt a listához
    addedItems = [...addedItems, newItem];
    
    // Megjelenítjük a visszajelzést
    showFeedback = true;
    
    dispatch('ajanlat', { 
      anyagSelect,
      furatMelyseg,
      furatAtmero,
      iranyitoszam,
      telepules,
      vizRendelkezesre,
      nettoAr
    });
    
    // Űrlap mezők ürítése
    anyagSelect = '';
    furatMelyseg = '';
    furatAtmero = '';
    iranyitoszam = '';
    telepules = '';
    nettoAr = 0;
    
    return false;
  }
  
  // Tétel eltávolítása a listából
  function removeItem(id) {
    addedItems = addedItems.filter(item => item.id !== id);
  }
  
  function kuldes() {
    if (!elfogadva) return;
    
    dispatch('kuldes', {
      anyagSelect,
      furatMelyseg,
      furatAtmero,
      iranyitoszam,
      telepules,
      vizRendelkezesre,
      nettoAr,
      nev,
      cim,
      email,
      telefon,
      megjegyzes,
      addedItems
    });
  }
  
  let nettoAr = 0;
  
  // Event listener a dokumentumra kattintások kezeléséhez (hogy eltüntessük a legördülő listát)
  function handleClickOutside(event) {
    const results = document.getElementById('iranyitoszam-eredmenyek');
    const input = document.getElementById('iranyitoszam-input');
    
    if (results && input && !results.contains(event.target) && !input.contains(event.target)) {
      telepulesekLathato = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<style>
  .kalkulator-container {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #333;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .form-group {
    margin-bottom: 16px;
    position: relative;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #555;
  }
  
  .form-control {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  
  select.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8.825L1.175 4 2.4 2.775l3.6 3.6 3.6-3.6L10.825 4 6 8.825z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 30px;
  }
  
  textarea.form-control {
    min-height: 120px;
    resize: vertical;
  }
  
  .price-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  
  .netto-ar {
    font-size: 18px;
    font-weight: 500;
  }
  
  .button-container {
    display: flex;
    gap: 16px;
  }
  
  .btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 13px;
  }
  
  .btn-outline {
    background-color: transparent;
    border: 1px solid #dc0000;
    color: #dc0000;
  }
  
  .btn-primary {
    background-color: #dc0000;
    color: white;
  }
  
  .btn-outline:hover {
    background-color: rgba(220, 0, 0, 0.05);
  }
  
  .btn-primary:hover {
    background-color: #c00000;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  
  .checkbox-container input {
    margin-right: 8px;
    margin-top: 3px;
  }
  
  .checkbox-container label {
    font-size: 14px;
    color: #555;
  }
  
  .checkbox-container a {
    color: #dc0000;
    text-decoration: none;
  }
  
  .checkbox-container a:hover {
    text-decoration: underline;
  }
  
  .search-results {
    position: absolute;
    z-index: 10;
    width: 100%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-height: 250px;
    overflow-y: auto;
  }
  
  .search-result-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .search-result-item:hover {
    background-color: #f5f5f5;
  }
  
  .input-with-icon {
    position: relative;
  }
  
  .icon-right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
  
  .iranyitoszam-container {
    position: relative;
  }
  
  .telepules-name {
    font-weight: 500;
  }
  
  .iranyitoszam-code {
    color: #666;
    font-size: 0.85em;
    margin-left: 4px;
  }
  
  .mt-8 {
    margin-top: 2rem;
  }
  
  .loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #dc0000;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @keyframes spin {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
  }
  
  /* Új stílusok a visszajelzéshez */
  .calculator-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: flex-start;
  }
  
  @media (max-width: 992px) {
    .calculator-layout {
      grid-template-columns: 1fr;
    }
  }
  
  .feedback-container {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
    height: 100%;
  }
  
  .feedback-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .feedback-title svg {
    margin-right: 8px;
    color: #dc0000;
  }
  
  .feedback-item {
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  
  .feedback-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .feedback-item-title {
    font-weight: 500;
    font-size: 16px;
  }
  
  .feedback-item-price {
    font-weight: 500;
    color: #dc0000;
  }
  
  .feedback-item-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .remove-item-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #777;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .remove-item-btn:hover {
    background-color: #f5f5f5;
    color: #dc0000;
  }
  
  .total-price {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #eee;
  }
  
  .total-price-value {
    color: #dc0000;
    font-size: 18px;
  }
  
  .feedback-item-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 14px;
    color: #555;
  }
  
  .feedback-item-detail {
    display: flex;
    justify-content: space-between;
  }
  
  .feedback-item-label {
    color: #777;
  }
  
  .divider {
    height: 1px;
    background-color: #eee;
    margin: 16px 0;
  }
  
  .empty-feedback {
    text-align: center;
    padding: 48px 24px;
    color: #777;
  }
  
  .empty-feedback svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #ccc;
    display: inline-block;
  }
</style>

<div class="calculator-layout">
  <div class="kalkulator-container">
    <h2 class="section-title">Tétel hozzáadása</h2>
    
    <div class="form-grid">
      <div class="form-group">
        <label for="anyag">Válasszon anyagot</label>
        <select id="anyag" class="form-control" bind:value={anyagSelect}>
          <option value="" disabled selected>Válasszon anyagot</option>
          {#each anyagOpciok as opcio}
            <option value={opcio.value}>{opcio.label}</option>
          {/each}
        </select>
      </div>
      
      <div class="form-group">
        <label for="furat-melyseg">Adja meg a furat mélységét (mm)</label>
        <input type="number" id="furat-melyseg" class="form-control" bind:value={furatMelyseg} placeholder="pl. 200">
      </div>
      
      <div class="form-group">
        <label for="furat-atmero">Adja meg a darabszámot</label>
        <input type="number" id="furat-atmero" class="form-control" bind:value={furatAtmero} placeholder="pl. 5">
      </div>
      
      <div class="form-group iranyitoszam-container">
        <label for="iranyitoszam-input">Adja meg a helyiséget/irányítószámot</label>
        <div class="input-with-icon">
          <input 
            type="text" 
            id="iranyitoszam-input" 
            class="form-control" 
            bind:value={iranyitoszam} 
            on:input={handleIranyitoszamInput}
            placeholder="Irányítószám (pl. 1011)"
            maxlength="4"
            pattern="[0-9]{4}"
          >
          {#if keresesFolyamatban}
            <div class="loader"></div>
          {:else if iranyitoszam}
            <span class="icon-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          {/if}
        </div>
        {#if telepulesekLathato}
          <div class="search-results" id="iranyitoszam-eredmenyek">
            {#each iranyitoszamKeresesiEredmeny as item}
              <div class="search-result-item" on:click={() => valasztTelepules(item)}>
                <span class="telepules-name">{item.name}</span>
                <span class="iranyitoszam-code">({item.zip})</span>
              </div>
            {/each}
          </div>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="telepules-input">Település</label>
        <input 
          type="text" 
          id="telepules-input" 
          class="form-control" 
          bind:value={telepules} 
          readonly={!!iranyitoszam}
          placeholder="A kiválasztott irányítószámhoz tartozó település">
      </div>
      
      <div class="form-group">
        <label for="viz-rendelkezesre">Víz rendelkezésre áll a helyszínen?</label>
        <select id="viz-rendelkezesre" class="form-control" bind:value={vizRendelkezesre}>
          <option value="igen">Igen</option>
          <option value="nem">Nem</option>
        </select>
      </div>
    </div>
    
    <div class="form-group">
      <p>Előzetesen (a készlettől és mérce szerint)</p>
      <div class="price-section">
        <div class="netto-ar">Nettó ár: {nettoAr.toLocaleString()} Ft</div>
        <div class="button-container">
          <button class="btn btn-outline" on:click={szamitas}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" style="display: inline-block; width: 16px; height: 16px; margin-right: 4px; vertical-align: middle;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
            </svg>
            KALKULÁCIÓ
          </button>
          <button class="btn btn-primary" on:click={ajanlat}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" style="display: inline-block; width: 16px; height: 16px; margin-right: 4px; vertical-align: middle;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            AJÁNLATHOZ ADÁS
          </button>
        </div>
      </div>
    </div>
    
    <h2 class="section-title mt-8">Adatok</h2>
    
    <div class="form-grid">
      <div class="form-group">
        <label for="nev">Név</label>
        <input type="text" id="nev" class="form-control" bind:value={nev}>
      </div>
      
      <div class="form-group">
        <label for="cim">Cím</label>
        <input type="text" id="cim" class="form-control" bind:value={cim}>
      </div>
      
      <div class="form-group">
        <label for="email">Email cím</label>
        <input type="email" id="email" class="form-control" bind:value={email}>
      </div>
      
      <div class="form-group">
        <label for="telefon">Telefonszám</label>
        <input type="tel" id="telefon" class="form-control" bind:value={telefon}>
      </div>
    </div>
    
    <div class="form-group">
      <label for="megjegyzes">Megjegyzés az ajánlathoz</label>
      <textarea id="megjegyzes" class="form-control" bind:value={megjegyzes}></textarea>
    </div>
    
    <div class="checkbox-container">
      <input type="checkbox" id="adatvedelmi" bind:checked={elfogadva}>
      <label for="adatvedelmi">Elfogadom az <a href="/adatvedelmi-nyilatkozat" target="_blank">adatvédelmi nyilatkozatot</a>.</label>
    </div>
    
    <button class="btn btn-primary" disabled={!elfogadva} on:click={kuldes}>KÜLDÉS</button>
  </div>
  
  <div class="feedback-container">
    <h2 class="feedback-title">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
      Tételek
    </h2>
    
    {#if addedItems.length > 0}
      {#each addedItems as item (item.id)}
        <div class="feedback-item">
          <div class="feedback-item-header">
            <div class="feedback-item-title">{item.anyag} fúrás</div>
            <div class="feedback-item-actions">
              <div class="feedback-item-price">{item.nettoAr.toLocaleString()} Ft</div>
              <button class="remove-item-btn" on:click={() => removeItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
          <div class="feedback-item-details">
            <div class="feedback-item-detail">
              <span class="feedback-item-label">Darabszám</span>
              <span>{item.darabszam} db</span>
            </div>
            <div class="feedback-item-detail">
              <span class="feedback-item-label">Fúrási hossz</span>
              <span>{item.furatMelyseg}</span>
            </div>
            <div class="feedback-item-detail">
              <span class="feedback-item-label">Víz</span>
              <span>{item.vizRendelkezesre}</span>
            </div>
            <div class="feedback-item-detail">
              <span class="feedback-item-label">Helyszín</span>
              <span>{item.telepules}</span>
            </div>
          </div>
        </div>
      {/each}
      
      <div class="total-price">
        <span>Összesen:</span>
        <span class="total-price-value">{addedItems.reduce((total, item) => total + item.nettoAr, 0).toLocaleString()} Ft</span>
      </div>
    {:else}
      <div class="empty-feedback">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <p>Az ajánlat jelenleg üres.</p>
        <p>Adjon hozzá tételeket a kalkulátor segítségével!</p>
      </div>
    {/if}
  </div>
</div> 