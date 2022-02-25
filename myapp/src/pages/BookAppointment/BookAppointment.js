import React, { Component } from "react";
import axios from "axios";
import "../BookAppointment/BookAppointment.css";
class BookAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      mob: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
      purpose: "",
    };
    this.changeFname = this.changeFname.bind(this);
    this.changeLname = this.changeLname.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changemob = this.changemob.bind(this);
    this.changeappointmentDate = this.changeappointmentDate.bind(this);
    this.changeappointmentTime = this.changeappointmentTime.bind(this);
    this.purpose = this.purpose.bind(this);
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
      Email: event.target.value,
    });
  }

  changeappointmentDate(event) {
    this.setState({
      appointmentDate: event.target.value,
    });
  }
  changeappointmentTime(event) {
    this.setState({
      appointmentTime: event.target.value,
    });
  }

  purpose(event) {
    this.setState({
      purpose: event.target.value,
    });
  }
  changeSubmit(event) {
    console.log(event);
    axios
      .post("http://localhost:7000/BookAppoint", {
        mob: this.state.mob,
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        email: this.state.email,
        appointmentDate: this.state.appointmentDate,
        appointmentTime: this.state.appointmentTime,
        purpose: this.state.purpose,
      })
      .then((res) => {
        console.log(res);
        alert("Appointment booked successfully ");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="appointment-testbox">
          <form
            action="/"
            className="appointment-form"
            onSubmit={this.changeSubmit}
          >
            <div className="appointment-banner">
              <h1 className="appointment-title">
                Brampton Opticians Appointment
              </h1>
            </div>
            <fieldset className="appointment-item">
              <legend>Name</legend>
              <div className="appointment-item-name">
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
            <fieldset className="appointment-item">
              <legend>email</legend>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeemail}
              />
            </fieldset>
            <fieldset className="appointment-item">
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
            <fieldset className="appointment-item">
              <legend>Appointment Date</legend>
              <input
                className="appointment-date"
                input
                type="date"
                name="appointmentDate"
                value={this.state.appointmentDate}
                onChange={this.changeappointmentDate}
                required
              />
              <i className="fas fa-calendar-alt"></i>
            </fieldset>
            <fieldset className="appointment-item">
              <legend>Appointment Time</legend>
              <input
                type="time"
                name="appointmentTime"
                required
                value={this.state.appointmentTime}
                onChange={this.changeappointmentTime}
              />
            </fieldset>

            <fieldset className="appointment-item">
              <legend>Purpose</legend>
              <textarea
                rows="3"
                value={this.state.purpose}
                onChange={this.purpose}
              ></textarea>
            </fieldset>
            <div className="appointment-btn-div">
              <button type="submit" className="appointment-btn">
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default BookAppointments;
