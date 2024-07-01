// 수정 O: 매년, 또는 장기적으로 변하는 텍스트 데이터를 보관하는 장소입니다.
// 이미지 업데이트는 public 폴더에서 가능합니다.

// 마지막 업데이트: 17기, 2023년 9월. by @ryubsmile

/** KCC 시작 연도: 2007년 */
export const KCC_START_YEAR = 2007;
export const KCC_TH_NOW = new Date().getFullYear() - KCC_START_YEAR + (new Date().getMonth() >= 4 ? 1 : 0);

/** 멤버십 가입 링크 */
export const joinMemberShipLink = 'https://forms.gle/VCSYDbiWNDYbw8rZ7';
/** 인턴 및 임원 가입 링크 */
export const recruitmentLink = 'https://bit.ly/utkcc_2023_recruitment';
/** 뉴스레터 구독 링크 */
export const subscribeNewsletterLink =
  'https://docs.google.com/forms/d/1h8FoNhv85dFnX4ICnw9BmvtRr_MBFhHS5Z6WrRlUP6Y/viewform?edit_requested=true';

/** KCC 이메일 */
export const kccEmail = 'koreancommerce@gmail.com';
/** 회장 이메일 */
export const presEmail = 'yuna.lim@mail.utoronto.ca';
/** 부회장 이메일 */
export const vicePresEmail = 'eunseojena.lee@mail.utoronto.ca';
/** 스폰서 관련 이메일 (ER 디렉터) */
export const erDirectorEmail = 'jeslyn.park@mail.utoronto.ca';
