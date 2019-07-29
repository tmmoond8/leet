import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Chat from "routes/Chat";
import FileTree from "routes/FileTree";
import Home from "routes/Home";

interface IProps {
  isLoggedIn: boolean;
}

const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route path={"/"} exact={true} component={Home}/>
    <Route path={"/filetree"} exact={true} component={FileTree}/>
    <Route path={"/chat"} exact={true} render={props => <Chat {...props} isLoggined={isLoggedIn}/>}/>
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Routes isLoggedIn={isLoggedIn}/>
  </BrowserRouter>
);

export default AppPresenter;