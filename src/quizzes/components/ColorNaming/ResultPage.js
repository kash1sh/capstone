import { Button } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
export default function ResultPage(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const submitHandler = async () => {
    try {
      const responseData = await sendRequest(
        "http://localhost:8000/score/",
        "POST",
        JSON.stringify({
          score: props.score * 100,
          type_of_test: "Rapid Color Naming",
        }),
        {
          "Content-type": "application/json",
          Authorization: "Token " + auth.token,
        }
      );
      console.log("HII");
      console.log(responseData);
      // auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  };

  return (
    <>
      <div>
        ResultPage
        <Button onClick={submitHandler}>Submit</Button>
      </div>
    </>
  );
}
