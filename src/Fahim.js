import React from "react";
import Button from 'react-bootstrap/Button'
import axios from "axios";

const Fahim = () => {
    axios.get('http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp', {
        params: { //parameters narrowing down request data for API
            city: 'Mansfield',
            country: 'GB'
        }
    })
    .then(function (response) {
        console.log(response); //outputting reponse
    })
    .catch(function (error) { //catching any errors
        console.log(error);
    });

    return ( 
        <div>
            <h1 className="title">Prayer</h1>
            <Button variant="success">Click me Fahim</Button>

        </div>
     );
}
 
export default Fahim;
