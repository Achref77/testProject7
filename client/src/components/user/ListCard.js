import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
// import "./Login.css";
import EditModal from "./modaledit";
import { deleteUser } from "../../js/actions/auth";
const ListCard = props => {
  console.log("TCL: props", props);
  const { _id, nom, prenom, email, role, password, action } = props.user;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const delet = () => async dispatch => {
    try {
      await dispatch(deleteUser(_id));
    } catch (err) {
      console.error("", err.message);
    }
  };
  return (
    <div className="user-card">
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th> {nom} </th>
                    <th> {prenom} </th>
                    <th> {email} </th>
                    <th> {password} </th>
                    <th> {role} </th>
                    <th> {action} </th>
                    <th>
                      <div className="icon-action">
                        <i
                          className="fa fa-pencil-square-o btn-action"
                          aria-hidden="true"
                          onClick={() => setShow(true)}
                        ></i>
                        <EditModal
                          isOpen={show}
                          toggle={setShow}
                          user={props.user}
                        />
                        <i
                          className="fa fa-trash-o x btn-action"
                          aria-hidden="true"
                          onClick={() => dispatch(delet(_id))}
                        ></i>
                      </div>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};
export default ListCard;
