import { useContext } from 'react';
import Card from './Card';
import CardsContext from '../Context/CardsContext';

function CardList({setEdit}){
  const card = useContext(CardsContext);
  return(
    <div className='card-list'>
      {card.map(card=>
        <Card 
          key={card.id} 
          id={card.id}
          heading={card.heading} 
          content={card.content} 
          setEdit={setEdit}
        />
      )}
    </div>
  )
}

export default CardList;