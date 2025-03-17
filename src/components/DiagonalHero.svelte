<script>
  export let title = "";
  export let description = "";
  export let buttonText = "";
  export let buttonLink = "";
  export let imageSrc = "";
  export let imageAlt = "";
  export let IntroText = "";
</script>

<div class="relative">
  <!-- Left side content -->
  <div class="container mx-auto px-4 py-16 lg:py-24">
    <div class="w-full lg:w-1/2">
        {#if IntroText}
        <h3 class="text-2xl font-bold text-black mb-32">{IntroText}</h3>
      {/if}
      <h1 class="text-4xl lg:text-5xl font-bold text-black mb-6">
        {title}
      </h1>
      
      <div class="text-gray-600 mb-8">
        <p class="text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {#if buttonText}
        <a href={buttonLink} class="inline-flex items-center bg-[#DC0000] text-white px-8 py-3 text-sm font-medium uppercase hover:bg-[#b00000] transition-colors">
          {buttonText}
        </a>
      {/if}
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