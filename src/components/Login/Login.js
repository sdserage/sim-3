import React, { Component } from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div id='root'>
                <div className='Auth_parent_container'>
                    <div className='Auth_child_container'>
                        <div className = 'Auth_logo_container'>
                            <img class="Auth_logo_img" src="" alt="logo"/>
                            <div className="Auth_logo_text open-sans-bold">Helo</div>
                        </div>
                        <div className = 'button'>
                            <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}