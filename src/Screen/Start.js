import React, { useState } from 'react'

const Start = (props) => {
    const [input, setInput] = useState(null)
    console.log(input);
    const pushPage = () => {
        if (input !== null && input === "AnesthesiaOne") {
            props.history.push({
                pathname: "/login"
            })

        }
        else {
            alert("something went wrong...Try Again !")
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: "center", marginTop: 200 }}>
                <input style={{ padding: 10, height: 50, fontSize: 30 }} placeholder="Text Input Here" onChange={(e) => setInput(e.target.value)}></input>
            </div>
            <div className="btn-btn">
                <a onClick={pushPage} className="risk-btn">Submit</a>
            </div>
        </>

    )
}

export default Start
