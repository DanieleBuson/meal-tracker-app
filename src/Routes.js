import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home';
import { AddIngredientPage } from './ingredients';
import { RecipeSearchPage } from './recipes';
import { ShoppingListPage } from './shopping-list';

const routes = [{
    path:"/",
    Component: HomePage,
    exact: true,
}, {
    path: "/recipes",
    Component: RecipeSearchPage,
    exact: true,
}, {
    path: "/shopping-list",
    Component: ShoppingListPage,
    exact: true,
}, {
    path: "/add-ingredient",
    Component: AddIngredientPage,
    exact: true,
}];

export const Routes = () => (
    <Router>
        <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Switch>
    </Router>
)