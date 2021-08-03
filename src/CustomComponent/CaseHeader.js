import React from 'react'
import '../css/AllAction.css';
import '../css/casesummary.css';
import { Link, NavLink } from 'react-router-dom';
const CaseHeader = () => {

    return (
        <div className="btn-group">
        <button className="btn sub-nav active"><NavLink to='/startacase/casesummary'>
                CASE SUMMARY
            </NavLink>
            </button>
            <button className="btn sub-nav">
            <NavLink  to='/startacase/actionsummary'>
                ACTION SUMMARY
            </NavLink>
            </button>
            </div>   
    )
}

export default CaseHeader;
