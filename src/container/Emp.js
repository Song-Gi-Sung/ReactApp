import React, { Component } from 'react';
import Header from '../component/Header';
import Gnb from '../component/Gnb';
import Footer from '../component/Footer';

class Emp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Gnb />
                Emp
                <Footer />
            </div>
        )
    }
}

export default Emp;