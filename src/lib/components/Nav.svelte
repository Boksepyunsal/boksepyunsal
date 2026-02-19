<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let scrolled = false;
  let menuOpen = false;

  $: isProjectPage = $page.url.pathname.startsWith('/projects/');

  const links = [
    { label: '서비스', href: '/#services' },
    { label: '포트폴리오', href: '/#portfolio' },
    { label: '프로세스', href: '/#process' },
    { label: '기술 스택', href: '/#techstack' },
  ];

  onMount(() => {
    const handler = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav class:scrolled>
  <div class="nav-inner container">
    <a href="/" class="logo" on:click={closeMenu}>
      <img src="/logo.png" alt="복세편살 로고" class="logo-img" />
      <span class="logo-text">복세편살</span>
    </a>

    {#if isProjectPage}
      <a href="/#portfolio" class="back-btn" on:click|preventDefault={() => { window.location.href = '/#portfolio'; }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        메인으로
      </a>
    {:else}
      <ul class="nav-links">
        {#each links as link}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    {/if}

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" class="cta-btn" target="_blank" rel="noopener">무료 견적 받기</a>

    <button class="hamburger" on:click={toggleMenu} aria-label="메뉴">
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <div class="mobile-menu">
    <ul>
      {#if isProjectPage}
        <li><a href="/#portfolio" on:click|preventDefault={() => { closeMenu(); window.location.href = '/#portfolio'; }}>← 메인으로</a></li>
      {:else}
        {#each links as link}
          <li><a href={link.href} on:click={closeMenu}>{link.label}</a></li>
        {/each}
      {/if}
      <li>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" class="mobile-cta" target="_blank" rel="noopener" on:click={closeMenu}>무료 견적 받기</a>
      </li>
    </ul>
  </div>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 20px 0;
    transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding 0.3s ease;
    border-bottom: 1px solid transparent;
  }

  nav.scrolled {
    background: rgba(250, 247, 242, 0.90);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: var(--border);
    padding: 14px 0;
  }

  .nav-inner {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .logo-img {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .logo-text {
    font-size: 17px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }

  .back-btn:hover {
    color: var(--text);
    background: rgba(100, 72, 46, 0.08);
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 8px;
    margin-left: auto;
  }

  .nav-links a {
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }

  .nav-links a:hover {
    color: var(--text);
    background: rgba(100, 72, 46, 0.08);
  }

  .cta-btn {
    flex-shrink: 0;
    padding: 9px 20px;
    background: var(--gradient);
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 100px;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    white-space: nowrap;
  }

  .cta-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(217, 119, 87, 0.35);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 6px;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }

  .hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .hamburger span.open:nth-child(2) { opacity: 0; }
  .hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

  .mobile-menu {
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    z-index: 99;
    background: rgba(250, 247, 242, 0.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    animation: slideDown 0.25s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .mobile-menu ul {
    list-style: none;
    padding: 16px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-menu a {
    display: block;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 10px;
    transition: color 0.2s, background 0.2s;
  }

  .mobile-menu a:hover {
    color: var(--text);
    background: rgba(100, 72, 46, 0.07);
  }

  .mobile-cta {
    background: var(--gradient) !important;
    color: white !important;
    text-align: center;
    margin-top: 8px;
    border-radius: 12px !important;
  }

  @media (max-width: 768px) {
    .nav-links,
    .cta-btn {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }
</style>
