
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

export class App extends Component {
  
 api = process.env.REACT_APP_NEWS_API



  

    state = {
      page: 6,
      country: "in",
      progress: 0,
      category: "general"
       
    
    
}

  
  setProgress=(progress)=>{
    this.setState({progress: progress})

  }
  
 


  chooseCategory = (category)=>{
    this.setState({category: category});
  }


  chooseCountry = (country) => {
    this.setState({ country: country});

    console.log("onclick changed to" + country)

  }




  render() {
    return (
      <>
        <Router>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Navbar country={this.chooseCountry} category={this.chooseCategory} />




          <Routes>
            <Route exact path="/" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="general" pagesize={this.state.page} country={this.state.country} category="general" />} />
            <Route exact path="/general" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="general" pagesize={this.state.page} country={this.state.country} category="general" />} />

            <Route exact path="/business" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="business" pagesize={this.state.page} country={this.state.country} category="business" />} />
            <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="entertainment" pagesize={this.state.page} country={this.state.country} category="entertainment" />} />
            <Route exact path="/sports" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="sports" pagesize={this.state.page} country={this.state.country} category="sports" />} />
            <Route exact path="/science" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="science" pagesize={this.state.page} country={this.state.country} category="science" />} />
            <Route exact path="/technology" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="technology" pagesize={this.state.page} country={this.state.country} category="technology" />} />
            <Route exact path="/health" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="health" pagesize={this.state.page} country={this.state.country} category="health" />} />


            <Route exact path="/in" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="in" pagesize={this.state.page} country="in" category = {this.state.category}/>} />
            <Route exact path="/us" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="us" pagesize={this.state.page} country='us' category = {this.state.category}/>} />
            <Route exact path="/ae" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ae" pagesize={this.state.page} country='ae' category = {this.state.category}/>} />
            <Route exact path="/ar" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ar" pagesize={this.state.page} country='ar' category = {this.state.category}/>} />
            <Route exact path="/at" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="at" pagesize={this.state.page} country='at' category = {this.state.category}/>} />
            <Route exact path="/au" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="au" pagesize={this.state.page} country='au' category = {this.state.category}/>} />
            <Route exact path="/be" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="be" pagesize={this.state.page} country='be' category = {this.state.category}/>} />
            <Route exact path="/bg" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="bg" pagesize={this.state.page} country='bg' category = {this.state.category}/>} />
            <Route exact path="/br" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="br" pagesize={this.state.page} country='br' category = {this.state.category}/>} />
            <Route exact path="/ca" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ca" pagesize={this.state.page} country='ca' category = {this.state.category}/>} />
            <Route exact path="/ch" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ch" pagesize={this.state.page} country='ch' category = {this.state.category}/>} />
            <Route exact path="/cn" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="cn" pagesize={this.state.page} country='cn' category = {this.state.category}/>} />
            <Route exact path="/co" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="co" pagesize={this.state.page} country='co' category = {this.state.category}/>} />
            <Route exact path="/cu" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="cu" pagesize={this.state.page} country='cu' category = {this.state.category}/>} />
            <Route exact path="/cz" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="cz" pagesize={this.state.page} country='cz' category = {this.state.category}/>} />
            <Route exact path="/de" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="de" pagesize={this.state.page} country='de' category = {this.state.category}/>} />
            <Route exact path="/eg" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="eg" pagesize={this.state.page} country='eg' category = {this.state.category}/>} />
            {/* <Route exact path="/cz" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ae" pagesize={this.state.page} country='ae' />} />
            <Route exact path="/cz" element={<News  setProgress={this.setProgress} apiKey ={this.api}  key="ae" pagesize={this.state.page} country='ae' />} /> */}










          </Routes>
        </Router>

      </>


    )
  }
}

export default App
