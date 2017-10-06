import React, { Component } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import axios from 'axios';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      temporaryUserInfo: {}
    };
  }

  handleChange(val, propName){
    let newObj = {};
    newObj[propName] = val;
    this.setState({
      temporaryUserInfo: Object.assign({},this.state.temporaryUserInfo, newObj)
    })
  }

  updateInfo(){
    //axios.put()
  }

  render(){
    return (
      <div className="profile">
        <Header currentPage="Profile"/>
        <div className="profile-header">
          <img src='' alt="profile picture"/>
          <button className='update'>Update</button>
          <button className='cancel'>Cancel</button>
        </div>
        <div className="user-info">
          <p>First Name</p>
          <input type='text' onChange={(e)=>this.handleChange(e.target.value, 'firstName')}/>
          <p>Last Name</p>
          <input type='text' onChange={(e)=>this.handleChange(e.target.value, 'lastName')}/>
          <p>Hobby</p>
          <select onChange={(e)=>this.handleChange(e.target.value, 'hobby')}>
            <option disabled value> -- Select -- </option>
            <option value> Video Games </option>
            <option value> Hiking </option>
            <option value> Fishing </option>
            <option value> Rafting </option>
          </select>
        </div>
      </div>
    );
  }
}

export default Profile;
