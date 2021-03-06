import React, { Component } from 'react';

import me from 'img/me.jpg';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="row">
                    <div className="col-5 col-m-12 pull-right image">
                        <img src={me} alt="Me and my little friend"></img>
                    </div>
                    <div className="col-7 col-m-12 pull-right">
                        <h1>Quyen Duong</h1>
                        <span className="phonetic">(/kwiːn ˈduoʊŋ/)</span>
                        <hr></hr>
                        <p><i className="material-icons">phone_android</i>+358 (0) 417 276 866</p>
                        <p><i className="material-icons">mail_outline</i><a href="mailto:mindstorm1998@gmail.com">mindstorm1998@gmail.com</a></p>
                        <p><i className="material-icons">link</i><a href="http://avoc.me/">www.avoc.me</a> (You're here!)</p>
                        <div className="row social">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Av0c" className="fa fa-github"><span></span></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/duongkinh.quyen" className="fa fa-facebook"><span></span></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/add/av0cadodo" className="fa fa-snapchat-ghost"><span></span></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/av0c_/" className="fa fa-instagram"><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
