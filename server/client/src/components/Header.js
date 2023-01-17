import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null: // pending auth request
        return;
      case false: // not logged in
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default: // logged in | this.props.auth contains an object
        return (
          <li>
            <a href="/">Logout</a>
          </li>
        );
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            App
          </a>
          <ul id="nav-mobile" className="right">
            {/* <li>
              <a href="/">Login with Google</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

// destructure auth is from state object
function mapStateToProps({ auth }) {
  return { auth }; // equivalent to { auth:auth }
}

export default connect(mapStateToProps)(Header);
