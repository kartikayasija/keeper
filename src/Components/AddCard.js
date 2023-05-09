import { useState } from "react";

const init ={
  heading:"",
  content:""
}

function AddCard({addCard}){
  const [card,setCard] = useState(init)
  
  function handleClick(e){
    e.preventDefault();
    addCard(card);
    setCard(init);
  }
  function handleChange(e){
    setCard({...card,[e.target.name]: e.target.value})
  }

  return(
    <div className="inp">
      <form>
        <input type="text" name="heading" onChange={handleChange} value={card.heading} placeholder="Heading"/>
        <input type="text" name="content" onChange={handleChange} value={card.content} placeholder="Content"/>
        <div>
          <button onClick={handleClick}>Add Card</button>
        </div>
      </form>
    </div>
  )
}

export default AddCard;