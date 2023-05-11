import Card from './Card';

function CardList({card,dispatch,setEdit}){
  return(
    <div className='card-list'>
      {card.map(card=>
        <Card 
          key={card.id} 
          id={card.id}
          heading={card.heading} 
          content={card.content} 
          dispatch={dispatch}
          setEdit={setEdit}
        />
      )}
    </div>
  )
}

export default CardList;