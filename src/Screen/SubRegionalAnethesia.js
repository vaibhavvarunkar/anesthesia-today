import React, { useState } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom';
import "../css/subregionalAnesthesia.css"

const SubRegionalAnethesia = (props) => {
    console.log(props);
    const [data, setData] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    useState(() => {
        setData(props.location.state.data)
    }, [])
    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/allaction"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>{props.location.state.name}</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            {
                data ? data.map((res, i) => {
                    return (
                        <div className="sub-anesthesia-div">
                            <p>Anatomical Correlation: <a href={res.anatomical_correlation}>{res.anatomical_correlation}</a></p>
                            <p>Anatomy: <a href={res.anatomy}> {res.anatomy}</a></p>
                            <p>clinical_pearls: <a href={res.clinical_pearls}>{res.clinical_pearls}</a></p>
                            <p>image gallery: <a href={res.image_gallery}>{res.image_gallery}</a></p>
                            <p>Anesthetic Injection: <a href={res.local_anesthetic_injection}>{res.local_anesthetic_injection}</a></p>
                            <p>Insertion Approach: <a href={res.needle_insertion_approach}>{res.needle_insertion_approach}</a></p>
                            <p>Nerve Localization: <a href={res.nerve_localization}>{res.nerve_localization}</a></p>
                            <p>Scannning Technoque: <a href={res.scanning_technique}>{res.scanning_technique}</a></p>
                            <p>Selected References: <a href={res.selected_references}>{res.selected_references}</a></p>
                            <p>Video Gallery: <a href={res.video_gallery}> {res.video_gallery}</a></p>
                        </div>
                    )
                })
                    : <></>
            }
        </div>
    )
}

export default SubRegionalAnethesia
