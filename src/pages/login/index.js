import React from "react";
import Header from "../../components/organism/login/Header";
import Form from "../../components/organism/login/form";
import Information from "../../components/organism/login/information";

export default function Login() {
  return (
    <>
      <div className="container">
        <Header />
        <Form />
      </div>
      <Information />
    </>
  );
}
