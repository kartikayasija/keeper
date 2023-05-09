function Card({heading,content,deleteCard,id}){
  return(
    <div className="card">
      <button onClick={()=>deleteCard(id)}>DEL</button>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card;