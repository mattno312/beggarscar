import React, { Component } from "react";
import "./Tabs.css";

class TabArea extends Component {
  constructor(props) {
    super(props);
    this.state = { viewing: this.props.children[0].props.id };
  }
  render() {
    return (
      <div className="TabArea">
        <div className="TabArea-Tabs">
          {this.props.children.map((tab, i) => {
            return (
              <span
                key={"tat" + i}
                className={
                  this.state.viewing === tab.props.id
                    ? "TabArea-Tabs-Tab selected"
                    : "TabArea-Tabs-Tab"
                }
                onClick={this.setView}
                data-id={tab.props.id}
              >
                {tab.props.title}
              </span>
            );
          })}
        </div>
        <div className="TabArea-Content">
          {this.props.children.map((tab, i) => {
            var style = {
              display: tab.props.id === this.state.viewing ? "block" : "none"
            };
            return (
              <span style={style} key={"tac" + i}>
                {tab}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
  setView = e => {
    this.setState({ viewing: e.currentTarget.getAttribute("data-id") });
  };
}

class Tab extends Component {
  render() {
    return <div className="Tab">{this.props.children}</div>;
  }
}

export { TabArea, Tab };
