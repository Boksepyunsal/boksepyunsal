export const projects = [
  {
    id: 1,
    slug: 'gse-wind-power',
    name: 'Gridus — 풍력발전 SaaS 플랫폼',
    client: 'GS (대기업)',
    role: '풀스택 개발 · AWS 아키텍처',
    period: '2023.06 – 2024.02',
    desc: 'GS 풍력발전 설비의 발전량 예측·계량·고객 관리를 통합한 엔터프라이즈 SaaS. Private VPC 내 AWS Lambda 마이크로서비스와 KMS 기반 암호화로 보안을 충족하고, Redux Toolkit + Google Maps로 전국 설비를 실시간 모니터링.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'AWS Lambda', 'DynamoDB', 'Cognito', 'AWS KMS', 'Google Maps'],
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>`,
    size: 'large',
    images: ['/images/projects/gse-wind-power_p1_0.png'],

    overview: '전국 풍력발전 설비를 하나의 플랫폼에서 모니터링·예측·청구하는 엔터프라이즈 SaaS입니다. GS그룹의 신재생에너지 사업 확장에 맞춰 레거시를 AWS 서버리스 마이크로서비스로 전환하고, KMS 기반 데이터 암호화로 엔터프라이즈 보안 요건을 충족했습니다.',

    stats: [
      { label: '프로젝트 규모', value: '8개월' },
      { label: '담당 역할', value: '풀스택 · AWS' },
      { label: '모니터링 시간', value: '60% 단축' },
      { label: '예측 정확도', value: '85%+' },
    ],

    problem: `GS그룹의 풍력발전 사업이 확장되면서 전국 각지의 설비를 효율적으로 모니터링하고 발전량을 예측하는 통합 시스템이 시급해졌습니다.

기존에는 설비마다 산재된 엑셀 파일과 개별 레거시 시스템으로 관리되고 있어, 실시간 발전 현황 파악에 수 시간이 걸렸습니다. 여러 팀이 각자 데이터를 집계하다 보니 수치 불일치 문제도 반복됐고, 고객사에 청구서를 발행하는 과정도 수동 작업이 많아 오류가 빈번했습니다.

민감한 에너지 계량 데이터를 클라우드로 이관하면서 엔터프라이즈 수준의 보안 요건도 충족해야 했습니다.`,

    solution: `AWS Serverless Framework로 Auth / Forecast / Meter / Customer / Security 5개 서비스를 Private VPC 내에 분리 배포했습니다. 각 서비스는 독립 배포·스케일링이 가능하며, Node.js 20.x Lambda + DynamoDB 조합으로 운영 비용을 최소화했습니다.

API Gateway V2 앞단에 Cognito Authorizer를 두어 인증을 처리하고, AWS KMS + crypto-js로 민감 데이터(계량값, 청구 정보)를 암호화해 엔터프라이즈 보안 요건을 충족했습니다. 프론트엔드는 React + TypeScript + Redux Toolkit으로 구성하고, Google Maps API로 전국 설비 위치를 지도에 시각화하며 Recharts로 실시간 발전량 트렌드를 제공합니다.`,

    techStack: {
      Frontend: ['React 18', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Google Maps API', 'TailwindCSS'],
      Backend: ['AWS Lambda (Node.js 20.x)', 'Serverless Framework', 'DynamoDB', 'Amazon Cognito', 'API Gateway V2'],
      Security: ['AWS KMS (Key Management Service)', 'crypto-js 페이로드 암호화', 'Private VPC Subnet', 'Cognito Authorizer'],
      Infra: ['S3 + CloudFront (Frontend Hosting)', 'GitHub Actions CI/CD'],
    },

    features: [
      'Google Maps API 기반 전국 설비 실시간 현황 모니터링',
      '시간대별 발전량 예측 및 실적 비교 대시보드',
      '고객사별 계약·계량·청구 통합 관리',
      'AWS KMS + crypto-js 민감 데이터 암호화',
      'Private VPC 내 5개 마이크로서비스 독립 운영',
      'Cognito RBAC 기반 역할별 접근 제어 (운영자·관리자·고객사)',
      '한국어/영어 다국어 UI',
    ],

    outcome: `설비 모니터링에 소요되던 일일 업무 시간을 60% 줄였습니다. 발전량 예측 모델 도입 후 예측 정확도 85% 이상을 달성해 에너지 판매 계획 수립에 활용되고 있습니다. AWS KMS 암호화와 Private VPC 아키텍처로 엔터프라이즈 보안 심사를 통과했고, 다국어 지원으로 GS그룹 해외 풍력 사업 확장을 위한 플랫폼 기반을 마련했습니다.`,
  },

  {
    id: 2,
    slug: 'inteco-heat-forecast',
    name: 'INTECO 열수요 예측 시스템',
    client: 'GS (대기업)',
    role: '프론트엔드 개발 · 데이터 파이프라인',
    period: '2023.01 – 2023.08',
    desc: 'AWS Athena 기반 대용량 에너지 데이터를 분석·예측하는 산업용 HOS 시스템. 대시보드·트렌드 분석·최적화·단가 관리를 통합 제공하며, ECharts로 실시간 시각화.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'ECharts', 'AWS Athena', 'Step Functions', 'Serverless'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`,
    size: 'medium',
    images: [],

    overview: '산업용 열에너지 공급망의 수요를 예측하고 최적화하는 Heat Operation System입니다. 수억 건 이상의 시계열 에너지 데이터를 실시간 분석해 운영 효율을 극대화합니다.',

    stats: [
      { label: '프로젝트 규모', value: '8개월' },
      { label: '담당 역할', value: '프론트 · 파이프라인' },
      { label: '쿼리 성능', value: '10배 향상' },
      { label: '처리 데이터', value: '수억 건+' },
    ],

    problem: `에너지 공급 최적화를 위해 수억 건의 시간별 열수요 데이터를 분석하고 미래 수요를 예측해야 했습니다. 기존 RDBMS로는 대용량 시계열 쿼리 처리에 수십 분이 걸려 운영자가 실시간 의사결정을 하기 어려웠습니다.

단가 변동, 기온·계절 패턴, 고객별 소비 성향을 종합적으로 고려한 예측이 필요했지만, 데이터가 여러 시스템에 분산되어 있어 통합 분석이 사실상 불가능했습니다.`,

    solution: `AWS Athena를 쿼리 엔진으로 채택해 S3에 저장된 대용량 데이터를 서버리스로 처리했습니다. Step Functions로 수요 예측 파이프라인(데이터 수집 → 전처리 → 모델 추론 → 결과 저장)을 오케스트레이션했습니다.

프론트엔드는 React + Vite + TailwindCSS로 빠른 개발·빌드 속도를 확보하고, ECharts를 활용해 수천 개 포인트의 시계열 데이터를 부드럽게 렌더링했습니다. 대시보드, 트렌드 분석, 최적화 시뮬레이션, 단가 관리 4개 주요 모듈로 구성했습니다.`,

    techStack: {
      Frontend: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'ECharts'],
      Backend: ['AWS Athena', 'AWS Step Functions', 'Lambda', 'S3', 'Serverless Framework'],
      Infra: ['AWS Glue', 'CloudFormation', 'CloudWatch', 'GitHub Actions'],
    },

    features: [
      '실시간 열수요 모니터링 대시보드',
      'AI 기반 시간별·일별·월별 수요 예측',
      'ECharts 기반 대용량 시계열 데이터 시각화',
      '에너지 공급 최적화 시뮬레이션',
      '단가 이력 관리 및 비용 분석',
      'Step Functions 기반 자동화 예측 파이프라인',
    ],

    outcome: `AWS Athena 도입으로 기존 수십 분 걸리던 데이터 쿼리를 수 초 내로 단축해 약 10배 성능을 향상시켰습니다. 실시간 수요 예측 기반 공급 최적화로 에너지 운영 효율이 개선되었고, 운영팀의 의사결정 속도가 크게 빨라졌습니다.`,
  },

  {
    id: 3,
    slug: 'gse-ai-chatbot',
    name: '사내 업무 지원 생성형 AI 챗봇',
    client: 'GS (기업 내부용)',
    role: 'AI 엔지니어링 · 백엔드 개발',
    period: '2024.01 – 2024.06',
    desc: 'AWS Bedrock(Claude 3.5 Sonnet) + OpenSearch 기반 RAG 챗봇. LangGraph 에이전트가 사내 지식베이스를 하이브리드 검색하고, 관리자 대시보드에서 AI 성능과 사용자 피드백을 실시간 모니터링.',
    tags: ['AWS Bedrock', 'Claude 3.5 Sonnet', 'LangGraph', 'OpenSearch', 'RAG', 'DynamoDB', 'Python', 'CloudFront'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <circle cx="9" cy="10" r="1" fill="currentColor"/>
      <circle cx="12" cy="10" r="1" fill="currentColor"/>
      <circle cx="15" cy="10" r="1" fill="currentColor"/>
    </svg>`,
    size: 'medium',
    images: ['/images/projects/gse-ai-chatbot_p1_0.jpeg', '/images/projects/gse-ai-chatbot_p2_0.png'],

    overview: '수천 건의 사내 문서·정책·규정을 자연어로 검색하고 출처와 함께 답변하는 생성형 AI 챗봇입니다. LangGraph 에이전트가 하이브리드 검색으로 정확도를 높이고, 관리자 대시보드에서 쿼리 수·정확도·응답 시간을 실시간 모니터링할 수 있습니다.',

    stats: [
      { label: '프로젝트 규모', value: '6개월' },
      { label: '담당 역할', value: 'AI 엔지니어링' },
      { label: '검색 시간', value: '70% 단축' },
      { label: '사용자 만족도', value: '4.2 / 5.0' },
    ],

    problem: `수천 건의 사내 문서와 정책, 규정 가이드를 직원들이 매번 포털에서 검색하고 읽는 데 많은 시간이 낭비됐습니다. 기존 키워드 검색은 정확한 문서 제목을 알아야 동작했고, "재택근무 경비 정산 기준은?" 같은 복합적인 업무 질문에는 답변이 어려웠습니다.

HR, 법무, 재무 등 부서별로 문서 시스템이 달라 통합 검색 자체가 불가능한 상황이었습니다. AI가 잘못된 정보를 생성(할루시네이션)할 경우 업무 오류로 이어질 수 있어 신뢰성과 출처 추적이 핵심 요건이었습니다.`,

    solution: `AWS Bedrock의 Claude 3.5 Sonnet과 OpenSearch Serverless를 결합한 RAG 파이프라인을 구축했습니다. LangGraph 에이전트가 사용자 질문을 분석해 벡터 검색 + 키워드 검색을 병행하는 하이브리드 방식으로 검색 정확도를 높였습니다.

답변에는 출처 문서와 페이지를 인용해 할루시네이션 리스크를 최소화했습니다. Bedrock Titan Embeddings로 임베딩을 생성하고, DynamoDB로 대화 이력을 저장해 멀티턴 컨텍스트를 유지합니다. React 기반 관리자 대시보드에서 쿼리 수·정확도·응답 시간을 실시간 모니터링하고, Human-in-the-loop 피드백(👍/👎)으로 AI 품질을 지속 개선합니다.`,

    techStack: {
      'AI / RAG': ['AWS Bedrock (Claude 3.5 Sonnet)', 'Bedrock Titan Embeddings', 'LangGraph', 'OpenSearch Serverless (하이브리드 검색)'],
      Backend: ['Python', 'AWS Lambda', 'DynamoDB (대화 이력)', 'API Gateway', 'AWS CDK'],
      Frontend: ['React', 'TypeScript', 'CloudFront + S3', 'Cognito (SSO/Auth)'],
      Infra: ['RAG Admin Dashboard', 'Serverless Framework', 'GitHub Actions'],
    },

    features: [
      'LangGraph 에이전트 기반 하이브리드 RAG 검색 (벡터 + 키워드)',
      '출처 문서·페이지 인용으로 할루시네이션 방지',
      'DynamoDB 기반 멀티턴 대화 컨텍스트 유지',
      'RAG Admin Dashboard — 쿼리 수·정확도·응답 시간 실시간 모니터링',
      'Human-in-the-loop 피드백 시스템 (👍/👎 + 코멘트)',
      'Cognito SSO 기반 사내 인증 통합',
      '부서별 문서 소스 통합 인덱싱',
    ],

    outcome: `직원 평균 정보 검색 시간을 70% 단축했습니다. 출시 2개월 만에 전체 임직원의 40%가 주 1회 이상 사용하는 핵심 업무 도구로 자리잡았고, 사용자 만족도 조사에서 5점 만점 중 4.2점을 달성했습니다. Human-in-the-loop 피드백 루프로 출시 이후에도 정확도를 지속 개선하고 있습니다.`,
  },

  {
    id: 4,
    slug: 'gonggumoa',
    name: '공구모아 — 소상공인 공동구매 플랫폼',
    client: 'Startup',
    role: '풀스택 개발 · AWS 서버리스 아키텍처',
    period: '2024',
    desc: '소상공인과 소비자가 식품·생필품을 공동구매해 마트에서 QR 코드로 픽업하는 O2O 플랫폼. MVP를 단 24시간 만에 구축. Next.js + AWS Serverless 모노레포, Shadcn/UI.',
    tags: ['Next.js', 'TypeScript', 'Serverless', 'AWS Lambda', 'DynamoDB', 'S3', 'Shadcn/UI', 'TailwindCSS'],
    gradient: 'linear-gradient(135deg, #d97706 0%, #dc2626 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>`,
    size: 'medium',
    images: ['/images/projects/gonggumoa_p1_0.jpeg', '/images/projects/gonggumoa_p2_0.jpeg'],
    links: [{ label: '데모 사이트', href: 'https://09moa.biz' }],

    overview: '소상공인과 소비자가 식품·생필품을 공동구매해 마트 픽업 포인트에서 QR 코드로 수령하는 O2O 플랫폼입니다. 아이디어 기획부터 MVP 배포까지 단 24시간 만에 완성했으며, Next.js + AWS Serverless 모노레포로 프론트엔드와 백엔드를 단일 레포에서 관리합니다.',

    stats: [
      { label: 'MVP 개발 기간', value: '24시간' },
      { label: '담당 역할', value: '풀스택 · AWS' },
      { label: '아키텍처', value: '완전 서버리스' },
      { label: '데모', value: '09moa.biz' },
    ],

    problem: `소상공인들은 대량 구매 시 할인 혜택을 받기 어렵고, 공동구매를 조직하는 과정이 카카오톡 단체방에서 수동으로 이루어져 관리가 번거롭고 비효율적이었습니다.

기존 공동구매 플랫폼은 배송 중심으로 설계되어, 가까운 마트에서 바로 픽업하고 싶은 소비자 수요를 충족시키지 못했습니다. 별도 앱을 설치해야 한다는 진입 장벽도 사용자 채택에 불리하게 작용했습니다.`,

    solution: `Next.js App Router 기반 웹 플랫폼으로 구축해 앱 설치 없이 누구나 접근 가능하게 했습니다. QR 코드 픽업 시스템으로 마트 현장에서 간편하게 수령하고, 관리자는 태블릿·PC에서 매장 정보와 주문 현황을 실시간 관리할 수 있습니다.

백엔드는 Serverless Framework + AWS Lambda + DynamoDB로 완전 서버리스 설계하고, S3에 상품 이미지를 저장했습니다. Shadcn/UI + TailwindCSS로 24시간 안에 완성도 높은 UI를 빠르게 구성하고, pnpm 모노레포로 프론트·백엔드를 통합 관리했습니다.`,

    techStack: {
      Frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI'],
      Backend: ['AWS Lambda', 'Serverless Framework', 'DynamoDB', 'S3 (이미지 저장)'],
      Infra: ['pnpm Monorepo', 'GitHub Actions CI/CD', 'serverless-offline (로컬 개발)'],
    },

    features: [
      '상품 등록·검색·장바구니·결제 전체 플로우',
      'QR 코드 기반 마트 현장 픽업 시스템',
      '관리자 대시보드 — 매장 정보·주문 현황 실시간 관리',
      'AWS Lambda 서버리스 API',
      'S3 상품 이미지 저장·서빙',
      '단 24시간 내 기획·개발·배포 완료',
    ],

    outcome: `아이디어 기획부터 MVP 배포까지 단 24시간 만에 완성한 프로젝트입니다. 완전 서버리스 아키텍처로 초기 인프라 비용을 최소화하고, Shadcn/UI 활용으로 짧은 시간에 프로덕션 수준의 UI를 구현했습니다. 현재 https://09moa.biz에서 데모를 확인할 수 있습니다.`,
  },

  {
    id: 5,
    slug: 'baro',
    name: 'FitB — 개인 맞춤 건강 영양 앱',
    client: 'PurpleMoon Project Group',
    role: '풀스택 개발 · 인프라 구축',
    period: '2023.04 – 2023.10',
    desc: '"당신을 위한 건강 영양 비서" FitB. 칼로리 목표 설정·식단 기록·커뮤니티를 하나의 앱에서 제공하며 App Store·Google Play 출시. Flutter + BLoC, Spring Boot + GraphQL, Terraform IaC.',
    tags: ['Flutter', 'BLoC', 'Java', 'Spring Boot', 'GraphQL', 'PostgreSQL', 'Terraform', 'AWS'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`,
    size: 'medium',
    images: ['/images/projects/baro_p1_0.jpeg', '/images/projects/baro_p2_0.jpeg'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/%ED%94%BC%ED%8A%B8%EB%B9%84/id6736431755' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.purplemoonpjt.baro' },
    ],

    overview: '"당신을 위한 건강 영양 비서" FitB는 칼로리 목표 설정, 식단 기록, 영양 분석, 커뮤니티를 하나의 앱에서 제공하는 헬스케어 플랫폼입니다. Flutter BLoC 기반 모바일 앱과 Spring Boot GraphQL 서버를 Terraform + AWS로 배포하고, App Store·Google Play에 출시했습니다.',

    stats: [
      { label: '프로젝트 규모', value: '6개월' },
      { label: '담당 역할', value: '풀스택 · 인프라' },
      { label: '출시 플랫폼', value: 'App Store + Play Store' },
      { label: '인프라', value: 'IaC (Terraform)' },
    ],

    problem: `건강 관리에 관심은 있지만 매 끼니마다 칼로리와 영양소를 직접 검색하고 입력하는 과정이 번거로워 대부분의 사람들이 며칠 만에 포기합니다.

기존 앱들은 식품 검색 UX가 불편하고 영양 분석을 단순 숫자 나열에 그쳐 개선 방향을 파악하기 어려웠습니다. 혼자 건강 관리를 이어가기 어려운 사용자를 위한 커뮤니티·동기부여 기능도 부족했습니다. 백엔드 REST API의 오버패칭 문제도 모바일 성능에 영향을 줬습니다.`,

    solution: `Flutter + BLoC 패턴으로 상태 관리를 명확히 분리하고, fl_chart와 table_calendar로 직관적인 칼로리 목표·영양 분석 UI를 구현했습니다. 사용자 유형(다이어터·트레이너 등)에 맞춘 개인화 경험과, 식단 공유·레시피 추천·건강 팁 교류 커뮤니티로 지속적인 동기부여를 지원합니다.

Google/Apple 소셜 로그인으로 진입 장벽을 낮추고, graphql_flutter로 필요한 데이터만 정확히 요청해 오버패칭 문제를 해결했습니다. 백엔드는 Java 17 + Spring Boot 3 + GraphQL로 타입 안전한 API를 설계하고, Terraform으로 AWS 인프라를 코드화해 재현 가능한 배포를 보장했습니다.`,

    techStack: {
      'Mobile App': ['Flutter', 'Dart', 'BLoC 패턴', 'graphql_flutter', 'fl_chart', 'table_calendar'],
      'Auth / Social': ['Google Sign-In', 'Sign in with Apple', 'Spring Security OAuth2'],
      Backend: ['Java 17', 'Spring Boot 3.3', 'GraphQL', 'JPA', 'PostgreSQL'],
      Infra: ['Docker', 'Terraform', 'AWS EC2', 'GitHub Actions'],
    },

    features: [
      '칼로리 목표 설정 및 일·주·월 단위 영양 분석 (fl_chart)',
      '식단 기록 + 캘린더 기반 이력 관리 (table_calendar)',
      '커뮤니티 — 식단 공유·레시피 추천·건강 팁 교류',
      '사용자 유형(다이어터/트레이너) 맞춤 개인화',
      'Google / Apple 소셜 로그인',
      'GraphQL API로 오버패칭 없는 데이터 통신',
      'Terraform IaC 기반 AWS 인프라 자동 프로비저닝',
    ],

    outcome: `App Store와 Google Play 양쪽 스토어에 출시하는 데 성공했습니다. GraphQL 도입으로 REST 대비 불필요한 데이터 전송을 제거해 모바일 성능을 개선했습니다. 커뮤니티 기능 도입으로 사용자 리텐션을 높이고, Terraform으로 인프라를 코드화해 환경 재구성 시간을 단축했습니다.`,
  },

  {
    id: 6,
    slug: 'bokse-ai',
    name: 'BOKSE AI — 기업용 RAG 문서 어시스턴트',
    client: 'Self / Demo',
    role: 'AI 엔지니어링 · 풀스택 개발',
    period: '2024',
    desc: '단 하루 만에 구축한 RAG SaaS 데모. PDF·Excel·Word 문서를 업로드하면 AI가 즉시 학습해 자연어로 질의응답. 기업 데이터가 외부로 나가지 않는 데이터 주권 아키텍처.',
    tags: ['Next.js', 'TypeScript', 'LangChain', 'OpenAI', 'Supabase', 'pgvector', 'RAG', 'Shadcn/UI'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="8" r="5"/>
      <path d="M12 2v1M12 13v1M4.22 10H3M21 10h-1.22M6.34 5.34l-.71-.71M18.37 5.34l.71-.71M6.34 14.66l-.71.71M18.37 14.66l.71.71"/>
      <path d="M8 21l2-5h4l2 5"/>
    </svg>`,
    size: 'large',
    images: ['/images/projects/bokse-ai_p1_0.jpeg'],
    links: [{ label: '데모 사이트', href: 'https://bokse.xyz/' }],

    overview: '기업 내부 문서(PDF·XLS·DOC)를 업로드하면 AI가 즉시 학습해 자연어 질의응답을 제공하는 RAG SaaS입니다. 단 하루 만에 구축해 클라이언트 미팅에서 즉석 데모로 활용하며, 기업 데이터가 외부 서버를 거치지 않는 데이터 주권 아키텍처를 채택했습니다.',

    stats: [
      { label: '개발 기간', value: '단 하루' },
      { label: '담당 역할', value: 'AI · 풀스택' },
      { label: '지원 형식', value: 'PDF · XLS · DOC' },
      { label: '벡터 DB', value: 'Supabase pgvector' },
    ],

    problem: `기업 내부 문서, 제품 매뉴얼, 법률 계약서 등 방대한 문서를 직원이나 사용자가 직접 읽고 필요한 내용을 찾는 데 많은 시간이 낭비됩니다.

ChatGPT에 문서를 복붙하는 방식은 기업 기밀이 외부 서버로 전송되는 보안 리스크가 있고, 컨텍스트 길이 한계로 대용량 문서 처리가 어렵습니다. 고객사에게 AI 도입의 가능성을 직접 체험시켜 줄 수 있는 즉석 데모 도구가 필요했습니다.`,

    solution: `Next.js App Router로 파일 관리 UI와 채팅 인터페이스를 단일 풀스택 앱으로 구현했습니다. LangChain으로 PDF·XLS·DOC 파싱 → 청킹 → OpenAI 임베딩 → Supabase pgvector 저장 파이프라인을 자동화했습니다.

질의 시 pgvector 유사도 검색으로 관련 청크를 찾아 OpenAI에 컨텍스트로 전달하는 RAG 방식으로 할루시네이션을 최소화했습니다. 모든 데이터는 클라이언트 소유의 Supabase 인스턴스에만 저장되는 데이터 주권 아키텍처로 기업 고객의 보안 우려를 해소했습니다.`,

    techStack: {
      'AI / RAG': ['LangChain', 'OpenAI (GPT + Embeddings)', 'Supabase pgvector', 'pdf-parse'],
      Frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI'],
      Backend: ['Next.js API Routes', 'Supabase (DB + 벡터 스토어)'],
    },

    features: [
      'PDF · Excel · Word 문서 업로드 및 자동 임베딩',
      'LangChain RAG 기반 자연어 문서 질의응답',
      '할루시네이션 최소화 — 출처 청크 기반 답변 생성',
      '데이터 주권 아키텍처 — 기업 데이터가 외부 서버로 전송되지 않음',
      '파일 관리 대시보드 (Your Files · History)',
      '단 하루 만에 기획·개발·배포 완료',
    ],

    outcome: `단 하루 만에 완성한 이 RAG 데모는 클라이언트 미팅에서 AI 도입 가능성을 즉석에서 보여주는 핵심 레퍼런스로 활용됐습니다. 데이터 주권 아키텍처와 빠른 구현 능력이 호응을 얻어, GS 사내 AI 챗봇(AWS Bedrock + OpenSearch) 프로젝트를 수주하는 데 직접적인 발판이 됐습니다.`,
  },
];
