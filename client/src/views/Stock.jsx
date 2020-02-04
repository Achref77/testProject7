// import React, { Component } from "react";
// import { connect } from "react-redux";
// // import {
// //   getStocks,
// //   deleteStock,
// //   postStocks,
// //   putStocks
// // } from "../js/actions/actions";
// import StockCard from "../components/stockCard/stockCard";
// import { Grid, Row, Col, Table } from "react-bootstrap";

// class Stock extends Component {
//   state = {
//     stockInitial: "",
//     stockMinimum: "",
//     stockSecurite: "",
//     id: "",
//     edit: false
//   };
//   getStock = stock => {
//     this.setState({
//       stockInitial: stock.stockInitial,
//       stockMinimum: stock.stockMinimum,
//       stockSecurite: stock.stockSecurite,
//       id: stock._id,
//       edit: true
//     });
//   };
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };
//   reset = () => {
//     this.setState({
//       stockInitial: "",
//       stockMinimum: "",
//       stockSecurite: ""
//     });
//   };
//   addStock = () => {
//     this.props.postStock(this.state);
//     // this.reset();
//   };

//   componentDidMount = () => {
//     this.props.getStocks();
//   };
//   render() {
//     return (
//       <div className="contact-card">
//         <div className="content">
//           <Grid fluid>
//             <Row>
//               <Col md={12}>
//                 <Table striped hover>
//                   <thead>
//                     <tr>
//                       <th> Stock Initial </th>
//                       <th> Stock Minimum </th>
//                       <th> Stock Securite </th>
//                       <th> Action </th>
//                     </tr>
//                   </thead>
//                 </Table>
//               </Col>
//             </Row>
//           </Grid>
//         </div>
//         {this.props.stocks.map(el => (
//           <StockCard
//             deleteStock={this.props.deleteStock}
//             postStock={this.props.postStock}
//             getStock={this.getStock}
//             stock={el}
//           />
//         ))}
//         <Grid fluid>
//           <Row>
//             {/* <Col md={12}>
//               <ModalExample
//                 handleChange={this.handleChange}
//                 stock={this.state}
//                 action={this.addStock}
//               />
//             </Col> */}
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }
// const MapStateToProps = state => ({
//   stocks: state.Stocks.stocks
// });
// export default connect(MapStateToProps, {
//   getStocks,
//   deleteStock
// })(Stock);
