import { LoginForm } from "../../components/ui/Form/LoginForm";
import doctorLogin from '../../assets/image/doctorLogin.png'


const LoginPage = () => {

    return (
        <div className=" min-vh-100 px-5">
            <div className="d-flex min-vh-100 flex-column flex-md-row justify-content-evenly align-items-center">
                <div className="d-none d-lg-block">
                    <img width={528} height={591} src={doctorLogin} />
                </div>
                <div style={{ maxWidth: '29.9375rem'}}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}


export default LoginPage