"use strict";
import React, {useState} from "react";

function InForm() {
    const [accountNumber, handleChange] = useState('');

    const handleChanges = (event) => 
    {
        handleChange(event.target.value.replace(/[^0-9]/ig, ''))
    }
    return (
        <div>
            Account Number:
            <input
                type="text"
                onChange={handleChanges}
                placeholder="123456"
                value={accountNumber}/>
            <br/>
            <span>{accountNumber.length>0? 'You entered:' +
             accountNumber : ''} </span>
        </div>
    )


}

export default InForm;