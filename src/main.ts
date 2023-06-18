/**
 * 定数を足してからかける
 * @param orig : 元の数値
 * @param n : 足してかける数値
 * @returns orig=1, n=2の場合 (1 + 2) * 2 = 6
 */
export function addAndMulti(orig: number, n: number) {
  return (orig + n) * n
}