<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let anyagSelect = '';
  let furatMelyseg = '';
  let furatAtmero = '';
  let helyisegSzam = '';
  let vizRendelkezesre = 'igen';
  let nev = '';
  let cim = '';
  let email = '';
  let telefon = '';
  let megjegyzes = '';
  let elfogadva = false;
  
  const anyagOpciok = [
    { value: 'beton', label: 'Beton' },
    { value: 'vasbeton', label: 'Vasbeton' },
    { value: 'tegla', label: 'Tégla' },
    { value: 'ytong', label: 'Ytong' },
    { value: 'egyeb', label: 'Egyéb' }
  ];
  
  function szamitas() {
    dispatch('szamitas');
    // Ide jöhetne a tényleges számítási logika
    return false;
  }
  
  function ajanlat() {
    dispatch('ajanlat');
    // Ide jöhetne az ajánlatkérés logikája
    return false;
  }
  
  let nettoAr = 0;
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
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
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
</style>

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
    
    <div class="form-group">
      <label for="helyiseg-szam">Adja meg a helyiségek/szintek számot</label>
      <input type="number" id="helyiseg-szam" class="form-control" bind:value={helyisegSzam} placeholder="pl. 2">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" style="display: inline-block; width: 20px; height: 20px; margin-right: 4px; vertical-align: middle;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
          </svg>
          ÚJ SZÁMÍTÁS
        </button>
        <button class="btn btn-primary" on:click={ajanlat}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" style="display: inline-block; width: 20px; height: 20px; margin-right: 4px; vertical-align: middle;">
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
  
  <button class="btn btn-primary" disabled={!elfogadva}>KÜLDÉS</button>
</div> 