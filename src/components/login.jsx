export default function Login() {
    return (
        <center>
            <div class='container'>
                <p></p>
                <label for='email'><b>E-mail </b></label>
                <input type='text' placeholder='ej. nombre@email.com' name='email' required></input>
                <p></p>
                <label for='contraseña'><b>Contraseña </b></label>
                <input type='password' placeholder='Ingrese su contraseña' name='contraseña' required></input>
                <p></p>
                <button type='submit'>Login</button>
                <p></p>
                <label><input type="checkbox" name="recordar"/> Recordarme</label>
            </div>
        </center>
    )
}