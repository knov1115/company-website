<script>
  import { onMount } from 'svelte';
  
  let submissions = [];
  let isLoading = true;
  let error = null;
  
  onMount(async () => {
    try {
      const response = await fetch('/api/klima-kalkulator/lekerdez');
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
</script>

<div class="container mx-auto px-4 py-8 max-w-6xl">
  <h1 class="text-3xl font-bold mb-8">Klíma kalkulátor beküldések</h1>
  
  {#if isLoading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
    </div>
  {:else if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
      <p class="font-bold">Hiba történt!</p>
      <p>{error}</p>
    </div>
  {:else if submissions.length === 0}
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
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Név</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Helyszín</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Használat</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Méret</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Részletek</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each submissions as submission}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(submission.createdAt)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.location}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {#if submission.usage === 'hutes'}
                    Csak hűtés
                  {:else if submission.usage === 'futes'}
                    Csak fűtés
                  {:else if submission.usage === 'mindketto'}
                    Hűtés és fűtés
                  {:else}
                    {submission.usage}
                  {/if}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.squareMeters}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-red-600 hover:text-red-900"
                    on:click={() => {
                      alert(JSON.stringify(submission, null, 2));
                    }}
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