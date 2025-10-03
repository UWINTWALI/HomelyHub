import React , {useState} from 'react'
//read made calender component

import { DatePicker, Space } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css"
import { Contact } from 'lucide-react';


const Search = () =>{
    const {RangePicker} = DatePicker
    const [keyword, setKeyword] = useState({
        city: "", 
        guest: "", 
        dateIn: "", 
        dateOut: ""
    });

    const [value, setValue] = useState([])

    function searchHandler(e){
        e.preventDefault() // prevent page reload
        setKeyword({city: "", guests: "", dateIn: "", dateOut: ""})
        setValue([])
    }
    // function for date selection

    function returnDates(date, dateString){
        setValue([date[0], date[1]])
        updateKeyword("dateIn", dateString[0])
        updateKeyword("dateOut", dateString[1])


    }
    const updateKeyword = (field, value) =>{
        setKeyword((prevkeyword) => ({
            ...prevkeyword,
            [field]: value
        }))
    }
    return (
        <>
        <div className='searchbar'>
            <input 
            className='search'
            id='search-destination'
            placeholder='search destination'
            type='text'
            value={keyword.city}
            onChange={(e)=>updateKeyword("city", e.target.value)}
            
            />
            <Space direction='vertical' size={12} className='search' >
                <RangePicker 
                value = {value}
                format = "DD-MM-YYYY"
                picker = "date"
                className = "date-picker"
                disableDate = {(currect) => {
                    return currect && currect.isBefore(Date.now(), "day")
                }}
                onChange={returnDates}

                />
            </Space>
            <input
            className='search'
            di = "addguest"
            placeholder='Add Guests'
            type = 'number'
            value={keyword.guests}
            onChange={(e) => updateKeyword("guests", e.target.value)}
            />
            <span className='material-symbols-outlined searchicon' onClick={searchHandler} ><search></search></span>

        </div>

        </>
    )

}
export default Search