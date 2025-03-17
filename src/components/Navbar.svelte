<script>
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-20">
      <!-- Logo section -->
      <a href="/" class="flex items-center space-x-3 group">
        <img src="/images/company_logo.jpg" alt="5CS Group" class="h-16 object-cover object-top" style="clip-path: inset(0 0 15% 0);" />
        <div class="relative overflow-hidden">
          <span class="text-2xl font-bold bg-gradient-to-r from-[#DC0000] to-[#FF4444] bg-clip-text text-transparent">
            Konkurencia
          </span>
          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#DC0000] to-[#FF4444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </div>
      </a>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center space-x-8 text-gray-700">
        <a href="/szolgaltatasaink" class="font-medium hover:text-[#DC0000] transition-colors duration-200">SZOLGÁLTATÁSAINK</a>
        <a href="/rolunk" class="font-medium hover:text-[#DC0000] transition-colors duration-200">RÓLUNK</a>
        <a href="/cikkek" class="font-medium hover:text-[#DC0000] transition-colors duration-200">CIKKEK</a>
        
        <!-- Dropdown Menu -->
        <div class="relative group">
          <button class="font-medium bg-[#DC0000] text-white px-6 py-2 rounded hover:bg-[#b00000] transition-colors duration-200 flex items-center space-x-1">
            <span>AJÁNLATKÉRÉS</span>
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Dropdown Content -->
          <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
            <div class="py-1">
              <a href="/kapcsolat" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#DC0000] transition-colors duration-200">
                Kapcsolat
              </a>
              <a href="/betonfuras-kalkulator" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#DC0000] transition-colors duration-200">
                Betonfúrás kalkulátor
              </a>
              <a href="/klima-kalkulator" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#DC0000] transition-colors duration-200">
                Klíma kalkulátor
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-700 hover:text-[#DC0000] transition-colors duration-200">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>

<!-- Remove the spacer since we're using sticky positioning --> 