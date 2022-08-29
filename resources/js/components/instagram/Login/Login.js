import React from "react";
import "./Login.scss";
import LoginForm from "./LoginForm";
import title from "../../img/Instagram.png";
import fbloginfrom from "../../img/fblogin.png";
import telephone from "../../img/telephones.png";
import iconsToDownloadApp from "../../img/iconsToDownloadApp.png";
import axios from "axios";
import { createBrowserHistory } from "history";
import UserProfil from "../userProfil/UserProfil";
import { Link } from "react-router-dom";

const history = createBrowserHistory();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            erroruserName: false,

            erroruserPassword: false,
            loginComponenet: true,
        };
        this.setState.bind(this);
    }
    changeInput(e, value) {
        this.setState({ [e]: value });
    }
    hideError(name) {
        const errorName = "error" + name;
        this.setState({ [errorName]: false });
    }

    loginRequest() {
        const formData = new FormData();
        formData.append("userName", this.state.userName);
        formData.append("userPassword", this.state.userPassword);

        axios({
            url: "/api/login",
            method: "POST",
            data: formData,
            dataType: "json",
        })
            .then((response) => {
                console.log(response.data);
                history.push("/userProfil");
                this.setState({
                    loginComponenet: false,
                });

                return true;
            })

            .catch(function (error) {
                console.log(error);
            });
    }
    logUser(e) {
        e.preventDefault();

        const test = /\d/.test(this.state.userPassword);
        const userNameLength = this.state.userName.length;
        const userPasswordLength = this.state.userPassword.length;

        if (userNameLength < 3) {
            this.setState({ erroruserName: true });
            return false;
        } else if (userPasswordLength < 7 || test === false) {
            this.setState({
                erroruserPassword: true,
            });
            return false;
        } else {
            const log = this.loginRequest();
        }
    }
    render() {
        return this.state.loginComponenet ? (
            <div className="loginPage">
                <div className="leftLogin">
                    <img className="imgTelephone" src={telephone} />
                </div>
                <div className="rightLogin">
                    <div className="rightUp">
                        <div className="imgTitle">
                            <img
                                className="imgInstagram"
                                alt="Instagram"
                                src={title}
                            />
                        </div>
                        <LoginForm
                            userName={this.state.userName}
                            userPassword={this.state.userPassword}
                            erroruserName={this.state.erroruserName}
                            erroruserPassword={this.state.erroruserPassword}
                            changeInput={this.changeInput.bind(this)}
                            hideError={this.hideError.bind(this)}
                            logUser={this.logUser.bind(this)}
                        />
                        {/* <form
                            className="formLogin"
                            onSubmit={(e) => this.logUser(e)}
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={token}
                            ></input>
                            <div className="userName">
                                <input
                                    type="text"
                                    placeholder="Numer telefonu, nazwa użytkownika lub adres "
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={(e) =>
                                        this.changeInput(
                                            e.target.name,
                                            e.target.value
                                        )
                                    }
                                    onFocus={(e) => {
                                        this.setState({ errorName: "" });
                                    }}
                                ></input>
                                <div className="error">
                                    {this.state.errorName}
                                </div>
                            </div>
                            <div className="password">
                                <input
                                    type="password"
                                    placeholder="Hasło"
                                    name="userPassword"
                                    value={this.state.userPassword}
                                    onChange={(e) =>
                                        this.changeInput(
                                            e.target.name,
                                            e.target.value
                                        )
                                    }
                                    onFocus={(e) => {
                                        this.setState({ errorPassword: "" });
                                    }}
                                ></input>
                                <div className="error">
                                    {this.state.errorPassword}
                                </div>
                            </div>
                            <div className="btnDiv">
                                <button className="btn" value="Zaloguj się">
                                    Zaloguj się
                                </button>
                            </div>
                        </form> */}
                        <div className="fblogindiv">
                            <img className="fbloginimg" src={fbloginfrom} />
                        </div>
                    </div>

                    <div className="registerDiv">
                        <p>
                            {" "}
                            Nie masz konta?
                            <Link to="./register">
                                <span className="registerSpan">
                                    {" "}
                                    Zarejestruj się
                                </span>
                            </Link>
                        </p>
                    </div>
                    <div className="divImgToDovnloadApp">
                        <img
                            className="imgIconsToDownloadApp"
                            src={iconsToDownloadApp}
                        />
                    </div>
                </div>
            </div>
        ) : (
            <UserProfil />
        );
    }
}

export default Login;
