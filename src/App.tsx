import React from 'react';
import logo from './logo.svg';
import './App.css';

// type AppPropseW = {
//   word: string;
// };

function RenderWord({word} : {word: string}){
  let composedWord : JSX.Element[] = [];
  for (let w of word) {
    const composedLetter = <RenderLetter letter={w} color="None"/>
    composedWord.push(composedLetter)
  };
  return <>{composedWord} </>
 }

function WordList({list} : {list: string[]}) {
  return <>{list.map(word => <RenderWord word={word} />)}</>
}

function RenderLetter({letter,color="None"}:{letter: string, color:string}) {
  return <>{letter}</>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordList list={["hola","mundo","cool"]}/>
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
