import React from "react";
import './bugCard.css';
import PriorityController from '../../Controllers/priorityController';

// eslint-disable-next-line import/no-anonymous-default-export
export default(props) => {

    const {name, priority, version} = props.bug;
    const {level, color} = PriorityController(priority);

    function Clicked() {
        props.clicked(name)
    }
    return(
        <div className="bug-card" onClick={Clicked} style={{color:color}}>
            <h2 className="name">
                {name}
            </h2>

            <h4 className="priority">
                {priority}
            </h4>


            <h5 className="version">
                {version}
            </h5>
        </div>
    );
}