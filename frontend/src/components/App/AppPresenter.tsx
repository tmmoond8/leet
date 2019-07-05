import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FileTree from "routes/FileTree";
import Home from "routes/Home";

interface IProps {
  isLoggedIn: boolean;
}

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home}/>
    <Route path={"/filetree"} exact={true} component={FileTree}/>
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    { isLoggedIn ? <p>login</p> : <p>logout</p> }
    <Routes/>
  </BrowserRouter>
);

export default AppPresenter;