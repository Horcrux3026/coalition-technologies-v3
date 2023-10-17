import { useState } from 'react';
import "../styles/schedule.css"
function Schedule() {
  const [tabs, setTabs] = useState(true);
  return (
    <div id="schedule">
      <div id="titles">
        <div className='titleName' onClick={()=>setTabs(true)}>MOUNTAIN1</div>
        <div className='titleName' onClick={()=>setTabs(false)}>MOUNTAIN2</div>
      </div>
      <div id="dates">
        {tabs ? (
          <>
            <div className="textContent">
              <div className="schedule">SCHEDULE</div>
              <div className="scheduleDates">
                <div className="dates">
                  25 Nov 2016
                  <br />
                  28 Nov 2016
                  <br /><br />
                  18 Dec 2016
                  <br /><br />
                  7 Jan 2017
                </div>
                <div className="events">
                  Vestibulum viverra
                  <br />
                  Vestibulum viverra
                  <br /><br />
                  Vestibulum viverra
                  <br /><br />
                  Vestibulum viverra
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="textContent">
                <div className="schedule">SCHEDULE</div>
                <div className="scheduleDates">
                  <div className="dates">
                    17 Nov 2016
                    <br />
                    13 Dec 2016
                    <br /><br />
                    28 Dec 2016
                    <br /><br />
                    9 Feb 2017
                  </div>
                  <div className="event">
                    Vestibulum viverra
                    <br />
                    Vestibulum viverra
                    <br /><br />
                    Vestibulum viverra
                    <br /><br />
                    Vestibulum viverra
                  </div>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Schedule;