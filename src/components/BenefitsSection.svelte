<script>
  export let title = "Miért válasszon minket?";
  export let benefits = [
    {
      title: "Időt takarít meg",
      description: "Nincs szükség hosszas utánajárásra, szolgáltatásaink segítenek az optimális megoldás kiválasztásában.",
      icon: "clock" // Támogatott ikonok: clock, document, check
    },
    {
      title: "Személyre szabott ajánlat",
      description: "Az Ön igényeinek és prioritásainak megfelelő, testreszabott megoldást kínálunk.",
      icon: "document"
    },
    {
      title: "Szakértői segítség",
      description: "Szakértő kollégáink segítenek a legjobb döntés meghozatalában és válaszolnak minden kérdésére.",
      icon: "check"
    }
  ];
  export let backgroundColor = "bg-gray-50";
  export let columns = 3;
</script>

<div class="{backgroundColor} p-8 rounded-lg mb-16">
  <h2 class="text-2xl font-bold mb-6">{title}</h2>
  <div class="grid grid-cols-1 md:grid-cols-{columns} gap-8">
    {#each benefits as benefit}
      <div class="flex flex-col items-center text-center">
        <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
          {#if benefit.icon === 'clock'}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {:else if benefit.icon === 'document'}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          {:else if benefit.icon === 'check'}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          {:else}
            <!-- Alapértelmezett ikon, ha nincs megadva vagy ismeretlen -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          {/if}
        </div>
        <h3 class="text-lg font-semibold mb-2">{benefit.title}</h3>
        <p class="text-gray-600">{benefit.description}</p>
      </div>
    {/each}
  </div>
</div> 