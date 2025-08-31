import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="simple-logo-container">
        <div className="logo-text" style={{ color: theme.body }}>
          Fakile Modasola
        </div>
        <div className="logo-subtitle" style={{ color: theme.secondaryText }}>
          Content Creator & Social Media Manager
        </div>
      </div>
    );
  }
}

export default LogoLoader;
