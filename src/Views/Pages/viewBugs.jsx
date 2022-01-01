import React, {useEffect, useState}  from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getBugs}from '../../Controllers/Redux/bugSlice';
import bug from "../../Models/bugModel";
import BugCard  from "../Components/BugCard/bugCard";
import BugView from "../Components/BugView/bugView";

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name: "",
        isDisplay: false
    })
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    // eslint-disable-next-line no-undef
    useEffect(() => {

        dispatch(getBugs());
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bugs.length < 1]) // no bug then useeffect not running

    function BugClicked(name){
        SET_DISPLAY_BUG({name: name, isDisplay: !DISPLAY_BUG.isDisplay})

    }
    return (
        <div className="page-container">
           {bugs.map((bug,key) => (
               <BugCard key={key} bug={bug} clicked={BugClicked}/>
           ))}
           {DISPLAY_BUG.isDisplay && <BugView clicked={BugClicked} bug={bugs.filter(bug=>bug.name == DISPLAY_BUG.name)[0]}></BugView>}
        </div>
    )
}