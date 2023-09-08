import { EventTileProps } from '@/app/(subpages)/events/eventModal';

/**
 * @warning
 * 수정 O
 *
 * @description
 * events - learn more 를 클릭하면 나오는 페이지의 이벤트 소개.
 *
 * 이미지 파일은 되도록 수정하지 마세요!
 */
export const eventData: EventTileProps[] = [
  {
    info: {
      type: 'academic',
      slogan: ['학생의 본분을', '잊지 않기 위하여'],
      explanation:
        '대학 공부는 처음이라 버겁게 느껴진다면 UTKCC와 함께 공부해요. 코스를 수강했던 선배들에게만 들을 수 있는 팁과 문제풀이 방식을 코스 튜토리얼을 통해 배워갈 수 있습니다.',
    },
  },
  {
    info: {
      type: 'professional',
      slogan: ['대학 그 너머', '커리어를 위하여'],
      explanation:
        '대학 생활 이후의 미래, UTKCC와 함께라면 걱정하지마세요. 현직자들의 뼈 있는 조언과 더 나아가 인생의 로드맵까지 생각해 볼 수 있는 기회가 될 거에요.',
    },
  },
  {
    info: {
      type: 'social',
      slogan: ['대학 생활의 묘미를', '잊지 않기 위하여'],
      explanation:
        '즐거운 대학 생활을 보내고 싶으신가요? UTKCC에 속한 다양한 배경의 학생들과 교류하며 친목을 다져보세요!',
    },
  },
];
