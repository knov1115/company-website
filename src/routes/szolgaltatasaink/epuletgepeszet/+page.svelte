<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
  import BenefitsSection from "../../../components/BenefitsSection.svelte";

  const epuletgepeszetBevezeto = `
    <p class="text-gray-700 leading-relaxed">
      Az épületgépészet a modern épületek lelke, amely biztosítja a komfortos, egészséges és energiahatékony belső környezetet. A rendszerek tervezése és kivitelezése komoly szakértelmet igényel, hiszen az épületgépészeti megoldások jelentősen befolyásolják az épületek működési költségeit, környezeti hatását és az ott tartózkodók közérzetét.
    </p>

    <p class="text-gray-700 leading-relaxed">
      Cégünk komplex épületgépészeti szolgáltatásokat nyújt a tervezéstől a kivitelezésig. Szakértő csapatunk a legmodernebb technológiákat és módszereket alkalmazza, hogy ügyfeleink igényeinek megfelelő, energiahatékony és költségoptimalizált rendszereket hozzunk létre. Legyen szó új épület kivitelezéséről vagy meglévő rendszerek korszerűsítéséről, minden projekthez személyre szabott megoldásokat kínálunk.
    </p>
  `;

  const kivitelezesContent = `
    <h3 class="text-3xl font-bold mb-6">Épületgépészeti kivitelezés</h3>
    <p class="text-gray-700 leading-relaxed">
      Az épületgépészeti kivitelezés során minőségi anyagokkal és precíz munkavégzéssel valósítjuk meg a tervekben foglaltakat. Komplex épületgépészeti rendszerek kiépítését vállaljuk, beleértve a fűtés-hűtés rendszereket, szellőzést, légtechnikát, víz-csatorna hálózatokat, és tűzvédelmi rendszereket. Kivitelezési munkáinkat részletes előkészítés és tervezés előzi meg, amely biztosítja a gördülékeny megvalósítást és a határidők betartását.
    </p>
    <p class="text-gray-700 leading-relaxed mt-4">
      Kivitelezési szolgáltatásaink között szerepel a kazánházak, hőközpontok kialakítása, padlófűtés és radiátoros fűtés kiépítése, hőszivattyús rendszerek telepítése, napkollektoros és napelemes rendszerek integrálása, valamint intelligens épületvezérlési rendszerek implementálása. Munkánkat a legmagasabb szakmai színvonalon, a hatályos szabványok és előírások betartásával végezzük.
    </p>
  `;

  const tervezesContent = `
    <h3 class="text-3xl font-bold mb-6">Épületgépészeti tervezés és energetika</h3>
    <p class="text-gray-700 leading-relaxed">
      Az épületgépészeti tervezés során figyelembe vesszük az épület rendeltetését, a beruházó elvárásait és a helyi adottságokat. BIM (Building Information Modeling) technológiát alkalmazva tervezzük meg a komplex épületgépészeti rendszereket, amely lehetővé teszi a különböző szakágak (építészet, statika, elektromosság) terveivel való összehangolást és az esetleges ütközések korai felismerését.
    </p>
    <p class="text-gray-700 leading-relaxed mt-4">
      Energetikai tervezésünk során prioritásként kezeljük az energiahatékonyságot. Elvégezzük az épületek energetikai számításait, tanúsítását, valamint javaslatokat teszünk az energetikai korszerűsítésre. A megújuló energiaforrások (napenergia, geotermikus energia) integrálásával még hatékonyabbá tesszük az épületgépészeti rendszereket, csökkentve ezzel a működési költségeket és az ökológiai lábnyomot.
    </p>
  `;

  const epuletgepeszetElonyok = [
    {
      title: "Komplex szolgáltatás",
      description: "A tervezéstől a kivitelezésig egy kézben tartjuk a teljes épületgépészeti folyamatot, biztosítva a zökkenőmentes megvalósítást.",
      icon: "check"
    },
    {
      title: "Tapasztalt szakemberek",
      description: "Több évtizedes szakmai tapasztalattal rendelkező mérnökeink és szakembereink garantálják a magas minőségű munkavégzést.",
      icon: "document"
    },
    {
      title: "Korszerű technológiák",
      description: "A legújabb épületgépészeti technológiákat alkalmazzuk, hogy ügyfeleink számára energiahatékony és fenntartható rendszereket építsünk.",
      icon: "clock"
    }
  ];
</script>

<DiagonalHero 
  title="Épületgépészet"
  description="Vállalkozásunk teljes körű épületgépészeti szolgáltatásokat nyújt a tervezéstől a kivitelezésig. Szakértelmünkkel támogatjuk ügyfeleinket a hatékony, fenntartható és költségoptimális épületgépészeti rendszerek megvalósításában, legyen szó családi házakról, társasházakról vagy ipari létesítményekről."
  imageSrc="/images/epuletgepeszet_service_img.jpg"
  imageAlt="Konkurencia Kft. épületgépészeti szolgáltatások"
  ctaText="Professzionális épületgépészeti megoldások minden igényre!"
  buttonText="KAPCSOLATFELVÉTEL"
  buttonLink="/rolunk"
/>

<ImageTextSplit
  title="Épületgépészeti szolgáltatásaink"
  imageLeft="/images/service_images/epuletgepeszet_images/epuletgepeszet_1_img.jpeg"
  imageRight="/images/service_images/epuletgepeszet_images/epuletgepeszet_2_img.jpg"
  imageAltLeft="Épületgépészeti tervezés"
  imageAltRight="Épületgépészeti kivitelezés"
  content={epuletgepeszetBevezeto}
  ctaText="Kapcsolatfelvétel"
  ctaLink="/rolunk"
  backgroundColor="bg-gray-50"
/>

<!-- Szolgáltatás típusok szekció -->
<section class="w-full py-12 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">Szolgáltatásaink</h2>
      <p class="text-center text-gray-600 italic mb-16">Két fő területen nyújtunk szakértői megoldásokat: kivitelezés és tervezés/energetika.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-52 items-center">
        <div>
          {@html kivitelezesContent}
        </div>
        <div>
          <img 
            src="/images/service_images/epuletgepeszet_images/epuletgepeszet_3_img.jpg" 
            alt="Épületgépészeti kivitelezés" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="/images/service_images/epuletgepeszet_images/epuletgepeszet_4_img.jpg" 
            alt="Épületgépészeti tervezés és energetika" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="order-1 md:order-2">
          {@html tervezesContent}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Megoldások szekció -->
<section class="w-full py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Főbb megoldásaink</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Fűtés és hűtés</h3>
          <p class="text-gray-700">
            Korszerű fűtési és hűtési rendszerek tervezése és kivitelezése, beleértve a padlófűtést, a hőszivattyús technológiát, és a hagyományos radiátoros rendszereket.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Energetika</h3>
          <p class="text-gray-700">
            Épületenergetikai tanúsítványok készítése, energetikai korszerűsítési tervek, napelemes és napkollektoros rendszerek tervezése és telepítése.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-16 h-16 flex items-center justify-center bg-[#DC0000] text-white rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Automatizálás</h3>
          <p class="text-gray-700">
            Épületfelügyeleti rendszerek, épületautomatika és intelligens vezérlési megoldások tervezése és kiépítése lakásokhoz és kereskedelmi épületekhez.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Referencia projektek szekció -->
<section class="w-full py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Referencia fotók</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Referencia fotó 1 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_1_img.jpg" 
            alt="Családi ház épületgépészet" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Családi ház épületgépészet</h3>
          </div>
        </div>

        <!-- Referencia fotó 2 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_2_img.jpg" 
            alt="Irodaház gépészeti rendszer" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Irodaház gépészeti rendszer</h3>
          </div>
        </div>

        <!-- Referencia fotó 3 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_3_img.jpg" 
            alt="Társasház központi fűtés" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Társasház központi fűtés</h3>
          </div>
        </div>

        <!-- Referencia fotó 4 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_4_img.jpg" 
            alt="Hőszivattyús rendszer" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Hőszivattyús rendszer</h3>
          </div>
        </div>

        <!-- Referencia fotó 5 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_5_img.jpg" 
            alt="Padlófűtés kivitelezés" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Padlófűtés kivitelezés</h3>
          </div>
        </div>

        <!-- Referencia fotó 6 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/service_images/epuletgepeszet_images/reference_images/reference_6_img.jpg"  
            alt="Napkollektoros rendszer" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Napkollektoros rendszer</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer /> 