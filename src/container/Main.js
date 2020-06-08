import React, { Component } from 'react';
import Header from '../component/Header';
import Gnb from '../component/Gnb';
import Footer from '../component/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const apiUrl = 'https://capstone-store.firebaseio.com/'

var now = new Date();
var mm = now.getMonth() + 1;
var yyyy = now.getFullYear();

if(mm < 10) {
    mm = "0" + mm;
}

now = yyyy + mm;

class Main extends Component {

    constructor() {
        super()
        this.state = {
            productions: {},
            amount: '',
        }
    }

    //데이터베이스 받아오기
    _getApi = () => {
        fetch(`${apiUrl}/user/id/.json`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(productions => this.setState({productions: productions}))
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.productions != this.state.productions
    }

    componentDidMount() {
        this._getApi()
    }

    render() {
        return (
            <div>
                <Header />
                <Gnb />
                    {
                        Object.keys(this.state.productions).map(id => {
                            const product = this.state.productions[id]
                            
                            return (
                                <div key={id} className="pd">
                                    {product.amount}
                                </div>
                            )
                        })
                    }
                <Footer />
            </div>
            
        )
    }
}

export default Main;