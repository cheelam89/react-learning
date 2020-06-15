import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./components/Person";

const StyledButton = styled.button`
background-color: ${props => props.alt ? "red" : "green"};
color: white;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? "pink" : "lightgreen"};
  color: black
},`;

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 20 },
      { id: "125", name: "Calvin", age: 40 },
      { id: "126", name: "Jack", age: 10 },
    ],
    otherstate: "this is another state",
    showPersons: false,
  };

  deleteNameHandler = (currentIndex) => {
    //const personsArray = this.state.persons.slice();
    const personsArray = [...this.state.persons];
    personsArray.splice(currentIndex, 1);
    this.setState({ persons: personsArray });
  };

  setNewName = (event, id) => {
    const personIndex = this.state.persons.findIndex((item) => {
      return item.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}. this.state.persons[personIndex])

    person.name = event.target.value;

    const personsArray = [...this.state.persons];
    personsArray[personIndex] = person;

    this.setState({
      persons: personsArray,
    });
  };

  toggleShowPersons = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteNameHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                setNewName={(event) => this.setNewName(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const cssClass = [];
    const numberOfPerson = this.state.persons.length;
    if (numberOfPerson < 3) {
      cssClass.push("red");
    }
    if (numberOfPerson < 2) {
      cssClass.push("bold");
    }

    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p className={cssClass.join(" ")}>Number of person status</p>
        <StyledButton alt={this.state.showPersons} onClick={this.toggleShowPersons}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
