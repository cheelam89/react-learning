import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 20 },
      { id: "125", name: "Calvin", age: 40 },
      { id: "126", name: "Jack", age: 10 },
    ],
    otherstate: "this is another state",
    showPersons: false,
    showUsers: true,
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
        <Persons
          persons={this.state.persons}
          deleteNameHandler={this.deleteNameHandler}
          setNewName={this.setNewName}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showUsers: false });
          }}
        >
          Remove Persons
        </button>

        {this.state.showUsers ? (
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            numberOfPerson={this.state.persons.length}
            toggleShowPersons={this.toggleShowPersons}
            numberOfPerson={this.numberOfPerson}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
