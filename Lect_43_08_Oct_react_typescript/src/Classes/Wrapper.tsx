import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

class Wrapper extends React.Component<WrapperProps> {
  render() {
    return (
      <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
