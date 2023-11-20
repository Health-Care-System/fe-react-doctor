import { LoginForm } from "../../components/ui/Form/LoginForm"


const LoginPage = () => {

    return (
        <div className="p-5">
            <div className="row">
                <div className="col-md-5 col-lg-6 col-6">
                    <img width={550} height={400} src="../../../public/loginimg.png" />
                </div>
                <div className="col-md-5 col-lg-6 col-6">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}


export default LoginPage