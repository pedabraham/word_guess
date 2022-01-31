import React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

// type AppPropseW = {
//   word: string;
// };
let targetWord : string = "robot"


function RenderWord({word} : {word: string}){
  let composedWord : JSX.Element[] = [];
  for (let index = 0; index < word.length; index++) {
    const ith_letter = word[index];
    const ith_target_letter = targetWord[index]
    let composedLetter : JSX.Element = <RenderLetter letter={ith_letter} color="None"/>
    if (ith_target_letter === ith_letter){
      composedLetter = <RenderLetter letter={ith_letter} color="Green"/>
    }
    else if (targetWord.includes(ith_letter)){
      composedLetter = <RenderLetter letter={ith_letter} color="Yellow"/>
    }
    composedWord.push(composedLetter)
  }
  return <div>{composedWord} </div>
 }

function WordList({list} : {list: string[]}) {
  return <>{list.map(word => <RenderWord word={word} />)}</>
}

function RenderLetter({letter,color="None"}:{letter: string, color:string}) {
  letter = letter.toUpperCase()
  if(["Green","Yellow"].includes(color)){
    return <span className={color}>{letter}</span>
  }
  else{
    return <span>{letter}</span>
  }
}

function WordInput() {
  const [wordTarget,setTarget] = useState('')
  const [wordInput,setInput] = useState<string[]>([])
  function handleTarget(e: React.ChangeEvent<HTMLInputElement>) {
    setTarget(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInput(arr => [...arr, wordTarget]);
    setTarget('');
    console.log(wordInput)
  }
  return (
    <>
    <WordList list={wordInput} />
    <form onSubmit={handleSubmit}>
      <input
        value={wordTarget}
        onChange={handleTarget}
      />
      <button type="submit">Subir</button>
      <br />
    </form>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordInput />
        <WordList list={["turbo","luces","holas","mundo","cools","robot"]}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
