import React, { Component, Fragment } from "react";
import './ToogleButton.scss';
class ToogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { DefaultValue,OnchangeValue } = this.props;
     // console.log(DefaultValue,OnchangeValue)
    return (
      <Fragment>
        <label className="switch">
          <input className="switch_input" type="checkbox"  />
          <span className="switch_label" data-on={OnchangeValue} data-off={DefaultValue}></span>
          <span className="switch_handle"></span>
        </label>
      </Fragment>
    );
  }
}

export default ToogleButton;
