import { useState } from 'react';
import CSVReader from 'react-csv-reader'
import {
  StudentLoaderContainer,
  StudentLoaderError,
  StudentLoaderSubTitle,
  StudentLoaderTitle,
} from './StudentLoader.style';

const StudentLoader = ({ setStudents }) => {
  const [error, setError] = useState(null);

  const handleCSV = (data) => {
    setError(null);
    if (!data[0].includes('firstname', 'lastname')) {
      return setError('bad CSV');
    }
    const students = data
      .filter((student, index) => {
        if (index === 0) return false;
        if (student[0] === '') return false;
        return true;
      })
      .map((student) => `${student[0]} ${student[1]}`);
    setStudents(students);
  }

  return(
    <>
      { error && <StudentLoaderError>{ error }</StudentLoaderError> }
      <StudentLoaderContainer>
        <StudentLoaderTitle>Student Random</StudentLoaderTitle>
        <StudentLoaderSubTitle>Load your team CSV here</StudentLoaderSubTitle>
        <CSVReader onFileLoaded={handleCSV} />
      </StudentLoaderContainer>
    </>
  )
};

export default StudentLoader;
