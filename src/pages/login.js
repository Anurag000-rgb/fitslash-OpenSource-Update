import React, { useState, useContext } from 'react'
import Layout from "../components/layout"
import { AuthContext } from "../contexts/auth"
import firebase from "gatsby-plugin-firebase"
import { navigate } from 'gatsby'

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null,
    })

    const { setUser } = useContext(AuthContext)

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setData({ ...data, error: null })

        try {
            const result = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            setUser(result)
            navigate("/")
        } catch (err) {
            setData({ ...data, error: err.message })
        }
    }


    return (
        <Layout>
            <section className="contact py-5">
                <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="display-4 text-capitalize font-weight-bold">Sign In</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-4 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="text" className="form-control" name="email" value={data.email} onChange={handleChange} />
                                <br />
                                <br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="password" className="form-control" name="password" value={data.password} onChange={handleChange} ></input>
                                <br />
                                <br />
                            </div>

                            {/* submit button */}
                            {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}
                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" onSubmit={handleSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
            
        </Layout>
    )
}

export default Login