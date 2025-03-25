<script>
  export let headerText = "";
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    {#if headerText}
      <h2 class="text-4xl font-bold text-center mb-12">{headerText}</h2>
    {/if}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Központi szellőzés cikk -->
      
      <div class="bg-white group flex flex-col h-full">
        <div class="relative h-64 overflow-hidden">
          <a href ="/cikkek/kozponti-szellozes-szerepe">
            <img
              src="/images/kozpontiszellozes_articles_img.jpg"
              alt="Központi szellőzés"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 right-0 w-12 h-12 bg-[#DC0000] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
        <div class="flex flex-col flex-grow pt-6">
          <h3 class="text-2xl font-bold mb-3">A központi szellőzés szerepe és fontossága a lakóépületekben</h3>
          <p class="text-gray-600 mb-4 line-clamp-3">
            A központi szellőzés egy olyan épületgépészeti rendszer, amelynek célja a friss levegő folyamatos biztosítása és a használt levegő hatékony eltávolítása a lakóépületekből. Ez a rendszer kulcsfontosságú szerepet játszik az egészséges és kényelmes lakókörnyezet kialakításában. A központi szellőzés nem csupán a levegő cseréjéről szól, hanem a páratartalom, a hőmérséklet és a levegőminőség szabályozásáról is gondoskodik. A [...]
          </p>
          <div class="mt-auto">
            <a href="/cikkek/kozponti-szellozes-szerepe" class="text-[#DC0000] font-medium hover:text-[#b00000] inline-flex items-center">
              OLVASS TOVÁBB
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      

      <!-- Klíma karbantartás cikk -->
      <div class="bg-white group flex flex-col h-full">
        <div class="relative h-64 overflow-hidden">
          <a href ="/cikkek/klima-karbantartas">
            <img
              src="/images/klima_karbantartas_article_img.jpg"
              alt="Klíma karbantartás"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 right-0 w-12 h-12 bg-[#DC0000] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
        <div class="flex flex-col flex-grow pt-6">
          <h3 class="text-2xl font-bold mb-3">Miért fontos a klíma szakszerű karbantartása?</h3>
          <p class="text-gray-600 mb-4 line-clamp-3">
            Klímaberendezés tisztítása fontos szerepet játszik a hatékony működés és az egészséges levegő minőségének fenntartásában. Ezért nem mindegy, hogyan és mennyiszer végezzük el klímaberendezésünkön a tisztítást, karbantartást. Már a cikk elején leszögezném, hogy a klíma karbantartás és tisztítása nem ugyan az! Klíma szakszerű tisztítása Klímaberendezésünk tisztítása több szempontból is elengedhetetlen. Mivel a kültéri egységünk a szabadban [...]
          </p>
          <div class="mt-auto">
            <a href="/cikkek/klima-karbantartas" class="text-[#DC0000] font-medium hover:text-[#b00000] inline-flex items-center">
              OLVASS TOVÁBB
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Hőszivattyú cikk -->
      <div class="bg-white group flex flex-col h-full">
        <div class="relative h-64 overflow-hidden">
          <a href ="/cikkek/hoszivattyu">
            <img
              src="/images/hoszivattyu_article_img.jpg"
              alt="Hőszivattyú"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 right-0 w-12 h-12 bg-[#DC0000] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
        <div class="flex flex-col flex-grow pt-6">
          <h3 class="text-2xl font-bold mb-3">Megéri a hőszivattyú?</h3>
          <p class="text-gray-600 mb-4 line-clamp-3">
            Mivel a jelenlegi energiapolitika a zöld átállás mellett tette le a voksát, nincs kétség afelől, hogy a hőszivattyúk felváltják a fosszilis energiával működő fűtéstechnikai berendezéseket. A fiatalabb generációk egyre tudatosabbak és egyre nagyobb népszerűségnek örvend a fenntarthatóság, környezettudatosság, karbonlábnyomunk csökkentése. Az új energetikai szabályozásokban megadott kötelező megújuló energia rész arány is arra segít következtetni, hogy [...]
          </p>
          <div class="mt-auto">
            <a href="/cikkek/hoszivattyu" class="text-[#DC0000] font-medium hover:text-[#b00000] inline-flex items-center">
              OLVASS TOVÁBB
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 