<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ClimateSection from '$lib/components/ClimateSection.svelte';
  import Mission from '$lib/components/Mission.svelte';
  import Services from '$lib/components/Services.svelte';
  import OpenEvent from '$lib/components/OpenEvent.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>복세편살 개발 스튜디오 | 기후를 위한 소프트웨어</title>
  <meta name="description" content="리소스를 최적화한 소프트웨어로 기후변화에 기여합니다. Serverless, 클라우드 최적화, 기후친화적 개발." />
</svelte:head>

<Nav />

<main>
  <Hero />
  <ClimateSection />
  <Mission />
  <Services />
  <OpenEvent />
  <Contact />
</main>

<Footer />

<style>
  main {
    overflow: hidden;
  }
</style>
