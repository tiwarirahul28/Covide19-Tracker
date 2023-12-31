import React, { useEffect, useState } from 'react';
import './Covid.css'

const Covid = () => {
    const [data, SetData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            SetData(actualData.statewise[0])
        }catch(err){
            console.log(err);
        }

    }
    
    useEffect(()=>{
        getCovidData();
    }, []);

  return (
    <>
    <section>
        <h2> Live</h2>
        <h1> Covid19 Coronavirus Tracker</h1>
        <ul>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Our</span> Country</p>
                        <p className='card__total card__small'>India</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Total</span> Recovered</p>
                        <p className='card__total card__small'>{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Total</span> Confirmed</p>
                        <p className='card__total card__small'>{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Total</span> Death</p>
                        <p className='card__total card__small'>{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Total</span> Active</p>
                        <p className='card__total card__small'>{data.active}</p>
                    </div> 
                </div>
            </li>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                        <p className='card__name'><span>Last</span> Updated</p>
                        <p className='card__total card__small'>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
    </>
  )
}

export default Covid