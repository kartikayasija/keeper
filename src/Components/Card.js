function Card({heading,content,dispatch,id,setEdit}){
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