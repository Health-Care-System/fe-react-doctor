// Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Utils / services
import { createOTP, verifyOTP } from "../../services/auth-service";
import { forgotPasswordEmailValidation, passwordValidation } from "../../utils/validation";

// Components
import { Input } from '../../components/ui/Form';
import { Button } from '../../components/ui/Button';
import visibility from '../../assets/icon/visibility.svg'
import brandLogo from '../../assets/icon/brandLogo.png'
import doctorLogin from '../../assets/image/doctorLogin.png'
import client from "../../utils/auth";
import useForm from "../../hooks/useForm";
import { ErrorMsg } from "../../components/Error/ErrorMsg";
import { Spinner } from "../../components/Loader/Spinner";

export const ForgotPasswordPage = () => (
    <div className="min-vh-100 px-5">
        <div className="d-flex min-vh-100 flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="d-none d-lg-block">
                <img width={528} height={591} src={doctorLogin} alt="Doctor Login" />
            </div>
            <div style={{ maxWidth: '29.9375rem' }}>
                <ForgotPasswordForm />
            </div>
        </div>
    </div>
);

const initState = {
    step: 1,
    showPassword: false,
    showPasswordConfirm: false,
    loadingStep1: false,
    loadingStep2: false,
    loadingStep3: false,
    password: '',
    confirmPassword: '',
    email: '',
    otp: ['', '', '', '']
}

const initError = {
    emailError: '',
    otpError: '',
    password: '',
    confirmPassword: ''
}

const ForgotPasswordForm = () => {
    const {
        form,
        handleChange,
        handleInput,
        error,
        setError,
    } = useForm(initState, initError);

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (forgotPasswordEmailValidation(form, setError)) {
            createOTP(form.email, handleChange, setError);
        }
    };

    const navigate = useNavigate();

    const createNewPassword = async (form) => {
        handleChange('loadingStep3', true)
        try {
            const body = {
                email: form.email,
                otp: form.otp.join(''),
                password: form.password,
            };

            const res = await client.post('/doctors/change-password', body);
            if (res?.status === 200) {
                navigate('/login');
            }
        } catch (error) {
            handleResetPassword(error)
        } finally {
            handleChange('loadingStep3', false)
        }
    };

    const togglePasswordVisibility = () => {
        handleChange('showPassword', !form.showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        handleChange('showPasswordConfirm', !form.showPasswordConfirm);
    };


    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={brandLogo} style={{ width: 318, height: 92 }} alt="Brand Logo" />
            </div>
            {form.step === 1 &&
                <Step1Form
                    form={form}
                    error={error}
                    handleInput={handleInput}
                    handleResetPassword={handleResetPassword} />
            }
            {form.step === 2 &&
                <Step2Form
                    form={form}
                    setError={setError}
                    error={error}
                    handleChange={handleChange} />}
            {form.step === 3 &&
                <Step3Form
                    form={form}
                    error={error}
                    togglePasswordVisibility={togglePasswordVisibility}
                    toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
                    handleInput={handleInput}
                    setError={setError}
                    createNewPassword={createNewPassword}
                />}
        </>
    );
};

const Step1Form = ({ form, error, handleInput, handleResetPassword }) => {
    return (
        <>
            <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                    <h2 className="fw-bold text-primary text-center">Lupa Password?</h2>
                    <p className="text-center">Masukkan alamat email yang terkait dengan akun Anda</p>
                    <div>
                        <label htmlFor='email' className="form-label fw-medium mt-3">
                            Email
                        </label>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Masukkan email anda"
                            value={form.email}
                            handleChange={(e) => handleInput(e)}
                        />
                    </div>
                    {error.email &&
                        <ErrorMsg msg={error.email} />
                    }
                    <div className="d-flex justify-content-end mb-3">
                        <Link to={'/login'} className="p-2 g-col-6 text-black link-underline-dark">
                            Kembali ke halaman login?
                        </Link>
                    </div>
                </div>
                <Button
                    disabled={!form.email || form.loadingStep1}
                    type="submit"
                    className="btn-primary text-light w-100"
                >
                    {form.loadingStep1
                        ? <Spinner />
                        : 'Reset Password'
                    }
                </Button>
            </form>
        </>
    )
};

const Step2Form = ({ form, error, handleChange, setError }) => {
    const [isOTPEmpty, setIsOTPEmpty] = useState(true);
    const handleOtpChange = (index, value) => {
        const updatedOtp = [...form.otp];
        updatedOtp[index] = value;

        handleChange('otp', updatedOtp);

        const isAllFilled = updatedOtp.every((digit) => digit !== '');
        if (isAllFilled) {
            setIsOTPEmpty(false);
        } else {
            setIsOTPEmpty(true);
        }
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        verifyOTP(form, handleChange, setError)
    }


    return (
        <div className="mb-3">
            <h2 className="fw-bold text-primary text-center">Verifikasi OTP</h2>
            <label htmlFor="otpInput" className="form-label fw-medium text-center">
                Masukkan 4 kode OTP yang telah dikirimkan ke email Anda.
            </label>
            <form>
                <div className="mb-3">
                    <div className="d-flex">
                        {form.otp.map((digit, index) => (
                            <input
                                key={index}
                                className="form-control-lg bg-neutral-300 border-0 form-color w-25 m-2 text-center"
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                    {error.otpError &&
                        <ErrorMsg msg={error.otpError} />
                    }
                </div>
                <div className="d-flex flex-row gap-3">
                    <Button
                        onClick={() => handleChange('step', 1)}
                        type="button"
                        className="btn-outline-primary border-2 fw-semibold w-100"
                    >
                        Kembali
                    </Button>
                    <Button
                        disabled={isOTPEmpty || form.loadingStep2}
                        onClick={handleVerifyOTP}
                        type="button"
                        className="btn-primary text-light w-100"
                    >
                        {form.loadingStep2
                            ? <Spinner />
                            : 'Verifikasi OTP'
                        }
                    </Button>
                </div>
            </form>
        </div>
    )
};

const Step3Form = ({
    form,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleInput,
    createNewPassword,
    setError,
    error
}) => {

    const handleResetPassword = () => {
        if(passwordValidation(form, setError)) {
            createNewPassword(form)
        }
    }

    return (
        <>
            <h2 className="fw-bold text-primary text-center">Masukkan Password</h2>
            <p className="text-center">Masukkan alamat email yang terkait dengan akun Anda</p>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor='newPassword' className="form-label fw-medium">
                        Password
                    </label>
                    <div className="input-group">
                        <Input
                            value={form.password}
                            type={form.showPassword ? "text" : "password"}
                            className="form-control-lg bg-neutral-300 border-0 form-color"
                            placeholder="Masukkan password baru"
                            handleChange={(e) => handleInput(e)}
                            name="password"
                        />
                        <span
                            className="input-group-text border-0 bg-neutral-300 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            <img
                                src={visibility}
                                alt={form.showPassword ? 'hide' : 'show'}
                            />
                        </span>
                    </div>
                    {error.password && <ErrorMsg msg={error.password} />}
                </div>
                <div className="mb-3">
                    <label htmlFor='confirmPassword' className="form-label fw-medium">
                        Konfirmasi Password
                    </label>
                    <div className="input-group">
                        <Input  
                            value={form.confirmPassword}
                            type={form.showPasswordConfirm ? "text" : "password"}
                            className="form-control-lg bg-neutral-300 border-0 form-color"
                            placeholder="Konfirmasi password baru"
                            handleChange={(e) => handleInput(e)}
                            name="confirmPassword"
                        />
                        <span
                            className="input-group-text border-0 bg-neutral-300 cursor-pointer"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <img
                                src={visibility}
                                alt={form.showPassword ? 'hide' : 'show'}
                            />
                        </span>
                    </div>
                    {error.confirmPassword && <ErrorMsg msg={error.confirmPassword} />}
                </div>
                <Button
                    disabled={form.loadingStep3 || (!form.password && !form.confirmPassword)}
                    onClick={handleResetPassword}
                    type="button"
                    className="btn-primary text-light w-100"
                >
                {form.loadingStep3
                    ? <Spinner />
                    : 'Konfirmasi Reset Password'
                }
                </Button>
            </form>
        </>
    )
};