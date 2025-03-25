<script>
  import DiagonalHero from "../../../components/DiagonalHero.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ImageTextSplit from "../../../components/ImageTextSplit.svelte";
  import ContactSection from "../../../components/ContactSection.svelte";
  import ProcessSteps from "../../../components/ProcessSteps.svelte";
  import BenefitsSection from "../../../components/BenefitsSection.svelte";
  import BetonfurasKalkulator from "../../../components/BetonfurasKalkulator.svelte";
  import ShopBanner from "../../../components/ShopBanner.svelte";
  
  
  // Esemény kezelők
  function handleSzamitas(event) {
    console.log('Számítás eredménye:', event.detail);
  }
  
  function handleAjanlat(event) {
    console.log('Ajánlathoz adott tétel:', event.detail);
  }
  
  function handleKuldes(event) {
    console.log('Küldés esemény:', event.detail);
    
    // Adatok feldolgozása
    const formData = {
      ...event.detail,
      // Hozzáfűzzük az addedItems mezőt, ha az nincs még
      addedItems: event.detail.addedItems || []
    };
    
    // API hívás az adatok elküldéséhez
    fetch('/api/betonfuras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        alert('Köszönjük! Az árajánlatkérését megkaptuk, hamarosan felvesszük Önnel a kapcsolatot.');
      } else {
        alert('Hiba történt: ' + result.message);
      }
    })
    .catch(error => {
      console.error('Hiba az adatok küldése során:', error);
      alert('Hiba történt az adatok küldése során. Kérjük próbálja újra később.');
    });
  }
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
    
    <BetonfurasKalkulator 
      on:szamitas={handleSzamitas}
      on:ajanlat={handleAjanlat}
      on:kuldes={handleKuldes}
    />
  </div>
</section>


<ShopBanner />


<Footer /> 