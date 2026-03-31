<script>
  import { reveal } from '$lib/actions/reveal.js';

  const services = [
    {
      num: '01',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <line x1="12" y1="13" x2="12" y2="20"/>
        <polyline points="9 16 12 13 15 16"/>
      </svg>`,
      title: '클라우드 마이그레이션',
      tagline: 'Terraform 기반 무중단 전환',
      desc: '온프레미스·레거시 시스템을 AWS로 안전하게 이전합니다. Terraform IaC로 인프라를 코드화해 재현 가능한 환경을 구성하고, Well-Architected 기반으로 가용성·보안·비용 효율을 동시에 달성합니다.',
      techs: ['Terraform', 'AWS CDK', 'Amazon ECS / EKS', 'CloudFormation'],
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      glowColor: 'rgba(245, 158, 11, 0.25)',
    },
    {
      num: '02',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>`,
      title: 'Kubernetes 인프라',
      tagline: 'EKS · 직접 구축 · Terraform',
      desc: 'CKA 자격증 보유 전문가가 Amazon EKS 또는 베어메탈 K8s 클러스터를 구축합니다. Terraform으로 클러스터를 프로비저닝하고, ArgoCD GitOps로 선언적 배포 환경까지 완성합니다.',
      techs: ['Kubernetes (EKS · 직접 구축)', 'Terraform', 'ArgoCD', 'Helm'],
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glowColor: 'rgba(59, 130, 246, 0.25)',
    },
    {
      num: '03',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="19" y1="12" x2="5" y2="12"/>
      </svg>`,
      title: 'CI/CD & GitOps',
      tagline: '코드 커밋부터 자동 배포까지',
      desc: 'GitHub Actions · GitLab CI 기반 CI/CD 파이프라인과 ArgoCD GitOps 환경을 구축합니다. 코드 커밋부터 프로덕션 배포까지 완전 자동화해 배포 리스크와 반복 작업을 제거합니다.',
      techs: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Helm'],
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glowColor: 'rgba(139, 92, 246, 0.25)',
    },
    {
      num: '04',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>`,
      title: '모니터링 & 비용 최적화',
      tagline: '장애 전에 먼저 알아냅니다',
      desc: 'Prometheus + Grafana 또는 Datadog으로 클라우드·K8s 환경의 메트릭·로그·알림 시스템을 구축합니다. AWS 비용 구조 분석과 Reserved Instance, Savings Plans 최적화로 지출도 절감합니다.',
      techs: ['Prometheus', 'Grafana', 'Datadog', 'AWS Cost Explorer'],
      gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
      glowColor: 'rgba(6, 182, 212, 0.25)',
    },
    {
      num: '05',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>`,
      title: '클라우드 LLM / RAG 서비스',
      tagline: 'AWS Bedrock · OpenSearch 기반 엔터프라이즈 AI',
      desc: 'AWS Bedrock(Claude · Llama)과 OpenSearch 또는 pgvector 기반 RAG 파이프라인을 클라우드 위에 구축합니다. 기업 문서·사내 데이터를 학습시켜 AI 어시스턴트, 고객 챗봇, 자동화 에이전트로 활용하세요. LangGraph 에이전트와 데이터 주권 아키텍처로 보안·규정 준수도 충족합니다.',
      techs: ['AWS Bedrock', 'OpenSearch (하이브리드 검색)', 'LangGraph', 'pgvector', 'Titan Embeddings', 'RAG Pipeline'],
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
      <h2 class="section-title">리소스 최적화,<br />이렇게 실현합니다</h2>
      <p class="section-desc">Serverless, 오토스케일링, IaC — 낭비를 없애고 효율을 높이는 기술로 기후친화적인 서비스를 만듭니다.</p>
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
