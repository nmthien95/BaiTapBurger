import React, { Component } from "react";
import "./BaiTapBurger.css";
import Burger from "./Burger";
import Menu from "./Menu";

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container-luid mt-5">
        <h1 className="text-center text-info mb-5">Bài tập burder</h1>
        <div className="row">
          <div className="col-7">
            <Burger />
          </div>
          <div className="col-5">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
