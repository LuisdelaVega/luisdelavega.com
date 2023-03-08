import { Mailnews20 } from "@react95/icons";
import { styled } from "@xstyled/styled-components";
import { AiFillLinkedin } from "react-icons/ai";

import { Shortcut } from "../../../components";
import { ExperienceItem } from "./ExperienceItem";

//#region Styled Components
const Content = styled.div`
  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 22px;
  }

  > sub,
  span,
  p,
  a,
  svg {
    font-size: 18px;
  }
`;

const Title = styled.h1`
  margin-bottom: 5px;
`;

const IconInfoItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 10px auto;
`;
//#endregion Styled Components

export const Resume: React.FC = () => (
  <Shortcut
    title="Resume"
    icon={Mailnews20}
    modalProps={{
      defaultPosition: {
        x: 175,
        y: 0,
      },
      style: {
        width: "55vw",
        height: "85vh",
      },
    }}
  >
    <Content>
      <Title>Luis de la Vega Lopez</Title>
      <sub>Alexandria, Virginia, United States</sub>
      <IconInfoItem>
        <AiFillLinkedin />
        <a
          href="https://www.linkedin.com/in/luisrdelavega/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/luisrdelavega
        </a>
      </IconInfoItem>

      <h2>Sumarry</h2>

      <p>
        Experienced Senior Web Developer and Certified Scrum Product Owner with
        over 8 years of experience in developing and delivering complex and
        modern web applications and employing agile methodologies for software
        development.
      </p>
      <p>
        Proven ability to lead development teams, mentor junior developers and
        work in a cross-functional environment. Adept at collaborating with
        stakeholders, including customers, developers, and business leaders, to
        prioritize features and ensure successful product releases.
      </p>

      <h2>Experience</h2>

      <ExperienceItem
        title="Senior Front-end Software Engineer"
        subTitles={["Spot by NetApp", "Jul 2022 - Feb 2023 (8 months)"]}
        logoPath="/Cloudcheckr.png"
        logoAlt="CloudCheckr logo"
        descriptions={[
          "Team lead on the development efforts to upgrade and update our Component Library (Storybook, Styled Components, Ant Design, nivo and Ag Grid). The Component Library is a resource shared by multiple Scrum Teams working on the front-end development of the CloudCheckr CMx product.",
          "Individual contributor on the front-end for the CloudCheckr CMx product. Implemented new features, mostly for the Cost Optimization capabilities. Maintained older features and fixed bugs based on priority.",
          "Responsible for writing Automated Tests for the UI.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: TypeScript, React, Storybook, Styled Components, Ant Design, nivo, Ag Grid, Robot Framework, Jest, Jira and Testing Library.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Lead Front-end Software Engineer | Engineering Manager"
        subTitles={["Novetta", "Mar 2021 - Jul 2022 (1 year 5 months)"]}
        logoPath="/Novetta.png"
        logoAlt="Novetta logo"
        descriptions={[
          "Worked with Product Managers and other stakeholders to identify requirements, create user stories, and maintain and prioritize the Product Backlog.",
          "Led the front-end team on the development of a platform designed to unify two web apps to support our customer's needs. Using integrated micro-services technologies and capabilities along with modern architecture, the platform provides enhanced functionality, greater performance and improved user experience; thus, expediting analytic discovery while enriching our customer's process.",
          "Engineering Manager with 2 direct reports.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: TypeScript, React, GraphQL, MobX-state-tree, SASS, Yarn, Jest, Jira and React Testing Library.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Lead Full Stack Software Engineer"
        subTitles={["Novetta", "Jun 2020 - Mar 2021 (10 months)"]}
        logoPath="/Novetta.png"
        logoAlt="Novetta logo"
        descriptions={[
          "Worked with Product Managers and other stakeholders to identify requirements, create user stories, and maintain and prioritize the Product Backlog.",
          "Communicated the Product Goal to the rest of the Scrum Team.",
          "Worked with a cross-functional group of Developers (AI/ML department, DevOps, etc.) to refine the Product Backlog items.",
          "Led and communicated the Release Plan for our product.",
          "Led the front-end team for a newly acquired contract where we created a web application that performs facial recognition on images and full motion video. This AI processes allowed us to extract entities (people) and build a network map of their known connections (other people seen with them). Other ML capabilities include Object Detection, Nearest Neighbor Search, etc.",
          "Mentored junior developers and summer interns.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: TypeScript, React, Redux, SASS, Node, Jest, Enzyme, AWS (Lambda, EC2, S3, SQS, API Gateway), Jira and PostgreSQL.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Full Stack Software Engineer"
        subTitles={["Novetta", "Feb 2017 - Jun 2020 (3 years 5 months)"]}
        logoPath="/Novetta.png"
        logoAlt="Novetta logo"
        descriptions={[
          "Redesigned and migrated existing user interfaces from Angular to React.",
          "Individual contributor in a cross functional team working on a product that performs Natural Language Processing using Rosoka to achieve multilingual entity and relationship extraction on documents.",
          "Responsible for developing new micro-services, user interfaces and NPM modules.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: React, Redux, Node, SASS, Jest, Enzyme, Java/Scala, AWS EC2, Leaflet, MongoDB, Elasticsearch, Webpack, Jira, and Gulp.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Full Stack Software Engineer"
        subTitles={["Cubic Corporation", "Jun 2016 - Feb 2017 (9 months)"]}
        logoPath="/Cubic Corporation.png"
        logoAlt="Cubic Corporation logo"
        descriptions={[
          "Responsible for redesigning the UI/UX and Back End services for the M3-SE product family.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: Angular, Node, Express, MongoDB, Gulp, Socket.io, Mocha + Chai + Sinon, and Python.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Full Stack Software Engineer"
        subTitles={[
          "Harris Corporation",
          "Jun 2015 - Jun 2016 (1 year 1 month)",
        ]}
        logoPath="/Harris Corporation.png"
        logoAlt="Harris Corporation logo"
        descriptions={[
          "Worked in R&D on a number of projects helping different cross-functional teams create robust and scalable applications.",
          "Designed, proposed and got funding for a project that performed Sentiment Analysis of news articles and Twitter data using Natural Language Processing to map out areas of conflict or around the world.",
          "Individual contributor on a product that preformed Real Time Image Recognition on a drone's video feed to recognize and follow vehicles on the ground. My responsibilities included designing and implementing the mobile app (iOS) that interfaced with the drones, designing the server and API, and designing and implementing a web UI that displayed the drone's location and trajectory in near real time.",
          "Individual contributor on a Real-time Ground Weather Intelligence application. The application tapped into the live feed of surveillance cameras and analyzed the footage to determine weather, road conditions, visibility (fog/low light), etc. The data was then displayed on a map that updated in real time. I was responsible for creating C++ wrappers for Matlab functions created by the Image Science team.",
          "Employed Agile methodologies (SCRUM, Kanban) for software development.",
          "Technologies used: Backbone.js, Handlebars.js, Node, MongoDB, Leaflet, Grunt, Objective-C, Java and C++.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="Full Stack Software Engineer"
        subTitles={["Harris Corporation", "May 2014 - Aug 2014 (4 months)"]}
        logoPath="/Harris Corporation.png"
        logoAlt="Harris Corporation logo"
        descriptions={[
          "Individual contributor for the Jagwire COTS product. I was responsible for the implementation of RESTful services.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: JavaScript, Jersey RESTful Web Services in Java, Apache Maven, Apache Tomcat 7, Apache CouchDB.",
        ]}
        boldSubtitles
      />
      <ExperienceItem
        title="iOS Software Engineer"
        subTitles={["Deloitte", "May 2014 - Aug 2014 (4 months)"]}
        logoPath="/Deloitte.png"
        logoAlt="Deloitte logo"
        descriptions={[
          "Developed two iOS 6 applications for both the iPhone and iPad for internal company use.",
          "Worked with JSON parsing from Web API, Version Checking, Platform Assurance, Model View Controllers, Table View Controllers, Page View Controllers, MKMapViews, MapBox, and TileMill.",
          "Employed Agile methodologies (SCRUM) for software development.",
          "Technologies used: Xcode and Objective-C.",
        ]}
        boldSubtitles
      />

      <h2>Education</h2>

      <ExperienceItem
        title="University of Puerto Rico-Mayaguez"
        subTitles={[
          "Bachelor's degree, Computer Software Engineering",
          "Aug 2009 - May 2015",
        ]}
        logoPath="/UPRM.png"
        logoAlt="UPRM logo"
      />

      <h2>Licenses & Certifications</h2>

      <ExperienceItem
        title="User Experience Design Fundamentals"
        subTitles={["Udemy"]}
        logoPath="/Udemy.png"
        logoAlt="Udemy logo"
      />
      <ExperienceItem
        title="Certified Scrum Product Owner (CSPO)"
        subTitles={["Scrum Alliance", "Badge ID - 1732406"]}
        logoPath="/Scrum Alliance.png"
        logoAlt="Scrum Alliance logo"
      />

      <h2>Honors & Awards</h2>

      <ExperienceItem
        title="Enrollment of Honor and Tuition Exemption"
        subTitles={[
          "University of Puerto Rico-Mayaguez",
          "Jan 2011 - May 2015",
        ]}
        logoPath="/UPRM.png"
        logoAlt="UPRM logo"
        descriptions={[
          "Awarded for being in the top five percent (5%) of my class and having an academic GPA of 3.50/4.0 ormore.",
        ]}
        boldSubtitles
      />
    </Content>
  </Shortcut>
);
