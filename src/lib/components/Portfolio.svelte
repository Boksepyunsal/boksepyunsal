<script>
  import { reveal } from '$lib/actions/reveal.js';

  const projects = [
    {
      id: 1,
      name: 'GS풍력발전 SaaS 플랫폼',
      client: 'GS (대기업)',
      desc: 'GS 대기업의 풍력발전 설비 데이터를 실시간으로 수집·분석·시각화하는 엔터프라이즈 SaaS 플랫폼. 수천 개 센서의 데이터를 처리하는 고성능 파이프라인 구축.',
      tags: ['AWS', 'Next.js', 'Spring Boot', 'Real-time', 'SaaS'],
      gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>`,
      size: 'large',
    },
    {
      id: 2,
      name: '사내 업무 지원 생성형 AI 챗봇',
      client: '기업 내부용',
      desc: 'GPT 기반 내부 문서 검색·요약 및 업무 자동화 챗봇. RAG 아키텍처로 사내 지식베이스를 학습해 업무 효율 극대화.',
      tags: ['GPT-4', 'RAG', 'Node.js', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>`,
      size: 'medium',
    },
    {
      id: 3,
      name: '공구모아',
      client: 'Gong-gu-mo-a',
      desc: '소상공인 대상 위치 기반 공구·장비 대여 플랫폼. 근처의 여유 장비를 찾고 빌려 쓰는 공유경제 서비스.',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      gradient: 'linear-gradient(135deg, #d97706 0%, #dc2626 100%)',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`,
      size: 'medium',
    },
    {
      id: 4,
      name: 'BARO',
      client: '영양 관리 플랫폼',
      desc: '바코드·NFC 자동인식으로 식품 정보를 즉시 분석하고, AI가 개인 맞춤 영양 계획을 제안하는 헬스케어 앱.',
      tags: ['Flutter', 'Python', 'AI/ML', 'NFC'],
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>`,
      size: 'medium',
    },
    {
      id: 5,
      name: 'BOKSE AI 챗봇',
      client: 'Demo',
      desc: '내 노션, 깃허브, 기술 블로그 데이터를 학습해 나를 대신해 답변하는 개인 맞춤형 AI 어시스턴트 데모.',
      tags: ['LangChain', 'OpenAI', 'Svelte', 'RAG'],
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M12 2v1M12 13v1M4.22 10H3M21 10h-1.22M6.34 5.34l-.71-.71M18.37 5.34l.71-.71M6.34 14.66l-.71.71M18.37 14.66l.71.71"/>
        <path d="M8 21l2-5h4l2 5"/>
      </svg>`,
      size: 'large',
    },
  ];
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
        <div
          class="project-card {project.size}"
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
          </div>
        </div>
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
    cursor: default;
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
