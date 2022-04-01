import React, { Component } from "react";
import { connect } from "react-redux";
import { tangGiamSoLuongAction } from "../redux/actions/BaiTapBurgerAction";

class Menu extends Component {
  rendermenu = () => {
    let { menu, burger } = this.props;
    return menu.map((item, index) => {
      let soLuong = burger[item.name];
      let thanhTien = soLuong * item.price;
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.name, true);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.name, false);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
          <td>{thanhTien.toLocaleString()}</td>
        </tr>
      );
    });
  };
  // tinhTongTien = () => {
  //   let { burger } = this.props;
  //   return this.props.menu.reduce((tongTien, item, index) => {
  //     let soLuong = burger[item.name];
  //     return (tongTien += soLuong * item.price);
  //   }, 0);
  // };

  render() {
    return (
      <div>
        <h3 className="text-success text-center">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn Giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.rendermenu()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>

              <td>Tổng cộng:</td>
              <td>{this.props.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (name, tangGiam) => {
      dispatch(tangGiamSoLuongAction(name, tangGiam));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    menu: state.BaiTapBurgerReducer.menu,
    burger: state.BaiTapBurgerReducer.burger,
    total: state.BaiTapBurgerReducer.total,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
