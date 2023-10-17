import '../styles/stickynav.css';
import CT_SkillTest_v351 from '../pictures/CT_SkillTest_v351.jpeg';

function stickynav() {
  return (
    <div id="navcontainer">
      <div className="nav">
        <div className='logoWrapper'>
        <div className="stickylogo">
          <img src={CT_SkillTest_v351} alt="" />
        </div>
        <div class="logoText">
            <div id="upperText">LOSANGELES</div>
            <div id="lowerText">MOUNTAINS</div>
        </div>
        </div>
        <div className="stickyNavItem">
          <div>
            <a href="#historyContainer">01. HISTORY </a>
          </div>
          <div>
            <a href="#climbText">02. TEAM</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stickynav;
