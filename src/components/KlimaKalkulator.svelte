<script>
  import { onMount } from 'svelte';
  import * as FilePond from 'filepond';
  
  // Form state handling
  let formData = {
    name: '',
    location: '',
    email: '',
    phone: '',
    usage: '',
    squareMeters: '',
    megbizhatosag: 3,
    ar: 3,
    design: 3,
    energiaHatekonysag: 3,
    csendesMusik: 3,
    files: [],
    message: '',
    agreeToPrivacyPolicy: false
  };

  let pond;
  
  onMount(() => {
    // Inicializáljuk a FilePond-ot
    pond = FilePond.create(document.querySelector('input[type="file"]'), {
      labelIdle: 'Húzza ide a fájlokat vagy <span class="filepond--label-action">kattintson a feltöltéshez</span>',
      labelFileTypeNotAllowed: 'Érvénytelen fájltípus',
      labelFileWaitingForSize: 'Méretadatok lekérése...',
      labelFileSizeNotAvailable: 'Méretadatok nem elérhetők',
      labelFileLoading: 'Betöltés...',
      labelFileLoadError: 'Hiba a betöltés során',
      labelFileProcessing: 'Feltöltés...',
      labelFileProcessingComplete: 'Feltöltés kész',
      labelFileProcessingAborted: 'Feltöltés megszakítva',
      labelTapToCancel: 'kattintson a megszakításhoz',
      labelTapToRetry: 'kattintson az újrapróbáláshoz',
      labelTapToUndo: 'kattintson a visszavonáshoz',
      allowMultiple: true,
      acceptedFileTypes: ['image/*', 'application/pdf'],
      onaddfile: (err, file) => {
        if (err) return;
        console.log('File added', file);
        formData.files.push(file.file);
      },
      onremovefile: (err, file) => {
        if (err) return;
        console.log('File removed', file);
        formData.files = formData.files.filter(f => f !== file.file);
      }
    });
    
    return () => {
      // Takarítás ha szükséges
      if (pond) pond.destroy();
    };
  });

  // Form submission handler
  function handleSubmit() {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Köszönjük a kitöltést! Kollégáink hamarosan felveszik Önnel a kapcsolatot.');
  }
</script>

<style>
  .calculator-container {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .input-group {
    margin-bottom: 1.5rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .form-select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 1rem;
    background-color: white;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a0aec0'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.5em;
  }
  
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 1rem;
    min-height: 150px;
  }
  
  .range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: #e2e8f0;
    outline: none;
  }
  
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #DC0000;
    cursor: pointer;
  }
  
  .range-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #DC0000;
    cursor: pointer;
    border: none;
  }
  
  .range-labels {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 5px;
  }
  
  .submit-btn {
    background-color: #DC0000;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #b00000;
  }
  
  /* FilePond egyedi stílusok */
  :global(.filepond--root) {
    margin-bottom: 0;
    font-family: inherit;
  }
  
  :global(.filepond--panel-root) {
    background-color: #f8fafc;
    border: 2px dashed #e2e8f0;
  }
  
  :global(.filepond--drop-label) {
    color: #4a5568;
    font-size: 1rem;
  }
  
  :global(.filepond--label-action) {
    text-decoration-color: #DC0000;
    color: #DC0000;
  }
  
  :global(.filepond--panel-root) {
    border-radius: 0.375rem;
  }
  
  :global(.filepond--item-panel) {
    background-color: #DC0000;
  }
  
  :global(.filepond--drip-blob) {
    background-color: #DC0000;
  }
</style>

<div class="calculator-container">
  <h2 class="text-2xl font-bold mb-6">Klíma kalkulátor</h2>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Név -->
      <div class="input-group">
        <label for="name" class="block text-sm font-medium mb-2">Név</label>
        <input 
          type="text" 
          id="name" 
          class="form-input" 
          bind:value={formData.name} 
          required
        />
      </div>
      
      <!-- Telepítés helye -->
      <div class="input-group">
        <label for="location" class="block text-sm font-medium mb-2">Telepítés helye (cím)</label>
        <input 
          type="text" 
          id="location" 
          class="form-input" 
          bind:value={formData.location} 
          required
        />
      </div>
      
      <!-- E-mail cím -->
      <div class="input-group">
        <label for="email" class="block text-sm font-medium mb-2">E-mail cím</label>
        <input 
          type="email" 
          id="email" 
          class="form-input" 
          bind:value={formData.email} 
          required
        />
      </div>
      
      <!-- Telefonszám -->
      <div class="input-group">
        <label for="phone" class="block text-sm font-medium mb-2">Telefonszám</label>
        <input 
          type="tel" 
          id="phone" 
          class="form-input" 
          bind:value={formData.phone} 
          required
        />
      </div>
      
      <!-- Mire szeretné használni a klímát? -->
      <div class="input-group">
        <label for="usage" class="block text-sm font-medium mb-2">Mire szeretné használni a klímát?</label>
        <select id="usage" class="form-select" bind:value={formData.usage} required>
          <option value="" disabled selected>Kérjük válasszon...</option>
          <option value="hutes">Csak hűtésre</option>
          <option value="futes">Csak fűtésre</option>
          <option value="mindketto">Hűtésre és fűtésre</option>
        </select>
      </div>
      
      <!-- Hány m² a hűteni/fűteni kívánt helyiség? -->
      <div class="input-group">
        <label for="squareMeters" class="block text-sm font-medium mb-2">Hány m² a hűteni/fűteni kívánt helyiség?</label>
        <select id="squareMeters" class="form-select" bind:value={formData.squareMeters} required>
          <option value="" disabled selected>Kérjük válasszon...</option>
          <option value="20-alatt">20 m² alatt</option>
          <option value="20-30">20-30 m²</option>
          <option value="30-40">30-40 m²</option>
          <option value="40-50">40-50 m²</option>
          <option value="50-60">50-60 m²</option>
          <option value="60-felett">60 m² felett</option>
        </select>
      </div>
    </div>
    
    <p class="text-sm font-medium mt-8 mb-4">Kérjük, jelölje a skálán, hogy az alábbi szempontok közül melyiket mennyire tartja fontosnak? (1 – egyáltalán nem fontos, 5 – nagyon fontos)</p>
    
    <!-- Megbízhatóság -->
    <div class="input-group">
      <label for="megbizhatosag" class="block text-sm font-medium mb-2">Megbízhatóság</label>
      <input 
        type="range" 
        id="megbizhatosag" 
        min="1" 
        max="5" 
        step="1" 
        class="range-slider" 
        bind:value={formData.megbizhatosag}
      />
      <div class="range-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    
    <!-- Ár -->
    <div class="input-group">
      <label for="ar" class="block text-sm font-medium mb-2">Ár</label>
      <input 
        type="range" 
        id="ar" 
        min="1" 
        max="5" 
        step="1" 
        class="range-slider" 
        bind:value={formData.ar}
      />
      <div class="range-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    
    <!-- Design -->
    <div class="input-group">
      <label for="design" class="block text-sm font-medium mb-2">Design</label>
      <input 
        type="range" 
        id="design" 
        min="1" 
        max="5" 
        step="1" 
        class="range-slider" 
        bind:value={formData.design}
      />
      <div class="range-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    
    <!-- Energiahatékonyság -->
    <div class="input-group">
      <label for="energiaHatekonysag" class="block text-sm font-medium mb-2">Energiahatékonyság</label>
      <input 
        type="range" 
        id="energiaHatekonysag" 
        min="1" 
        max="5" 
        step="1" 
        class="range-slider" 
        bind:value={formData.energiaHatekonysag}
      />
      <div class="range-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    
    <!-- Csendes működés -->
    <div class="input-group">
      <label for="csendesMusik" class="block text-sm font-medium mb-2">Csendes működés</label>
      <input 
        type="range" 
        id="csendesMusik" 
        min="1" 
        max="5" 
        step="1" 
        class="range-slider" 
        bind:value={formData.csendesMusik}
      />
      <div class="range-labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    
    <p class="text-sm font-medium mt-8 mb-4">Kérjük csatoljon pár fotót a beltéri és kültéri egység tervezett, vagy lehetséges beszerelési helyéről. Amennyiben lehetséges, csatoljon egy alaprajzot is.</p>
    
    <!-- FilePond Drag and Drop File Upload -->
    <div class="input-group">
      <input type="file" id="fileUpload" class="filepond" name="files" multiple />
    </div>
    
    <!-- Üzenet -->
    <div class="input-group mt-6">
      <label for="message" class="block text-sm font-medium mb-2">Amennyiben van bármilyen kérése / kérdése, kérjük írja ide!</label>
      <textarea 
        id="message" 
        class="form-textarea" 
        bind:value={formData.message}
      ></textarea>
    </div>
    
    <!-- Privacy Policy -->
    <div class="input-group flex items-start mt-6">
      <input 
        type="checkbox" 
        id="privacyPolicy" 
        class="mt-1 mr-2" 
        bind:checked={formData.agreeToPrivacyPolicy} 
        required
      />
      <label for="privacyPolicy" class="text-sm">Elfogadom az <a href="#" class="text-[#DC0000]">adatvédelmi nyilatkozatot</a>.</label>
    </div>
    
    <!-- Submit Button -->
    <div class="mt-8">
      <button type="submit" class="submit-btn">KÜLDÉS</button>
    </div>
  </form>
</div> 