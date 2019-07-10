import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
              <li>
                  <a href={''}>Privacy Policy
                  </a>
              </li>
              <li>
                  <a style={{ pointerEvents: 'none' }} href={''}>
                      &bull;
                  </a>
              </li>
              <li>
                  <a href={''}>Terms of Service
                  </a>
              </li>
              <li>
                  <a style={{ pointerEvents: 'none' }} href={''}>
                      &bull;
                  </a>
              </li>
              <li>
                <a href={''}>Impressum
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