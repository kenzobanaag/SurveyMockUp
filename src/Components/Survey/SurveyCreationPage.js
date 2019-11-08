/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/
import React, {Component} from 'react';
import SurveyComponents from './SurveyActions';
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
        ]
    }

    /*
        When editing set state here
    */
    componentWillMount() {

    }

    render() {
        return(
            <div className="">
                <SurveyComponents/>
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyPage;