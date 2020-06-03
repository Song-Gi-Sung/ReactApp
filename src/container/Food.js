import React, { Component } from 'react';
import Header from '../component/Header';
import Gnb from '../component/Gnb';
import Footer from '../component/Footer';

class Food extends Component {
    render() {
        return (
            <div>
                <Header />
                <Gnb />
                Food
                <Footer />
            </div>
        )
    }
}

export default Food;