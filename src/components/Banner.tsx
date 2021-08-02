import { useEffect, useState } from "react";
import EidImage from '../images/69133-moon-ramadan-lantern-free-download-png-hd.png'
import Form from "./Form";


export default function Banner() { 
    const today = new Date();
    const [diffMs, setDiffMs] = useState(0)
    const day = Math.floor(diffMs / (1000*60*60*24)); // day
    const hour = Math.floor((diffMs % 86400000) / 3600000); // hours
    const minute = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    const second = Math.round((((diffMs % 86400000) % 3600000) %  60000) / 1000); // minutes

    

    useEffect(() => {
        let myInterval = setInterval(() => {
            const today : Date = new Date();
            const times : number = today.getTime()
            
            setDiffMs(times - 1584208801000)
        }, 1000)
        return () => {
            clearInterval(myInterval);
        }
    }, [])
    
    return (
        <section className = 'banner'>
            <div className="container pt-5">
                
                <div className="row">
                    <div className="col-md-6">
                        <div className = 'd-flex align-items-center justify-content-center h-100'>
                            <div className="time text-center">
                                <h2 className="my-5">As-salamu alaykum</h2>
                                <hr />
                                <div>
                                    <h2 className="text-warning">Eid Mubarak</h2>
                                    <p><strong>May Allah fulfill all your dreams and hopes.</strong></p>
                                </div>
                                <hr />
                                {
                                    <div>  
                                        <h4>Time Counting For <span className="text-warning">Lock-down  😑😑 </span> </h4>
                                        <h2> 
                                        <span className="text-warning">{day} day </span> 
                                        <span className="text-primary">{hour} hour </span> 
                                        <span className="text-warning">{minute} minutes </span> 
                                        <span className="text-white">{second} second </span> </h2>  
                                    </div>
                                }
                                <Form />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div>
                            <img className = 'w-100' src = {EidImage} alt="eid fas" />
                        </div>
                    </div>
                </div>
                <p className ='bg-warning text-dark text-center'><small>Created by Abdul Basir</small></p>
            </div>
        </section>
    )
}
