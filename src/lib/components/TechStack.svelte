<script>
  import { reveal } from '$lib/actions/reveal.js';

  const stacks = [
    {
      category: 'Cloud & AWS',
      color: '#f59e0b',
      items: ['Amazon EKS', 'AWS Lambda', 'AWS Bedrock', 'AWS CDK', 'AWS KMS', 'CloudFront', 'S3', 'RDS', 'DynamoDB', 'SQS', 'API Gateway', 'Cognito'],
    },
    {
      category: 'Container & K8s',
      color: '#3b82f6',
      items: ['Kubernetes', 'Docker', 'Amazon EKS', 'Helm', 'ArgoCD', 'Istio', 'containerd', 'Ingress Nginx', 'Kustomize'],
    },
    {
      category: 'IaC & DevOps',
      color: '#10b981',
      items: ['Terraform', 'AWS CDK', 'GitHub Actions', 'Prometheus', 'Grafana', 'Datadog', 'Serverless Framework', 'GitLab CI'],
    },
    {
      category: 'App Dev',
      color: '#8b5cf6',
      items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Python', 'FastAPI', 'Flutter', 'TypeScript', 'GraphQL'],
    },
  ];
</script>

<section id="techstack">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Tech Stack</div>
      <h2 class="section-title">엔터프라이즈급 클라우드 스택</h2>
      <p class="section-desc">AWS 공인 아키텍트 · CKA 자격증을 바탕으로 엔터프라이즈 환경에서 검증된 AWS · Kubernetes 생태계 기술을 활용합니다.</p>
    </div>
  </div>

  <!-- 풀 와이드 마퀴 -->
  <div class="marquee-wrapper" use:reveal={{ delay: 100 }}>
    {#each stacks as stack, i}
      <div class="marquee-row" style="--color: {stack.color}; --dir: {i % 2 === 0 ? 'normal' : 'reverse'}">
        <span class="category-label">{stack.category}</span>
        <div class="marquee-track">
          <div class="marquee-inner">
            {#each [...stack.items, ...stack.items, ...stack.items] as item}
              <span class="tech-badge">{item}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  .section-header .section-desc { margin: 0 auto; }

  .marquee-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: hidden;
  }

  .marquee-row {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .category-label {
    flex-shrink: 0;
    width: 130px;
    text-align: right;
    font-size: 12px;
    font-weight: 700;
    color: var(--color);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0 20px 0 24px;
  }

  .marquee-track {
    flex: 1;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
  }

  .marquee-inner {
    display: flex;
    gap: 10px;
    width: max-content;
    animation: marquee 30s linear infinite;
    animation-direction: var(--dir);
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-33.333%); }
  }

  .tech-badge {
    display: inline-flex;
    align-items: center;
    padding: 10px 18px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    white-space: nowrap;
    transition: border-color 0.2s, color 0.2s;
    cursor: default;
  }

  .tech-badge:hover {
    border-color: var(--color);
    color: var(--text);
  }

  @media (max-width: 768px) {
    .category-label {
      width: 80px;
      font-size: 10px;
      padding: 0 12px 0 16px;
    }
    .tech-badge {
      padding: 8px 14px;
      font-size: 12px;
    }
  }
</style>
