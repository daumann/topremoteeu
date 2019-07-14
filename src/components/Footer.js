import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    const { language, translationData } = this.props
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
              <li>
                  <a href={''}>{translationData[language]['privacyPolicy']}
                  </a>
              </li>
              <li>
                  <a style={{ pointerEvents: 'none' }} href={''}>
                      &bull;
                  </a>
              </li>
              <li>
                  <a href={''}>{translationData[language]['termsOfService']}
                  </a>
              </li>
              <li>
                  <a style={{ pointerEvents: 'none' }} href={''}>
                      &bull;
                  </a>
              </li>
              <li>
                <a href={''}>{translationData[language]['impressum']}
                </a>
              </li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}