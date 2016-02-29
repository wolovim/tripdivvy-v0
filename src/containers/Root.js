import React, { Component, Navigator, Text } from 'react-native';
import { Provider, connect } from 'react-redux/native';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import NewTrip from './NewTrip';
import Dues from './Dues';
import Settings from './Settings';
import reducers from '../reducers/index';
import RNRF from 'react-native-router-flux';
const {Route, Schema, Animations, Actions, TabBar} = RNRF;

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);
const store = createStoreWithMiddleware(reducers);

const Router = connect()(RNRF.Router);

class TabIcon extends Component {
  render() {
    return (
      <Text style={{color: this.props.selected ? 'green' : 'black'}}>{this.props.title}</Text>
    );
  }
}

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router name='root' hideNavBar={true}>
          <Schema name='default' sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Schema name='tab' type='switch' icon={TabIcon} />
          <Schema name='withoutAnimation' />

          <Route name='tabbar' hideNavBar={true}>
            <Router footer={TabBar} tabBarStyle={{borderTopColor:'#00bb00',borderTopWidth:1,backgroundColor:'white'}}>
              <Route name='tripsTab' schema='tab' title='Trips' >
                <Router>
                  <Route hideNavBar={true} name='trips' title='My Trips' component={App} />
                  <Route name='newTrip' title='New Trip' schema='withoutAnimation' component={NewTrip} />
                </Router>
              </Route>
              <Route name='dues' schema='tab' title='Dues' component={Dues} />
              <Route name='settings' schema='tab' title='Settings' component={Settings} />
            </Router>
          </Route>
        </Router>

      </Provider>
    );
  }
}

export default Root;
