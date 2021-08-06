import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CommunicationList from "./CommunicationCards/CommunicationList";
import ComAddForm from "../components/CommunicationCards/CommunicationAddForm";
import ComEdit from "../components/CommunicationCards/ComEdit";
import SignList from "../components/SignLanguage/SignLangList";
import SignAddForm from "./SignLanguage/SignLangAdd";
import PecsCard from "./PecsInfo/PecsInfo";
import YNCard from "./YN/YN";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <PecsCard /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/communication">
          <CommunicationList />
        </Route>

        <Route exact path="/communication/create">
          <ComAddForm />
        </Route>

        <Route exact path="/communication/edit/:id">
          <ComEdit />
        </Route>

        <Route exact path="/signs">
          <SignList />
        </Route>

        <Route exact path="/signs/create">
          <SignAddForm />
        </Route>

        <Route exact path="/YN">
          <YNCard />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
