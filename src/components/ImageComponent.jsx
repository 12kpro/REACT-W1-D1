import { Component } from "react";
import ButtonComponent from "./ButtonComponent";

class ImageComponent extends Component {
  render() {
    console.log(this);
    return (
      <>
        <img className="Avatar" src={this.props.src} alt={this.props.alt} />
        <ButtonComponent txt={this.props.btntxt} />
      </>
    );
  }
}
export default ImageComponent;
