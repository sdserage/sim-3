import React, { Component } from 'react';
import './Header.css';
import Home_png from '../../assets/home.png';
import Searn_png from '../../assets/search.png';

export default class Header extends Component {

    render() {
        return (
            <div className="header-nav">
                <h1 className="brand">Helo</h1>
                <div className="home-icon">
                    <img className="home-img" src={Home_png} />
                </div>
                <div className="search-field">
                    <img className="search-img" src={Searn_png} />
                </div>
                <div className="current-page-name">
                    <span>Dashboard</span>
                </div>
                <div className="logout-div">
                    <span>Logout</span>
                </div>    
            </div>
        )
    }
}
