import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default class Header extends Component {

  render() {
    // const classes = useStyles();
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      <header id="home" style={{ zIndex: 20 }}>
          <img style={{ maxWidth: '100%', height: '24px', top: '10px', position: 'absolute', left: '6%' }} className="profile-pic"  src="images/topremoteBanner.png" alt="" />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#howItWorksAnchor">How it Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline.vertical_landings_intro-header">Hire/ Be the
                    <a href="#howItWorksAnchor"> top 10%</a> of remote developers
                </h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>top-remote.eu is an exclusive network of the top remote software developers and designers in the world.
               </h3>
                Companies in <b>Europe</b> hire vetted remote developers for their most important projects.
               <hr/>
               <ul className="social">
                   <Button size="large" variant="outlined" style={{ fontSize: '1.9375rem', borderColor: "rgb(214, 178, 19)", color: '#fff' }}>
                       APPLY AS A DEVELOPER
                   </Button>
                   <span style={{ padding: '0.5em', fontSize: '20px' }}>or</span>
                   <Button size="large" variant="outlined" style={{ fontSize: '1.9375rem', borderColor: "rgb(214, 178, 19)", color: '#fff' }} >
                       HIRE TOP TALENT
                   </Button>
                  {/*{*/}
                    {/*resumeData.socialLinks && resumeData.socialLinks.map(item =>{*/}
                      {/*return(*/}
                              {/*<li key={item.name}>*/}
                                {/*<a href={item.url} target="_blank"><i className={item.className}></i></a>*/}
                              {/*</li>*/}
                            {/*)*/}
                          {/*}*/}
                    {/*)*/}
                  {/*}*/}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#howItWorksAnchor"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}