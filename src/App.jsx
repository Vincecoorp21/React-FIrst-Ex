import logo from './logo.svg';
import './App.css';

import Person from './components/Persons/Person';

const person1 = { name: 'Vince', surname: 'Barbera', age: '23' };
const person2 = { name: 'Pepe', surname: 'Domingo', age: '53' };
const person3 = { name: 'Joselu', surname: 'García', age: '43' };

function App() {
  return (
    <div className='App'>
      <Person persons={person1} />
      <br />
      <Person persons={person2} />
      <br />
      <Person persons={person3} />
      <br />
    </div>
  );
}
export default App;

//Componente funcional

// const Welcome = () => {
//   return <h3>Hello The Bridge</h3>;
// };

//Con clases

// class Welcome extends React.Component{
//   render(){
//     return <h3>Hello The Bridge</h3>;
//   }
// }
