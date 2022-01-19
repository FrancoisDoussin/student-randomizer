import { useEffect, useState } from 'react';
import { HiRefresh, HiOutlineMinus, HiOutlinePlus  } from 'react-icons/hi';

import students from '../students.json';

import "./Randomizer.css";

const Randomizer = () => {
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
    <div className="Randomizer">
      <div className="Randomizer-buttons">
        <div className="Randomizer-buttons-count">
          <div onClick={minorGroupNumber}><HiOutlineMinus /></div>
          <div>{groupNumber}</div>
          <div onClick={majorGroupNumber}><HiOutlinePlus /></div>
        </div>
        <div className="Randomizer-buttons-reset">
          <div onClick={shuffle}><HiRefresh /></div>
        </div>
      </div>
      <div className="Randomizer-result">
        {result
          .map((group, key) => (
            <div className="Randomizer-result-card" key={key}>
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

export default Randomizer;
