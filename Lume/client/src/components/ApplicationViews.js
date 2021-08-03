import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CommunicationList from "./CommunicationCards/CommunicationList";
import ComAddForm from "../components/CommunicationCards/CommunicationAddForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/communication/:userProfileId" exact>
          <CommunicationList />
        </Route>

        <Route path="/communication/create/:userProfileId" exact>
          <ComAddForm />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
