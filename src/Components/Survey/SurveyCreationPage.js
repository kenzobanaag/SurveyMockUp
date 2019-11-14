/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/

/* 
    TODO: Finish Survey Actions and QuestionDialog first
          Do survey form
*/
import React, { useState} from 'react';
import SurveyActions from './SurveyActions';
import SurveyForm from './SurveyForm';

export default function SurveyPage (){

    //USE CLASS COMPONENT!!! or use useEffect....
    //need to use a class component here. This is for prototyping only 
    const [questions, setQuestions] = useState([]);

    const addQuestionHandler = question => {
        setQuestions(prevQuestions => [...prevQuestions, {id: 'index', 
            ...question}]);
    }

    const removeQuestionHandler = questionId => {
        console.log(questionId)
        setQuestions(prevQuestions => 
            prevQuestions.filter(question => question.id !== questionId));
    }

    //set the settable items here
    /*state = {
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
    }*/

    

    /*
        When editing set state here
    */
    // componentWillMount() {

    // }

    
        return(
            <div className="">
                <SurveyActions
                onAddQuestion={addQuestionHandler} />
                <SurveyForm
                questions={questions} onDeleteQuestion={removeQuestionHandler}/>
            </div>
        );
    
}

//export default SurveyPage;