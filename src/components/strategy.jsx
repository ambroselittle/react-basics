import React, { Component } from "react";

const Employee = ({ person }) => (
  <div>
    <div>{person.name}</div>
    <div>Manager: {person.belongsWith}</div>
  </div>
);

const Client = ({ person }) => (
  <div>
    <div>{person.name}</div>
    <div>Account Exec: {person.belongsWith}</div>
  </div>
);

const persons = {
  employee: Employee,
  client: Client
};

export default class PersonDetail extends Component {
  pokeClicked = evt => {
    const { pokeHandler, person } = this.props;
    if (pokeHandler) {
      pokeHandler(person);
    }
  };
  editClicked = evt => {
    const { editHandler, person } = this.props;
    if (editHandler) {
      editHandler(person);
    }
  };
  render() {
    const { person } = this.props,
      PersonComponet = persons[person.type];

    return (
      <div>
        <PersonComponet person={person} />
        <button onClick={this.pokeClicked}>Poke this Person</button>
        <button onClick={this.editClicked}>Edit this Person</button>
      </div>
    );
  }
}
