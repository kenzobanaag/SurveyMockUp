/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/

/* 
    TODO: Finish Survey Actions and QuestionDialog first
          Do survey form
*/
import React, {Component} from 'react';
import SurveyActions from './SurveyActions';
import SurveyForm from './SurveyForm';

class SurveyPage extends Component {
    
    //set the settable items here
    state = {
        //an array might not be needed
        surveyProps : [
            {
                surveyTitle: '',
                surveyDescription: ''
            }
        ],
        //mocking question types
        questionTypes : [
            {type: 'star-rating'},
            {type: 'multiple-choice'},
            {type: 'comments-box'}
        ],
        questions: []
    }

    /*
        When editing set state here
    */
    componentWillMount() {

    }

    render() {
        return(
            <div className="">
                <SurveyActions
                types={this.state.questionTypes}/>
                <SurveyForm
                questions={this.state.questions}/>
            </div>
        );
    }
}

export default SurveyPage;