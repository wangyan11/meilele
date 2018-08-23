import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
    BrowserRouter,
    Route ,
    Switch
} from 'react-router-dom'
import './index.less';
import App from './App';
import {Login} from './pages';
import {Auth} from './container';
import store from './store'

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Fragment>
                <Auth></Auth>
                <Switch>
                    <Route path="/login" component={ Login } />
                    <Route path="/" component={ App } />
                </Switch>
            </Fragment>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
