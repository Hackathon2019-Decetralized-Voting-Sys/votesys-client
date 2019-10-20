import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Block from '../../Block';
import socket from '../../socket';

// const styles = theme => ({
//     '@global': {
//         body: {
//             backgroundColor: theme.palette.common.white,
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//       },
// });
export default class Election extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasVoted: false
        }
    }

    handleSubmit = () => {
        let voteBlock = new Block(1,"1231",2); //TODO
        socket.emit('voteBlock', {voteBlock});
    }

    render() {
        const {classes} = this.props
        if (this.state.hasVoted) {
            return (
                <div>
                    <h1>Thanks for voting!</h1>
                    <h2>Your vote has now been updated on the public ledger</h2>
                </div>
            )
        }
        return (
            <div>
                {/* <div>
                    <input type="text" placeholder="Search for elections on the blockchain" />
                    <button>Search</button>
                </div> */}
                <div className="search-container">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="search"
                        label="Search"
                        name="search"
                        placeholder='Search for elections on the blockchain'
                        autoFocus
                        onChange={this.handleChange}
                        style={{ width: 750 }}
                        onKeyPress = {this.handleKeyPress}
                    />
                </div>
                <div>
                    <Typography component="h1" color = 'primary' variant="h3">CUNY Student Government Elections</Typography>
                    <hr></hr>
                    <form>
                        <div>
                            <h2>President:</h2>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="1" />
                                    Aleena Sheikh
                                </label>
                            </div>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="2" />
                                    Sami Hussein
                                </label>
                            </div>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                                <label>
                                    <input type="radio" name="president" value="3" />
                                    Tushar Malakar
                                </label>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            //align="right"
                            variant="contained"
                            color="primary"
                            // className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                        VOTE
                        </Button>
                        {/* <submit><button onSubmit={this.handleSubmit}>VOTE!</button></submit> */}
                    </form>  
                </div>
                <hr></hr>
            </div>
        )
    }
}
