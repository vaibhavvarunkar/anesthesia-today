import React, { useState } from 'react'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'

const CaseTipSubInfo = (props) => {
    const [burgerMenu, setburgerMenu] = useState(false)
    console.log(props.location.state.dataInfo);

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    console.log(props);
    return (
        <div  >
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/allaction"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>{props.location.state.case_name}</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="all-action-container row" >
                {/* <div className="tab-container" >
                    <Link to="/casesummary" className="tab-container-tabs" >
                        START A CASE
                    </Link>

                    <Link to="/favourite" className="tab-container-tabs " >
                        FAVOURITE
                    </Link>
                    <Link className="tab-container-tabs " to="/recent" >CASES</Link>
                    <Link to="/allaction" className="tab-container-tabs active-tab" >ACTION LIBRARY</Link>

                </div> */}
                <div className="col-md-2"></div>

                <div className="col-md-8">
                    {
                        props.location.state.dataInfo.map((data) => {
                            return (
                                <>
                                    <h1>{data.name}</h1>
                                    {
                                        data.case_tip_sub_type.length ?
                                            <>
                                                {
                                                    data.case_tip_sub_type.map((data1, id) => {
                                                        return (
                                                            <>
                                                                <h4 style={{ marginLeft: 50, marginTop: 10 }}>{id + 1}. {data1.name}</h4>
                                                                {
                                                                    data1.case_tip_sub_type.length ? <>
                                                                        {
                                                                            data1.case_tip_sub_type.map((data2, index) => {
                                                                                return (
                                                                                    <>
                                                                                        <h6 style={{ marginLeft: 80, marginTop: 10 }}>{index + 1}. {data2.name}</h6>


                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                    </> : <></>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                            : <></>
                                    }
                                </>

                            )
                        })
                    }
                </div>


                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default CaseTipSubInfo
