<script>
  import Services from '../components/Services.svelte';
  import Articles from '../components/Articles.svelte';
  import ShopBanner from '../components/ShopBanner.svelte';
  import Footer from '../components/Footer.svelte';
  let imageError = false;

  function handleImageError() {
    imageError = true;
  }
</script>

<div class="relative">
  <!-- Left side content -->
  <div class="container mx-auto px-4 py-16 lg:py-24">
    <div class="w-full lg:w-1/2">
      <h1 class="text-4xl lg:text-5xl font-bold text-[#DC0000] mb-6">
        Energiacsökkentés kompromisszumok nélkül!
      </h1>
      
      <div class="text-gray-600 mb-8">
        <div class="flex flex-wrap gap-2 text-sm mb-6">
          <span>Épületgépészet</span>
          <span class="text-[#DC0000]">/</span>
          <span>Épületvillamosság</span>
          <span class="text-[#DC0000]">/</span>
          <span>Épületautomatika</span>
          <span class="text-[#DC0000]">/</span>
          <span>Klíma</span>
          <span class="text-[#DC0000]">/</span>
          <span>Hőszivattyú</span>
        </div>
        
        <p class="text-base leading-relaxed">
          Vállalkozásunk célja, hogy megoldást adjon az építőiparban a mai modern kor kihívásaira, az ésszerűséget és az energiahatékonyságot figyelembe véve. Szakképzett kollégáinkkal készek vagyunk megtervezni, majd kiépíteni az Ön által megálmodott gépészeti, villamos és épületfelügyeleti rendszereket, családi házas léptéktől a társasházas, illetve ipari léptékig.
        </p>
      </div>
      
      <a href="/ajanlatkeres" class="inline-flex items-center bg-[#DC0000] text-white px-8 py-3 text-sm font-medium uppercase hover:bg-[#b00000] transition-colors">
        Ajánlatkérés
      </a>
    </div>
  </div>
  
  <!-- Right side diagonal image -->
  <div class="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
    <div class="relative w-full h-full">
      <!-- Diagonal overlay -->
      <div class="absolute inset-0 bg-white" style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);"></div>
      <!-- Image -->
      <div class="absolute inset-0" style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);">
        <img
          src="/images/hero_img.jpg"
          alt="Ipari gépészeti berendezések"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

<Services />
<ShopBanner />
<Articles 
  headerText="Legfrissebb cikkeink"
/>
<Footer />
