import LoginForm from "../components/loginForm";


export default function Login() {
    return (
        <>
            <div className="w-full max-w-xs m-auto">
                <h1 className="border border-4 border-danger text-center">Login</h1>
                <div className="border border-4 border-danger">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </>
    )
}