import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    const { language, translationData } = this.props
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
                <div>
                    <h4>{translationData[language]['contactHeader']}</h4>
                </div>
            </div>
          </div>
          <div className="row">
            <aside className="footer-widgets">
                <div>
                    <p style={{  }} className="lead" dangerouslySetInnerHTML={{ __html: translationData[language]['contactDescription']}}>
                    </p>
                </div>
            </aside>
          </div>
        </section>
        );
  }
}