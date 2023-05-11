import { useContext, useEffect, useState } from "react";
import CardDispatchContext from "../Context/CardDispatchContext";

const init ={
  id: "",
  heading: "",
  content: "",
}

function AddCard({editCard}){
  const [input,setInput] = useState(init);

  const dispatch = useContext(CardDispatchContext);

  
  function handleClick(e){
    e.preventDefault();
    if(editCard) dispatch({type:"UPDATE",payload:input})
    else dispatch({type:"ADD",payload:input}); 
    setInput(init);
  }
  function handleChange(e){
    setInput({...input,[e.target.name]: e.target.value})
  }

  useEffect(()=>{
    if(editCard)
    setInput(editCard);
  },[editCard])

  return(
    <div className="inp">
      <form>
        <input type="text" name="heading" onChange={handleChange} value={input.heading} placeholder="Heading"/>
        <input type="text" name="content" onChange={handleChange} value={input.content} placeholder="Content"/>
        <div>
          <button onClick={handleClick}>{editCard?"Edit":"Add"} Card</button>
        </div>
      </form>
    </div>
  )
}

export default AddCard;