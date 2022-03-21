import React, { Component } from "react";
import axios from "axios";
import "../SalesManagement/SalesManagement.css";
class SalesManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      mob: "",
      email: "",
      itemspurchased: "",
      paymentmode: "",
      ItemNo: "",
    };
    this.changeFname = this.changeFname.bind(this);
    this.changeLname = this.changeLname.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changemob = this.changemob.bind(this);
    this.changeitemspurchased = this.changeitemspurchased.bind(this);
    this.changepaymentmode = this.changepaymentmode.bind(this);
    this.ItemNo = this.ItemNo.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }
  changeFname(event) {
    this.setState({
      Fname: event.target.value,
    });
  }
  changeLname(event) {
    this.setState({
      Lname: event.target.value,
    });
  }
  changemob(event) {
    this.setState({
      mob: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value.toString(),
    });
  }

  changeitemspurchased(event) {
    this.setState({
      itemspurchased: event.target.value,
    });
  }
  changepaymentmode(event) {
    this.setState({
      paymentmode: event.target.value,
    });
  }

  ItemNo(event) {
    this.setState({
      ItemNo: event.target.value,
    });
  }
  changeSubmit(event) {
    console.log(event);
    axios
      .post("http://localhost:7000/SalesBook", {
        mob: this.state.mob,
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        email: this.state.email,
        itemspurchased: this.state.itemspurchased,
        paymentmode: this.state.paymentmode,
        ItemNo: this.state.ItemNo,
      })
      .then((res) => {
        console.log(res);
        alert("Sales data updated ");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="sales-testbox">
          <form className="sales-form" onSubmit={this.changeSubmit}>
            <div className="sales-banner">
              <h1 className="sales-title">Instore sales</h1>
            </div>
            <fieldset className="sales-item">
              <legend>Name</legend>
              <div className="sales-item-name">
                <input
                  type="text"
                  name="Fname"
                  placeholder="First"
                  value={this.state.Fname}
                  onChange={this.changeFname}
                />
                <input
                  type="text"
                  name="Lname"
                  placeholder="Last"
                  value={this.state.Lname}
                  onChange={this.changeLname}
                />
              </div>
            </fieldset>
            <fieldset className="sales-item">
              <legend>email</legend>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeemail}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Phone</legend>
              <input
                type="text"
                name="mob"
                placeholder="### ### ####"
                email
                value={this.state.mob}
                onChange={this.changemob}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>sales Date</legend>
              <input
                type="date"
                name="appointmentDate"
                value={this.state.appointmentDate}
                onChange={this.changeappointmentDate}
                required
              />
            </fieldset>
            <fieldset className="paymentmode">
              <legend>sales Time</legend>
              <input
                type="time"
                name="appointmentTime"
                required
                value={this.state.appointmentTime}
                onChange={this.changeappointmentTime}
              />
            </fieldset>

            <fieldset className="Item No">
              <legend>ItemNo</legend>
              <textarea
                rows="3"
                value={this.state.ItemNo}
                onChange={this.ItemNo}
              ></textarea>
            </fieldset>
            <div className="sales-btn-div">
              <button type="submit" className="sales-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SalesManagement;
