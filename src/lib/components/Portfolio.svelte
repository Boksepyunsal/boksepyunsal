<script>
  import { reveal } from '$lib/actions/reveal.js';
  import { projects } from '$lib/data/projects.js';
</script>

<section id="portfolio">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Portfolio</div>
      <h2 class="section-title">실제로 만든 것들</h2>
      <p class="section-desc">말보다 결과물로 증명합니다. 각 프로젝트는 기술적 도전과 비즈니스 가치를 동시에 달성했습니다.</p>
    </div>

    <div class="portfolio-grid">
      {#each projects as project, i}
        <a
          class="project-card {project.size}"
          href="/projects/{project.slug}"
          use:reveal={{ delay: i * 80 }}
          style="--gradient: {project.gradient}"
        >
          <div class="card-gradient"></div>

          <div class="card-top">
            <div class="project-icon">
              {@html project.icon}
            </div>
            <span class="client-badge">{project.client}</span>
          </div>

          <div class="card-content">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div class="tag-list">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <span class="detail-link">자세히 보기 →</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }
  .section-header .section-desc {
    margin: 0 auto;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
    gap: 16px;
  }

  .project-card {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface);
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .project-card:hover {
    transform: translateY(-6px) scale(1.01);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  }

  .project-card.large {
    grid-column: span 2;
  }

  .card-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient);
    opacity: 0.08;
    transition: opacity 0.3s;
    z-index: 0;
  }

  .project-card:hover .card-gradient {
    opacity: 0.15;
  }

  /* 하단 그라디언트 테두리 효과 */
  .project-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--gradient);
    opacity: 0;
    z-index: 0;
    transition: opacity 0.3s;
    /* 테두리처럼 보이도록 */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 1px;
  }

  .project-card:hover::after {
    opacity: 1;
  }

  .card-top {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .project-icon {
    width: 64px;
    height: 64px;
    background: var(--gradient);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    flex-shrink: 0;
  }

  .client-badge {
    padding: 5px 12px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    color: var(--text);
  }

  p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .large p {
    -webkit-line-clamp: 3;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    padding: 3px 9px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .detail-link {
    display: inline-block;
    margin-top: 14px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .project-card:hover .detail-link {
    color: var(--text-secondary);
  }

  @media (max-width: 900px) {
    .portfolio-grid {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 260px;
    }
    .project-card.large {
      grid-column: span 2;
    }
  }

  @media (max-width: 600px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }
    .project-card.large {
      grid-column: span 1;
    }
    .project-card { min-height: 220px; }
  }
</style>
