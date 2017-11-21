import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
              onRight={() => Actions.employeeCreate()}
              rightTitle="ADD"
              key="employeeList"
              component={EmployeeList}
              title="Employees"
        />
        <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employees"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
