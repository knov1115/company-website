<script>
  export let title = "";
  export let subtitle = "";
  export let content = "";
  export let imageLeft = "/images/placeholder.jpg";
  export let imageRight = "";
  export let imageAltLeft = "Kép leírás";
  export let imageAltRight = "Kép leírás";
  export let ctaText = "Kapcsolatfelvétel";
  export let ctaLink = "/kapcsolat";
  export let backgroundColor = "bg-gray-50";
  export let reverse = false;
  export let showCta = true;
  export let roundedImages = true;
  export let withShadow = true;
</script>

<style>
  .image-stack {
    position: relative;
    width: 100%;
  }

  .image-stack img:first-child {
    position: relative;
    z-index: 1;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .image-stack.with-second img:first-child {
    width: 80%;
  }

  .image-stack img:last-child {
    position: absolute;
    right: 0;
    top: 40%;
    width: 90%;
    z-index: 2;
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

<section class="w-full py-16 {backgroundColor}">
  <div class="container mx-auto px-4">
    {#if title}
      <h2 class="text-4xl font-bold text-center mb-6">{title}</h2>
    {/if}
    
    {#if subtitle}
      <p class="text-center text-gray-600 italic mb-16">{subtitle}</p>
    {/if}
    
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <!-- Image Column -->
      <div 
        class="image-stack {imageRight ? 'with-second' : ''}" 
        class:order-2={reverse} 
        class:md:order-2={reverse} 
        class:order-1={!reverse} 
        class:md:order-1={!reverse}
      >
        <img 
          src={imageLeft} 
          alt={imageAltLeft} 
          class:rounded-lg={roundedImages}
          class:shadow-none={!withShadow}
        />
        {#if imageRight}
          <img 
            src={imageRight} 
            alt={imageAltRight} 
            class:rounded-lg={roundedImages}
            class:shadow-none={!withShadow}
          />
        {/if}
      </div>

      <!-- Text Column -->
      <div 
        class="text-container" 
        class:order-1={reverse} 
        class:md:order-1={reverse} 
        class:order-2={!reverse} 
        class:md:order-2={!reverse}
      >
        <div class="space-y-6">
          {@html content}

          <!-- CTA Button -->
          {#if showCta}
            <div class="mt-8">
              <a 
                href={ctaLink} 
                class="inline-block bg-[#DC0000] text-white px-8 py-4 rounded hover:bg-[#b00000] transition-colors duration-200 text-lg font-medium"
              >
                {ctaText}
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section> 