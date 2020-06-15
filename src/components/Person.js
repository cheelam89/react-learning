import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  border: 1px solid #eee;
  box-shadow: 0 10px 30px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 700px) {
    width: 450px;
  }
`;

const Person = (props) => {
  const cssStyle = {
    "@media (min-width: 700px)": {
      width: "450px",
    },
  };
  return (
    // <div style={cssStyle} className="person">
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name}, and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.setNewName} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

export default Person;
