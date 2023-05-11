import { useContext } from "react";
import CardDispatchContext from "../Context/CardDispatchContext";

function Card({heading,content,id,setEdit}){
  const dispatch = useContext(CardDispatchContext);
  return(
    <div className="card">
      <button onClick={()=>dispatch({type:"DELETE",payload:id})}>DEL</button>
      <button onClick={()=>setEdit(id)}>EDIT</button>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card;