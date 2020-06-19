import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = ({ showPersons, toggleShowPersons, numberOfPerson, title }) => {
  useEffect(() => {
    console.log("Cockpit.js", "useEffect");

    const timer = setTimeout(() => {
      alert("Saving data into database");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("Cockpit.js", "Clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("Cockpit.js", "2nd useEffect");
    return () => {
      console.log("Cockpit.js", "2nd Clean up work in useEffect");
    };
  });

  const cssClass = [];
  const btnClass = [classes.Button];

  if (showPersons) {
    btnClass.push(classes.red);
  }

  if (numberOfPerson < 3) {
    cssClass.push(classes.red);
  } else if (numberOfPerson < 2) {
    cssClass.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={cssClass.join(" ")}>Number of person status</p>
      <button className={btnClass.join(" ")} onClick={toggleShowPersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
