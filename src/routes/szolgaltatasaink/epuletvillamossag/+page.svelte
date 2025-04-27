<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
	import ContactSection from "../../../components/ContactSection.svelte";
  import ProcessSteps from "../../../components/ProcessSteps.svelte";

  const villamossagTortenelem = `
    <p class="text-gray-700 leading-relaxed">
      Az épületvillamosság a modern építészet és lakhatás nélkülözhetetlen eleme. A 19. század végén Thomas Edison és Nikola Tesla forradalmasította az elektromos energiaellátást, amellyel elkezdődött a villamosítás korszaka. Az áramellátás bevezetésével a lakóházak és irodaépületek biztonsága, komfortja és funkcionalitása ugrásszerűen fejlődött az elmúlt évszázadban.
    </p>

    <p class="text-gray-700 leading-relaxed">
      Napjainkban az épületvillamosság már messze túlmutat az egyszerű áramellátáson. Az intelligens épületvezérlő rendszerek, okos otthon megoldások és energiatakarékos technológiák mind részei az épületvillamossági szakmának. A fenntarthatóság jegyében egyre nagyobb hangsúlyt fektetünk a megújuló energiaforrások integrálására, mint a napelem rendszerek és a korszerű LED világítási megoldások.
    </p>
  `;

  const eroaramuContent = `
    <h3 class="text-3xl font-bold mb-6">Erősáramú rendszerek</h3>
    <p class="text-gray-700 leading-relaxed">
      Az erősáramú rendszerek tervezése és kivitelezése az épületvillamosság alapját képezi. Ide tartozik a teljes betáplálási hálózat kiépítése, az elosztószekrények tervezése és szerelése, valamint az elektromos csatlakozások kialakítása. Szakembereink biztosítják az MSZ HD 60364 szabvány szerinti kivitelezést, amely garantálja a biztonságos és megbízható működést.
    </p>
  `;

  const gyengearamuContent = `
    <h3 class="text-3xl font-bold mb-6">Gyengeáramú rendszerek</h3>
    <p class="text-gray-700 leading-relaxed">
      A gyengeáramú rendszerek az épületek "idegrendszerét" alkotják. Ide tartoznak a különböző biztonsági rendszerek (riasztók, tűzjelzők, beléptető rendszerek), a strukturált hálózatok, valamint az audiovizuális és kommunikációs rendszerek. A modern technológiák alkalmazásával biztonságos, megbízható és könnyen kezelhető rendszereket hozunk létre.
    </p>
  `;

  const villamossagElonyok = [
    {
      title: "Energiahatékonyság",
      description: "Korszerű világítási és elektromos rendszereket telepítünk, amelyek jelentősen csökkentik az energiafogyasztást.",
      icon: "check"
    },
    {
      title: "Biztonságos kivitelezés",
      description: "Minden munkát az érvényes szabványok szerint, megfelelő minőségű anyagokkal és képzett szakemberekkel végzünk.",
      icon: "document"
    },
    {
      title: "Hosszú távú megoldások",
      description: "Rendszereink a jövőbeli bővítésekre is felkészültek, így a változó igényekhez is könnyen alkalmazkodnak.",
      icon: "clock"
    }
  ];
</script>

<DiagonalHero 
  title="Épületvillamosság"
  description="Cégünk teljes körű épületvillamossági szolgáltatásokat nyújt. A tervezéstől a kivitelezésig minden munkafázist elvégzünk, legyen szó új építésű ingatlanokról vagy felújításokról. Erősáramú és gyengeáramú rendszerek kiépítését egyaránt vállaljuk, a legmagasabb szakmai színvonalon."
  imageSrc="/images/epuletvillamossag_service_img.jpg"
  imageAlt="Konkurencia Kft. Épületvillamossági szolgáltatások"
  ctaText="Kérjen ingyenes helyszíni felmérést!"
  buttonText="KAPCSOLATFELVÉTEL"
  buttonLink="/rolunk"
/>

<ImageTextSplit
  title="Épületvillamosságról általánosan"
  imageLeft="/images/service_images/epuletvillamossag_images/epuletvillamossag_1_img.png"
  imageRight="/images/service_images/epuletvillamossag_images/epuletvillamossag_2_img.jpeg"
  imageAltLeft="Hagyományos villamossági rendszer"
  imageAltRight="Modern épületvillamossági megoldások"
  content={villamossagTortenelem}
  ctaText="Kapcsolatfelvétel"
  ctaLink="/rolunk"
  backgroundColor="bg-gray-50"
/>

<!-- Villamossági rendszerek típusok szekció -->
<section class="w-full py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">Villamossági rendszerek</h2>
      <p class="text-center text-gray-600 italic mb-16">Két fő rendszertípust különböztetünk meg: erősáramú és gyengeáramú rendszerek.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-54 items-center">
        <div>
          {@html eroaramuContent}
        </div>
        <div>
          <img 
            src="/images/service_images/epuletvillamossag_images/epuletvillamossag_3_img.jpg" 
            alt="Erősáramú villamossági rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="/images/service_images/epuletvillamossag_images/epuletvillamossag_4_img.png" 
            alt="Gyengeáramú rendszer" 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div class="order-1 md:order-2">
          {@html gyengearamuContent}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Szolgáltatások folyamata szekció -->
<ProcessSteps 
  title="Villamossági projektek megvalósításának folyamata"
  backgroundColor="bg-gray-50"
/>

<div class="mt-16">
  <ContactSection />
</div>

<Footer /> 