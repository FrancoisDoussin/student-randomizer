import { useEffect, useState } from 'react';

import students from './students.json';

import "./App.css";

function App() {
  const [groupNumber, setGroupNumber] = useState(1);
  const [result, setResult] = useState([]);

  const updateGroupNumber = (event) => {
    if (event.target.innerHTML === "+") {
      setGroupNumber(groupNumber + 1);
    }

    if (event.target.innerHTML === "-" && groupNumber > 1) {
      setGroupNumber(groupNumber - 1);
    }
  }

  useEffect(() => {
    const suffleStudent = students.sort((a, b) => 0.5 - Math.random());
    const numsPerGroup = Math.ceil(suffleStudent.length / groupNumber);
    const result = new Array(groupNumber)
      .fill('')
      .map((_, i) => suffleStudent.slice(i * numsPerGroup, (i + 1) * numsPerGroup));

    setResult(result)
  }, [groupNumber])

  return (
    <div className="App">
      <div className="App-buttons">
        <div onClick={updateGroupNumber}>-</div>
        <div>{groupNumber}</div>
        <div onClick={updateGroupNumber}>+</div>
      </div>
      <div className="App-result">
        {result
          .map((group, key) => (
            <div key={key}>
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
