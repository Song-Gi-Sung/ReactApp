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

const aa = 'user';

var now = new Date();
var mm = now.getMonth() + 1;
var yyyy = now.getFullYear();

if(mm < 10) {
    mm = "0" + mm;
}

now = yyyy + mm;

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    },
});

class NewFood extends Component {

    constructor() {
        super()
        this.state = {
            productions: {},
            dialog: false,
            name: '',
            date: '',
            num: '',
            price: ''
        }
    }

    _getApi = () => {
        fetch(`${apiUrl}/${aa}/id/${now}/aheadStock.json`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(productions => this.setState({ productions: productions }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.productions != this.state.productions
    }

    _post(word) {
        return fetch(`${apiUrl}/user/id/${now}/aheadStock.json`, {
            method: 'POST',
            body: JSON.stringify(word)
        }).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            let nextState = this.state.productions;
            nextState[data.name] = word;
            this.setState({ productions: nextState });
        });
    }

    _delete(id) {
        return fetch(`${apiUrl}/user/id/${now}/aheadStock/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.productions;
            delete nextState[id];
            this.setState({ productions: nextState });
        });
    }

    componentDidMount() {
        this._getApi();
    }

    handleDialogToggle = () => this.setState({
        dialog: !this.state.dialog
    })

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleSubmit = () => {
        const name = {
            aheadStockName: this.state.name,
            aheadStockDate: this.state.date,
            aheadStockNum: this.state.num,
            aheadStockPrice: this.state.price

        }
        this.handleDialogToggle();
        if (!name.name && !name.date && !name.num && !name.price) {
            return;
        }
        this._post(name);
    }

    handleDelete = (id) => {
        this._delete(id);
    }

    render() {
        return (
            <div>
                <Header />
                <Gnb />
                <Footer />
                {
                    Object.keys(this.state.productions).map(id => {
                        const product = this.state.productions[id]
                        return (
                            <div key={id}>
                                <Card>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            날짜 : {product.aheadStockDate}
                                            &nbsp;갯수 : {product.aheadStockNum}
                                            &nbsp;가격 : {product.aheadStockPrice}
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Typography variant="h5" component="h2">
                                                    {product.aheadStockName}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="contained" color="primary" onClick={() => this.handleDelete(id)}>삭제</Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                <br />
                            </div>
                        );
                    })}

                <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
                    <DialogTitle>단어 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="이름" type="text" name="name" value={this.state.aheadStockName} onChange={this.handleValueChange} /><br />
                        <TextField label="날짜" type="number" name="date" value={this.state.aheadStockDate} onChange={this.handleValueChange} /><br />
                        <TextField label="갯수" type="number" name="num" value={this.state.aheadStockNum} onChange={this.handleValueChange} /><br />
                        <TextField label="가격" type="number" name="price" value={this.state.aheadStockPrice} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleDialogToggle}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewFood;