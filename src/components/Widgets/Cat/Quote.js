import React, { Component } from 'react'
import Button from './button';
import axios from 'axios'
class QuoteBox extends Component{
constructor(props){
    super(props)

    this.state = {
      quotes: []

    }

 }
componentDidMount(){
 axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
 .then(function(response){
     console.log(response.data.text)
     

    
    })
}
getNext = (ev) =>{
  ev.preventDefault()
  axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(function(response){
        //console.log(response)
        //console.log(response[1])
        console.log(response.data.text)
    })
}


render(){
const {content,title} = this.state.quotes
const filteredContent = String(content).replace(/(<\w>)|(<\/\w>)| (&#\d{4})/gm, "").replace(/(;)/g,"'")
 console.log(content)

 return(
   <React.Fragment>
      <h2>A little inspiration for the day</h2>
      <div className='outerQuoteBox'>
        <div className='innerQuoteBox'>
            <p>{filteredContent}</p><br/><br/>{title}
        </div>
        <Button getNext={this.getNext} />
    </div>
    </React.Fragment>)
   }
  }
export default QuoteBox