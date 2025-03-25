<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  function handleSubmit() {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  }
</script>

<section id="kapcsolat" class="py-16 bg-white" >
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Kapcsolat</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-gray-50 p-8 rounded-lg">
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Név"
              bind:value={formData.name}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC0000] focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Email"
              bind:value={formData.email}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC0000] focus:border-transparent"
              required
            />
          </div>
          
          <input
            type="tel"
            placeholder="Telefonszám"
            bind:value={formData.phone}
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC0000] focus:border-transparent"
          />
          
          <textarea
            placeholder="Megjegyzés"
            bind:value={formData.message}
            rows="6"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC0000] focus:border-transparent resize-none"
            required
          ></textarea>

          <div class="flex items-start space-x-2">
            <input
              type="checkbox"
              id="privacy"
              class="mt-1"
              required
            />
            <label for="privacy" class="text-sm text-gray-600">
              Elfogadom az <a href="/adatkezelesi-tajekoztato" class="text-[#DC0000] hover:underline">adatkezelési tájékoztatót</a>
            </label>
          </div>

          <button
            type="submit"
            class="bg-[#DC0000] text-white px-8 py-3 rounded-md hover:bg-[#b00000] transition-colors duration-200"
          >
            KÜLDÉS
          </button>
        </form>
      </div>

      <!-- Company Info and Map -->
      <div class="space-y-8">
        <!-- Company Info -->
        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-xl font-bold mb-4">Konkurencia Kft.</h3>
          <p class="text-gray-600 mb-2">Korlátolt felelősségű társaság</p>
          
          <div class="space-y-4 mt-6">
            <div>
              <p class="font-semibold">Székhely:</p>
              <p class="text-gray-600">7623 Pécs József Attila utca 45.</p>
            </div>
            
            <div>
              <p class="font-semibold">Cégjegyzékszám:</p>
              <p class="text-gray-600">-</p>
            </div>
            
            <div>
              <p class="font-semibold">Adószám:</p>
              <p class="text-gray-600">-</p>
            </div>
            
            <div>
              <p class="font-semibold">Email:</p>
              <a href="mailto:info@konkurencia.com" class="text-[#DC0000] hover:underline">info@konkurencia.com</a>
            </div>
            
            <div>
              <p class="font-semibold">Telefon:</p>
              <a href="tel:+36309555801" class="text-[#DC0000] hover:underline">+36 30 546 5845</a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="h-[300px] rounded-lg overflow-hidden">
          <iframe
            title="Konkurencia location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.473030006775!2d18.22893937677985!3d46.07555397108091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b1b6e1d47c4f%3A0xc4290c1e1010!2zUMOpY3MsIErDs3pzZWYgQXR0aWxhIHUuIDQ1LCA3NjIz!5e0!3m2!1shu!2shu!4v1710612547893!5m2!1shu!2shu"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section> 