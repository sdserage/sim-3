import React, { Component } from 'react';
import Header from '../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="profile-box">
                    <button>Edit profile</button>
                </div>
            </div>
        )
    }
}