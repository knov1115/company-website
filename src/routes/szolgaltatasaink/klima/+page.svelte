<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import KlimaKalkulator from "../../../components/KlimaKalkulator.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
  import BenefitsSection from "../../../components/BenefitsSection.svelte";

  const klimaTortenelem = `
    <p class="text-gray-700 leading-relaxed">
      Légkondicionáló vagy ismertebb nevén a klíma már több mint egy évszázada életünk része. Az első elektromos kompresszorral felszerelt klímaberendezés 1902-ben a The Carrier Air Conditioning Company of America nevéhez fűződik. Ez a technológia még igen veszélyes, gyúlékony, mérgező hűtőközegekkel működött. Közel húsz év elteltével az 1920-as években jelentek meg a mái veszélytelen, nem mérgező és gyúlékony freon néven ismert hűtőközegek. Ezután terjedt el mind lakossági mind ipari szegmensben a klimatizálás.
    </p>

    <p class="text-gray-700 leading-relaxed">
      A globális felmelegedés és ózonréteg romlásának felismerése jócskán belenyúl a klímatechnika iparágában is. Különböző hűtőközegek lettek betiltva (R22, R12) ózonbontó képességük miatt és lettek új, ártalmatlanabb, alternatív freon vegyületek kifejlesztve a környezetbarátságot szem előtt tartva. Az elmúlt évtizedben megjelentek az új inverteres technológiával ellátott klímaberendezések, leváltva az ON/OFF működésű klímaberendezéseket, amely egy fontos energiafelhasználást csökkentő innováció volt.
    </p>
  `;

  const monoSplitContent = `
    <h3 class="text-3xl font-bold mb-6">Mono split klímák</h3>
    <p class="text-gray-700 leading-relaxed">
      Egy mono split klíma szett áll egy beltériből és egy kültéri egységből. A két egységet általánosságban egy vegytiszta, lágy rézcsőpár köti össze, teljesítménytől függő méretben. A kültériben helyezkedik el a kompresszor, kondenzátor, expanziós szelep, elektromos panel. A beltéri egységben helyezkedik el az elpárologtató és egy centrifugális ventilátor (mókuskerék). Beltéri egység típusa lehet oldalfali, parapet/konzol, légcsatornázható, kazettás.
    </p>
  `;

  const multiSplitContent = `
    <h3 class="text-3xl font-bold mb-6">Multi split klímák</h3>
    <p class="text-gray-700 leading-relaxed">
      A multi klímák esetén egy kültérihez több beltéri egység illeszthető (2-5db), akár eltérő teljesítményekkel. A csatlakoztatható beltérik típusa lehet oldalfali, parapet/konzol, légcsatornázható, kazettás.
    </p>
  `;

  const klimaElonyok = [
    {
      title: "Energiahatékonyság",
      description: "Modern klímaberendezéseink magas energiahatékonysággal működnek, csökkentve a villanyszámlát és a környezeti terhelést.",
      icon: "check"
    },
    {
      title: "Professzionális telepítés",
      description: "Szakértő csapatunk biztosítja a hibátlan telepítést, ami garantálja a berendezés hosszú élettartamát és optimális működését.",
      icon: "document"
    },
    {
      title: "Teljes körű szerviz",
      description: "A telepítés után sem hagyjuk magára, karbantartási és szervizelési szolgáltatásainkkal gondoskodunk a problémamentes működésről.",
      icon: "clock"
    }
  ];
</script>

<style>
  .article-container {
    display: flex !important;
    justify-content: center !important;
  }
  
  .article-content {
    width: 1150px !important;
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

<ImageTextSplit
  title="Klímákról általánosan"
  imageLeft="/images/service_images/ac_history2_img.jpg"
  imageRight="/images/service_images/ac_history1_img.webp"
  imageAltLeft="Régi klímaberendezés az 1900-as évekből"
  imageAltRight="Modern klímahasználat"
  content={klimaTortenelem}
  ctaText="Kapcsolatfelvétel"
  ctaLink="/kapcsolat"
  backgroundColor="bg-gray-50"
/>

<!-- Klímaberendezés típusok szekció -->
<section class="w-full py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">Klímaberendezés típusok</h2>
      <p class="text-center text-gray-600 italic mb-16">Két ismert típust különböztetünk meg: mono- és multiklímák.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-54 items-center">
        <div>
          {@html monoSplitContent}
        </div>
        <div>
          <img 
            src="/images/service_images/mono_split_klima_img.png" 
            alt="Mono split klíma rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="/images/service_images/multi_split_klima_img.webp" 
            alt="Multi split klíma rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="order-1 md:order-2">
          {@html multiSplitContent}
        </div>
      </div>
    </div>
  </div>
</section>

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

<!-- Klíma előnyök szekció -->
<div class="mt-16">
  <BenefitsSection
    title="Miért válasszon minket klímaberendezéseihez?"
    benefits={klimaElonyok}
    backgroundColor="bg-gray-50"
  />
</div>

<Footer /> 