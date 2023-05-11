import './App.css';
import CardList from './Components/CardList';
import Heading from './Components/Heading';
import Input from './Components/Input';
import { useContext, useReducer, useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import CardsContext from './Context/CardsContext';
import CardDispatchContext from './Context/CardDispatchContext';

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

  const theme = useContext(ThemeContext);


  return (
    <CardsContext.Provider value={cards}>
      <CardDispatchContext.Provider value={dispatch}>
        <div className={`App ${theme}`} >
          <Heading></Heading> 
          <Input editCard={editCard}></Input>
          <CardList setEdit={setEdit}></CardList>
        </div>
      </CardDispatchContext.Provider>
    </CardsContext.Provider>
  );
}

export default App;
