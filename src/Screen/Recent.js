import React, { useState, useEffect } from 'react'
import '../css/index.css'
import { API_ROOT } from '../constants'
import Spinner from '../CustomComponent/Spinner';
const Recent = (props) => {
    const [caseSummaryList, setcaseSummaryList] = useState([])
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        getCaseSummaryList()
    }, [])


    const getCaseSummaryList = () => {
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `user-case-summaries?token=${token}`)
            .then(response => response.json())
            .then(res => {
                if (res.status === "true" && res.message === "User Case Summarries") {
                    setcaseSummaryList(res.data);
                    setLoading(true);
                }
            })
           
    }

    const deleteCaseSummaryAsPerId = (casesummaryId) => {
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `case-summary/${casesummaryId}?token=${token}`, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(res => {
                console.log(res.data)
                window.location.reload()
            })
    }
    const formatedDate = (dated) => {
        var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var inputDate = new Date(dated);
        var d = inputDate.getDate();
        var m = strArray[inputDate.getMonth()];
        var y = inputDate.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
    }
const goBack = () => {
    props.history.push('/favourite')
}
    return (
        <div>
            <div className="backNavigation text-center">
                <a href="#" onClick={goBack}><i className="fa fa-chevron-left"></i></a> CASES
            </div>
            <div className="main-container" >
                   
            <div className="col-md-12 pl-0 pr-2">

                <div className="conArea d-block">
                    {/* <div className="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i className="fa fa-chevron-left"></i></a> CASES
                    </div> */}
      
                    <div className="savedCases">
                   
                        <ul className="savdcard mt-1">
                        {loading ?
                               (caseSummaryList).map((data) => {
                                    return (
                                        <li onClick={() => props.history.push({
                                            pathname: '/casesummarydata',
                                            state: { caseSummaryId: data.id }
                                        })} >
                                            <div className="cszeDetail">
                                                <div className="caption"><strong>{data.name}</strong></div>
                                                <div className="date mt-1">{formatedDate(data.created_at)}</div>
                                            </div>

                                            <div className="soclsBtn btn-group">
                                                <a href="#" type="button" className="btn action-btn pt-3"><i className="fa fa-share"></i></a>
                                                <a href="#" type="button" className="btn action-btn pt-3"> <i onClick={() => deleteCaseSummaryAsPerId(data.id)} className="fa fa-trash"></i></a>
                                                <a href="#" type="button" className="btn action-btn pt-3"><i className="fa fa-edit"></i></a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </li>

                                    )
                                })
                               : <Spinner/>
                            }
                        </ul>
                        </div>


                </div>
            </div>
</div>

        </div>

    )
}

export default Recent
