import './App.css';
import CardList from './Components/CardList';
import Heading from './Components/Heading';
import Input from './Components/Input';
import { useReducer, useState } from 'react';

function App() {

  function cardReducer(cards,action){
    switch(action.type){
      case "ADD":
        return [...cards,{...action.payload,id: cards.length+1}];

      case "DELETE":
        return cards.filter(card=>card.id!==action.payload)

      case"UPDATE":
        const index=cards.findIndex(c=>c.id===action.payload.id);
        const newCard = [...cards];
        newCard.splice(index,1,action.payload);
        return newCard
      default:
        return cards;
    }
  }

  const[cards,dispatch] = useReducer(cardReducer,[]);
  const [editCard,setEditCard]=useState(null);

  function setEdit(id){
    setEditCard(cards.find(card=>card.id===id));
  }


  return (
    <div className="App">
      <Heading></Heading> 
      <Input dispatch={dispatch} editCard={editCard}></Input>
      <CardList dispatch={dispatch} card={cards} setEdit={setEdit}></CardList>
    </div>
  );
}

export default App;
