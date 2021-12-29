import React, {useEffect}  from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getBugs}from '../../Controllers/Redux/bugSlice';
import BugCard  from "../BugCard/bugCard";
// eslint-disable-next-line import/no-anonymous-default-export
export default() => {

    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    // eslint-disable-next-line no-undef
    useEffect(() => {

        dispatch(getBugs());
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bugs.length < 1]) // no bug then useeffect not running

    function BugClicked(name){

    }
    return (
        <div className="page-container">
           {bugs.map((bug,key) => (
               <BugCard key={key} bug={bug} clicked={BugClicked}/>
           ))}
        </div>
    )
}