function Card({heading,content,deleteCard,id,setEdit}){
  return(
    <div className="card">
      <button onClick={()=>deleteCard(id)}>DEL</button>
      <button onClick={()=>setEdit(id)}>EDIT</button>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card;