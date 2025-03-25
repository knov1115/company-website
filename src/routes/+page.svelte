<script>
  import Services from '../components/Services.svelte';
  import Articles from '../components/Articles.svelte';
  import ShopBanner from '../components/ShopBanner.svelte';
  import Footer from '../components/Footer.svelte';
  import MainHero from '../components/MainHero.svelte';
  let imageError = false;

  function handleImageError() {
    imageError = true;
  }
</script>

<MainHero 
  ctaLink="/rolunk"
/>
<Services />
<ShopBanner />
<Articles 
  headerText="Legfrissebb cikkeink"
/>
<Footer />
