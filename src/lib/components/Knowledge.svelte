<script>
  import { reveal } from '$lib/actions/reveal.js';

  const channels = [
    {
      platform: 'YouTube',
      href: 'https://www.youtube.com/@boksepyunsal24',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>`,
      color: '#ff0000',
      bgColor: 'rgba(255, 0, 0, 0.08)',
      borderColor: 'rgba(255, 0, 0, 0.2)',
      topic: '[비전공자도 이해하는 IT]',
      desc: '현직자 관점의 커리어 조언 & 라이브 멘토링. 어려운 IT 기술을 누구나 이해할 수 있는 언어로 번역합니다.',
    },
    {
      platform: 'Instagram',
      href: 'https://www.instagram.com/bokse_coding/',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>`,
      color: '#e1306c',
      bgColor: 'rgba(225, 48, 108, 0.08)',
      borderColor: 'rgba(225, 48, 108, 0.2)',
      topic: '[1분 개발 꿀팁]',
      desc: '개발자 라이프스타일 및 생산성 도구 추천. 매일 하나씩 바로 써먹을 수 있는 팁을 공유합니다.',
    },
    {
      platform: 'Blog',
      href: 'https://iamjaeholee.github.io/',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>`,
      color: '#52b788',
      bgColor: 'rgba(82, 183, 136, 0.08)',
      borderColor: 'rgba(82, 183, 136, 0.2)',
      topic: '[기술적 난제 해결기]',
      desc: '프로젝트 트러블슈팅 & 심도 있는 아키텍처 분석. 현장에서 맞닥뜨린 실제 문제와 해결 과정을 기록합니다.',
    },
  ];

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

    <!-- 채널들 -->
    <div class="channels-grid">
      {#each channels as channel, i}
        <a
          class="channel-card"
          href={channel.href}
          target="_blank"
          rel="noopener"
          use:reveal={{ delay: i * 100 + 150 }}
          style="--color: {channel.color}; --bg: {channel.bgColor}; --border-c: {channel.borderColor}"
        >
          <div class="channel-header">
            <div class="channel-icon">
              {@html channel.icon}
            </div>
            <span class="platform-name">{channel.platform}</span>
            <svg class="external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
          <h4>{channel.topic}</h4>
          <p>{channel.desc}</p>
        </a>
      {/each}
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

  /* ---- 채널 카드 ---- */
  .channels-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .channel-card {
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border-c);
    border-radius: var(--radius-lg);
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .channel-card:hover {
    transform: translateY(-4px);
    border-color: var(--color);
    box-shadow: 0 16px 48px rgba(0,0,0,0.3);
  }

  .channel-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .channel-icon {
    width: 44px;
    height: 44px;
    background: var(--surface-2);
    border: 1px solid var(--border-c);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color);
    transition: background 0.3s, border-color 0.3s;
    flex-shrink: 0;
  }

  .channel-card:hover .channel-icon {
    border-color: var(--color);
    box-shadow: 0 0 20px color-mix(in srgb, var(--color) 30%, transparent);
  }

  .external-icon {
    margin-left: auto;
    color: var(--text-muted);
    opacity: 0;
    transition: opacity 0.2s;
    flex-shrink: 0;
  }

  .channel-card:hover .external-icon {
    opacity: 1;
  }

  .platform-name {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
  }

  .channel-card h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--color);
    margin-bottom: 10px;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .channel-card p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.75;
    margin: 0;
  }

  @media (max-width: 900px) {
    .mentor-card { flex-direction: column; gap: 20px; }
    .mentor-left { min-width: auto; }
    .channels-grid { grid-template-columns: 1fr; }
  }
</style>
