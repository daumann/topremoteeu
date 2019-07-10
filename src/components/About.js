import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">

          <div className="bottom-chevron" ><div id="howItWorksAnchor" className="bottom-chevron__right bg-blue-steel-light mobile:bg-blue-steel-light"></div></div>

         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/remoteEUlogoNoText.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Top Remote EU</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}