import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Tutorial from "routes/Tutorial";
import OnlyMobile from '../OnlyMobile';

interface IProps {
  isLoggedIn: boolean;
}


const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route path={"/"} exact={true} component={Home}/>
    <Route path={"/tutorial"} exact={true} component={Tutorial}/>
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <OnlyMobile>
    <BrowserRouter>
      <Routes isLoggedIn={isLoggedIn}/>
    </BrowserRouter>
  </OnlyMobile>
);

export default AppPresenter;