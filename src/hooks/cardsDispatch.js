import { useContext } from "react";
import CardDispatchContext from "../Context/CardDispatchContext";

function useDispatch(){
  return useContext(CardDispatchContext);
}

export default useDispatch;