export const projects = [
  {
    id: 1,
    slug: 'gse-wind-power',
    name: 'GS 풍력발전 SaaS 플랫폼',
    client: 'GS (대기업)',
    role: '풀스택 개발 · AWS 아키텍처',
    period: '2023.06 – 2024.02',
    desc: '풍력발전 설비의 발전량 예측·계량·고객 관리를 통합한 엔터프라이즈 SaaS. AWS Serverless Compose로 도메인별 마이크로서비스를 구성하고, 구글 지도 기반 설비 모니터링 및 다국어(i18n) UI 제공.',
    tags: ['React', 'TypeScript', 'AWS Lambda', 'Serverless', 'DynamoDB', 'Cognito', 'Google Maps', 'Recharts'],
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>`,
    size: 'large',

    overview: '전국 풍력발전 설비를 하나의 플랫폼에서 모니터링·예측·청구하는 엔터프라이즈 SaaS입니다. GS그룹의 신재생에너지 사업 확장에 맞춰 기존 레거시 시스템을 클라우드 네이티브 아키텍처로 전환했습니다.',

    stats: [
      { label: '프로젝트 규모', value: '8개월' },
      { label: '담당 역할', value: '풀스택 · AWS' },
      { label: '설비 모니터링', value: '60% 시간 단축' },
      { label: '예측 정확도', value: '85%+' },
    ],

    problem: `GS그룹의 풍력발전 사업이 확장되면서 전국 각지의 설비를 효율적으로 모니터링하고 발전량을 예측하는 통합 시스템이 시급해졌습니다.

기존에는 설비마다 산재된 엑셀 파일과 개별 레거시 시스템으로 관리되고 있어, 실시간 발전 현황 파악에 수 시간이 걸렸습니다. 여러 팀이 각자 데이터를 집계하다 보니 수치 불일치 문제도 반복됐고, 고객사에 청구서를 발행하는 과정도 수동 작업이 많아 오류가 빈번했습니다.`,

    solution: `AWS Serverless Compose로 도메인(설비 관리 / 발전량 / 고객·청구)을 분리한 마이크로서비스 아키텍처를 설계했습니다. 각 서비스는 독립 배포·스케일링이 가능하며, Lambda + DynamoDB 조합으로 운영 비용을 최소화했습니다.

프론트엔드는 React + TypeScript로 구성하고, Amazon Cognito 기반 RBAC으로 운영자·관리자·고객사별 접근 권한을 제어했습니다. Google Maps API로 전국 설비 위치를 지도에 시각화하고, Recharts로 실시간 발전량 트렌드를 제공했습니다. 다국어(한/영) i18n으로 해외 파트너 접근도 지원합니다.`,

    techStack: {
      Frontend: ['React 18', 'TypeScript', 'Recharts', 'Google Maps API', 'i18next'],
      Backend: ['AWS Lambda', 'Serverless Compose', 'DynamoDB', 'Amazon Cognito', 'API Gateway'],
      Infra: ['AWS CDK', 'CloudWatch', 'S3 + CloudFront', 'GitHub Actions CI/CD'],
    },

    features: [
      '구글 지도 기반 전국 설비 실시간 현황 모니터링',
      '시간대별 발전량 예측 및 실적 비교 대시보드',
      '고객사별 계약·계량·청구 통합 관리',
      'Cognito RBAC 기반 역할별 접근 제어',
      '한국어/영어 다국어 UI',
      'Recharts 기반 대용량 시계열 데이터 시각화',
    ],

    outcome: `설비 모니터링에 소요되던 일일 업무 시간을 60% 줄였습니다. 발전량 예측 모델 도입 후 예측 정확도 85% 이상을 달성해 에너지 판매 계획 수립에 활용되고 있습니다. 다국어 지원으로 GS그룹 해외 풍력 사업 확장을 위한 플랫폼 기반을 마련했습니다.`,
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
    desc: 'AWS Bedrock(Claude 3) + OpenSearch 기반 Agentic RAG 챗봇. MS Teams App 연동으로 사내 지식베이스를 대화형으로 검색하고, LangSmith로 LLM 품질을 모니터링.',
    tags: ['AWS Bedrock', 'Claude 3', 'Python', 'LangChain', 'OpenSearch', 'RAG', 'AWS CDK', 'Serverless'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <circle cx="9" cy="10" r="1" fill="currentColor"/>
      <circle cx="12" cy="10" r="1" fill="currentColor"/>
      <circle cx="15" cy="10" r="1" fill="currentColor"/>
    </svg>`,
    size: 'medium',

    overview: '수천 건의 사내 문서·정책·프로세스를 자연어로 검색하고 답변하는 생성형 AI 챗봇입니다. MS Teams에 내장돼 직원들이 별도 로그인 없이 즉시 사용할 수 있습니다.',

    stats: [
      { label: '프로젝트 규모', value: '6개월' },
      { label: '담당 역할', value: 'AI 엔지니어링' },
      { label: '검색 시간', value: '70% 단축' },
      { label: '사용자 만족도', value: '4.2 / 5.0' },
    ],

    problem: `수천 건의 사내 문서와 정책, 프로세스 가이드를 직원들이 매번 포털에서 검색하고 읽는 데 많은 시간이 낭비됐습니다. 기존 키워드 검색은 정확한 문서 제목을 알아야 동작했고, 복잡한 업무 질문("휴가 신청 이후 팀장 승인은 며칠 이내에 해야 하나요?")에는 답변이 어려웠습니다.

HR, 법무, 재무 등 부서별로 문서 시스템이 달라 통합 검색 자체가 불가능한 상황이었습니다.`,

    solution: `AWS Bedrock의 Claude 3 모델과 OpenSearch를 결합한 Agentic RAG 파이프라인을 구축했습니다. 문서 수집 → 청킹 → 임베딩 → OpenSearch 인덱싱 자동화 파이프라인을 AWS CDK로 코드화했습니다.

LangChain 에이전트가 질문을 분석해 필요한 문서를 검색하고, Claude 3가 맥락을 이해해 자연스러운 답변을 생성합니다. 답변에는 출처 문서와 링크를 함께 표시해 신뢰성을 높였습니다. MS Teams Bot Framework로 연동해 사용자 채택률을 극대화했고, LangSmith로 LLM 응답 품질을 지속 모니터링합니다.`,

    techStack: {
      'AI / ML': ['AWS Bedrock (Claude 3)', 'LangChain', 'OpenSearch (벡터 DB)', 'LangSmith'],
      Backend: ['Python', 'FastAPI', 'AWS Lambda', 'AWS CDK', 'Serverless Framework'],
      Infra: ['MS Teams Bot Framework', 'S3', 'CloudWatch', 'EventBridge'],
    },

    features: [
      'Agentic RAG 기반 자연어 문서 검색·답변',
      'MS Teams 네이티브 챗봇 통합',
      '멀티턴 대화 컨텍스트 유지',
      '출처 문서 인용 및 링크 제공',
      'LangSmith LLM 품질 모니터링 대시보드',
      '부서별 문서 소스 통합 인덱싱',
    ],

    outcome: `직원 평균 정보 검색 시간을 70% 단축했습니다. 출시 2개월 만에 전체 임직원의 40%가 주 1회 이상 사용하는 핵심 업무 도구로 자리잡았고, 사용자 만족도 조사에서 5점 만점 중 4.2점을 달성했습니다.`,
  },

  {
    id: 4,
    slug: 'gonggumoa',
    name: '공구모아',
    client: 'Gong-gu-mo-a',
    role: '모바일 앱 풀스택 개발',
    period: '2022.09 – 2023.03',
    desc: '소상공인 대상 위치 기반 공구·장비 대여 플랫폼. 근처의 여유 장비를 찾고 빌려 쓰는 공유경제 서비스.',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    gradient: 'linear-gradient(135deg, #d97706 0%, #dc2626 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>`,
    size: 'medium',

    overview: '소상공인과 개인이 가진 여유 공구·장비를 위치 기반으로 연결하는 공유경제 모바일 앱입니다. 필요할 때만 빌려 쓰면서 불필요한 구매 비용을 줄입니다.',

    stats: [
      { label: '프로젝트 규모', value: '6개월' },
      { label: '담당 역할', value: '앱 풀스택' },
      { label: '출시 3개월 이용자', value: '500명+' },
      { label: '장비 구매 비용', value: '평균 40% 절감' },
    ],

    problem: `소상공인들은 인테리어·수리 작업에 가끔 필요한 고가 공구를 구매하기엔 부담이 크고, 렌탈 업체까지 이동하기도 번거로웠습니다. 반면 공구를 보유한 사람들은 장기간 사용하지 않는 장비가 창고에 쌓여 있어도 공유할 방법이 없었습니다.

기존 중고 거래 플랫폼은 판매·구매 위주라, '일시적 대여'에 최적화된 서비스가 없었습니다.`,

    solution: `Flutter로 iOS·Android 동시 지원 앱을 개발했습니다. Google Maps API로 현재 위치 기준 반경 내 장비를 지도와 리스트로 탐색하고, Firebase Firestore로 실시간 예약 상태를 동기화합니다.

Firebase Auth로 소셜 로그인을 구현하고, Firebase Storage로 장비 사진을 관리합니다. 대여 기간·가격 설정, 예약 승인/거절, 반납 확인까지 전체 대여 플로우를 앱에서 처리합니다.`,

    techStack: {
      'Mobile App': ['Flutter (iOS / Android)', 'Dart', 'Google Maps Flutter'],
      Backend: ['Firebase Firestore', 'Firebase Auth', 'Firebase Storage', 'Firebase Functions'],
      기타: ['Firebase Analytics', 'FCM 푸시 알림'],
    },

    features: [
      '위치 기반 반경 내 장비 지도·리스트 탐색',
      '실시간 예약 및 대여 상태 관리',
      '장비 등록·사진 업로드·가격 설정',
      '이용 후기 및 별점 시스템',
      '대여자-임차인 채팅',
      'FCM 기반 예약 알림',
    ],

    outcome: `출시 3개월 내 500명 이상의 이용자가 가입했고, 소상공인 사용자 설문에서 장비 구매 대비 평균 40% 비용을 절감했다는 응답을 받았습니다. iOS·Android 동시 출시를 Flutter 단일 코드베이스로 달성해 개발 비용을 절반으로 줄였습니다.`,
  },

  {
    id: 5,
    slug: 'baro',
    name: 'BARO',
    client: '영양 관리 플랫폼',
    role: '모바일 앱 개발 · AI 파이프라인',
    period: '2023.04 – 2023.10',
    desc: '바코드·NFC 자동인식으로 식품 정보를 즉시 분석하고, AI가 개인 맞춤 영양 계획을 제안하는 헬스케어 앱.',
    tags: ['Flutter', 'Python', 'AI/ML', 'NFC'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`,
    size: 'medium',

    overview: '스마트폰 카메라나 NFC 태그로 식품을 스캔하면 즉시 영양 정보를 분석하고, AI가 개인 목표(다이어트·근성장·건강 유지)에 맞는 식단 계획을 자동으로 제안하는 헬스케어 앱입니다.',

    stats: [
      { label: '프로젝트 규모', value: '6개월' },
      { label: '담당 역할', value: '앱 · AI 파이프라인' },
      { label: '바코드 인식 정확도', value: '98%+' },
      { label: '식단 기록 지속률', value: '3배 향상' },
    ],

    problem: `건강 관리에 관심은 있지만, 매 끼니마다 식품 칼로리와 영양소를 직접 검색하고 기록하는 과정이 너무 번거로워 대부분의 사람들이 며칠 만에 포기합니다. 기존 건강 앱들은 방대한 데이터베이스에서 식품을 일일이 검색해야 해서 실사용성이 떨어졌습니다.

개인 신체 정보와 목표를 반영한 맞춤 식단 추천보다는 일반적인 정보 제공에 그치는 경우가 많았습니다.`,

    solution: `Flutter 앱에서 카메라로 바코드를 스캔하거나 NFC 스티커를 태깅하면 즉시 식품 DB와 대조해 영양 정보를 불러옵니다. Python 백엔드에서 사용자의 신체 정보(체중·키·목표)와 식단 이력을 분석해 AI가 내일 먹을 식단과 부족한 영양소를 제안합니다.

식단 기록이 자동화되어 사용자는 스캔만 하면 되므로 진입 장벽을 최소화했습니다.`,

    techStack: {
      'Mobile App': ['Flutter (iOS / Android)', 'Dart', 'Camera / NFC Plugin'],
      Backend: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      'AI / ML': ['scikit-learn', '영양 DB API 연동', '개인화 추천 모델'],
    },

    features: [
      '바코드·NFC 자동 식품 인식 및 영양 정보 조회',
      'AI 개인 맞춤 일별 식단 계획 추천',
      '식단 기록 자동화 (스캔 → 기록)',
      '칼로리·탄수화물·단백질·지방 트래킹 대시보드',
      '식품 알러지 필터링',
      '주간·월간 영양 섭취 리포트',
    ],

    outcome: `바코드 인식 정확도 98% 이상을 달성했고, 기존 수동 기록 대비 사용자의 식단 기록 지속률이 3배 높아졌습니다. 앱 사용자 리뷰에서 "드디어 오래 쓸 수 있는 식단 앱을 찾았다"는 반응이 주를 이뤘습니다.`,
  },

  {
    id: 6,
    slug: 'bokse-ai',
    name: 'BOKSE AI 챗봇',
    client: 'Demo',
    role: 'AI 엔지니어링 · 풀스택 개발',
    period: '2024.03 – 2024.05',
    desc: '내 노션, 깃허브, 기술 블로그 데이터를 학습해 나를 대신해 답변하는 개인 맞춤형 AI 어시스턴트 데모.',
    tags: ['LangChain', 'OpenAI', 'Svelte', 'RAG'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="8" r="5"/>
      <path d="M12 2v1M12 13v1M4.22 10H3M21 10h-1.22M6.34 5.34l-.71-.71M18.37 5.34l.71-.71M6.34 14.66l-.71.71M18.37 14.66l.71.71"/>
      <path d="M8 21l2-5h4l2 5"/>
    </svg>`,
    size: 'large',

    overview: '노션 워크스페이스, GitHub 레포지토리, 기술 블로그 포스트를 실시간으로 인덱싱해 "이 개발자가 어떤 프로젝트를 했나요?", "어떤 기술 스택을 쓰나요?" 같은 질문에 자동으로 답하는 개인 AI 어시스턴트 데모입니다.',

    stats: [
      { label: '프로젝트 규모', value: '3개월' },
      { label: '담당 역할', value: 'AI · 풀스택' },
      { label: '월 대화 수', value: '200+' },
      { label: '초기 미팅 시간', value: '50% 단축' },
    ],

    problem: `클라이언트와 첫 상담을 시작할 때마다 "어떤 프로젝트를 해봤나요?", "이 기술 쓸 수 있어요?", "비슷한 사례가 있나요?" 같은 질문이 반복됐습니다. 포트폴리오 PDF를 보내도 원하는 정보를 찾으려면 긴 문서를 읽어야 해서 상담 초기에 많은 시간이 낭비됐습니다.

개발자 스스로를 설명하는 문서가 분산되어 있어 최신 상태를 유지하기도 어려웠습니다.`,

    solution: `LangChain으로 노션 API, GitHub API, 블로그 RSS를 연결해 데이터를 주기적으로 수집·업데이트합니다. 문서를 청킹해 OpenAI 임베딩으로 벡터화한 뒤 벡터 DB에 저장합니다.

사용자 질문이 들어오면 RAG 파이프라인이 관련 컨텍스트를 검색해 OpenAI가 맥락을 반영한 답변을 생성합니다. Svelte로 가볍고 빠른 채팅 UI를 구현했고, 스트리밍 응답으로 체감 속도를 높였습니다.`,

    techStack: {
      'AI / ML': ['LangChain', 'OpenAI GPT-4o', 'OpenAI Embeddings', 'ChromaDB (벡터 DB)'],
      Frontend: ['SvelteKit', 'TypeScript', 'Server-Sent Events (스트리밍)'],
      Backend: ['Python', 'FastAPI', 'Notion API', 'GitHub API', 'RSS 파서'],
    },

    features: [
      '노션·GitHub·블로그 데이터 자동 수집 및 인덱싱',
      'RAG 기반 자연어 질의응답',
      '실시간 스트리밍 응답 UI',
      '멀티턴 대화 컨텍스트 유지',
      '답변 출처 문서 링크 표시',
      '데이터 주기적 자동 업데이트',
    ],

    outcome: `데모 공개 후 월 200건 이상의 대화가 발생하며 클라이언트 사전 질문 창구로 활용됩니다. 첫 상담 미팅에서 기본 소개에 쓰이던 시간이 50% 줄어 실질적인 프로젝트 논의에 더 많은 시간을 쓸 수 있게 됐습니다.`,
  },
];
