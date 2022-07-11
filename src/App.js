import './App.css';
import { Component } from 'react'

class App extends Component {
  // constructor(){
  //   super()
  //   this.state ={
  //     giphy: []
  //   }
  // }
  state = {
    giffy: []
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=sm1t4ygsjFoVmIrfFipykq7h1NCdWVCI&limit=25&rating=g')
      .then(res => res.json())
      .then(getGiffy => {
        console.log(getGiffy.data)
        this.setState({ giffy: getGiffy.data })
      })
  }
  render() {
    return (
      <div className='App'>
        {this.state.giffy.map(g =>
          <div> <img src={g.images.original.url} />
            <h3>{g.title}</h3>
          </div>)}

      </div>
    )
  }
}
export default App;
