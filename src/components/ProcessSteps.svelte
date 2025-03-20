<script>
  export let steps = [
    {
      icon: 'lightbulb',
      title: 'Tervezés',
      description: 'Tervezés, funkcionális specifikáció készítése alapvetően fontos, technológia szabályok, kritikus határértékek, megrendelői egyéb igények pontosítása, dokumentálása.'
    },
    {
      icon: 'shield',
      title: 'Biztonsági felmérés',
      description: 'Biztonságtechnikai felmérés, kockázatelemzés készítése gépgyártáskor szükséges a munkabiztonsági szabványok figyelembevételével.'
    },
    {
      icon: 'code',
      title: 'Megvalósítás',
      description: 'Terv vagy funkcionális specifikáció meglétével meghatározhatóak a szükséges eszközök, szoftverfejlesztés folyamata, eszközök telepítése megvalósítható.'
    },
    {
      icon: 'gear',
      title: 'Beüzemelés',
      description: 'Beüzemelés, tesztelés amennyiben a technológia háttér is elkészült, felmerülő problémák kezelése.'
    },
    {
      icon: 'certificate',
      title: 'Tanúsítvány',
      description: 'CE tanúsítványhoz hitelesítés szükséges, amely arra utal, hogy a termék megfelel a vonatkozó irányelvekben megállapított feltételeknek és megfelel az Európai Unió egészségügyi, biztonsági és környezetvédelmi jogszabályaiban meghatározott alapvető kritériumoknak.'
    },
    {
      icon: 'transfer',
      title: 'Átadás',
      description: 'Átadást követően az eszköz termelésben használható, garanciális kötelezettség megegyezés szerinti ideig, megegyezés szerinti módon.'
    }
  ];
  
  export let backgroundColor = "bg-gray-100";
  export let title = "Szolgáltatásaink folyamata";
</script>

<style>
  .icon-container {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
</style>

<section class="{backgroundColor} py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-16">{title}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each steps as step}
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-start">
            <div class="mr-4">
              {#if step.icon === 'lightbulb'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">💡</span>
                </div>
              {:else if step.icon === 'shield'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">🛡️</span>
                </div>
              {:else if step.icon === 'code'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">⌨️</span>
                </div>
              {:else if step.icon === 'gear'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">⚙️</span>
                </div>
              {:else if step.icon === 'certificate'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">🏅</span>
                </div>
              {:else if step.icon === 'transfer'}
                <div class="icon-container bg-red-600 text-white">
                  <span class="text-xl">🔄</span>
                </div>
              {/if}
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">{step.title}</h3>
              <p class="text-gray-700 text-sm">{step.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 