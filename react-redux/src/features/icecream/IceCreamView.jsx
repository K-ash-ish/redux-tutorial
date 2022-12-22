import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restock } from "../icecream/iceCreamSlice";
function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream- {numOfIceCreams}</h2>
      <button onClick={()=>{dispatch(ordered())}}>Order IceCream</button>
      <button onClick={()=>{dispatch(restock(2))}}>Restock IceCream</button>
    </div>
  );
}
export default IceCreamView;
