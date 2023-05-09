import './App.css';
import CardList from './Components/CardList';
import Heading from './Components/Heading';
import Input from './Components/Input';
import { useState } from 'react';

function App() {
  const [cards,setCard] = useState([]);
  const [editCard,setEditCard]=useState(null);

  function addCard(card){
    setCard([...cards,{...card,id: cards.length+1}]);
  }
  function deleteCard(id){
    setCard(cards.filter(card=>card.id!==id));
  }
  function setEdit(id){
    setEditCard(cards.find(card=>card.id===id));
  }
  function updateCard(card){
    const index=cards.findIndex(c=>c.id===card.id);
    const newCard = [...cards];
    newCard.splice(index,1,card);
    setCard(newCard);
  }


  return (
    <div className="App">
      <Heading></Heading> 
      <Input addCard={addCard} editCard={editCard} updateCard={updateCard}></Input>
      <button onClick={addCard}></button>
      <CardList card={cards} deleteCard={deleteCard} setEdit={setEdit}></CardList>
    </div>
  );
}

export default App;
