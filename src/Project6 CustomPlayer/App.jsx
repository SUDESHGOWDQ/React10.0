import React from 'react'
import ReactPlayer from 'react-player'
import './App.css'

const App = () => {
	const playerRef = React.useRef(null)
	const[isPlaying,setIsPlaying] = React.useState(false)
	const[isMuted,setIsMuted] = React.useState(false)
	const[volume,setVolume] = React.useState(0.5)
	const[duration,setDuration] = React.useState(0)
	const[progress,setProgress] = React.useState(0)
	const[seeking,setSeeking] = React.useState(false)

	const handlePlay = ()=>{setIsPlaying(!isPlaying)}
	const handleMute = ()=>{setIsMuted(!isMuted)}
	const handleVolumeChange = (e)=>{setVolume(parseFloat(e.target.value))}
	const handleProgress = (state)=>{setProgress(state.playedSeconds)}
	const handleDuration = (dur)=>{setDuration(dur)}




	function formatTime(seconds){
		if(isNaN(seconds)) return '00:00'
		const mins = Math.floor(seconds / 60)
		const secs = Math.floor(seconds % 60)
		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}

  return (
	<div className='App'>
	 <ReactPlayer 
	  ref={playerRef}
	  url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
	  playing={isPlaying}
	  muted={isMuted}
	  volume={volume}
	  width={'100%'}
	  height={'400px'}
	  onProgress={handleProgress}
	  onDuration={handleDuration}
	 />
	 <div className='time'>
	 	<span>{formatTime(progress)}</span>
	 	<input 
			className='input' 
			type='range' 
			min={0} 
			max={duration} 
			value={progress}
			onChange={(e) => {
				setProgress(parseFloat(e.target.value))
				setSeeking(true)
			}}
			onMouseUp={(e) => {
				setSeeking(false)
				playerRef.current.seekTo(parseFloat(e.target.value))
			}}
			width={'100%'}
		/>
	 	<span>{formatTime(duration)}</span>
	 </div>
	<div className='Controls'>
	<div className='left'>
	<button onClick={handleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
		<input type='range' min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}/>
	</div>
	<div className='middle'>
		<button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
	</div>
	<div className='right'>
	<button>Fullscreen</button>
	</div>
	</div>
	</div>
  )
}

export default App