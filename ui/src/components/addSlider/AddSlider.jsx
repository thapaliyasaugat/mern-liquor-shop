import React, { useEffect, useState } from 'react'
import { sliderData } from '../../data';
import "./AddSlider.css"
const AddSlider = () => {
    const [addNum, setaddNum] = useState(0)
    // useEffect(() => {
    const timer = setTimeout(() => {
        if (addNum < 2) { setaddNum(addNum + 1) } else {
            setaddNum(0)
        }
    }, 5000);
    //     return () => {

    //     }
    // })
    return (
        <div className="addSlider">
            <div className="addSliderContainer">

                <img src={sliderData[addNum].img} alt="" />
            </div>
        </div>
    )
}

export default AddSlider
