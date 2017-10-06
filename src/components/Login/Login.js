import React, { Component } from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div id='root'>
                <div className='Auth_Parent'>
                    <div className=''>
                        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
                    </div>
                </div>

            </div>
        )
    }
}