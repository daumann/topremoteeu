import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import LanguageIcon from '@material-ui/icons/Language';
import clsx from 'clsx';

const styles = theme => ({
    dropdownStyle: {
        border: 0,
        borderRadius: 0,
        backgroundColor: '#072e8c',
        color: '#ffffff',
    },
    root: {
        border: 0,
        color: 'white',
    },
    icon: {
        color: 'white',
    }
});


class Header extends Component {

  render() {
    let { classes, translationData, setData, language } = this.props;
    return (
      <React.Fragment>

      <header id="home" style={{ zIndex: 20 }}>
          <img style={{ maxWidth: '100%', height: '24px', top: '10px', position: 'absolute', left: '6%' }} className="profile-pic"  src="images/topremoteBanner.png" alt="" />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">{translationData[language]['home']}</a></li>
               <li><a className="smoothscroll" href="#howItWorksAnchor">{translationData[language]['howItWorks']}</a></li>
               <li><a className="smoothscroll" href="#testimonials">{translationData[language]['about']}</a></li>
               <li><a className="smoothscroll" href="#contact">{translationData[language]['contact']}</a></li>
            </ul>
         </nav>

          <Select
              className="languageSelect"
              classes={{ root: classes.root, icon: classes.icon }}
              value={language}
              onChange={(event) => {
                  setData(event.target.value);
              }}
              name="name"
              MenuProps={{ classes: { paper: classes.dropdownStyle } }}
              style={{ pointerEvents: 'all', color: 'white', position: 'absolute', right: '6%' }}
              renderValue={value => <span  style={{ border: 0, fontSize: 12 }} ><LanguageIcon style={{ fontSize: 28, marginBottom: '-10px' }} /> {translationData[language]['language']}: {value}</span>}
          >
              <MenuItem style={{ borderRadius: 0 }} value="English">English</MenuItem>
              <MenuItem value="Deutsch">Deutsch</MenuItem>
          </Select>

         <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline.vertical_landings_intro-header" dangerouslySetInnerHTML={{ __html: translationData[language]['title']}}>
                </h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{translationData[language]['subtitle']}
               </h3>
                <span dangerouslySetInnerHTML={{ __html: translationData[language]['subsubtitle']}}></span>
               <hr/>
               <ul className="social">
                   <Button size="large" variant="outlined" style={{ fontSize: '1.9375rem', borderColor: "rgb(214, 178, 19)", color: '#fff' }}>
                       {translationData[language]['button1']}
                   </Button>
                   <span style={{ padding: '0.5em', fontSize: '20px' }}>{translationData[language]['or']}</span>
                   <Button size="large" variant="outlined" style={{ fontSize: '1.9375rem', borderColor: "rgb(214, 178, 19)", color: '#fff' }} >
                       {translationData[language]['button2']}
                   </Button>
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

export default withStyles(styles)(Header);