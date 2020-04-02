"use strict";
import React, { useState, useEffect } from 'react';
import Link from './Link';
const data_url = "https://nuko.cf/menu.json";

export default function Menu () {

    const [menu, Menu_entry] = useState([]);

    useEffect( () => {
        GetMenu();
    }, []);

    function GetMenu(){
        fetch(data_url)
        .then(response => response.json())
        .then(menu_list =>Menu_entry(menu_list))
    }
    
            return (
                <div>
                    {menu.map( (v,i) => { 
                     return <div key = {i}>
                         <Link label={v}/>
                         </div>
                    
                    }
                    )
                    }
                </div>
                    )   
    }