import Card from './Card';

function CardList({card,deleteCard}){
  return(
    <div className='card-list'>
      {card.map(card=>
        <Card 
          key={card.id} 
          id={card.id}
          heading={card.heading} 
          content={card.content} 
          deleteCard={deleteCard}
        />
      )}
    </div>
  )
}

export default CardList;