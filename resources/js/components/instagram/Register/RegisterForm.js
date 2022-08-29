import React from "react";

export default function RegisterForm(props) {
    return (
        <form onSubmit={(e) => props.registerUser(e)} className="registerForm">
            <div className="inputDiv">
                <input
                    type="text"
                    placeholder="Numer telefonu lub adres email "
                    name="telEmail"
                    value={props.telEmail}
                    onChange={(e) =>
                        props.changeInput(e.target.name, e.target.value)
                    }
                    onFocus={(e) => props.hideError(e.target.name)}
                ></input>
                <div className="error">
                    {props.errortelEmail ? "Zły email lub numer telefonu" : ""}
                </div>
            </div>
            <div className="inputDiv">
                <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    name="nameSurname"
                    value={props.nameSurname}
                    onChange={(e) =>
                        props.changeInput(e.target.name, e.target.value)
                    }
                    onFocus={(e) => props.hideError(e.target.name)}
                ></input>
                <div className="error">
                    {props.errornameSurname ? "Za krótie imię i nazwisko" : ""}
                </div>
            </div>
            <div className="inputDiv">
                <input
                    type="text"
                    placeholder="Nazwa użytkownika "
                    name="userName"
                    value={props.userName}
                    onChange={(e) =>
                        props.changeInput(e.target.name, e.target.value)
                    }
                    onFocus={(e) => props.hideError(e.target.name)}
                ></input>
                <div className="error">
                    {props.erroruserName ? "Za krótka nazwa" : ""}
                </div>
            </div>
            <div className="inputDiv">
                <input
                    type="password"
                    placeholder="Hasło"
                    name="userPassword"
                    value={props.userPassword}
                    onChange={(e) =>
                        props.changeInput(e.target.name, e.target.value)
                    }
                    onFocus={(e) => props.hideError(e.target.name)}
                ></input>
                <div className="error">
                    {props.erroruserPassword ? "Złe hasło" : ""}
                </div>
            </div>
            <div className="btnDiv">
                <button className="btn">Dalej</button>
            </div>
        </form>
    );
}
