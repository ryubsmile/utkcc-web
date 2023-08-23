// threshold 배열 생성함수
export const thresholdArray = (steps: number) =>
  Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0);
