import React, { Component } from "react";
//export default App;


class Cat extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
        <title>Cats Api</title>
        <style dangerouslySetInnerHTML={{__html: "\n    .img {\n      width: 30%;\n    }\n\n  " }} />
        <div className="head text-center">
          <h1> Cat's Facts Api</h1>
          <img className="img my-3" src="animal.png" alt="" /><br />
          <React.Fragment>
       <button onClick={this.props.getNext} className='nextBtn' 
         type='button'>Next</button>
       </React.Fragment>        </div>
      </div>
    );
  }
};export default Cat;