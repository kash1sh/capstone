import React, { useContext, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { AuthContext } from "../../shared/context/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Auth = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authSubmitHandler = (event) => {
    event.preventDefault();
    auth.login();
    history.push("/");
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          aadhar: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          aadhar: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="auth">
      <Card className="authentication">
        {isLoginMode ? <h2>LOGIN REQUIRED</h2> : <h2>SIGN-UP REQUIRED</h2>}
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              placeholder="Name"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              errorText="Please enter a name of atleast 2 characters"
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && (
            <Input
              element="input"
              id="aadhar"
              type="text"
              label="Aadhar Number"
              placeholder="Aadhar Number"
              validators={[
                VALIDATOR_REQUIRE(),
                VALIDATOR_MINLENGTH(12),
                VALIDATOR_MAXLENGTH(12),
              ]}
              errorText="Please enter a valid Aadhar Number"
              onInput={inputHandler}
            />
          )}
          <Input
            id="email"
            type="email"
            placeholder="Email"
            element="input"
            label="E-mail"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Please enter a valid email"
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            element="input"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
            errorText="Please enter a valid password of atleast 6 digits"
          />

          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </div>
  );
};
export default Auth;
