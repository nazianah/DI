import React from 'react';
import data from '../data/complex.json';


class Example2 extends React.Component {
    render() {
      return (
        <div>
          {data.Skills.map((skill, index) => (
            <div key={index}>
              <h2>{skill.Area}</h2>
              {skill.SkillSet.map((set, setIndex) => (
                <div key={setIndex}>{set.Name}</div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Example2;
