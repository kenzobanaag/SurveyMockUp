/*
    javascript static methods are called without instantiating the class.
    These methods are also used to create utility functions.. whatever that means 
    
    How to use: import ApiCall from '../File_location'
    Then: 
        ApiCall.getAllSurveyResponses(surveyId).then(response => {process information....})
*/
import axios from 'axios'

const LOCAL_URL = "http://localhost:3005/api/";

const USER = "user/";

const SURVEY = "survey/";

const RESPONSE = "response/";

class ApiCall {
    /*
        Gets all survey responses from an id
        @param: surveyId
    */
    static getAllSurveyResponses(surveyId) {
        return (axios.get(LOCAL_URL + RESPONSE + SURVEY + surveyId));
    }

    /*
        Gets one single survey response
        @param: responseId
    */
    static getASurveyResponse(responseId) {
        return (axios.get(LOCAL_URL + RESPONSE + RESPONSE + responseId));
    }

    /*
        Gets a single survey
        @param: surveyId
    */
    static getASurvey(surveyId) {
        return (axios.get(LOCAL_URL + SURVEY + SURVEY + surveyId));
    }

    /*
        Gets all the surveys a user has
        @param: userId
    */
    static getAllSurveys(userId) {
        return (axios.get(LOCAL_URL + SURVEY + USER + userId));
    }
}

export default ApiCall;