<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
  import ContactSection from "../../../components/ContactSection.svelte";
  import ProcessSteps from "../../../components/ProcessSteps.svelte";
  import BenefitsSection from "../../../components/BenefitsSection.svelte";
  import BetonfurasKalkulator from "../../../components/BetonfurasKalkulator.svelte";

  const betonfurasTortenelem = `
    <p class="text-gray-700 leading-relaxed">
      A betonfúrás és magfúrás technológiája jelentős fejlődésen ment keresztül az elmúlt évtizedekben. A kezdeti, nehézkes és zajos pneumatikus fúrógépeket mára felváltották a gyémántszegmenses technológiával működő, precíz, alacsony zajszintű és környezetbarát gépek, amelyek akár több méter vastag vasbeton szerkezeteken is képesek átfúrni.
    </p>

    <p class="text-gray-700 leading-relaxed">
      A modern betonfúrás és magfúrás technológiája lehetővé teszi, hogy minimális porképződéssel, vibrációval és zajjal végezzük a munkákat. A gyémánttárcsás vágás és fúrás pontossága elérte azt a szintet, hogy akár milliméter pontossággal tudunk áttöréseket készíteni bármilyen betonelemben, legyen az fal, födém vagy egyéb vasbetonszerkezet.
    </p>
  `;
</script>

<DiagonalHero 
  title="Betonfúrás, magfúrás"
  description="Cégünk professzionális betonfúrási és magfúrási szolgáltatásokat kínál mind lakossági, mind ipari ügyfelek számára. Modern gépparkunk és tapasztalt szakembereink garantálják a pontos, gyors és tiszta munkavégzést bármilyen betonelemben."
  imageSrc="/images/betonfuras_service_img.jpg"
  imageAlt="Konkurencia Kft. Betonfúrás, magfúrás szolgáltatások"
  ctaText="Kérjen ingyenes árajánlatot most!"
/>

<section class="w-full py-16 bg-gray-100">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Betonfúrás kalkulátor</h2>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Kalkulátorunk segítségével gyorsan kiszámolhatja a betonfúrási munkák várható költségét. Töltse ki az alábbi űrlapot, és kollégáink hamarosan felveszik Önnel a kapcsolatot a pontos árajánlattal.
    </p>
    
    <BetonfurasKalkulator />
  </div>
</section>

<ImageTextSplit
  title="Betonfúrásról, magfúrásról általánosan"
  imageLeft="/images/service_images/betonfuras_images/betonfuras_1_img.jpg"
  imageRight="/images/service_images/betonfuras_images/betonfuras_2_img.jpg"
  imageAltLeft="Hagyományos betonfúrási módszerek"
  imageAltRight="Modern gyémánttechnológiás betonfúrás"
  content={betonfurasTortenelem}
  ctaText="Kapcsolatfelvétel"
  ctaLink="/kapcsolat"
  backgroundColor="bg-gray-50"
/>

<Footer /> 