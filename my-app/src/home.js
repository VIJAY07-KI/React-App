  import React, { Component } from 'react'
  import { Link} from "react-router-dom"
  import axios from 'axios'
  
  export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          Users: []
      }
    }

    componentDidMount(){
        axios.get('http://localhost:3200/users')
        .then(response => {
            console.log(response.data)
            this.setState({
                Users: response.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    render() {
      return (
        <div>
          <h1> Listing Users</h1>
          <p>{this.state.Users.length}</p>
          {console.log("this.state--=======")}
          <ul>
            {this.state.Users.map(users =>{
                return <li key={users._id}><Link to={`/Users/${users._id}`}>{users.name}</Link></li>
            })}
          </ul>
        </div>
      )
    }
  }
  
  export default Home
  