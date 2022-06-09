import React from 'react';

// export class Person extends React.Component {
//   render() {
//     return (
//       <div>
//         <span>
//           Tu nombre es: {this.props.person.name},<br />{' '}
//         </span>
//         <span>
//           {' '}
//           Tu apellido es: {this.props.person.surname},<br />
//         </span>
//         <span>
//           Tu edad es: {this.props.person.age},<br />
//         </span>
//       </div>
//     );
//   }
// }

// export default Persons;

//FUNCIONAL

const Person = ({ persons }) => {
  return (
    <span>
      Tu nombre es: {persons.name}
      <br />
      Tu apellido es: {persons.surname}
      <br />
      Tu edad es: {persons.age}
      <br />
    </span>
  );
};

export default Person;
