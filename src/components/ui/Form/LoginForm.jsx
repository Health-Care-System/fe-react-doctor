import { useState } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import {
    handleLoginError,
    validateFormLogin
} from '../../../services/login-service'
import { Input } from './Input'
import { Button } from '../Button'
import client from '../../../utils/auth'
import { ErrorMsg } from '../../Error/ErrorMsg'
import lock from '../../../assets/icon/lock.svg'
import brandLogo from '../../../assets/icon/brandLogo.png'
import visibility from '../../../assets/icon/visibility.svg'
import useForm from '../../../hooks/useForm'

const initialState = {
    showPassword: false,
    email: '',
    password: '',
}

export const LoginForm = () => {
    const navigate = useNavigate();
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
        const newData = {
            email: form.email,
            password: form.password
        }
        if (validateFormLogin(newData, setErrors)) {
            try {
                setLoading(true);
                const res = await client.post('/doctors/login', newData);
                if (res.status === 200) {
                    const { token } = res.data.results;
                    Cookies.set('token', token);
                    navigate('/');
                }
            } catch (error) {
                handleLoginError(error, setErrors);
            } finally {
                setLoading(false);
                setForm((prev) => ({
                    ...prev,
                    email: '',
                    password: ''
                }));
            }
        }
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={brandLogo} style={{ width: 318, height: 92 }} />
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
                        className="form-control-lg"
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
                            className="form-control-lg border-end-0"
                            name="password"
                            value={form.password}
                            placeHolder="Masukkan password"
                            handleChange={handleInput}
                        />
                        <span
                            className="input-group-text cursor-pointer"
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