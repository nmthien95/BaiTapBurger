import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderBuger = () => {
    let danhSachThucAn = [];
    let index = 0;
    for (let [key, value] of Object.entries(this.props.burger)) {
      for (let i = 0; i < value; i++) {
        index++;
        let thucAn = <div key={index} className={key}></div>;
        danhSachThucAn = [...danhSachThucAn, thucAn];
      }
    }
    return danhSachThucAn;
  };
  hiddenH3 = () => {
    for (const item in this.props.burger) {
      if (this.props.burger[item] > 0) {
        return "hidden";
      } else {
        return "";
      }
    }
  };
  render() {
    return (
      <div className="text-center">
        <h3 className="text-danger ">Bánh burger của bạn </h3>
        <div className="breadTop"></div>
        <p className={this.hiddenH3()}>Chọn thức ăn</p>
        {this.renderBuger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BaiTapBurgerReducer.burger,
  };
};
export default connect(mapStateToProps)(Burger);
