<script>
  import { reveal } from '$lib/actions/reveal.js';

  const services = [
    {
      num: '01',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      title: '웹 애플리케이션 개발',
      tagline: 'React · Next.js · SvelteKit',
      desc: '사용자 경험을 중심으로 한 웹 애플리케이션을 개발합니다. Serverless 아키텍처와 Edge 배포를 기본으로, 빠르고 가볍게 — 탄소 발자국이 적은 웹을 만듭니다.',
      techs: ['React', 'Next.js', 'SvelteKit', 'TypeScript', 'Serverless', 'Edge Deploy'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      glowColor: 'rgba(6, 182, 212, 0.25)',
    },
    {
      num: '02',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>`,
      title: '모바일 앱 개발',
      tagline: 'React Native · Flutter',
      desc: 'iOS · Android 크로스플랫폼 앱을 개발합니다. 하나의 코드베이스로 두 플랫폼을 동시에 지원해 개발 리소스를 최소화하고, 배터리·데이터 효율을 고려한 경량 앱을 만듭니다.',
      techs: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android'],
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      glowColor: 'rgba(16, 185, 129, 0.25)',
    },
    {
      num: '03',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <line x1="12" y1="13" x2="12" y2="20"/>
        <polyline points="9 16 12 13 15 16"/>
      </svg>`,
      title: '클라우드 인프라 · Serverless',
      tagline: 'AWS · Terraform · 리소스 최적화',
      desc: '필요한 만큼만 쓰는 인프라를 설계합니다. Serverless와 오토스케일링으로 유휴 자원을 없애고, Terraform IaC로 재현 가능한 환경을 구성합니다. 비용과 탄소를 동시에 줄입니다.',
      techs: ['AWS Lambda', 'Serverless', 'Terraform', 'ECS / EKS', 'CloudFormation'],
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      glowColor: 'rgba(245, 158, 11, 0.25)',
    },
    {
      num: '04',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="19" y1="12" x2="5" y2="12"/>
      </svg>`,
      title: 'CI/CD & 자동화',
      tagline: '코드 커밋부터 자동 배포까지',
      desc: 'GitHub Actions 기반 CI/CD 파이프라인으로 배포를 완전 자동화합니다. 반복 작업을 없애고 개발자가 코드에 집중할 수 있는 환경을 만듭니다.',
      techs: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Docker', 'Helm'],
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glowColor: 'rgba(139, 92, 246, 0.25)',
    },
    {
      num: '05',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>`,
      title: 'AI · LLM 서비스 개발',
      tagline: 'RAG · 챗봇 · 자동화 에이전트',
      desc: 'AWS Bedrock · OpenAI 기반 AI 기능을 서비스에 통합합니다. RAG 파이프라인으로 사내 데이터를 학습시켜 챗봇·자동화 에이전트를 구축하고, 효율적인 프롬프트 설계로 API 비용과 연산량을 최소화합니다.',
      techs: ['AWS Bedrock', 'OpenAI API', 'LangGraph', 'RAG Pipeline', 'pgvector'],
      gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
      glowColor: 'rgba(124, 58, 237, 0.25)',
    },
  ];

  let hoveredIndex = -1;

  function handleMouseMove(e, i) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    hoveredIndex = i;
  }

  function handleMouseLeave(e) {
    e.currentTarget.style.transform = '';
    hoveredIndex = -1;
  }
</script>

<section id="services">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Services · 기여하는 방법</div>
      <h2 class="section-title">웹, 모바일, 클라우드까지<br />리소스 최적화로 만듭니다</h2>
      <p class="section-desc">웹 애플리케이션부터 모바일 앱, 클라우드 인프라까지 — 낭비 없는 개발로 더 빠르고 더 친환경적인 서비스를 만듭니다.</p>
    </div>

    <div class="services-grid">
      {#each services as service, i}
        <div
          class="service-card"
          class:featured={service.featured}
          role="presentation"
          use:reveal={{ delay: i * 120 }}
          on:mousemove={(e) => handleMouseMove(e, i)}
          on:mouseleave={handleMouseLeave}
          style="--glow: {service.glowColor}"
        >
          <!-- 배경 그라디언트 (hover 시 나타남) -->
          <div class="card-bg" style="background: {service.gradient}"></div>

          <!-- 아이콘 -->
          <div class="service-icon" style="background: {service.gradient}">
            {@html service.icon}
          </div>

          <!-- 번호 -->
          <span class="service-num">{service.num}</span>

          <!-- 내용 -->
          <h3>{service.title}</h3>
          <p class="tagline">{service.tagline}</p>
          <p class="desc">{service.desc}</p>

          <!-- 기술 스택 -->
          <div class="tech-chips">
            {#each service.techs as tech}
              <span class="chip">{tech}</span>
            {/each}
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

  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .service-card {
    position: relative;
    padding: 36px 32px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.15s;
    cursor: default;
  }

  .service-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 0 60px var(--glow), 0 20px 60px rgba(0,0,0,0.4);
  }

  .card-bg {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.4s;
    z-index: 0;
  }

  .service-card:hover .card-bg {
    opacity: 0.06;
  }

  .service-icon {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .service-num {
    position: absolute;
    top: 28px;
    right: 28px;
    font-size: 13px;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.05em;
    z-index: 1;
  }

  h3 {
    position: relative;
    z-index: 1;
    font-size: 22px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }

  .tagline {
    position: relative;
    z-index: 1;
    font-size: 13px;
    font-weight: 600;
    color: var(--blue-light);
    margin-bottom: 14px;
    letter-spacing: 0.02em;
  }

  .desc {
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.75;
    margin-bottom: 24px;
  }

  .tech-chips {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .chip {
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  @media (max-width: 680px) {
    .services-grid { grid-template-columns: 1fr; }
    .service-card { padding: 28px 24px; }
  }
</style>
