/**
 * @warning
 * 수정 O
 *
 * @description
 * 부서 리스트.
 * 최소 한명의 임원은 넣어주세요!
 */
export const deptList: string[] = [
  'presidents',
  'academics',
  'marketing - video',
  'marketing - poster',
  'media',
  'social',
  'finance',
  'external relations',
  'programming'
];

/**
 * @warning
 * 수정 O
 *
 * @description
 * 실제 임원 정보. 형식에 맞춰서 써주세요!
 * intro 는 패러그래프로 분리해서 배열에 넣어주세요!
 */
export const execData: {
  dept: string;
  position: string;
  name: string;
  program: string;
  imageSrc: string;
  intro: string[];
}[] = [
  {
    dept: 'presidents',
    position: 'president',
    name: '임윤아',
    imageSrc: '/assets/images/exec-headshots/임윤아.webp',
    program: 'RC - Management',
    intro: [' '],
  },
  {
    dept: 'presidents',
    position: 'vice-president',
    name: '이은서',
    imageSrc: '/assets/images/exec-headshots/이은서.webp',
    program: 'Economics & Statistics',
    intro: [' '],
  },
  {
    dept: 'academics',
    position: 'director',
    name: '욕마야',
    imageSrc: '/assets/images/exec-headshots/욕마야.webp',
    program: 'Sociology & IRHR',
    intro: [],
  },
  {
    dept: 'academics',
    position: 'director',
    name: '김민서',
    imageSrc: '/assets/images/exec-headshots/김민서.webp',
    program: 'RC - Finance & Economics',
    intro: [],
  },
  {
    dept: 'academics',
    position: 'committee',
    name: '임승미',
    imageSrc: '/assets/images/exec-headshots/임승미.webp',
    program: 'RC - Finance & Economics',
    intro: [],
  },
  {
    dept: 'academics',
    position: 'committee',
    name: '김소람',
    imageSrc: '/assets/images/exec-headshots/김소람.webp',
    program: 'RC - Accounting',
    intro: [],
  },
  {
    dept: 'academics',
    position: 'committee',
    name: '최진민',
    imageSrc: '/assets/images/exec-headshots/최진민.webp',
    program: 'RC - Finance & Economics',
    intro: [],
  },
  {
    dept: 'marketing - video',
    position: 'director',
    name: '오하린',
    imageSrc: '/assets/images/exec-headshots/오하린.webp',
    program: 'RC - Management',
    intro: [],
  },
  {
    dept: 'marketing - video',
    position: 'committee',
    name: '허지안',
    imageSrc: '/assets/images/exec-headshots/허지안.webp',
    program: 'Architecture',
    intro: [],
  },
  {
    dept: 'marketing - video',
    position: 'committee',
    name: '김유진',
    imageSrc: '/assets/images/exec-headshots/김유진.webp',
    program: 'Economics & Statistics',
    intro: [],
  },
  {
    dept: 'marketing - poster',
    position: 'director',
    name: '조은비',
    imageSrc: '/assets/images/exec-headshots/조은비.webp',
    program: 'Statistics & Economics',
    intro: [],
  },
  {
    dept: 'marketing - poster',
    position: 'committee',
    name: '강초원',
    imageSrc: '/assets/images/exec-headshots/강초원.webp',
    program: 'Political Science',
    intro: [],
  },
  {
    dept: 'marketing - poster',
    position: 'committee',
    name: '조예은',
    imageSrc: '/assets/images/exec-headshots/조예은.webp',
    program: 'Math & Environmental Science',
    intro: [],
  },
  {
    dept: 'media',
    position: 'director',
    name: '이지현',
    imageSrc: '/assets/images/exec-headshots/이지현.webp',
    program: 'CS & Cognitive Science',
    intro: [],
  },
  {
    dept: 'media',
    position: 'committee',
    name: '유찬혁',
    imageSrc: '/assets/images/exec-headshots/유찬혁.webp',
    program: 'Political Science',
    intro: [],
  },
  {
    dept: 'media',
    position: 'committee',
    name: '이은수',
    imageSrc: '/assets/images/exec-headshots/이은수.webp',
    program: 'Biology & Health and Disease',
    intro: [],
  },
  {
    dept: 'social',
    position: 'director',
    name: '신예서',
    imageSrc: '/assets/images/exec-headshots/신예서.webp',
    program: 'Economics & Statistics',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '이기서',
    imageSrc: '/assets/images/exec-headshots/이기서.webp',
    program: 'Economics',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '강지석',
    imageSrc: '/assets/images/exec-headshots/강지석.webp',
    program: 'Kinesiology',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '송지원',
    imageSrc: '/assets/images/exec-headshots/송지원.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '전소연',
    imageSrc: '/assets/images/exec-headshots/전소연.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'finance',
    position: 'director',
    name: '홍윤재',
    imageSrc: '/assets/images/exec-headshots/홍윤재.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'finance',
    position: 'committee',
    name: '안지영',
    imageSrc: '/assets/images/exec-headshots/안지영.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'director',
    name: '강민서',
    imageSrc: '/assets/images/exec-headshots/강민서.webp',
    program: 'Economics & IRHR',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'director',
    name: '박서정',
    imageSrc: '/assets/images/exec-headshots/박서정.webp',
    program: 'Political Science',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'committee',
    name: '최정윤',
    imageSrc: '/assets/images/exec-headshots/최정윤.webp',
    program: 'Political Science',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'committee',
    name: '최예린',
    imageSrc: '/assets/images/exec-headshots/최예린.webp',
    program: 'Life Science',
    intro: [],
  },
  {
    dept: 'programming',
    position: 'committee',
    name: '류재혁',
    imageSrc: '/assets/images/exec-headshots/류재혁.webp',
    program: 'CompSci & Stat.',
    intro: [],
  }
];
