import React, { Component } from 'react';

export default class About extends Component {
  render() {
      const { language, translationData } = this.props
    return (
      <section id="about">
          <div className="bottom-chevron" ><div id="howItWorksAnchor" className="bottom-chevron__right bg-blue-steel-light mobile:bg-blue-steel-light"></div></div>

         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/remoteEUlogoNoText.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>{translationData[language]['aboutTitle']}</h2>
               <p>
                   <span dangerouslySetInnerHTML={{ __html: translationData[language]['aboutDescription']}}></span>
               </p>
            </div>
         </div>
      </section>
    );
  }
}