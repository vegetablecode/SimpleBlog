import React, { Component } from "react"

class Login extends Component {

    handleLogin = (e) => {
        console.log("login button")
        e.preventDefault()
    }

    handleRegister = (e) => {
        console.log("register button")
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Login</h4>
                <div className="post card loginBorder">
                    <div className="card-content">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="login"
                                placeholder="Login"
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                            <button className="btn green modernButton" onClick={e => this.handleLogin(e)}>
                                Log in
                            </button>

                            <button className="btn grey modernButton" onClick={e => this.handleRegister(e)}>
                                Sing up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login