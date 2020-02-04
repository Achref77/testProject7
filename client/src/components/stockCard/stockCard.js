// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Grid, Row, Col, Table } from "react-bootstrap";
// import "../LoginUser/Login";
// import EditModal from "../user/modaledit";
// // import { deleteStock } from "../../js/actions/actions";

// const StockCard = props => {
//   console.log("TCL: props", props);
//   const {
//     _id,
//     stockInitial,
//     stockMinimum,
//     stockSecurite,
//     action
//   } = props.stock;
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   const delet = () => {
//     dispatch(deleteStock(_id));
//   };
//   return (
//     <div className="contact-card">
//       <div className="content">
//         <Grid fluid>
//           <Row>
//             <Col md={12}>
//               <Table striped hover>
//                 <thead>
//                   <tr>
//                     <th> {stockInitial} </th>
//                     <th> {stockMinimum} </th>
//                     <th> {stockSecurite} </th>
//                     <th> {action} </th>
//                     <th>
//                       <i
//                         class="fa fa-pencil-square-o"
//                         aria-hidden="true"
//                         onClick={() => setShow(true)}
//                       ></i>
//                       {/* <button onClick={() => setShow(true)}>edit</button> */}
//                       <EditModal
//                         isOpen={show}
//                         toggle={setShow}
//                         stock={props.stock}
//                       />

//                       {/* <img src={edit} /> */}

//                       <i
//                         className="fa fa-trash-o x"
//                         aria-hidden="true"
//                         style={{ minWidth: "223px", maxWidth: "180px" }}
//                         onClick={() => dispatch(delet(_id))}
//                       ></i>
//                     </th>
//                   </tr>
//                 </thead>
//               </Table>
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default StockCard;
