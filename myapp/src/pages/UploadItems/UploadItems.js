import React, { Component } from "react";
import axios from "axios";
import "../SalesManagement/SalesManagement.css";
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      size: "",
      color: "",
      type: "",
      shape: "",
      gender: "",
      lenstype: "",
      mainImageLink: "",
      subImgLink1: "",
      subImgLink2: "",
      subImgLink3: "",
      price: "",
      discount: "",
      brand: "",
      itemNumber: "",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeLenstype = this.changeLenstype.bind(this);
    this.changeMainImageLink = this.changeMainImageLink.bind(this);
    this.changeSubImgLink1 = this.changeSubImgLink1.bind(this);
    this.changeSubImgLink2 = this.changeSubImgLink2.bind(this);
    this.changeSubImgLink3 = this.changeSubImgLink3.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeDiscount = this.changeDiscount.bind(this);
    this.changeBrand = this.changeBrand.bind(this);
    this.changeItemNumber = this.changeItemNumber.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }
  changeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  changeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  changeSize(event) {
    this.setState({
      size: event.target.value.toString(),
    });
  }
  changeColor(event) {
    this.setState({
      color: event.target.value,
    });
  }
  changeShape(event) {
    this.setState({
      shape: event.target.value,
    });
  }
  changeType(event) {
    this.setState({
      type: event.target.value,
    });
  }
  changeGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }

  changeLenstype(event) {
    this.setState({
      lenstype: event.target.value,
    });
  }
  changeMainImageLink(event) {
    this.setState({
      mainImageLink: event.target.value,
    });
  }
  changeSubImgLink1(event) {
    this.setState({
      subImgLink1: event.target.value,
    });
  }
  changeSubImgLink2(event) {
    this.setState({
      subImgLink2: event.target.value,
    });
  }
  changeSubImgLink3(event) {
    this.setState({
      subImgLink3: event.target.value,
    });
  }
  changePrice(event) {
    this.setState({
      price: event.target.value.toString(),
    });
  }
  changeDiscount(event) {
    this.setState({
      discount: event.target.value.toString(),
    });
  }
  changeBrand(event) {
    this.setState({
      brand: event.target.value,
    });
  }
  changeItemNumber(event) {
    this.setState({
      itemNumber: event.target.value,
    });
  }

  changeSubmit(event) {
    console.log(event);
    axios
      .post("http://localhost:7000/itemDataUpload", {
        title: this.state.title,
        description: this.state.description,
        size: this.state.size,
        color: this.state.color,
        type: this.state.type,
        shape: this.state.shape,
        gender: this.state.gender,
        lenstype: this.state.lenstype,
        mainImageLink: this.state.mainImageLink,
        subImgLink1: this.state.subImgLink1,
        subImgLink2: this.state.subImgLink2,
        subImgLink3: this.state.subImgLink3,
        price: this.state.price,
        discount: this.state.discount,
        brand: this.state.brand,
        itemNumber: this.state.itemNumber,
      })
      .then((res) => {
        console.log(res);
        alert("Item data Uploaded");
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
              <h1 className="sales-title">Upload Item</h1>
            </div>
            <fieldset className="sales-item">
              <legend>Title</legend>
              <div className="sales-item-name">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.changeTitle}
                />
              </div>
            </fieldset>
            <fieldset className="sales-item">
              <legend>Description</legend>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.changeDescription}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Size</legend>
              <input
                type="number"
                name="size"
                placeholder="Size"
                value={this.state.size}
                onChange={this.changeSize}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Color</legend>
              <input
                type="text"
                name="color"
                placeholder="Color"
                value={this.state.color}
                onChange={this.changeColor}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Shape</legend>
              <input
                type="text"
                name="shape"
                placeholder="Shape"
                value={this.state.shape}
                onChange={this.changeShape}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Type</legend>
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={this.state.type}
                onChange={this.changeType}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Gender</legend>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={this.state.gender}
                onChange={this.changeGender}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Lens Type</legend>
              <input
                type="text"
                name="lenstype"
                placeholder="Lens Type"
                value={this.state.lenstype}
                onChange={this.changeLenstype}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Main Display Image Link</legend>
              <input
                type="text"
                name="mainImageLink"
                placeholder="Main Display Image Link"
                value={this.state.mainImageLink}
                onChange={this.changeMainImageLink}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Sub Image link 1</legend>
              <input
                type="text"
                name="subImgLink1"
                placeholder="Sub Image link 1"
                value={this.state.subImgLink1}
                onChange={this.changeSubImgLink1}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Sub Image link 2</legend>
              <input
                type="text"
                name="subImgLink2"
                placeholder="Sub Image link 2"
                value={this.state.subImgLink2}
                onChange={this.changeSubImgLink2}
              />
            </fieldset>

            <fieldset className="sales-item">
              <legend>Sub Image link 3</legend>
              <input
                type="text"
                name="subImgLink3"
                placeholder="Sub Image link 3"
                value={this.state.subImgLink3}
                onChange={this.changeSubImgLink3}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.changePrice}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Discount</legend>
              <input
                type="number"
                name="discount"
                placeholder="Discount"
                value={this.state.discount}
                onChange={this.changeDiscount}
              />
            </fieldset>
            <fieldset className="sales-item">
              <legend>Brand</legend>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={this.state.brand}
                onChange={this.changeBrand}
              />
            </fieldset>
            <fieldset className="Item No">
              <legend>Item Number</legend>
              <input
                type="number"
                name="itemNo"
                placeholder="Item Number"
                value={this.state.itemNumber}
                onChange={this.changeItemNumber}
              ></input>
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
export default Upload;
