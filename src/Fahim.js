import React from "react";
import { useState } from "react";
import './Fahim.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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
            <h1 className="place">Mansfield</h1>

            <Card className="prayerDiv">
                <h2 className="prayerText">Fajr: {fajr}</h2>
                <h2 className="prayerText">Sunrise: {sunrise}</h2>
                <h2 className="prayerText">Dhuhr: {dhuhr}</h2>
                <h2 className="prayerText">Asr: {asr}</h2>
                <h2 className="prayerText">Maghrib: {maghrib}</h2>
                <h2 className="prayerText">Isha: {isha}</h2>
            
            </Card>

        </div>
     );
}
 
export default Fahim;
