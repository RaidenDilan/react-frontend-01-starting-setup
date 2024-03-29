import React, { useState, useContext } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/FormElements/Input/Input';
import Button from '../../../shared/components/FormElements/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hooks/form-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode , setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false);

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);

    auth.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid);
    }
    else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false);
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card
      className='authentication'>
      <h2>Login Required</h2>
      <br />
      <form onSubmit={ authSubmitHandler }>
        { !isLoginMode && (
          <Input
            element='input'
            id='name'
            type='text'
            label='Your Name'
            validators={ [VALIDATOR_REQUIRE()] }
            errorText='Please enter a name.'
            onInput={ inputHandler } />
        ) }
        <Input
          id='email'
          element='input'
          type='email'
          label='E-mail'
          validators={ [VALIDATOR_REQUIRE()] }
          errorText='Please enter a valid email address.'
          onInput={ inputHandler } />
        <Input
          id='password'
          element='input'
          type='password'
          label='Password'
          validators={ [VALIDATOR_MINLENGTH(5)] }
          errorText='Please enter a valid password (at least 5 characters).'
          onInput={ inputHandler } />
        <Button
          type='submit'
          disabled={ !formState.isValid }>
          { isLoginMode ? 'LOGIN' : 'SIGNUP' }
        </Button>
      </form>
      <Button
        inverse
        onClick={ switchModeHandler }>
        SWITCH TO { isLoginMode ? 'SIGNUP' : 'LOGIN' }
      </Button>
    </Card>
  );
};

export default Auth;
