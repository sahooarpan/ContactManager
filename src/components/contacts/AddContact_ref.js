import React, { Component } from "react";

class AddContact_ref extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Arpan Sahoo",
    email: "sahoo@arpan.com",
    phone: "111-111-1111"
  };
  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name.."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>

              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email.."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone no.."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Add Contact"
                className="btn btn-block btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact_ref;
