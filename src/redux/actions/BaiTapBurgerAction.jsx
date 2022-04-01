import { TANG_GIAM_SO_LUONG } from "../type/BaiTapBurgerType";

export const tangGiamSoLuongAction = (name, tangGiam) => {
  return {
    type: TANG_GIAM_SO_LUONG,
    name,
    tangGiam,
  };
};
