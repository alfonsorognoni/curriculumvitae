import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Skills = props => (
    <div className="Skills">
        <H2Styled name="Skills"></H2Styled>
        <div className="Skills-container">
            {props.data.map((skill, index) => (
                <div className="Skills-item" key={`Skills-${index}`}>
                    <h5>{skill.name}</h5>
                    <div className="Skills-line">
                        <span>{skill.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;