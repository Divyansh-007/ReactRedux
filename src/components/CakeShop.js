import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux/index";
import { store } from "../redux/store";

function CakeShop(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <h2>Number of Icecreams - {props.numberOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    numberOfCakes: store.cake.numberOfCakes,
    numberOfIcecream: store.icecream.numberOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
