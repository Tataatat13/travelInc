import { useEffect, useState } from "react";


function TodayDate () {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
    const today = new Date();
    const weekday = today.getDay();
    const weekdays = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ];
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today.getDate();
    setCurrentDate(`${weekdays[weekday]} ${date}.${month}.${year}`);
    }, []);
    return( <div>
        <h2 className="box_date">{currentDate}</h2>
        </div>
    )
}
export default TodayDate;