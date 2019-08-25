import React from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import FooterComponent from './FooterComponent';
//import ReadExpense from '../ExpensePage/ReadExpense';
import routes from '../routes';
import {HashRouter , Redirect , Route , Switch} from 'react-router-dom';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div id="page-top">
                <HeaderComponent />
                <div id="wrapper">
                    <SidebarComponent />
                    <div id="content-wrapper">
                        <div class="container-fluid">


                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active">Blank Page</li>
                            </ol>

                            <hr />
                           

                            <p>
                                <br />
                    <HashRouter>
                        <Switch>
                                    {routes.map((route, idx) => {
                                    return route.component ? (<Route key={idx} path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                     render={props => (
                                    <route.component {...props} />
                                    )}
                                    />)
                                    : (null);
                                    },
                                )}
                         <Redirect from="/" to="/read-expense" />
                      </Switch>
                      </HashRouter>

                                {/* <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (<Route
                                            key={idx} path={route.path}
                                            exact={route.exact} name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />)
                                            : (null);
                                    },
                                    )}
                                    <Redirect from="/" to="/read-expense" />
                                </Switch> */}
                            </p>

                        </div>
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        )
    }
}