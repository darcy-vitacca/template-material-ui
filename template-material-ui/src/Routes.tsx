import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Balance, Landing, NotFound, Success, Terms } from './components/pages';
import { ActivateCard } from './components/pages/ActivateCard/ActivateCard';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/activate" component={ActivateCard} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/balance" component={Balance} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
