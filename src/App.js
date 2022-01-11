import { useEffect, useState } from 'react';
import { HiRefresh, HiOutlineMinus, HiOutlinePlus  } from 'react-icons/hi';

import students from './students.json';

import "./App.css";

function App() {
  const [groupNumber, setGroupNumber] = useState(1);
  const [result, setResult] = useState([]);

  const minorGroupNumber = () => {
    if (groupNumber > 1) setGroupNumber(groupNumber - 1)
  }

  const majorGroupNumber = () => {
    setGroupNumber(groupNumber + 1)
  }

  const shuffle = () => {
    const suffleStudent = students.sort((a, b) => 0.5 - Math.random());
    const numsPerGroup = Math.ceil(suffleStudent.length / groupNumber);
    const result = new Array(groupNumber)
      .fill('')
      .map((_, i) => suffleStudent.slice(i * numsPerGroup, (i + 1) * numsPerGroup));
  
    setResult(result)
  }

  useEffect(() => {
    shuffle()
  }, [groupNumber])

  return (
    <div className="App">
      <div className="App-buttons">
        <div className="App-buttons-count">
          <div onClick={minorGroupNumber}><HiOutlineMinus /></div>
          <div>{groupNumber}</div>
          <div onClick={majorGroupNumber}><HiOutlinePlus /></div>
        </div>
        <div className="App-buttons-reset">
          <div onClick={shuffle}><HiRefresh /></div>
        </div>
      </div>
      <div className="App-result">
        {result
          .map((group, key) => (
            <div className="App-result-card" key={key}>
              <h2>{`Groupe ${key+1}`}</h2>
              { group.map((student, key) => (
                <p key={key}>{student}</p>
              )) }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
