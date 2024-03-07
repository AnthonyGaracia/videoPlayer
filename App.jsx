import './App.css'
import video from './toneDefa.mp4'



function App() {
  const videoJsOptions = {
    controls: true,
    sources: [{
      src: video,
      type: 'videp/mp4'
    }]
  }
  

  return (
   <div>

   </div>
  )
}

export default App
