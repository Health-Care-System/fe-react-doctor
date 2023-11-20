import { LoginForm } from "../../components/ui/Form/LoginForm"
import styles from './LoginPage.module.css'

const LoginPage = () => {

    return (
        <div className="container" style={styles.LoginPage}>
            <div className="row h-100 align-items-center">
                <div className="col-lg-7">
                    <img width={550} height={400} src='../../../public/loginimg.png'/>
                </div>
                <div className="col-lg-5" >
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}


export default LoginPage