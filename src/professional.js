import React, { Component } from "react";
import ProfessionalPart from "./professional_part";
import advantech from "./Assets/img/advantech2x.png";
import creatop from "./Assets/img/creatop_lg@2x.png";
import armoury from "./Assets/img/armoury.png";

class Professional extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="professional">
        <h1 data-aos="fade-in">Work Experience</h1>
        <div className="professional-section">
          <ProfessionalPart
            title="Armoury Crate"
            position="Front-End Developer"
            company="ASUS"
            location="Taipei, Taiwan"
            date="July 2020 - Present"
            image={armoury}
            url="https://rog.asus.com/us/innovation/armoury_crate/"
            first="Optimized the performance of the application which owns millions of users by redesigning components’ architectures using React and Redux"
            second="Worked closely with UI designer to enhance user experience by improving responsive interface using SCSS"
          />
          <ProfessionalPart
            title="Water Treatment 
  Management Dashboard"
            position="Front-End Developer Intern"
            company="Advantech"
            location="Taipei, Taiwan"
            date="July 2019 - Aug 2019"
            image={advantech}
            url="https://dashboard-showcase-eks002.hz.wise-paas.com.cn/frame/Water-Treatment-Management?orgId=2&language=en&fbclid=IwAR09VDovTBCzoqaGYF8fyFeg2DIW6SdpFHRfTts_zKbFFA55zM1VGKOzuJI"
            first="Developed user-friendly panels with platform Grafana to visualize data using 
  AngularJS and SVG.js"
            second="Cooperated with front-end team to Improved visualizing time-series data for 
  infrastructure and application analytics"
          />
          <ProfessionalPart
            title="Bosswell &amp; HsuanFu Wood"
            company="Creatop"
            position="Front-End Developer Intern"
            location="Taichung, Taiwan"
            date="June 2019 - July 2018"
            image={creatop}
            url="http://www.hsuanfu.com.tw/en/"
            first="Redesigned and developped one page for air purifier company and customized a whole responsive web design using SCSS and Bootstrap for Furniture 
          company to increase brand and outreach."
            second=" Collaborated with UI designer and Back-End developer to coordinate visual 
          and database designs"
          />
        </div>
      </div>
    );
  }
}

export default Professional;
