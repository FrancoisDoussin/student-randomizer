import { useEffect, useState } from 'react';
import { HiRefresh, HiOutlineMinus, HiOutlinePlus, HiTrash } from 'react-icons/hi';
import {
  RandomizerRoundedButton,
  RandomizerCountButtons,
  RandomizerButtons,
  RandomizerContainer,
  RandomizerHeader,
  RandomizerBinButton,
  RandomizerResult,
  RandomizerResultCard,
  RandomizerResultCardHeader,
} from './Randomizer.style';

const Randomizer = ({ students, setStudents }) => {
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
    <RandomizerContainer>
      <RandomizerHeader>
        <RandomizerButtons>
          <RandomizerCountButtons>
            <div onClick={minorGroupNumber}><HiOutlineMinus /></div>
            <div>{groupNumber}</div>
            <div onClick={majorGroupNumber}><HiOutlinePlus /></div>
          </RandomizerCountButtons>
          <RandomizerRoundedButton onClick={shuffle}><HiRefresh /></RandomizerRoundedButton>
        </RandomizerButtons>
        <RandomizerBinButton className="Randomizer-bin" onClick={() => setStudents(null)}><HiTrash /></RandomizerBinButton>
      </RandomizerHeader>
      <RandomizerResult>
        {result
          .map((group, key) => (
            <RandomizerResultCard key={key}>
              <RandomizerResultCardHeader>{`Groupe ${key+1}`}</RandomizerResultCardHeader>
              { group.map((student, key) => (
                <p key={key}>{student}</p>
              )) }
            </RandomizerResultCard>
          ))
        }
      </RandomizerResult>
    </RandomizerContainer>
  );
}

export default Randomizer;
