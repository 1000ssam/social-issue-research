import { SocialIssue } from './types';

export const ISSUES: SocialIssue[] = [
  // 경제·노동 (7)
  { id: 1, title: '청년 실업과 취업난', shortDescription: '높은 청년 실업률과 양질의 일자리 부족', category: '경제·노동', emoji: '💼' },
  { id: 2, title: '비정규직 차별', shortDescription: '정규직과 비정규직 간 임금·복지 격차', category: '경제·노동', emoji: '⚖️' },
  { id: 3, title: '최저임금 논쟁', shortDescription: '최저임금 인상의 효과와 부작용', category: '경제·노동', emoji: '💰' },
  { id: 4, title: '플랫폼 노동자 권리', shortDescription: '배달·대리운전 등 긱 워커의 노동권', category: '경제·노동', emoji: '🛵' },
  { id: 5, title: '자영업자 위기', shortDescription: '소상공인 폐업 증가와 경영난', category: '경제·노동', emoji: '🏪' },
  { id: 6, title: '가계부채 문제', shortDescription: '늘어나는 가계 빚과 금융 불안', category: '경제·노동', emoji: '💳' },
  { id: 7, title: 'AI로 인한 일자리 변화', shortDescription: '인공지능 대체 가능 직업과 신규 직종', category: '경제·노동', emoji: '🤖' },

  // 주거·부동산 (7)
  { id: 8, title: '청년 주거 빈곤', shortDescription: '반지하·고시원 등 열악한 주거 환경', category: '주거·부동산', emoji: '🏠' },
  { id: 9, title: '전세 사기', shortDescription: '전세 보증금 미반환과 깡통전세', category: '주거·부동산', emoji: '🔑' },
  { id: 10, title: '집값 양극화', shortDescription: '수도권과 지방 간 부동산 격차', category: '주거·부동산', emoji: '🏗️' },
  { id: 11, title: '1인 가구 주거 문제', shortDescription: '급증하는 1인 가구의 주거 안정성', category: '주거·부동산', emoji: '🚪' },
  { id: 12, title: '재개발·젠트리피케이션', shortDescription: '원주민 밀려남과 지역 상권 변화', category: '주거·부동산', emoji: '🏙️' },
  { id: 13, title: '주거비 부담', shortDescription: '소득 대비 높은 주거비 비율', category: '주거·부동산', emoji: '📊' },
  { id: 14, title: '공공임대 부족', shortDescription: '공공임대주택 공급과 사회적 인식', category: '주거·부동산', emoji: '🏢' },

  // 교육 (7)
  { id: 15, title: '사교육비 부담', shortDescription: '과도한 학원비와 교육 불평등', category: '교육', emoji: '📚' },
  { id: 16, title: '입시 제도 혼란', shortDescription: '수시·정시 비율과 공정성 논란', category: '교육', emoji: '🎓' },
  { id: 17, title: '학교폭력과 사이버불링', shortDescription: '온·오프라인 학교폭력 대응', category: '교육', emoji: '🛡️' },
  { id: 18, title: '교육 격차', shortDescription: '지역·소득별 교육 기회 불평등', category: '교육', emoji: '📐' },
  { id: 19, title: '대학 서열화', shortDescription: '학벌주의와 대학 간 위계 문제', category: '교육', emoji: '🏫' },
  { id: 20, title: '디지털 리터러시', shortDescription: '미디어·정보 판별 능력 교육', category: '교육', emoji: '💻' },
  { id: 21, title: '학생 정신건강', shortDescription: '학업 스트레스와 우울·불안 증가', category: '교육', emoji: '🧠' },

  // 환경·기후 (7)
  { id: 22, title: '기후위기와 탄소중립', shortDescription: '지구 온난화 대응과 탄소 감축 목표', category: '환경·기후', emoji: '🌍' },
  { id: 23, title: '미세먼지', shortDescription: '대기오염과 건강 영향', category: '환경·기후', emoji: '😷' },
  { id: 24, title: '플라스틱 오염', shortDescription: '일회용품과 미세플라스틱 문제', category: '환경·기후', emoji: '♻️' },
  { id: 25, title: '음식물 쓰레기', shortDescription: '음식 낭비와 처리 비용 문제', category: '환경·기후', emoji: '🗑️' },
  { id: 26, title: '에너지 전환', shortDescription: '탈원전·재생에너지 확대 논쟁', category: '환경·기후', emoji: '⚡' },
  { id: 27, title: '기후 불평등', shortDescription: '취약계층에 집중되는 기후 피해', category: '환경·기후', emoji: '🌡️' },
  { id: 28, title: '동물권과 동물복지', shortDescription: '공장식 축산, 동물실험 윤리', category: '환경·기후', emoji: '🐾' },

  // 인구·가족 (7)
  { id: 29, title: '저출생 위기', shortDescription: '세계 최저 출산율과 인구 감소', category: '인구·가족', emoji: '👶' },
  { id: 30, title: '고령화 사회', shortDescription: '초고령사회 진입과 노인 돌봄', category: '인구·가족', emoji: '👴' },
  { id: 31, title: '지방 소멸', shortDescription: '인구 유출로 사라지는 지방 도시', category: '인구·가족', emoji: '🗺️' },
  { id: 32, title: '다문화 가정', shortDescription: '이주민 가정의 사회 통합과 차별', category: '인구·가족', emoji: '🌏' },
  { id: 33, title: '비혼·1인 가구 증가', shortDescription: '변화하는 가족 형태와 사회 제도', category: '인구·가족', emoji: '🏡' },
  { id: 34, title: '노인 빈곤', shortDescription: 'OECD 최고 수준의 노인 빈곤율', category: '인구·가족', emoji: '🧓' },
  { id: 35, title: '돌봄 공백', shortDescription: '아이·노인 돌봄 인프라 부족', category: '인구·가족', emoji: '🤝' },

  // 건강·복지 (7)
  { id: 36, title: '정신건강 위기', shortDescription: '우울증·자살률 증가와 치료 접근성', category: '건강·복지', emoji: '💚' },
  { id: 37, title: '의료 공백', shortDescription: '지방 의료 인프라 부족과 응급실 위기', category: '건강·복지', emoji: '🏥' },
  { id: 38, title: '건강보험 보장성', shortDescription: '비급여 항목과 의료비 부담', category: '건강·복지', emoji: '🩺' },
  { id: 39, title: '감염병 대응', shortDescription: '팬데믹 경험과 공중보건 체계', category: '건강·복지', emoji: '🦠' },
  { id: 40, title: '약물·중독 문제', shortDescription: '마약, 도박, 게임 중독 확산', category: '건강·복지', emoji: '⚠️' },
  { id: 41, title: '장애인 권리', shortDescription: '이동권, 교육권, 고용 차별', category: '건강·복지', emoji: '♿' },
  { id: 42, title: '사회안전망', shortDescription: '복지 사각지대와 기본소득 논의', category: '건강·복지', emoji: '🛟' },

  // 기술·미디어 (7)
  { id: 43, title: '딥페이크·AI 윤리', shortDescription: '생성형 AI 악용과 규제 필요성', category: '기술·미디어', emoji: '🎭' },
  { id: 44, title: '개인정보 침해', shortDescription: '데이터 수집과 프라이버시 보호', category: '기술·미디어', emoji: '🔒' },
  { id: 45, title: '가짜뉴스와 허위정보', shortDescription: '온라인 허위정보 확산과 대응', category: '기술·미디어', emoji: '📰' },
  { id: 46, title: 'SNS와 정신건강', shortDescription: '소셜미디어 중독과 비교 문화', category: '기술·미디어', emoji: '📱' },
  { id: 47, title: '디지털 격차', shortDescription: '세대·지역 간 기술 접근성 차이', category: '기술·미디어', emoji: '🔌' },
  { id: 48, title: '온라인 혐오 표현', shortDescription: '댓글·커뮤니티의 혐오 발언 문제', category: '기술·미디어', emoji: '🚫' },
  { id: 49, title: '알고리즘 편향', shortDescription: 'AI 추천 시스템의 필터버블과 편향', category: '기술·미디어', emoji: '🔄' },

  // 정치·사회 (7)
  { id: 50, title: '세대 갈등', shortDescription: '세대 간 가치관 차이와 자원 분배', category: '정치·사회', emoji: '🔥' },
  { id: 51, title: '젠더 갈등', shortDescription: '성별 간 인식 차이와 갈등 심화', category: '정치·사회', emoji: '⚤' },
  { id: 52, title: '정치 양극화', shortDescription: '진영 논리와 대화 단절', category: '정치·사회', emoji: '🏛️' },
  { id: 53, title: '공정성 논쟁', shortDescription: '기회의 평등 vs 결과의 평등', category: '정치·사회', emoji: '⚖️' },
  { id: 54, title: '이주민·난민 문제', shortDescription: '외국인 노동자와 난민 수용 논쟁', category: '정치·사회', emoji: '🌐' },
  { id: 55, title: '군 복무 형평성', shortDescription: '병역 제도와 대체복무 논의', category: '정치·사회', emoji: '🎖️' },
  { id: 56, title: '지역 갈등', shortDescription: '수도권 집중과 지역 차별', category: '정치·사회', emoji: '📍' },

  // 안전·범죄 (7)
  { id: 57, title: '디지털 성범죄', shortDescription: '불법촬영, 딥페이크 성착취', category: '안전·범죄', emoji: '🚨' },
  { id: 58, title: '스토킹·데이트폭력', shortDescription: '스토킹 범죄와 피해자 보호', category: '안전·범죄', emoji: '🔐' },
  { id: 59, title: '보이스피싱', shortDescription: '전화·문자 금융 사기 급증', category: '안전·범죄', emoji: '📞' },
  { id: 60, title: '학대와 방임', shortDescription: '아동·노인 학대 신고와 보호', category: '안전·범죄', emoji: '🆘' },
  { id: 61, title: '묻지마 범죄', shortDescription: '무차별 폭행과 사회 불안', category: '안전·범죄', emoji: '😰' },
  { id: 62, title: '소년범죄와 처벌', shortDescription: '촉법소년 나이 기준과 처벌 강화', category: '안전·범죄', emoji: '⚖️' },
  { id: 63, title: '재난 대응 체계', shortDescription: '자연재해·사고 시 대응 역량', category: '안전·범죄', emoji: '🚒' },

  // 문화·일상 (7)
  { id: 64, title: '워라밸과 과로', shortDescription: '장시간 노동과 삶의 질', category: '문화·일상', emoji: '⏰' },
  { id: 65, title: '반려동물 문화', shortDescription: '유기동물, 펫티켓, 동물등록', category: '문화·일상', emoji: '🐶' },
  { id: 66, title: '1인 미디어 윤리', shortDescription: '유튜버·스트리머의 사회적 책임', category: '문화·일상', emoji: '🎬' },
  { id: 67, title: '외모 지상주의', shortDescription: '외모 차별과 성형 문화', category: '문화·일상', emoji: '🪞' },
  { id: 68, title: '배달 문화와 쓰레기', shortDescription: '배달 증가에 따른 포장재 문제', category: '문화·일상', emoji: '📦' },
  { id: 69, title: '층간소음 갈등', shortDescription: '공동주택 소음 분쟁과 해결', category: '문화·일상', emoji: '🔊' },
  { id: 70, title: '문화 다양성', shortDescription: '다양한 가치관의 공존과 존중', category: '문화·일상', emoji: '🎨' },
];

export const CATEGORIES = [...new Set(ISSUES.map(i => i.category))];
