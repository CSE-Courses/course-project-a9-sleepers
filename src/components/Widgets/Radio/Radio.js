import React from 'react'
import ReactPlayer from 'react-player/youtube'
import "./Radio.css"
 
// Only loads the YouTube player
class Radio extends React.Component {
  render () {
    return (
    	<div className='player-wrapper'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=-FlxM_0S2lA'
          className='react-player'
          playing = {true}
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}export default Radio;