import React from "react";
import ViewSection from "./component/bugViewSection";
import './bugView.css';
import BugModel from '../../../Models/bugModel';
import {useDispatch} from 'react-redux';
import { markComplete } from "../../../Controllers/Redux/bugSlice";

export default(props)=>{

    const dispatch = useDispatch();

    const bug = new BugModel(props.bug);

    return(
        <div className="bug-view">
            <button onClick={props.clicked} className="close-btn" >Close</button>
            <h1>
                {bug.name}
            </h1>   
            <ViewSection title='Detail' info={bug.details}></ViewSection>
            <ViewSection title='steps' info={bug.steps}></ViewSection>
            <ViewSection title='priority' info={bug.priority}></ViewSection>
            <ViewSection title='creator' info={bug.creator}></ViewSection>
            <ViewSection title='version' info={bug.version}></ViewSection>
            <ViewSection title='time' info={bug.time}></ViewSection>
            <button onClick={()=>{dispatch(markComplete)}}>Mark Complete</button>
        </div>
    )
}