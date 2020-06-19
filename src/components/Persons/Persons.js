import React from 'react';
import Person from './Person/Person';

const Persons = ({persons, deleteNameHandler, setNewName}) => (persons.map((person, index) => {
    return (
      <Person
        click={() => deleteNameHandler(index)}
        key={person.id}
        name={person.name}
        age={person.age}
        setNewName={(event) => setNewName(event, person.id)}
      />
    );
  }));


export default Persons;