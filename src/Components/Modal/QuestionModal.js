/* This creates and displays an add question dialog 
   The dialog will take in a question string 
   and a question type
   in the future it should also accept questionOptions 
   for like multiple choice or extra text
*/

/*
    FIX: Contents of the dialog cannot be edited for some reason.  
*/

import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddQuestionDialog(props) {

    const [reqHelperText, setReqHelperText] = React.useState("");

    const [isError, setIsError] = React.useState(false);

    const { open, onClose } = props

    const createNewId = require('uuid/v1');

    const itemId = () => {
        console.log(props.questionId)
        if(props.questionId === undefined || props.questionId === null) {
            return createNewId();
        }
        else {
            return props.questionId;
        }
    }

    const handleClose = () => {
        onClose();
        setReqHelperText("");
        setIsError(false);
    };

    const handleAdd = () => {
        if(document.getElementById("question_text").value === "") {
            setReqHelperText("Required*");
            setIsError(true);
        }
        else {
            props.onAdd(getQuestionObject());
            onClose();
        }
    }

    const handleOnTextChange = () => {
        setReqHelperText("");
        setIsError(false);
    }

    const getQuestionObject = () => {
        var id = itemId();
        return ({
            questionText: document.getElementById("question_text").value,
            questionType: document.getElementById("question_type").value,
            questionId: id,
        });
    }

    return (
        <div className="">
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                fullWidth
                >
                <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
                <DialogContent >
                    <DialogContentText >
                        Enter your question
                    </DialogContentText>
                    <TextField
                        error={isError}
                        autoFocus
                        id="question_text"
                        label="Question"
                        fullWidth
                        helperText={reqHelperText}
                        defaultValue={props.questionText === undefined ? "" : props.questionText}
                        onChange={() => handleOnTextChange()}
                    />
                    </DialogContent>
                    <DialogContent >
                    <DialogContentText>
                        Select Question Type
                    </DialogContentText>
                    <Select
                        fullWidth
                        autoFocus
                        defaultValue={props.questionType === undefined ? "star-rating" : props.questionType}
                        id='question_type_select'
                        inputProps={{
                            name: 'question_type',
                            id: 'question_type',
                        }}>
                        <MenuItem value="star-rating">Star Rating</MenuItem>
                        <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                        <MenuItem value="comments-box">Comments Box</MenuItem>
                    </Select>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        {props.buttonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

//not sure if this is needed
AddQuestionDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

