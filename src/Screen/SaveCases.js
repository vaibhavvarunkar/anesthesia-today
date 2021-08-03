import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const SaveCases=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }
const goBack = () =>{}
    return(
        <div>

          
                        <div className="col-md-12 pl-0 pr-2">

<div className="conArea d-block">
    <div className="LHeadings text-center">
        <a href="#" onClick={goBack}><i className="fii icon-down-arrow"></i></a> Saved Cases
    </div>

    <div className="row">
        <div className="col-md-12 savedCases">
            <h3>My Cases</h3>
            <ul className="savdcard">
                <li>
                    <div className="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div className="soclsBtn">
                        <a href="#"><i className="fii icon-share-2"></i></a>
                        <a href="#"><i className="fii icon-close"></i></a>
                        <a href="#"><i className="fii icon-edit"></i></a>
                    </div>
                    <div className="clearfix"></div>
                </li>
                <li>
                    <div className="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div className="soclsBtn">
                        <a href="#"><i className="fii icon-share-2"></i></a>
                        <a href="#"><i className="fii icon-close"></i></a>
                        <a href="#"><i className="fii icon-edit"></i></a>
                    </div>
                    <div className="clearfix"></div>
                </li>
                <li>
                    <div className="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div className="soclsBtn">
                        <a href="#"><i className="fii icon-share-2"></i></a>
                        <a href="#"><i className="fii icon-close"></i></a>
                        <a href="#"><i className="fii icon-edit"></i></a>
                    </div>
                    <div className="clearfix"></div>
                </li>
                <li>
                    <div className="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div className="soclsBtn">
                        <a href="#"><i className="fii icon-share-2"></i></a>
                        <a href="#"><i className="fii icon-close"></i></a>
                        <a href="#"><i className="fii icon-edit"></i></a>
                    </div>
                    <div className="clearfix"></div>
                </li>
            </ul>
           </div>
    </div>

</div>
</div>

        </div>
    )
}

export default SaveCases