import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import axios from "axios";

const Fahim = () => {
    //empty usestates for setting each 5 prayer times to display
    const [fajr, setFajr] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [dhuhr, setDhuhr] = useState('');
    const [asr, setAsr] = useState('');
    const [maghrib, setMaghrib] = useState('');
    const [isha, setIsha ] = useState('');

    const PrayerTimes = []; 
    axios.get('http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp', {
        params: { //parameters narrowing down request data for API
            city: 'Mansfield',
            country: 'GB'
        }
    })
    .then(function (response) {//response.data.data.timings accesses the times contains two data points
        //Updating usestates for each prayer times from the API response
        setFajr(response.data.data.timings.Fajr);
        setSunrise(response.data.data.timings.Sunrise);
        setDhuhr(response.data.data.timings.Dhuhr);
        setAsr(response.data.data.timings.Asr);
        setMaghrib(response.data.data.timings.Maghrib);
        setIsha(response.data.data.timings.Isha);
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
