import './App.css';
import CardList from './Components/CardList';
import Heading from './Components/Heading';
import AddCard from './Components/AddCard';
import { useState } from 'react';

function App() {
  const [cards,setCard] = useState([]);
  function addCard(card){
    setCard([...cards,{...card,id: cards.length+1}]);
  }

  function deleteCard(id){
    setCard(cards.filter(card=>card.id!==id));
  }

  return (
    <div className="App">
      <Heading></Heading>
      <AddCard addCard={addCard}></AddCard>
      <button onClick={addCard}></button>
      <CardList card={cards} deleteCard={deleteCard}></CardList>
    </div>
  );
}

export default App;
