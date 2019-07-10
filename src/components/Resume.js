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
    let resumeData = this.props.resumeData;
      return (<section id="howItWorks">
          <div className="bottom-chevron" ><div id="howItWorksAnchor" className="bottom-chevron__right bg-blue-steel-light mobile:bg-blue-steel-light"></div></div>
          <div className="row education">
          <h1>HOW IT WORKS</h1>
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
                  <Tab label={<span><b>FOR DEVELOPERS</b></span>} />
                  <Tab label={<span><b>FOR COMPANIES</b></span>} />
              </Tabs>
          <SwipeableViews
              axis={'x-reverse'}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
          >
              <TabContainer dir={'ltr'}>
                  <div>
                      <h6>
                          Are you one of the best remote developers out there?
                          Here is how you get into the pool of elite talent.
                      </h6>
                      <br />
                  </div>
                  <div className="main-col">
                      <div className="row item">
                          <div className="twelve columns">
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 1</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>Take a coding quiz</b><br />
                                  You have three chances to complete a coding quiz geared towards your role. Try it out!</em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 2</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>Complete a coding challenge</b><br />
                                  Once you ace the quiz, you will be asked to implement a quick project. Senior developers will code review and judge if you passed. <i>This project will also be accessible to your future employer</i></em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 3</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>Get offers</b><br />
                                  In a 30 min remote interview we will go through your professional career and previous projects to match you with companies that best fit your profile!</em>
                              </p>
                          </div>
                      </div>
                  </div>
                  <Button variant="outlined"  style={{ borderColor: "rgb(17, 58, 140)", color: 'rgb(17, 58, 140)' }} >
                      Take the quiz
                  </Button>
              </TabContainer>
              <TabContainer dir={'ltr'}>
                  <div>
                      <h6>
                          Stop wasting time on bad candidates.
                          Get introduced to <b style={{ fontWeight: "normal" }}>better</b> remote engineers today.
                      </h6>
                      <br />
                  </div>
                  <div className="main-col">
                      <div className="row item">
                          <div className="twelve columns">
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 1</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>We interview and prescreen candidates</b><br />
                                  We source candidates and put them through a quiz, a codepen challenge and a 30min interview with senior engineers.</em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 2</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>You define roles and requirements</b><br />
                                  We match our pool of vetted developers against your requirements and select the best fits to be interviewed by you.</em>
                              </p>
                              <p className="info">
                                  <span style={{ color: 'rgb(214, 178, 19)'  }}>Step 3</span>
                                  <span>&bull;</span> <em className="date">
                                  <b>Carefree hire</b><br />
                                  We guarantee a successful hire. If you change your mind in the first month, we will pick up the tab.</em>
                              </p>
                          </div>
                      </div>
                  </div>
                  <Button variant="outlined"  style={{ borderColor: "rgb(17, 58, 140)", color: 'rgb(17, 58, 140)' }} >
                      Get Started
                  </Button>
              </TabContainer>
          </SwipeableViews>
          </div>
         </div>

      </section>
    );
  }
}