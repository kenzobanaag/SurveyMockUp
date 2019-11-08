//Probably configure the routing stuff here.
//navbar will be static on top
import React from 'react';
import NavBar from '../Header/NavBar'
import SurveyPage from '../Survey/SurveyCreationPage';

const container = () => {
    return(
        <div className="">
            <NavBar/>
            <SurveyPage />
        </div>
    );
}

export default container;