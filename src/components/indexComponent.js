// IndexComponent.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
    }
    componentDidMount(){
      axios.get('http://localhost:1515/user')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.users.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>userName</td>
                  <td>e-mail</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }