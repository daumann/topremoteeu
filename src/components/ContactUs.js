import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
                <div>
                    <h4>Get in touch
                    </h4>
                </div>
            </div>
          </div>
          <div className="row">
            <aside className="footer-widgets">
                <div>
                    <p style={{  }} className="lead">
                        <h3>Don't hesitate to contact us if we can help with anything. We'd love to hear from you.</h3>
                        Please email us at info@top-remote.eu with questions or feedback.</p>
                </div>
            </aside>
          </div>
        </section>
        );
  }
}