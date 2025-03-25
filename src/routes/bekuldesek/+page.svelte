<script>
  import { onMount } from 'svelte';
  
  let submissions = [];
  let isLoading = true;
  let error = null;
  let activeTab = 'all'; // 'all', 'klima', 'betonfuras'
  let selectedSubmission = null;
  let isModalOpen = false;
  
  onMount(async () => {
    try {
      const response = await fetch('/api/bekuldesek');
      const result = await response.json();
      
      if (result.success) {
        submissions = result.data;
      } else {
        error = result.message;
      }
    } catch (err) {
      console.error('Hiba a beküldések lekérése során:', err);
      error = 'Hiba történt az adatok betöltése során.';
    } finally {
      isLoading = false;
    }
  });
  
  // Dátum formázása
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  // Beküldések szűrése a kiválasztott fül alapján
  $: filteredSubmissions = activeTab === 'all' 
    ? submissions 
    : submissions.filter(s => s.type === activeTab);
  
  // Részletek megjelenítése modális ablakban
  function showDetails(submission) {
    selectedSubmission = submission;
    isModalOpen = true;
  }
  
  // Modális ablak bezárása
  function closeModal() {
    isModalOpen = false;
    selectedSubmission = null;
  }
  
  // Kattintás kezelése a modális ablak háttéren
  function handleModalBackgroundClick(event) {
    if (event.target.classList.contains('modal-background')) {
      closeModal();
    }
  }
  
  // Billentyűzet esemény kezelése (ESC gomb)
  function handleKeydown(event) {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
  
  // Rövidítés hosszú szövegekhez
  function truncate(text, length = 50) {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container mx-auto px-4 py-8 max-w-6xl">
  <h1 class="text-3xl font-bold mb-8">Kalkulátor beküldések</h1>
  
  <!-- Fülek -->
  <div class="flex border-b border-gray-200 mb-6">
    <button 
      class="py-2 px-4 mr-2 {activeTab === 'all' ? 'border-b-2 border-red-700 font-medium text-red-700' : 'text-gray-500 hover:text-gray-700'}"
      on:click={() => activeTab = 'all'}
    >
      Összes
    </button>
    <button 
      class="py-2 px-4 mr-2 {activeTab === 'klima' ? 'border-b-2 border-red-700 font-medium text-red-700' : 'text-gray-500 hover:text-gray-700'}"
      on:click={() => activeTab = 'klima'}
    >
      Klíma kalkulátor
    </button>
    <button 
      class="py-2 px-4 {activeTab === 'betonfuras' ? 'border-b-2 border-red-700 font-medium text-red-700' : 'text-gray-500 hover:text-gray-700'}"
      on:click={() => activeTab = 'betonfuras'}
    >
      Betonfúrás kalkulátor
    </button>
  </div>
  
  {#if isLoading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
    </div>
  {:else if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
      <p class="font-bold">Hiba történt!</p>
      <p>{error}</p>
    </div>
  {:else if filteredSubmissions.length === 0}
    <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6" role="alert">
      <p>Még nincsenek beküldött adatok az adatbázisban.</p>
    </div>
  {:else}
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dátum</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Típus</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Név</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Helyszín</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Részletek</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each filteredSubmissions as submission}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(submission.createdAt)}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    {submission.type === 'klima' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}">
                    {submission.type === 'klima' ? 'Klíma' : 'Betonfúrás'}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {submission.type === 'klima' ? submission.name : submission.nev}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {submission.type === 'klima' ? submission.phone : submission.telefon}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {submission.type === 'klima' ? submission.location : (submission.telepules || '')}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-red-600 hover:text-red-900"
                    on:click={() => showDetails(submission)}
                  >
                    Részletek
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
</div>

<!-- Modális ablak a részletek megjelenítéséhez -->
{#if isModalOpen && selectedSubmission}
  <div 
    class="fixed inset-0 flex items-center justify-center z-50 modal-background"
    on:click={handleModalBackgroundClick}
  >
    <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6" on:click|stopPropagation>
      <div class="flex justify-between items-start">
        <h2 class="text-2xl font-bold text-gray-800">
          {selectedSubmission.type === 'klima' ? 'Klíma' : 'Betonfúrás'} kalkulátor beküldés
        </h2>
        <button 
          class="text-gray-400 hover:text-gray-600"
          on:click={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="mt-4 border-t pt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#if selectedSubmission.type === 'klima'}
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Név</p>
              <p class="font-medium">{selectedSubmission.name || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Email</p>
              <p class="font-medium">{selectedSubmission.email || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Telefon</p>
              <p class="font-medium">{selectedSubmission.phone || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Helyszín</p>
              <p class="font-medium">{selectedSubmission.location || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Használat</p>
              <p class="font-medium">{selectedSubmission.usage || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Alapterület</p>
              <p class="font-medium">{selectedSubmission.squareMeters || '-'} m²</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Státusz</p>
              <p>
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                  {selectedSubmission.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  selectedSubmission.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  selectedSubmission.status === 'canceled' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'}">
                  {selectedSubmission.status === 'completed' ? 'Kész' : 
                  selectedSubmission.status === 'processing' ? 'Feldolgozás alatt' :
                  selectedSubmission.status === 'canceled' ? 'Lemondva' : 'Új'}
                </span>
              </p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Beküldés dátuma</p>
              <p class="font-medium">{formatDate(selectedSubmission.createdAt)}</p>
            </div>
            
            {#if selectedSubmission.message}
              <div class="border-b pb-2 col-span-2">
                <p class="text-sm text-gray-500">Üzenet</p>
                <p class="whitespace-pre-line">{selectedSubmission.message}</p>
              </div>
            {/if}
            
            {#if selectedSubmission.files && selectedSubmission.files.length > 0}
              <div class="col-span-2 border-b pb-2">
                <p class="text-sm text-gray-500">Feltöltött fájlok ({selectedSubmission.files.length} db)</p>
                <ul class="mt-2 space-y-2">
                  {#each selectedSubmission.files as file}
                    <li class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{file.filename}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          {:else if selectedSubmission.type === 'betonfuras'}
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Név</p>
              <p class="font-medium">{selectedSubmission.nev || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Email</p>
              <p class="font-medium">{selectedSubmission.email || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Telefon</p>
              <p class="font-medium">{selectedSubmission.telefon || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Cím</p>
              <p class="font-medium">{selectedSubmission.cim || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Irányítószám</p>
              <p class="font-medium">{selectedSubmission.iranyitoszam || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Település</p>
              <p class="font-medium">{selectedSubmission.telepules || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Anyag</p>
              <p class="font-medium">{selectedSubmission.anyagSelect || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Furat mélység</p>
              <p class="font-medium">{selectedSubmission.furatMelyseg || '-'} mm</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Furat átmérő/db</p>
              <p class="font-medium">{selectedSubmission.furatAtmero || '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Víz rendelkezésre áll</p>
              <p class="font-medium">{selectedSubmission.vizRendelkezesre === 'igen' ? 'Igen' : 'Nem'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Nettó ár</p>
              <p class="font-medium">{selectedSubmission.nettoAr ? selectedSubmission.nettoAr.toLocaleString() + ' Ft' : '-'}</p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Státusz</p>
              <p>
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                  {selectedSubmission.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  selectedSubmission.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  selectedSubmission.status === 'canceled' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'}">
                  {selectedSubmission.status === 'completed' ? 'Kész' : 
                  selectedSubmission.status === 'processing' ? 'Feldolgozás alatt' :
                  selectedSubmission.status === 'canceled' ? 'Lemondva' : 'Új'}
                </span>
              </p>
            </div>
            <div class="border-b pb-2">
              <p class="text-sm text-gray-500">Beküldés dátuma</p>
              <p class="font-medium">{formatDate(selectedSubmission.createdAt)}</p>
            </div>
            
            {#if selectedSubmission.megjegyzes}
              <div class="border-b pb-2 col-span-2">
                <p class="text-sm text-gray-500">Megjegyzés</p>
                <p class="whitespace-pre-line">{selectedSubmission.megjegyzes}</p>
              </div>
            {/if}
            
            {#if selectedSubmission.addedItems && selectedSubmission.addedItems.length > 0}
              <div class="col-span-2 mt-4">
                <h3 class="font-medium text-lg mb-3">Tételek</h3>
                <div class="bg-gray-50 rounded-lg p-4">
                  {#each selectedSubmission.addedItems as item, index}
                    <div class="border-b border-gray-200 pb-3 mb-3 {index === selectedSubmission.addedItems.length - 1 ? 'border-b-0 mb-0 pb-0' : ''}">
                      <div class="flex justify-between">
                        <h4 class="font-medium">{index + 1}. {item.anyag || 'Betonfúrás'}</h4>
                        <span class="font-medium text-red-600">{item.nettoAr ? item.nettoAr.toLocaleString() + ' Ft' : '-'}</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <div>
                          <span class="text-gray-500">Darabszám:</span> {item.darabszam || '-'} db
                        </div>
                        <div>
                          <span class="text-gray-500">Fúrási hossz:</span> {item.furatMelyseg || '-'}
                        </div>
                        <div>
                          <span class="text-gray-500">Víz:</span> {item.vizRendelkezesre || '-'}
                        </div>
                        <div>
                          <span class="text-gray-500">Helyszín:</span> {item.telepules || '-'}
                        </div>
                      </div>
                    </div>
                  {/each}
                  <div class="flex justify-between mt-3 pt-3 border-t border-gray-300">
                    <span class="font-medium">Összesen:</span>
                    <span class="font-medium text-red-600">
                      {selectedSubmission.addedItems.reduce((sum, item) => sum + (item.nettoAr || 0), 0).toLocaleString()} Ft
                    </span>
                  </div>
                </div>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-background {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style> 