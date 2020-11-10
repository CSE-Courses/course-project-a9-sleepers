
import React, {useEffect,useState} from 'react';
import Desktop from '../images/Desktop.png';
import ImageMapper from 'react-image-mapper';


//console.log("In VD", dark)

//Calculating Current Window width
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}


export default function VisualDesktop (){
  let width = useCurrentWitdh();
  console.log(width);

  const MAP = {

    name: "my-map",
    areas: [
      { name: "Google", shape: "poly", coords: [640,350,1290,350,1290,810 ,640,810],  href : '/Tictac' , strokeColor:"blue",},
      { name: "Timer", shape: "poly", coords: [1425,800,1570,800,1563,890,1433,890],  href:'/Timer' ,strokeColor:"purple",   },
      { name: "Calculator", shape: "poly", coords: [1520,900,1595,885,1720,960,1630,1000], strokeColor:"yellow", href:'/Calculator'  },
      { name: "Cat", shape: "poly", coords: [1570,350,1730,370,1700,450,1540,450],  href:'/Cat' ,strokeColor:"yellow",   },
      { name: "Radio", shape: "poly", coords: [820,820,585,820,585,930,820,930], strokeColor:"brown", href:'/Radio'},
      { name: "ToDoList", shape: "poly", coords: [1570,350,1730,370,1700,450,1540,450],  href:'/ToDoList' ,strokeColor:"green", coords: [1200,980,1270,925,1420,1000,1330,1100]  },
      // TODO { name: "Calendar", shape: "poly", coords: [500,500,585,500,585,930,820,930], strokeColor:"blue", href:'/Calendar'}

      // more to be add: checklist.. calender... ...etc
    ]
  }
  return(
          <ImageMapper src={Desktop} className="img-fluid"  map={MAP} width={width} imgWidth={1920}/>

  );
}
