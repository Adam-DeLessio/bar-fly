import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      newData: []
    }
  }
  componentDidMount() {
    // let url = 'http://localhost:8000/ingredients/'
    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({ data: res })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })


    //     fetch('https://icanhazdadjoke.com/', {
    //   headers: { Accept: "application/json" }
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({randomJoke: res.joke})
    //     this.setState({jokesArray: [...this.state.jokesArray, res.joke] })
    //   })
    //   console.log(this.state.randomJoke)

  }
  render() {
    // let ing = this.state.data.map(i => {
    //   return(
    //     <Text key={i.id}>{i.name}</Text>
    //   )
    // })
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Hello Adam!</Text>
        <Text>{}</Text>
      </View>
    )
  }
}

export default App