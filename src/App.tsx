import React from 'react';
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
    if (ith_target_letter == ith_letter){
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
