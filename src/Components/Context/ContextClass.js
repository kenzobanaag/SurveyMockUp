import React, {Component} from 'react';


const {Provider, Consumer} = React.createContext();

class ContextProvider extends Component {

    state = this.props.surveyObjectParent;

    createNewId = require('uuid/v1');

    /*
        Updates the current state with new values.
        @param: survey object
    
        Takes in a survey object and uses setState
        to update the current state.
    */
    surveyObjectChangedHandler = (surveyObjectInput) => {
        this.setState({surveyObjectInput})
    }

    /*
        Adds a question to the questionlist.
        @param: question object 

        Get the previous state then assign questionList with
        all the questions in the previousState questionList, 
        then set the newQuestion's id using a UUID generator.
    */
    addQuestionHandler = (newQuestionObject) => {
        this.setState(prevState => ({
            questionList : [...prevState.questionList, {
                id: this.createNewId(), ...newQuestionObject}]
        }))
    }

    /*
        Removes a question from the questionlist
        @param: question id

        Removes the item from the question list if the question
        id matches the one inside the list.
    */
   removeQuestionHandler = (questionId) => {
        this.setState(prevState => ({
            questionList : prevState.questionList.filter(question => question.id !== questionId)
        }))
   }


    render() {
        return(
           <Provider value={{
               survey: this.state ,
               surveyChangeListener: this.surveyObjectChangedHandler,
               addQuestionListener: this.addQuestionHandler, 
               removeQuestionListener: this.removeQuestionHandler,}}>
               {this.props.children}
           </Provider>
        );
   }
}

export {ContextProvider, Consumer as ContextConsumer}