import React from 'react';
import Greetings from './Greetings';
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // }
  // return <Greetings name="Hello" onClick={onClick}/>;
  // return <Counter />;
  const onSubmit = (form: {name:string; description: string})=> {
    console.log(form);
  }
  return <MyForm onSubmit={onSubmit} />;
  // return <ReducerSample />;
};

export default App;