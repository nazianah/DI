import React from 'react';
import data from '../data/complex.json';

class Example3 extends React.Component {
    render() {
      return (
        <div>
          {data.Experiences.map((experience, index) => (
            <div key={index}>
                <div><img src={experience.logo} alt={experience.companyName}/> </div>
              <a href='{experience.companyName}'>{experience.companyName}</a>
              {experience.roles.map((role, roleIndex) => (
                <div key={roleIndex}>
                  <h3>{role.title}</h3>
                  <p>{role.startDate}{role.location}</p>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Example3;