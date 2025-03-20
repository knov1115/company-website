<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
  import BenefitsSection from "../../../components/BenefitsSection.svelte";

  const hoszivattyuTortenelem = `
    <p class="text-gray-700 leading-relaxed">
      A hőszivattyú technológia kezdetei a 19. század közepére nyúlnak vissza, amikor Lord Kelvin először fogalmazta meg a hőszivattyú elvét. Az első működő hőszivattyút az 1940-es években fejlesztették ki, de széles körű elterjedése csak az 1970-es évek energiaválsága után kezdődött. A modern hőszivattyúk hatékonysága és teljesítménye az elmúlt évtizedekben jelentősen javult.
    </p>

    <p class="text-gray-700 leading-relaxed">
      Napjainkban a hőszivattyú az egyik legenergiahatékonyabb fűtési-hűtési rendszer, amely akár 300-400%-os hatásfokkal is működhet. Ez azt jelenti, hogy 1 kWh elektromos energia befektetésével 3-4 kWh hőenergiát nyerhetünk. A hőszivattyúk környezetbarát megoldást kínálnak, mivel nem bocsátanak ki közvetlenül káros anyagokat, és megújuló energiaforrásokat (levegő, víz, föld) használnak.
    </p>
  `;

  const levegoVizContent = `
    <h3 class="text-3xl font-bold mb-6">Levegő-víz hőszivattyúk</h3>
    <p class="text-gray-700 leading-relaxed">
      A levegő-víz hőszivattyúk a környezeti levegőből nyerik ki a hőenergiát, amelyet aztán a fűtési rendszerbe továbbítanak. Ezek a rendszerek kiválóan alkalmasak mind új építésű, mind felújított épületekhez. Telepítésük egyszerűbb és költséghatékonyabb, mint a földhőszivattyúké, mert nem igényelnek jelentős földmunkát. Hatékonyságuk ugyan csökken nagyon hideg időjárás esetén, de a modern készülékek már akár -25°C-ig is képesek hatékonyan működni.
    </p>
  `;

  const foldhoContent = `
    <h3 class="text-3xl font-bold mb-6">Földhőszivattyúk</h3>
    <p class="text-gray-700 leading-relaxed">
      A földhőszivattyúk a talajban tárolt hőenergiát hasznosítják, amely állandóbb hőmérsékletű, mint a levegő. Kétféle rendszer létezik: a horizontális kollektoros, ami nagyobb területet igényel, és a vertikális szondás, amely kisebb telkeken is megvalósítható. A földhőszivattyúk kezdeti telepítési költsége magasabb, de hosszú távon rendkívül hatékonyak és megbízhatóak, a külső hőmérséklettől függetlenül egész évben egyenletes teljesítményt nyújtanak.
    </p>
  `;

  const hoszivattyuElonyok = [
    {
      title: "Energia-megtakarítás",
      description: "A hőszivattyúk akár 70%-kal is csökkenthetik a fűtési költségeket a hagyományos rendszerekhez képest.",
      icon: "check"
    },
    {
      title: "Környezetbarát megoldás",
      description: "Minimális CO2-kibocsátással működik, különösen megújuló energiaforrással kombinálva.",
      icon: "document"
    },
    {
      title: "Komplett rendszerek",
      description: "Fűtés, hűtés és használati meleg víz előállítása egyetlen rendszerrel, egész évben.",
      icon: "clock"
    }
  ];
</script>

<DiagonalHero 
  title="Hőszivattyúk"
  description="Vállalkozásunk a modern, energiahatékony fűtési-hűtési megoldások szakértője. A hőszivattyú technológia a jövő energiahatékony megoldása, amely jelentősen csökkentheti az épületek energiafogyasztását és károsanyag-kibocsátását. Rendszereink tervezésénél és telepítésénél a maximális hatékonyságra és az ügyfél egyedi igényeire összpontosítunk."
  imageSrc="/images/hoszivattyu_service_img.jpg"
  imageAlt="Konkurencia Kft. Hőszivattyú szolgáltatások"
  ctaText="Energiahatékony megoldás otthonába!"
  buttonText="KAPCSOLATFELVÉTEL"
  buttonLink="/kapcsolat"
/>

<ImageTextSplit
  title="Hőszivattyúkról általánosan"
  imageLeft="/images/service_images/hoszivattyu_images/heat_pump_2_img.jpg"
  imageRight="/images/service_images/hoszivattyu_images/heat_pump_1_img.jpg"
  imageAltLeft="Hőszivattyú rendszer"
  imageAltRight="Hőszivattyú működési diagram"
  content={hoszivattyuTortenelem}
  ctaText="Kapcsolatfelvétel"
  ctaLink="/kapcsolat"
  backgroundColor="bg-gray-50"
/>

<!-- Hőszivattyú típusok szekció -->
<section class="w-full py-12 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">Hőszivattyú típusok</h2>
      <p class="text-center text-gray-600 italic mb-16">Két fő típust különböztetünk meg: levegő-víz és földhőszivattyúk.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-52 items-center">
        <div>
          {@html levegoVizContent}
        </div>
        <div>
          <img 
            src="/images/service_images/hoszivattyu_images/heat_pump_3_img.jpeg" 
            alt="Levegő-víz hőszivattyú rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="/images/service_images/hoszivattyu_images/heat_pump_4_img.jpg" 
            alt="Földhőszivattyú rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="order-1 md:order-2">
          {@html foldhoContent}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Alkalmazási területek szekció -->
<section class="w-full py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Alkalmazási területek</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Családi házak</h3>
          <p class="text-gray-700">
            Ideális megoldás új építésű és felújított családi házak számára. Fűtés, hűtés és meleg víz előállítása egy rendszerben.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Társasházak</h3>
          <p class="text-gray-700">
            Központi hőszivattyús rendszerek társasházak számára, amelyek jelentősen csökkenthetik a közös költségeket.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Ipari létesítmények</h3>
          <p class="text-gray-700">
            Nagy teljesítményű rendszerek ipari létesítmények fűtésére, hűtésére és technológiai hőigényének kiszolgálására.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Hőszivattyú előnyök szekció -->
<div class="mt-16">
  <BenefitsSection
    title="Miért válasszon minket hőszivattyú telepítéséhez?"
    benefits={hoszivattyuElonyok}
    backgroundColor="bg-white"
  />
</div>

<Footer /> 