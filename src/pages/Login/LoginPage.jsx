// Packages
import { useState } from 'react';
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

// Components
import { Input } from '../../components/ui/Form';
import { Button } from '../../components/ui/Button';
import { ErrorMsg } from "../../components/Error/ErrorMsg";

// Assets
import lock from '../../assets/icon/lock.svg'
import brandLogo from '../../assets/icon/brandLogo.png'
import visibility from '../../assets/icon/visibility.svg'
import doctorLogin from '../../assets/image/doctorLogin.png'
import './Login.css'
import { sendFormLogin } from '../../services/login-service';


export const LoginPage = () => {
    return (
        <div className=" min-vh-100 px-5">
            <div className="d-flex min-vh-100 flex-column flex-md-row justify-content-evenly align-items-center">
                <div className="d-none d-lg-block">
                    <img width={528} height={591} src={doctorLogin} />
                </div>
                <div style={{ maxWidth: '29.9375rem' }}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

const initialState = {
    showPassword: false,
    email: '',
    password: '',
}

const LoginForm = () => {
    const {
        form,
        setForm,
        handleInput,
        loading,
        setLoading
    } = useForm(initialState);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        default: '',
    });

    const togglePasswordVisibility = () => {
        setForm((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendFormLogin(form, setErrors, setLoading, setForm);
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <img
                    src={brandLogo}
                    style={{
                        width: 318,
                        height: 92
                    }} />
            </div>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <h3 className="fw-bold text-primary">Portal Dokter</h3>
                    <p>Kelola informasi kesehatan dengan aman, Silahkan masuk untuk melanjutkan</p>
                </div>

                <div className="mb-3">
                    <label
                        htmlFor='emailLogin'
                        className="form-label fw-medium">
                        Email
                    </label>
                    <Input
                        type="email"
                        className="form-control-lg bg-neutral-300 border-0 form-color"
                        name="email"
                        value={form.email}
                        placeHolder="Masukkan email"
                        handleChange={handleInput}
                    />
                    <ErrorMsg msg={errors.email} />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor='passwordLogin'
                        className="form-label fw-medium">
                        Password
                    </label>
                    <div className="input-group">
                        <Input
                            type={form.showPassword ? 'text' : 'password'}
                            className="form-control-lg bg-neutral-300 form-color border-0"
                            name="password"
                            value={form.password}
                            placeHolder="Masukkan password"
                            handleChange={handleInput}
                        />
                        <span
                            className="input-group-text border-0 bg-neutral-300 cursor-pointer"
                            onClick={togglePasswordVisibility}>
                            <img
                                src={visibility}
                                alt={form.showPassword ? 'hide' : 'show'}
                            />
                        </span>
                    </div>
                    <ErrorMsg msg={errors.password} />
                </div>

                <div className="d-flex justify-content-end mb-3">
                    <Link
                        to={'/login'}
                        className="p-2 g-col-6 text-black link-underline-dark">
                        <img src={lock} alt="lock" />
                        Lupa Kata Sandi
                    </Link>
                </div>

                <Button
                    type="submit"
                    className="btn-primary text-light w-100"
                    disabled={loading}
                >
                    {loading
                        ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        : 'Masuk'
                    }
                </Button>
            </form>
        </>
    )
}