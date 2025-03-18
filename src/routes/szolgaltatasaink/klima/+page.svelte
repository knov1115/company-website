<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import KlimaKalkulator from "../../../components/KlimaKalkulator.svelte";
</script>

<style>
  .article-container {
    display: flex !important;
    justify-content: center !important;
  }
  
  .article-content {
    width: 1150px !important;
  }

  .image-stack {
    position: relative;
    width: 100%;
  }

  .image-stack img:first-child {
    position: relative;
    z-index: 1;
    width: 80%;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .image-stack img:last-child {
    position: absolute;
    right: 0;
    top: 40%;
    width: 90%;
    z-index: 2;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .text-container {
    background-color: white;
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: fit-content;
  }
</style>


<DiagonalHero 
  title="Klíma"
  description="Vállalkozásunk egyik fő tevékenysége a hűtéstechnika és klimatizálás. Hazánkban is egyre nagyobb kihívást jelent az éghajlatváltozás, globális felmelegedés és az ezzel járó egyre forróbb nyarak. Cégünk megoldást kínál lakossági, illetve ipari szegmensben is, legyen szó értékesítésről, tervezésről, telepítésről vagy karbantartásról."
  imageSrc="/images/ac_service_img.jpg"
  imageAlt="Konkurencia Kft. Klíma szolgáltatások"
  ctaText="Töltse ki ingyenes klímakalkulátorunkat!"
  buttonText="KALKULÁCIÓ"
  buttonLink="/klima-kalkulator"
/>

<div class="w-full py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-16">Klímákról általánosan</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
      <!-- Left Column - Overlapping Images -->
      <div class="image-stack">
        <img 
          src="/images/service_images/ac_history2_img.jpg" 
          alt="Régi klímaberendezés az 1900-as évekből" 
          class="vintage-ac"
        />
        <img 
          src="/images/service_images/ac_history1_img.webp" 
          alt="Modern klímahasználat" 
          class="modern-ac"
        />
      </div>

      <!-- Right Column - Text Content -->
      <div class="text-container">
        <div class="space-y-6">
          <p class="text-gray-700 leading-relaxed">
            Légkondicionáló vagy ismertebb nevén a klíma már több mint egy évszázada életünk része. Az első elektromos kompresszorral felszerelt klímaberendezés 1902-ben a The Carrier Air Conditioning Company of America nevéhez fűződik. Ez a technológia még igen veszélyes, gyúlékony, mérgező hűtőközegekkel működött. Közel húsz év elteltével az 1920-as években jelentek meg a mái veszélytelen, nem mérgező és gyúlékony freon néven ismert hűtőközegek. Ezután terjedt el mind lakossági mind ipari szegmensben a klimatizálás.
          </p>

          <p class="text-gray-700 leading-relaxed">
            A globális felmelegedés és ózonréteg romlásának felismerése jócskán belenyúl a klímatechnika iparágában is. Különböző hűtőközegek lettek betiltva (R22, R12) ózonbontó képességük miatt és lettek új, ártalmatlanabb, alternatív freon vegyületek kifejlesztve a környezetbarátságot szem előtt tartva. Az elmúlt évtizedben megjelentek az új inverteres technológiával ellátott klímaberendezések, leváltva az ON/OFF működésű klímaberendezéseket, amely egy fontos energiafelhasználást csökkentő innováció volt.
          </p>

          <!-- CTA Section -->
          <div class="mt-8">
            <a 
              href="/kapcsolat" 
              class="inline-block bg-[#DC0000] text-white px-8 py-4 rounded hover:bg-[#b00000] transition-colors duration-200 text-lg font-medium"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Klímaberendezés típusok szekció -->
<div class="w-full py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">Klímaberendezés típusok</h2>
      <p class="text-center text-gray-600 italic mb-16">Két ismert típust különböztetünk meg: mono- és multiklímák.</p>

      <!-- Mono split klímák -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-48">
        <div class="space-y-6">
          <h3 class="text-3xl font-bold mb-6">Mono split klímák</h3>
          <p class="text-gray-700 leading-relaxed">
            Egy mono split klíma szett áll egy beltériből és egy kültéri egységből. A két egységet általánosságban egy vegytiszta, lágy rézcsőpár köti össze, teljesítménytől függő méretben. A kültériben helyezkedik el a kompresszor, kondenzátor, expanziós szelep, elektromos panel. A beltéri egységben helyezkedik el az elpárologtató és egy centrifugális ventilátor (mókuskerék). Beltéri egység típusa lehet oldalfali, parapet/konzol, légcsatornázható, kazettás.
          </p>
        </div>
        <div class="relative">
          <img 
            src="/images/service_images/mono_split_klima_img.png" 
            alt="Mono split klíma rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- Multi split klímák -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="relative order-2 md:order-1">
          <img 
            src="/images/service_images/multi_split_klima_img.webp" 
            alt="Multi split klíma rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="space-y-6 order-1 md:order-2">
          <h3 class="text-3xl font-bold mb-6">Multi split klímák</h3>
          <p class="text-gray-700 leading-relaxed">
            A multi klímák esetén egy kültérihez több beltéri egység illeszthető (2-5db), akár eltérő teljesítményekkel. A csatlakoztatható beltérik típusa lehet oldalfali, parapet/konzol, légcsatornázható, kazettás.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Klíma kalkulátor szekció -->
<div class="w-full py-16 bg-gray-100">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-16">Klíma kalkulátor</h2>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Segítünk kiválasztani a megfelelő klímaberendezést az Ön igényeihez. Töltse ki kalkulátorunkat, és munkatársaink hamarosan felveszik Önnel a kapcsolatot.
    </p>
    
    <KlimaKalkulator />
  </div>
</div>

<Footer /> 