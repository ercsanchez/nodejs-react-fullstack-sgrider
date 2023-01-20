import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            href="/"
            className="brand-logo left"
          >
            App
          </Link>
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
