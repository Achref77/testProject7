import React, { Component } from "react";

import ModalExample from "../components/user/modal";

import { connect } from "react-redux";
import { getUser, deleteUser, register, putUser } from "../js/actions/auth";
import ListCard from "../components/user/ListCard";

import { Grid, Row, Col, Table } from "react-bootstrap";

class App extends Component {
  state = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "",
    id: "",
    edit: false
  };
  getPerson = user => {
    this.setState({
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      role: user.role,
      id: user._id,
      edit: true
    });
  };

  reset = () => {
    this.setState({
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: "",
      id: ""
    });
  };

  // this.reset();

  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="user-card">
        <div className="user">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th> nom </th>
                      <th> Prenom </th>
                      <th> email </th>
                      <th> password </th>
                      <th> role </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.user.map(el => (
          <ListCard
            deleteUser={this.props.deleteUser}
            putUser={this.props.putUser}
            getPerson={this.getPerson}
            user={el}
          />
        ))}
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ModalExample user={this.state} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  user: state.auth.user
});
export default connect(MapStateToProps, {
  getUser,
  deleteUser,
  register,
  putUser
})(App);
