import React from "react";

export default function LoginForm(props) {
    return (
        <form className="formLogin" onSubmit={(e) => props.logUser(e)}>
            <div className="userName">
                <input
                    type="text"
                    placeholder="Numer telefonu, nazwa użytkownika lub adres "
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
            <div className="password">
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
                <button className="btn" value="Zaloguj się">
                    Zaloguj się
                </button>
            </div>
        </form>
    );
}
