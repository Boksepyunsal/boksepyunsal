<script>
  import { reveal } from '$lib/actions/reveal.js';

  const mentor = {
    title: '코드잇(Codeit) 풀스택 부트캠프 멘토',
    period: '2024.06 ~ 현재',
    techs: ['React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL'],
    desc: '단순 에러 해결이 아닌, 현업 수준의 아키텍처 설계와 문제 해결 사고력 배양에 집중한 1:1 기술 코칭.',
  };
</script>

<section id="knowledge">
  <div class="container">
    <div class="section-header" use:reveal>
      <div class="section-label">Knowledge Sharing</div>
      <h2 class="section-title">혼자만 성장하지 않습니다</h2>
      <p class="section-desc">경험을 나누고 함께 자라는 문화를 만듭니다. 어려운 IT 기술을 비전공자도 이해할 수 있는 언어로 번역합니다.</p>
    </div>

    <!-- 멘토링 배너 -->
    <div class="mentor-card" use:reveal={{ delay: 100 }}>
      <div class="mentor-left">
        <div class="mentor-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div>
          <span class="mentor-badge">현재 진행 중</span>
          <h3>{mentor.title}</h3>
          <p class="mentor-period">{mentor.period}</p>
        </div>
      </div>
      <div class="mentor-right">
        <p>{mentor.desc}</p>
        <div class="mentor-techs">
          {#each mentor.techs as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 48px;
  }
  .section-header .section-desc { margin: 0 auto; }

  /* ---- 멘토 카드 ---- */
  .mentor-card {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    padding: 32px 36px;
    background: rgba(212, 168, 83, 0.05);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: var(--radius-lg);
    margin-bottom: 24px;
  }

  .mentor-left {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    min-width: 280px;
  }

  .mentor-icon {
    width: 56px;
    height: 56px;
    background: rgba(212, 168, 83, 0.12);
    border: 1px solid rgba(212, 168, 83, 0.25);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue-light);
    flex-shrink: 0;
  }

  .mentor-badge {
    display: inline-block;
    padding: 3px 10px;
    background: rgba(82, 183, 136, 0.15);
    border: 1px solid rgba(82, 183, 136, 0.3);
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    color: var(--purple-light);
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }

  .mentor-left h3 {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    line-height: 1.3;
    margin-bottom: 4px;
  }

  .mentor-period {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0;
  }

  .mentor-right p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.75;
    margin-bottom: 16px;
  }

  .mentor-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tech-tag {
    padding: 4px 10px;
    background: rgba(212, 168, 83, 0.08);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--blue-light);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  @media (max-width: 900px) {
    .mentor-card { flex-direction: column; gap: 20px; }
    .mentor-left { min-width: auto; }
  }
</style>
