import React from 'react';
import PropTypes from 'prop-types';

import AuthCard from '../../shared/AuthCard/AuthCard';
import './Auth.scss';
import bgImg from '../../../helpers/images/background.png';

class Auth extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="Auth LoginPage">
        <img className="bgImg" src={bgImg} alt="face" />
        <AuthCard authed={authed} />
      </div>
    );
  }
}

export default Auth;
