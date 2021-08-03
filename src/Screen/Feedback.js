import React,{useState} from 'react'
import upload from '../images/uploadIMg.png'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Feedback=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }
const goBack = () =>{}
    return(
        <div>
                      {/* <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
          */}
             <div className="col-md-12 pl-0 pr-2">

<div className="conArea d-block">
    <div className="LHeadings text-center">
        <a href="#" onClick={goBack}><i className="fii icon-down-arrow"></i></a> Feedback
    </div>

    <div className="row justify-content-center ">
        <div className="col-md-9 savedCases">
            <div className="whtbxs">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="password" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="password" className="form-control" placeholder="Enter Email Address" />
                    </div>
                    <div className="form-group">
                        <label>Query Subject</label>
                        <input type="password" className="form-control" placeholder="Enter Subject" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control">Message</textarea>

                    </div>


                    <div className="form-group uploadsB">
                        <label>Upload a Image</label>
                        <span className="uploads">
                            <img src={upload} />
                            <input type="file" id="myFile" name="filename" />

                        </span>
                    </div>
                    <div className="form-group mt-4 text-center mb-4">
                        <button type="submit" className="btn font-weight-bold text-uppercase">Submit</button>
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

export default Feedback