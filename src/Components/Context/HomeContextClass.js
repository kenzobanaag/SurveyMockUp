import React, { Component } from 'react';
import ApiCalls from '../Axios/ApiCall'

const { Provider, Consumer } = React.createContext();

class HomeContextProvider extends Component {

    //either set the state here or on the HomePage
    //setting it somewhere else look better tbh. 
    //fetch the back end stuff here.
    state = {
        columns: [
            { title: 'Name', field: 'title' },
            { title: 'Published Status', field: 'published' },
            { title: 'Date Created', field: 'creationTime' },
        ],
        //dummy data
        surveys: [],
        //we just need userId to grab all of the needed information??
        userId: "",
        userName: "",
    }

    /*
        Calls this function when the app starts.
        Gets all information we need from the user.

        FIXME
        **should be using getAllSurveys but i think its not setup yet**
    */
    componentDidMount() {
        ApiCalls.getASurvey("5dec493cf525a2415c89c290").then(response => {
            console.log(response.data);
            this.surveyItemHandler(response.data);
            //build survey to populate the survey list
            //object items must match the columns up top.
            this.addSurveyHandler({
                title: response.data.title,
                published: response.data.published,
                creationTime: response.data.creationTime,
                key: response.data._id
            })
        })
    }

    /*
        This function will update the current table of surveys that we have
    */
    //componentDidUpdate() {

    //}

    surveyItemHandler(apiResponseObject) {
        this.setState({
            userName: apiResponseObject.owner,
            userId: apiResponseObject._id,
        })
    }

    /*
        FIXME:
        Should take in a list...But it currently takes in one object
    */
    addSurveyHandler(surveyObject) {
        this.setState(prevState => ({
            surveys: [...prevState.surveys, {
                ...surveyObject
            }]
        }))
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