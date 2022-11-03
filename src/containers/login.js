import LoginForm from "../components/loginForm";


export default function Login() {
    return (
        <>
            <div className="w-full max-w-xs m-auto">
                <h1 className="border border-4 text-center p-1 mb-0">Inicio de Sesión</h1>
                <div className="">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </>
    )
}