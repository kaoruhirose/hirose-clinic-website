/** 実際の写真を受け取ったら設定。未設定の枠は画面に出さない。 */
export type ClinicPhoto = { src: string; alt: string; width: number; height: number; caption?: string };
export const photos: Record<"clinic" | "portrait" | "hike", ClinicPhoto | null> = {
  clinic: null,
  portrait: null,
  hike: null,
};
