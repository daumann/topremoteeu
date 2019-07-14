import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import translationData from './translationData';
class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            language: window.location.host.indexOf(".de") > -1 ? 'Deutsch' : 'English'
        }
    }

  render() {
    const { language } = this.state
    return (
      <div className="App">
        <Header setData={(val) => this.setState({ language: val })} translationData={translationData} language={language}/>
        <Resume translationData={translationData} language={language}/>
        <About translationData={translationData} language={language}/>
        <Testimonials translationData={translationData} language={language}/>
        <ContactUs translationData={translationData} language={language}/>
        <Footer translationData={translationData} language={language}/>
      </div>
    );
  }
}

export default App;