import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an acoount</h2>
        <span>Sign in with yout email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Sign In With Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
