import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes- {numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Cake</button>
      <button onClick={()=> dispatch(restocked(2))}>Restock Cake</button>
    </div>
  );
}
export default CakeView;
