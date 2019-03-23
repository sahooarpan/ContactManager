import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
        <form>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />

        </div>

        </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
