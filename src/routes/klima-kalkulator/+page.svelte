<script>
  import Footer from "../../components/Footer.svelte";
  import KlimaKalkulator from "../../components/KlimaKalkulator.svelte";
</script>

<div class="w-full py-8 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-6">Klíma kalkulátor</h1>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Segítünk kiválasztani a megfelelő klímaberendezést az Ön igényeihez és elvárasaihoz. Töltse ki az alábbi űrlapot, és szakértő munkatársaink személyre szabott ajánlatot készítenek Önnek.
      </p>
      
      <div class="mb-16">
        <KlimaKalkulator />
      </div>
      
      <div class="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 class="text-2xl font-bold mb-6">Miért használja a klíma kalkulátorunkat?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Időt takarít meg</h3>
            <p class="text-gray-600">Nincs szükség hosszas utánajárásra, a kalkulátorunk segít a megfelelő klíma kiválasztásában.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9.75m18 0A2.25 2.25 0 0 0 22.5 13.5V6a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6v3.75" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Személyre szabott ajánlat</h3>
            <p class="text-gray-600">Az Ön igényeinek és prioritásainak megfelelő, testreszabott megoldást kínálunk.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Szakértői segítség</h3>
            <p class="text-gray-600">Szakértő kollégáink segítenek a legjobb döntés meghozatalában és válaszolnak minden kérdésére.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer /> 