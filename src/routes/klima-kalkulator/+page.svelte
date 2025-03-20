<script>
  import Footer from "../../components/Footer.svelte";
  import KlimaKalkulator from "../../components/KlimaKalkulator.svelte";
  import BenefitsSection from "../../components/BenefitsSection.svelte";

  const klimaBenefits = [
    {
      title: "Időt takarít meg",
      description: "Nincs szükség hosszas utánajárásra, a kalkulátorunk segít a megfelelő klíma kiválasztásában.",
      icon: "clock"
    },
    {
      title: "Személyre szabott ajánlat",
      description: "Az Ön igényeinek és prioritásainak megfelelő, testreszabott megoldást kínálunk.",
      icon: "document"
    },
    {
      title: "Szakértői segítség",
      description: "Szakértő kollégáink segítenek a legjobb döntés meghozatalában és válaszolnak minden kérdésére.",
      icon: "check"
    }
  ];
</script>

<div class="w-full py-8 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-6">Klíma kalkulátor</h1>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Segítünk kiválasztani a megfelelő klímaberendezést az Ön igényeihez és elvárasaihoz. Töltse ki az alábbi űrlapot, és szakértő munkatársaink személyre szabott ajánlatot készítenek Önnek.
      </p>
      
      <div class="mb-16">
        <KlimaKalkulator />
      </div>
      
      <BenefitsSection 
        title="Miért használja a klíma kalkulátorunkat?" 
        benefits={klimaBenefits}
      />
    </div>
  </div>
</div>

<Footer /> 