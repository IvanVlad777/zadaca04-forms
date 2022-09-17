import React from 'react';
import { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';

class Form extends Component {
  state = {
    username: null,
    years: null,
  };

  handleCreateNewUser = () => {};

  handleChange = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case 'user':
        this.setState({
          username: e.target.value,
        });
        break;
      case 'age':
        this.setState({
          years: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Add new user</h1>
        <form>
          <div>
            <Label forEl="user">User Name: </Label>
            <Input
              type="text"
              id="user"
              name="user"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label forEl="age">User's Age:</Label>
            <Input
              type="text"
              id="age"
              name="age"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button
              type="button"
              onClick={() =>
                this.props.onAddingUser(
                  this.state.username,
                  Number(this.state.years)
                )
              }
            >
              Add New User
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
