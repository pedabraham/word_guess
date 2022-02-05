import React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

// type AppPropseW = {
//   word: string;
// };
let targetWord : string = "abeja"


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
  return <div className='line'>{composedWord} </div>
 }

function WordList({list} : {list: string[]}) {
  return <div>{list.map(word => <RenderWord word={word} />)}</div>
}

function RenderLetter({letter,color="None"}:{letter: string, color:string}) {
  letter = letter.toUpperCase()
  if(["Green","Yellow"].includes(color)){
    return <span className={('Cuadrito ') + color}>{letter}</span>
  }
  else{
    return <span className='Cuadrito'>{letter}</span>
  }
}

function WordInput() {
  const [wordTarget,setTarget] = useState('')
  const [wordInput,setInput] = useState<string[]>([])
  function handleTarget(e: React.ChangeEvent<HTMLInputElement>) {
    let word_str : string = e.target.value
    if(word_str.length>5){
      word_str = word_str.slice(0,5)
    }
    setTarget(word_str);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(wordTarget.length === 5){
      setInput(arr => [...arr, wordTarget]);
      setTarget('');
    }
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
  //<WordList list={["turbo","luces","holas","mundo","cools","robot"]}/>
  return (
    <div className="App">
      <header className="App-header">
        <WordInput />
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
