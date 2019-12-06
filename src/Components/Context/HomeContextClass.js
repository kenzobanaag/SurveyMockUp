import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class HomeContextProvider extends Component {

    //either set the state here or on the HomePage
    //setting it somewhere else look better tbh. 
    //fetch the back end stuff here.
    state = {
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Published Status', field: 'status' },
            { title: 'Date Created', field: 'dateCreated' },
            { title: 'Responses',field: 'responses'},
        ],
        //dummy data
        surveys: [
            { name: 'Test Survey 1', status: 'Yes', dateCreated: '11/21/2019', responses: 69 },
            { name: 'Test Survey 2', status: 'No', dateCreated: '11/16/2019', responses: 49 },
            { name: 'Test Survey 3', status: 'Yes', dateCreated: '11/10/2019', responses: 59 },
            { name: 'Test Survey 4', status: 'No', dateCreated: '11/10/2019', responses: 69 },
            { name: 'Test Survey 5', status: 'Yes', dateCreated: '11/15/2019', responses: 69 },
        ],
        //we just need userId to grab all of the needed information??
        userId: "",
        userName: "",
    }

    homeObjectChangedHandler = (homeObjectInput) => {
        this.setState({ homeObjectInput })
    }

    render() {
        return(
            <Provider value={{homeObject: this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {HomeContextProvider, Consumer as HomeContextConsumer}