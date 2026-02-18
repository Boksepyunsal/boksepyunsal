<script>
  import { reveal } from '$lib/actions/reveal.js';

  const services = [
    {
      num: '01',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>`,
      title: 'MVP & Startup',
      tagline: '3주 완성 MVP 런칭',
      desc: '스타트업의 빠른 시장 검증을 위한 하이브리드 앱 개발. 핵심 기능에 집중해 최단 시간 내 실제 유저 피드백을 확보합니다.',
      techs: ['Flutter', 'Firebase', 'Supabase', 'React Native'],
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glowColor: 'rgba(59, 130, 246, 0.25)',
    },
    {
      num: '02',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M6 8h.01M9 8h6"/>
      </svg>`,
      title: 'Enterprise System',
      tagline: '대용량 트래픽/데이터 처리',
      desc: 'AWS Serverless 기반의 안정적인 SaaS 플랫폼 구축. 수십만 동시 접속도 무너지지 않는 아키텍처를 설계합니다.',
      techs: ['Next.js', 'Spring Boot', 'Rust', 'AWS'],
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glowColor: 'rgba(139, 92, 246, 0.25)',
    },
    {
      num: '03',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <circle cx="12" cy="17" r=".5" fill="currentColor"/>
      </svg>`,
      title: 'Tech Consulting',
      tagline: 'CTO급 기술 자문',
      desc: '기존 시스템 성능 최적화 및 클라우드 비용 절감 컨설팅. 기술적 의사결정에 7년 현업 경험을 더합니다.',
      techs: ['AWS Architecture', 'DevOps', 'Docker', 'K8s'],
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
      glowColor: 'rgba(16, 185, 129, 0.25)',
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
      <div class="section-label">Services</div>
      <h2 class="section-title">무엇을 만들어 드릴까요?</h2>
      <p class="section-desc">아이디어 단계부터 운영까지, 비즈니스의 모든 기술적 도전을 함께합니다.</p>
    </div>

    <div class="services-grid">
      {#each services as service, i}
        <div
          class="service-card"
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
    grid-template-columns: repeat(3, 1fr);
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

  @media (max-width: 900px) {
    .services-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .service-card { padding: 28px 24px; }
  }
</style>
