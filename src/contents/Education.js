import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Science Engineering" where="AKTU University" from="Aug 2016" to="Sep 2020 "/>
            <Widecard title="12th" where="M.K Collage Sitamarhi" from="2014" to="2016"/>
            <Widecard title="10th" where="S.G.R.L High School Sitamarhi" from="2014" to="2014"/>
            </div>
            )
        }
    }
    
export default Education
    