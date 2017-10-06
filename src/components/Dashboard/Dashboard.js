import React, { Component } from 'react';
import Header from '../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="wrapper">
                    <div className="profile-box">
                        <img className="robot-img" src="https://robohash.org/me" />
                        <p>Dan Abramov</p>
                        <button className="edit-btn">Edit profile</button>
                    </div>
                </div>
            </div>
        )
    }
}