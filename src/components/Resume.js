import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}


export default  class Resume extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    }

  render() {
      const { language, translationData } = this.props
      return (<section id="howItWorks">
          <div className="bottom-chevron" ><div id="howItWorksAnchor" className="bottom-chevron__right bg-blue-steel-light mobile:bg-blue-steel-light"></div></div>
          <div className="row education">
          <h1>{translationData[language]['howItWorks']}</h1>
          <div style={{
              // backgroundColor: theme.palette.background.paper,
          }}>
              <img style={{ width: '60%',  display: 'block', margin: 'auto' }} src="images/remoteEU.png" alt="image loading" />
              <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  centered
              >
                  <Tab label={<span><b>{translationData[language]['forDevelopers']}</b></span>} />
                  <Tab label={<span><b>{translationData[language]['forCompanies']}</b></span>} />
              </Tabs>
          <SwipeableViews
              axis={'x-reverse'}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
          >
              <TabContainer dir={'ltr'}>
                  <div>
                      <h6>{translationData[language]['forDevelopersHeader']}</h6>
                      <br />
                  </div>
                  <div className="main-col">
                      <div className="row item">
                          <div className="twelve columns">
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 1</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>{translationData[language]['forDevelopersTitle1']}</b><br />
                                  <span dangerouslySetInnerHTML={{ __html: translationData[language]['forDevelopersContent1']}}></span>
                                  </em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 2</span>
                                  <span>&bull;</span> <em className="date">                                  <b>{translationData[language]['forDevelopersTitle2']}</b><br />

                                  <span dangerouslySetInnerHTML={{ __html: translationData[language]['forDevelopersContent2']}}></span></em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 3</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>{translationData[language]['forDevelopersTitle3']}</b><br />
                                  <span dangerouslySetInnerHTML={{ __html: translationData[language]['forDevelopersContent3']}}></span>
                                  </em>
                              </p>
                          </div>
                      </div>
                  </div>
                  <Button variant="outlined"  style={{ borderColor: "rgb(17, 58, 140)", color: 'rgb(17, 58, 140)' }} > {translationData[language]['forDevelopersButton']}
                  </Button>
              </TabContainer>
              <TabContainer dir={'ltr'}>
                  <div>
                      <h6 dangerouslySetInnerHTML={{ __html: translationData[language]['forCompaniesHeader']}}></h6>
                      <br />
                  </div>
                  <div className="main-col">
                      <div className="row item">
                          <div className="twelve columns">
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 1</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>{translationData[language]['forCompaniesTitle1']}</b><br />
                                  {translationData[language]['forCompaniesContent1']}
                                  </em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 2</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>{translationData[language]['forCompaniesTitle2']}</b><br />
                                  {translationData[language]['forCompaniesContent2']}</em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>{translationData[language]['step']} 3</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>{translationData[language]['forCompaniesTitle3']}</b><br />
                                  {translationData[language]['forCompaniesContent3']}</em>
                              </p>
                          </div>
                      </div>
                  </div>
                  <Button variant="outlined"  style={{ borderColor: "rgb(17, 58, 140)", color: 'rgb(17, 58, 140)' }} >{translationData[language]['forCompaniesButton']}</Button>
              </TabContainer>
          </SwipeableViews>
          </div>
         </div>

      </section>
    );
  }
}