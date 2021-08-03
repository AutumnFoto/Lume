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

        <Route exact path="/communication/">
          <CommunicationList />
        </Route>

        <Route exact path="/communication/create">
          <ComAddForm />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
