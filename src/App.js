import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        
            <div className="container text-center p-4"/>
                <Link to="/"><img className="my-2" src=".."/>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <Link to="/bitcoin_today" className="btn btn bg-light">Bitcoin Hari Ini</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ke_bitcoin" className="btn btn bg-light">Rupiah Ke Bitcoin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ke_rupiah" className="btn btn bg-light">Bitcoin Ke Rupiah</Link>
                        </li>
                    </ul>
                    <div id="routate">
                        <Routate exact path="/" component={"Home"}></Routate>
                        <Routate path="/bitcoin_today" component={Currency}></Routate>
                        <Routate path="/ke_rupiah" component={KeRupiah}></Routate>
                        <Routate path="/ke_bitcoin" component={KeBitcoin}></Routate>
                    </div>
                
                );
            }
        }
        export default App;
