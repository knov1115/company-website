<script>
  export let title = "Energiacsökkentés kompromisszumok nélkül!";
  export let description = "Vállalkozásunk célja, hogy megoldást adjon az építőiparban a mai modern kor kihívásaira, az ésszerűséget és az energiahatékonyságot figyelembe véve. Szakképzett kollégáinkkal készek vagyunk megtervezni, majd kiépíteni az Ön által megálmodott gépészeti, villamos és épületfelügyeleti rendszereket, családi házas léptéktől a társasházas, illetve ipari léptékig.";
  export let ctaText = "Ajánlatkérés";
  export let ctaLink = "/ajanlatkeres";
  export let imageSrc = "/images/hero_img.jpg";
  export let imageAlt = "Ipari gépészeti berendezések";
  export let categories = [
    "Épületgépészet",
    "Épületvillamosság",
    "Épületautomatika",
    "Klíma",
    "Hőszivattyú"
  ];
</script>

<div class="relative">
  <!-- Left side content -->
  <div class="container mx-auto px-4 py-16 lg:py-24">
    <div class="w-full lg:w-1/2">
      <h1 class="text-4xl lg:text-5xl font-bold text-[#DC0000] mb-6">
        {title}
      </h1>
      
      <div class="text-gray-600 mb-8">
        <div class="flex flex-wrap gap-2 text-sm mb-6">
          {#each categories as category, i}
            <span>{category}</span>
            {#if i < categories.length - 1}
              <span class="text-[#DC0000]">/</span>
            {/if}
          {/each}
        </div>
        
        <p class="text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <a href={ctaLink} class="inline-flex items-center bg-[#DC0000] text-white px-8 py-3 text-sm font-medium uppercase hover:bg-[#b00000] transition-colors">
        {ctaText}
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
          src={imageSrc}
          alt={imageAlt}
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div> 