import React,{Component}from 'react';
import CanvasDraw from "react-canvas-draw";
import {Container, Col, Row,Button} from 'react-bootstrap';

class DrawingBoard extends Component {

  render(){
  return (
    <div>
      <h1 className="text-center">Drawing Board</h1>  
      <Container className="text-center ">
        <Row>
          <Col>
            <Button 
             onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
            >
                Save
            </Button>
            <Button  
            onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
          >
                Load
            </Button>
            <Button  
            onClick={() => {
              this.saveableCanvas.undo();
            }}
            >
                Undo
            </Button>
              <Button
               onClick={() => {
              this.saveableCanvas.clear();
              }}
            >
                Clear
            </Button>
          </Col>
        </Row>
      </Container>  
      <hr/>
        <CanvasDraw 
         ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
         hideGrid
        canvasWidth={"100%"}
        canvasHeight={800}
        lazyRadius={0}
        brushRadius={5}
        />

        <CanvasDraw
          disabled
          // hideGrid
          canvasWidth={"100%"}
          canvasHeight={800}

          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        />
    </div>
  );
};

}

export default DrawingBoard;