<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Process from '$lib/components/Process.svelte';
  import TechStack from '$lib/components/TechStack.svelte';
  import Knowledge from '$lib/components/Knowledge.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>복세편살 개발 스튜디오 | 기술 부채 없는 비즈니스 성장</title>
</svelte:head>

<Nav />

<main>
  <Hero />
  <Services />
  <Portfolio />
  <Process />
  <TechStack />
  <Knowledge />
  <Contact />
</main>

<Footer />

<style>
  main {
    overflow: hidden;
  }
</style>
