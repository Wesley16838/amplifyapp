import React, { Component } from "react";
import Academicpart from "./academic_part";
import pricov from "./Assets/img/pricov2x.png";
import responsive from "./Assets/img/responsive2x.png";
import ios from "./Assets/img/ios2x.png";
import bookstore from "./Assets/img/bookstore2x.png";
import taiwanets from "./Assets/img/taiwanets.png";
import hearttrade from "./Assets/img/hearttrade.png";
class Academic extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="academic">
        <h1 data-aos="fade-in">Professional Projects</h1>
        <div className="academic-section">
          <Academicpart
            title="TaiwaNets"
            intro="• A platform built with React Native and Redux to connect with Taiwanese who work at companies located in the USA"
            school="Professional Project"
            location="Taiwan"
            date="July. 2020 - Present"
            image={[taiwanets]}
            content="A platform to simplify the process of building network with Taiwanese reference who work at companies located in the USA. Collaborated with UI designer to conduct user research, discuss user story, create function map and define flowchart."
            front="React Native/ Redux/ Redux Thunk"
            back="AWS DynamoDB/ AWS Lambda Function/ AWS Cognito/ AWS API Gateway"
            mining=""
          />
          <Academicpart
            title="HeartTrade"
            intro="•	A platform that increases efficiency of trading daily necessities with users near around current location"
            school="COVID-19 Global Hackathon"
            location="Devpost	"
            date="Mar. 2020"
            image={[hearttrade]}
            content="The COVID-19 Global Hackathon is an opportunity for developers to build software solutions that drive social impact, with the aim of tackling some of the challenges related to the current coronavirus (COVID-19) pandemic. Contributions include but not limited to UI Design and Front-End development using React Hooks and Context API"
            git="https://github.com/Wesley16838/hackathon-COVID19"
            url="https://hearttrade.herokuapp.com/"
            front="React.js/ React Hooks/ Context API/ SCSS/ Gulp/ google-map-react"
            back="Node.js/ Express.js/ RESTful API/ MongoDB/ MongoDB Atlas/ Firebase"
            mining=""
          />
          <Academicpart
            title="PriCov"
            intro="Data Visualization Price Comparison Website"
            school="Stevens Institute of Technology"
            location="Hoboken, NJ"
            date="Fall 2019"
            image={[pricov]}
            content="Allows users to search products from eBay and Amazon using data 
mining and visualizing  data as different charts"
            git="https://github.com/Wesley16838/PriCov"
            url="https://pricovfrontend.herokuapp.com/
"
            front="React.js/ Apollo/ SCSS/ Gulp/ d3.js"
            back="GraphQL/ MongoDB/ Atlas/ Heroku/ Firebase"
            mining="Python/ Selenium"
          />
          <Academicpart
            title="Walker Bookstore"
            intro="A RWD online bookstore - iOS App &amp; Web"
            school="Stevens Institute of Technology"
            location="Hoboken, NJ"
            date="Spring 2019"
            image={[responsive, ios]}
            content="Features includes sign up, log in, Cart(add,
 remove, update and place order), Search 
books and display books in the page. This 
project cover security using JWT to 
authorize user’s information. Amazing 
design and perfect error handle."
            git="https://github.com/Wesley16838/Online-Bookstore"
            url="https://bookstore-cs546.appspot.com/
"
            front="Handlebars/ HTML/ CSS"
            back="RESTful API/ Express/ MongoDB/ Atlas/ JWT"
            mining=""
          />
        </div>
      </div>
    );
  }
}

export default Academic;
