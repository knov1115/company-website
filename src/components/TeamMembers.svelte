<script>
  const teamMembers = [
    {
      name: "Kovács Hanna",
      position: "Épületgépészmérnök",
      phone: "+36 20 549 8632",
      email: "sample@konkurencia.com",
      image: "/images/team/team_member_1_img.jpg"
    },
    {
      name: "Muskétás Elemér",
      position: "Villamosmérnök",
      phone: "+36 30 215 3426",
      email: "sample@konkurencia.com",
      image: "/images/team/team_member_2_img.jpg"
    },
    {
      name: "Trombita Donát",
      position: "Épületgépész technikus",
      phone: "+36 70 340 9763",
      email: "sample@konkurencia.com",
      image: "/images/team/team_member_3_img.jpg"
    },
    {
      name: "Hasbulla",
      position: "PLC Programozó",
      phone: "+36 20 644 8964",
      email: "sample@konkurencia.com",
      image: "/images/team/team_member_4_img.jpg"
    }
  ];
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Csapatunk</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each teamMembers as member}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
          <div class="relative w-full pb-[125%]">
            <img 
              src={member.image} 
              alt={member.name} 
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-semibold mb-1">{member.name}</h3>
            <p class="text-gray-600 mb-4">{member.position}</p>
            <div class="space-y-2">
              <a href="tel:{member.phone}" class="flex items-center text-gray-600 hover:text-[#DC0000]">
                <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="break-all">{member.phone}</span>
              </a>
              <a href="mailto:{member.email}" class="flex items-center text-gray-600 hover:text-[#DC0000]">
                <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="break-all">{member.email}</span>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 