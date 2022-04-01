const burgerState = {
  burger: { salad: 0, cheese: 0, beef: 0 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
  menu: [
    { name: "salad", price: 10 },
    { name: "cheese", price: 20 },
    { name: "beef", price: 55 },
  ],
  total: 0,
};
const BaiTapBurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "TANG_GIAM_SO_LUONG": {
      let burgerCapNhap = { ...state.burger };
      let index = state.menu.findIndex((item) => item.name === action.name);
      if (action.tangGiam) {
        burgerCapNhap[action.name] += 1;
        state.total += state.menu[index].price;
      } else {
        if (burgerCapNhap[action.name] > 0) {
          burgerCapNhap[action.name] -= 1;
          state.total -= state.menu[index].price;
        } else {
          alert("Số lượng tối thiểu là 0");
        }
      }
      state.burger = burgerCapNhap;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BaiTapBurgerReducer;
