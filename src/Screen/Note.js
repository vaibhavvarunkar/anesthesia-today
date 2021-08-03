import React, { useState } from 'react'
import upload from '../images/uploadIMg.png'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { API_ROOT } from '../constants'
import { Link } from 'react-router-dom'

const Note = (props) => {
    const [message, setmessage] = useState(null)
    const [file, setFile] = useState(null)
    const [formdata, setFormData] = useState('')
    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const saveExtraNotes = () => {
        const token = localStorage.getItem('token')
        formdata.append("image", file)
        formdata.append("message", message)
        formdata.append("op_type", "testing")
        formdata.append("case_id", "27")


        fetch(API_ROOT + `save-extranotes?token=${token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',


            },
            body: formdata

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    console.log(res)
                    alert(res.message)
                }
            })


    }

    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>NOTE</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
            <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>NOTE
            <h4 className="hidn">CRISES</h4>
            </div>

            <div className="col-md-12 pl-0 pr-2">

                <div className="conArea d-block">
                    {/* <div className="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i className="fii icon-down-arrow"></i></a> Note
                    </div> */}

                    <div className="row justify-content-center ">
                        <div className="col-md-9 savedCases">
                            <div className="whtbxs">
                                <form>
                                    <div className="form-group">
                                        <label><strong>Message</strong></label>
                                        <textarea onChange={(e) => setmessage(e.target.value)} className="form-control">Message</textarea>

                                    </div>


                                    <div className="form-group uploadsB">
                                        <label><strong>Upload a Image</strong></label>
                                        <span className="uploads">
                                            <img src={upload} />
                                            <input onChange={(e) => setFile(e.target.files)} type="file" id="myFile" name="filename" />

                                        </span>
                                    </div>
                                    <div className="form-group mt-4 text-center mb-4">
                                        <button onClick={() => saveExtraNotes()} type="submit" className="btn save-button-container">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Note