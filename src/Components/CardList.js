import Card from './Card';

function CardList({card,deleteCard,setEdit}){
  return(
    <div className='card-list'>
      {card.map(card=>
        <Card 
          key={card.id} 
          id={card.id}
          heading={card.heading} 
          content={card.content} 
          deleteCard={deleteCard}
          setEdit={setEdit}
        />
      )}
    </div>
  )
}

export default CardList;