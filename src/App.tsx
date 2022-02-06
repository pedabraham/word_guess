import React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

// type AppPropseW = {
//   word: string;
// };
let targetWord : string = "abeja"
let count : number = 0;

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

function RenderBoard({nlines} : {nlines : number}){
  const clearRow = [1,1,1,1,1].map(x => <span className='Cuadrito'></span>)
  const clearLine = (
    <div className='line'>
      {clearRow}
    </div>
  )
  let clearBoard : JSX.Element[] = [];
  for(let i=0; i<nlines; i++){
    clearBoard.push(clearLine)
  }
  return (
    <>
      {clearBoard}
    </>
  )
}

function WordInput() {
  const [wordTarget,setTarget] = useState('')
  const [wordInput,setInput] = useState<string[]>([])
  const [linesN,setLinesN] = useState<number>(6)
  function handleTarget(e: React.ChangeEvent<HTMLInputElement>) {
    let word_str : string = e.target.value
    if(word_str.length>5){
      word_str = word_str.slice(0,5)
    }
    setTarget(word_str);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(wordTarget.length === 5 && linesN > 0){
      setInput(arr => [...arr, wordTarget]);
      setTarget('');
      setLinesN(linesN-1)
    }
    console.log(wordInput)
  }
  return (
    <>
    <WordList list={wordInput} />
    <RenderBoard nlines={linesN}/>
    <form onSubmit={handleSubmit}>
      <input
        value={wordTarget}
        onChange={handleTarget}
      />
      <button type="submit">Enter</button>
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
        <h1>WordG</h1>
        <WordInput />
      </header>
    </div>
  );
}

export default App;
