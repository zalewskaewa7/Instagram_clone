import React from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import UserProfil from "../userProfil/UserProfil";

import "./Register.scss";
import register from "../../img/Instagram-rejestracja.png";
import acceptRegul from "../../img/acceptRegulamin.png";
import iconsToDownloadApp from "../../img/iconsToDownloadApp.png";

import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            telEmail: "",
            nameSurname: "",
            userName: "",
            userPassword: "",
            errortelEmail: false,
            errornameSurname: false,
            erroruserName: false,
            erroruserPassword: false,
            registerComponenet: true,
        };
    }
    changeInput(e, value) {
        this.setState({ [e]: value });
    }
    hideError(name) {
        const errorName = "error" + name;
        this.setState({ [errorName]: false });
    }
    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    registerRequest() {
        const formData = new FormData();
        formData.append("telEmail", this.state.telEmail);
        formData.append("nameSurname", this.state.nameSurname);
        formData.append("userName", this.state.userName);
        formData.append("userPassword", this.state.userPassword);

        axios({
            url: "/api/register",
            method: "POST",
            data: formData,
            dataType: "json",
        })
            .then((response) => {
                console.log(response.data);
                history.push("/userProfil");
                this.setState({
                    registerComponenet: false,
                });

                return true;
            })

            .catch(function (error) {
                console.log(error);
            });
    }
    registerUser(e) {
        e.preventDefault();

        const testIfNumber = /\d/.test(this.state.userPassword);
        const telEmail = this.state.telEmail;
        const nameSurnameLength = this.state.nameSurname.length;
        const userNameLength = this.state.userName.length;
        const userPasswordLength = this.state.userPassword.length;

        if (!this.isValidEmail(telEmail) && !telEmail.match("[0-9]{9}")) {
            this.setState({ errortelEmail: true });

            return false;
        } else if (nameSurnameLength < 3) {
            this.setState({ errornameSurname: true });

            return false;
        } else if (userNameLength < 3) {
            this.setState({ erroruserName: true });
            return false;
        } else if (userPasswordLength < 7 || testIfNumber === false) {
            this.setState({
                erroruserPassword: true,
            });
            return false;
        } else {
            const log = this.registerRequest();
        }
    }

    render() {
        return this.state.registerComponenet ? (
            <div className="registerPage">
                <div className="componentUp">
                    <div className="registerImgDiv">
                        <img className="registerImg" src={register} />
                    </div>
                    <RegisterForm
                        telEmail={this.state.telEmail}
                        nameSurname={this.state.nameSurname}
                        userName={this.state.userName}
                        userPassword={this.state.userPassword}
                        errortelEmail={this.state.errortelEmail}
                        errornameSurname={this.state.errornameSurname}
                        erroruserName={this.state.erroruserName}
                        erroruserPassword={this.state.erroruserPassword}
                        changeInput={this.changeInput.bind(this)}
                        hideError={this.hideError.bind(this)}
                        registerUser={this.registerUser.bind(this)}
                    />

                    <div className="acceptRegDiv">
                        <img className="acceptRegImg" src={acceptRegul} />
                    </div>
                </div>

                <div className="divlinkTologinPage">
                    <p>
                        {" "}
                        Masz konto?
                        <Link to="/">
                            <span className="linkSpan"> Zaloguj się</span>
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
        ) : (
            <UserProfil />
        );
    }
}
export default Register;
