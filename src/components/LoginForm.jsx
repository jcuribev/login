import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginForm = () => {

    const [cedula, setCedula] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const attemptLogin = async (event) => {
        event.preventDefault();

        const dummyUrl = 'https://dummyjson.com/auth/login'
        const response = await fetch(dummyUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": cedula, //atuny0
                "password": password, //9uQFF1Lh
            })
        })
        handleResponse(response, event)
    }

    const handleResponse = (response, event) => {
        if (!response.ok) {
            alert("Invalid data")
            event.target.reset()
            return
        }

        setIsLogged(true)
    }

    return (
        <div className="my-5 mx-auto" style={{ width: 200 }}>
            <form onSubmit={event => attemptLogin(event)}>
                <div className="my-4">
                    <input placeholder="Usuario" className="form-control" type="text" name="user" onChange={e => setCedula(e.target.value)} />
                </div>
                <div className="my-4">
                    <input placeholder="Contraseña" className="form-control" type="text" name="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="my-4">
                    <button className="btn btn-primary" type="submit">Ingresar</button>
                </div>
            </form>
            {isLogged ? <Navigate  to={"welcome"} state={{cedula}}/> : null}
        </div>

    );
}

export default LoginForm 