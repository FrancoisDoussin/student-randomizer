import { useEffect, useState } from 'react';
import Randomizer from './components/Randomizer/Randomizer';
import StudentLoader from './components/StudentLoader/StudentLoader';

const App = () => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem('students'))
  );

  useEffect(() => {
    if (students) {
      localStorage.setItem('students', JSON.stringify(students));
    } else {
      localStorage.removeItem('students');
    }
  }, [students])

  return (
    students
      ? <Randomizer students={students} setStudents={setStudents} />
      : <StudentLoader setStudents={setStudents} />
  );
};

export default App;
