import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/table" component={Table} />
            <Route path="/" component={Form} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
