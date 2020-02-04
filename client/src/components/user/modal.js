import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../js/actions/auth";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: false,
      user: {
        name: "",
        prenom: "",
        email: "",
        password: "",
        role: ""
      }
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  addUser = () => this.props.register(this.state.user);
  handleChange = e =>
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  render() {
    return (
      <div className="modal-container">
        <Button
          // className="btn-secondary"
          // color="danger"
          onClick={this.toggle}
          value="+"
        >
          Ajouter{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.state.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Ajouter nouveau utilisateur
          </ModalHeader>
          <ModalBody>
            <div className="add-card">
              <p className="card-title-add">Ajouter user</p>
              <p>Nom</p>
              <input
                name="name"
                type="text"
                placeholder="Nom..."
                onChange={this.handleChange}
              />
              <p>Prenom</p>
              <input
                name="prenom"
                type="text"
                placeholder="Prenom..."
                onChange={this.handleChange}
              />
              <p>Email</p>{" "}
              <input
                name="email"
                type="text"
                placeholder="Email..."
                onChange={this.handleChange}
              />
              <p>Password</p>{" "}
              <input
                name="password"
                type="password"
                placeholder="password..."
                onChange={this.handleChange}
              />
              <p>Role</p>
              <select name="role" onChange={this.handleChange}>
                <option value="choisir un role">choisir Le role</option>
                <option value="Admin">Admin</option>
                <option value="GERANT">GERANT</option>
                <option value="magazinier">Magazinier</option>
                <input type="submit" />
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color="primary"
              className="add-btn"
              onClick={() => {
                this.addUser();
                this.toggle();
              }}
            >
              valider
            </Button>{" "}
            <Button color="secondary" className="add-btn" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect(null, { register })(ModalExample);
