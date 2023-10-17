import '../styles/header.css';
import CT_SkillTest_v351 from "../pictures/CT_SkillTest_v351.jpeg"

function header() {
  return (
    <div id="header">
        <div className="nav">
            <div className="logo">
                <img src={CT_SkillTest_v351} alt="" />
            </div>
            <div className="navItem">
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

export default header;
