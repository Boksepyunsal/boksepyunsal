<script>
  import { reveal } from '$lib/actions/reveal.js';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  export let data;
  const { project } = data;
</script>

<svelte:head>
  <title>{project.name} | 복세편살 개발 스튜디오</title>
  <meta name="description" content={project.desc} />
</svelte:head>

<Nav />

<main>
  <!-- Hero -->
  <section class="hero" style="--gradient: {project.gradient}">
    <div class="hero-bg"></div>
    <div class="container">
      <a href="/#portfolio" class="back-link" on:click|preventDefault={() => { window.location.href = '/#portfolio'; }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        포트폴리오로 돌아가기
      </a>
      <div class="hero-content" use:reveal>
        <span class="client-badge">{project.client}</span>
        <h1>{project.name}</h1>
        <p class="hero-desc">{project.desc}</p>
        <div class="meta-row">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {project.period}
          </span>
          <span class="meta-divider">·</span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {project.role}
          </span>
        </div>
        {#if project.links && project.links.length > 0}
        <div class="hero-links">
          {#each project.links as link}
            <a href={link.href} class="hero-link" target="_blank" rel="noopener noreferrer" style="--link-gradient: {project.gradient}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {link.label}
            </a>
          {/each}
        </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Summary Stats -->
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid" use:reveal>
        {#each project.stats as stat}
          <div class="stat-card">
            <div class="stat-value" style="background: {project.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{stat.value}</div>
            <div class="stat-label">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Images Gallery -->
  {#if project.images && project.images.length > 0}
  <section class="gallery-section">
    <div class="container">
      <div class="gallery-grid" use:reveal>
        {#each project.images as img, i}
          <div class="gallery-item">
            <img src={img} alt="{project.name} 스크린샷 {i + 1}" loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        {/each}
      </div>
    </div>
  </section>
  {/if}

  <!-- Problem -->
  <section class="content-section">
    <div class="container">
      <div class="section-block" use:reveal>
        <div class="section-marker problem-marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          문제 상황
        </div>
        <h2>어떤 문제를 해결했나요?</h2>
        <div class="prose">
          {#each project.problem.split('\n\n') as para}
            <p>{para}</p>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Solution -->
  <section class="content-section alt-bg">
    <div class="container">
      <div class="section-block" use:reveal>
        <div class="section-marker solution-marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          솔루션
        </div>
        <h2>어떻게 해결했나요?</h2>
        <div class="prose">
          {#each project.solution.split('\n\n') as para}
            <p>{para}</p>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Tech Stack -->
  <section class="content-section">
    <div class="container">
      <div class="section-block" use:reveal>
        <div class="section-marker tech-marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          기술 스택
        </div>
        <h2>사용한 기술</h2>
        <div class="tech-grid">
          {#each Object.entries(project.techStack) as [category, items], i}
            <div class="tech-group" use:reveal={{ delay: i * 80 }}>
              <div class="tech-category">{category}</div>
              <div class="tech-tags">
                {#each items as item}
                  <span class="tech-tag">{item}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features -->
  <section class="content-section alt-bg">
    <div class="container">
      <div class="section-block" use:reveal>
        <div class="section-marker feature-marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          주요 기능
        </div>
        <h2>핵심 기능</h2>
        <ul class="feature-list">
          {#each project.features as feature, i}
            <li use:reveal={{ delay: i * 60 }}>
              <div class="feature-icon" style="background: {project.gradient}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              {feature}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <!-- Outcome -->
  <section class="outcome-section" style="--gradient: {project.gradient}">
    <div class="outcome-bg"></div>
    <div class="container">
      <div class="section-block" use:reveal>
        <div class="section-marker outcome-marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
          성과
        </div>
        <h2>어떤 결과를 만들었나요?</h2>
        <div class="prose outcome-prose">
          {#each project.outcome.split('\n\n') as para}
            <p>{para}</p>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="cta-box" use:reveal>
        <h2>비슷한 프로젝트를 고민 중이신가요?</h2>
        <p>요구사항을 공유해주시면 최적의 접근 방식과 예상 일정을 안내드립니다.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfG617zgP3HbNcN-qJC2apfu-buzRXRaasaqOceghlgXpGiuQ/viewform?usp=publish-editor" class="cta-btn" style="background: {project.gradient}" target="_blank" rel="noopener">
          무료 견적 문의하기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  main {
    overflow: hidden;
    padding-top: 0;
  }

  /* Hero */
  .hero {
    position: relative;
    padding: 160px 0 80px;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background: var(--gradient);
    opacity: 0.06;
  }

  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, transparent 60%, var(--bg) 100%);
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 32px;
    transition: color 0.2s;
  }

  .back-link:hover {
    color: var(--text);
  }

  .hero-content {
    max-width: 760px;
  }

  .client-badge {
    display: inline-block;
    padding: 5px 14px;
    background: rgba(100, 72, 46, 0.08);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 20px;
  }

  h1 {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 20px;
    color: var(--text);
  }

  .hero-desc {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 620px;
    margin-bottom: 28px;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--text-muted);
  }

  .meta-divider {
    color: var(--text-muted);
  }

  .hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }

  .hero-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
  }

  .hero-link:hover {
    background: var(--link-gradient);
    border-color: transparent;
    color: white;
    transform: translateY(-1px);
  }

  /* Stats */
  .stats-section {
    padding: 40px 0 60px;
    border-bottom: 1px solid var(--border);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .stat-card {
    background: var(--surface);
    padding: 32px 28px;
    text-align: center;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 13px;
    color: var(--text-muted);
    font-weight: 500;
  }

  /* Gallery */
  .gallery-section {
    padding: 60px 0;
    border-bottom: 1px solid var(--border);
  }

  .gallery-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .gallery-item {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface);
    width: 100%;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.01);
  }

  /* Content Sections */
  .content-section {
    padding: 80px 0;
  }

  .alt-bg {
    background: var(--surface);
  }

  .section-block {
    max-width: 760px;
    margin: 0 auto;
  }

  .section-marker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
  }

  .problem-marker {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.25);
    color: #f87171;
  }

  .solution-marker {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    color: #34d399;
  }

  .tech-marker {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.25);
    color: var(--blue-light);
  }

  .feature-marker {
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
    color: #fbbf24;
  }

  .outcome-marker {
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.25);
    color: var(--purple-light);
  }

  h2 {
    font-size: clamp(24px, 3.5vw, 36px);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 28px;
    color: var(--text);
  }

  .prose p {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.9;
    margin-bottom: 16px;
  }

  .prose p:last-child {
    margin-bottom: 0;
  }

  /* Tech Stack */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  .tech-group {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
  }

  .tech-category {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tech-tag {
    padding: 4px 10px;
    background: rgba(100, 72, 46, 0.06);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  /* Features */
  .feature-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 15px;
    color: var(--text-secondary);
    padding: 14px 18px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    transition: border-color 0.2s;
  }

  .feature-list li:hover {
    border-color: var(--border-hover);
  }

  .feature-icon {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  /* Outcome */
  .outcome-section {
    position: relative;
    padding: 80px 0;
    overflow: hidden;
  }

  .outcome-bg {
    position: absolute;
    inset: 0;
    background: var(--gradient);
    opacity: 0.05;
  }

  .outcome-prose p {
    font-size: 17px;
    line-height: 1.9;
  }

  /* CTA */
  .cta-section {
    padding: 80px 0;
    border-top: 1px solid var(--border);
  }

  .cta-box {
    text-align: center;
    max-width: 560px;
    margin: 0 auto;
  }

  .cta-box h2 {
    font-size: clamp(22px, 3vw, 32px);
    margin-bottom: 14px;
  }

  .cta-box p {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.8;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    border-radius: 100px;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .cta-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.35);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 120px 0 60px;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .tech-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr 1fr;
    }

    .stat-card {
      padding: 20px 16px;
    }

    .stat-value {
      font-size: 22px;
    }
  }
</style>
