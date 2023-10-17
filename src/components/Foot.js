import "../styles/footer.css"
import CT_SkillTest_v351 from "../pictures/CT_SkillTest_v351.jpeg"

function footer() {
  return (
    <div id="footer">
      <div class="logoWrapper">
        <div class="logo">
          <img src={CT_SkillTest_v351} alt="" />
        </div>
        <div class="logoText">
          <div id="upperText">LOSANGELES</div>
          <div id="lowerText">MOUNTAINS</div>
        </div>
      </div>

      <div class="footerText">COPYRIGHT 2016. ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default footer
