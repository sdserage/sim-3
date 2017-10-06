import React, { Component } from 'react';
import './Login.css';
import loginlogo from "../../assets/logo.png"

export default class Login extends Component {
    render() {
        return (
            <div id='root'>
                <div className='Auth_parent_container'>
                    <div className='Auth_child_container'>
                        <div className='Auth_logo_container'>
                            <img class="Auth_logo_img" src={loginlogo} />
                            <div className="Auth_logo_text open-sans-bold">Helo</div>
                        </div>
                        <div className='Auth_link_container'>
                            <div className='Auth_auth0_div open-sans black-bgc'>
                                <a className="Auth_auth0_link open-sans open-sans" href={process.env.REACT_APP_LOGIN}>Login/Register</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}