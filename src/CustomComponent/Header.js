import '../css/header.css'
import header from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header" >
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <Link to="/favourite" className="header-logo" >
                            <img alt="logo" src={header} className="header-logo" />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-container" >
                            <NavLink to="/startacase/casesummary" activeClassName="active-tab" >
                                START A CASE
                            </NavLink>

                            <NavLink to="/favourite" activeClassName="active-tab" >
                                FAVOURITE
                            </NavLink>
                            <NavLink  to="/recent" activeClassName="active-tab">CASES</NavLink>

                            <NavLink to="/allaction" activeClassName="active-tab" >ACTION LIBRARY</NavLink>

                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="pt-2">
                            <Link to="/drawer"><i  className="material-icons burger-menu">menu</i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
