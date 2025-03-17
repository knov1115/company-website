<script>
  import DiagonalHero from '../../components/DiagonalHero.svelte';
  import Articles from '../../components/Articles.svelte';
  import ShopBanner from '../../components/ShopBanner.svelte';
  import Footer from '../../components/Footer.svelte';
</script>

<DiagonalHero
  IntroText="Legfrissebb cikkünk:"    
  title="A központi szellőzés szerepe és fontossága a lakóépületekben"
  description="A központi szellőzés egy olyan épületgépészeti rendszer, amelynek célja a friss levegő folyamatos biztosítása és a használt levegő hatékony eltávolítása a lakóépületekből. Ez a rendszer kulcsfontosságú szerepet játszik az egészséges és kényelmes lakókörnyezet kialakításában. A központi szellőzés nem csupán a levegő cseréjéről szól, hanem a páratartalom, a hőmérséklet és a levegőminőség szabályozásáról is gondoskodik. A […]"
  imageSrc="/images/kozpontiszellozes_articles_img.jpg"
  imageAlt="Épületgépészeti szakmai cikkek"
  buttonText = "Olvass Tovább"
  buttonLink = "/cikkek/kozponti-szellozes-szerepe"
/> 

<Articles 
  headerText=""
/>
<ShopBanner />
<Footer />