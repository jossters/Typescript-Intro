import React from 'react';
import './App.css';
import InputField from './components/InputField';

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role:[number, string];

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Johnny"
// }

// let lotsOfPeople: Person[];


const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Task</span>
      <InputField/>
    </div>
  );
}      

export default App;
