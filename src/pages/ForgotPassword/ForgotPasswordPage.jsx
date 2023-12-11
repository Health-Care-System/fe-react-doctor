// Packages
import { Link } from "react-router-dom";

// Components
import { Input } from '../../components/ui/Form';
import { Button } from '../../components/ui/Button';
// import { ErrorMsg } from "../../components/Error/ErrorMsg";

// Assets
import visibility from '../../assets/icon/visibility.svg'
import brandLogo from '../../assets/icon/brandLogo.png'
import doctorLogin from '../../assets/image/doctorLogin.png'
import { useState } from "react";

export const ForgotPasswordPage = () => {
    return (
        <div className="min-vh-100 px-5">
            <div className="d-flex min-vh-100 flex-column flex-md-row justify-content-evenly align-items-center">
                <div className="d-none d-lg-block">
                    <img width={528} height={591} src={doctorLogin} alt="Doctor Login" />
                </div>
                <div style={{ maxWidth: '29.9375rem' }}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

const LoginForm = () => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        setStep(3);
    };

    const handleCreateNewPassword = (e) => {
        e.preventDefault();
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const InputProps = {
        type: showPassword ? "text" : "password",
        className: "form-control-lg bg-neutral-300 border-0 form-color",
        placeholder: "Masukkan password baru",
        onChange: (e) => setPassword(e.target.value)
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={brandLogo} style={{ width: 318, height: 92 }} alt="Brand Logo" />
            </div>
            <form disabled={step === 2 || step === 3} className="mt-3" onSubmit={step === 1 ? handleResetPassword : step === 2 ? handleVerifyOTP : handleCreateNewPassword}>
                <div className="mb-3">
                    {step === 1 && (
                        <>
                            <h2 className="fw-bold text-primary text-center">Lupa Password?</h2>
                            <p className="text-center">Masukkan alamat email yang terkait dengan akun Anda</p>
                        </>
                    )}
                    {step === 2 && (
                        <h2 className="fw-bold text-primary text-center">Verifikasi OTP</h2>
                    )}
                    {step === 3 && (
                        <>
                            <h2 className="fw-bold text-primary text-center">Masukkan Password Baru</h2>
                            <p className="text-center">Kata sandi baru Anda harus berbeda dengan kata sandi yang digunakan sebelumnya</p>
                        </>
                    )}
                </div>

                {step === 1 && (
                    <div className="mb-3">
                        <label htmlFor='emailLogin' className="form-label fw-medium">
                            Email
                        </label>
                        <Input
                            type="email"
                            {...InputProps}
                            name="email"
                            placeholder="Masukkan email anda"
                        />
                    </div>
                )}

                {step === 2 && (
                    <div className="mb-3">
                        <label htmlFor="otpInput" className="form-label fw-medium text-center">
                            Masukkan 4 kode OTP yang telah dikirimkan ke email Anda.
                        </label>
                        <div className="d-flex">
                            {[1, 2, 3, 4].map((index) => (
                                <Input
                                    key={index}
                                    type="text"
                                    className="form-control-lg bg-neutral-300 border-0 form-color w-25 m-2 text-center"
                                    name={`otpInput${index}`}
                                    placeholder="0"
                                    maxLength={1}
                                    inputMode="numeric"
                                    onChange={(e) => {
                                        if (e.target.value.length === e.target.maxLength) {
                                            const nextInput = document.querySelector(`[name=otpInput${index + 1}]`);
                                            if (nextInput) {
                                                nextInput.focus();
                                            }
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <>
                        <div className="mb-3">
                            <label htmlFor='newPassword' className="form-label fw-medium">
                                Password
                            </label>
                            <div className="input-group">
                                <Input
                                    {...InputProps}
                                    name="newPassword"
                                />
                                <span
                                    className="input-group-text border-0 bg-neutral-300 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <img
                                        src={visibility}
                                        alt={showPassword ? 'hide' : 'show'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='confirmPassword' className="form-label fw-medium">
                                Konfirmasi Password
                            </label>
                            <div className="input-group">
                                <Input
                                    {...InputProps}
                                    name="confirmPassword"
                                    placeholder="Konfirmasi password baru"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span
                                    className="input-group-text border-0 bg-neutral-300 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <img
                                        src={visibility}
                                        alt={showPassword ? 'hide' : 'show'}
                                    />
                                </span>
                            </div>
                        </div>
                    </>
                )}

                {step !== 1 && (
                    <div className="d-flex justify-content-end mb-3">
                        <Link to={'/login'} className="p-2 g-col-6 text-black link-underline-dark">
                            Kembali ke halaman login?
                        </Link>
                    </div>
                )}

                <Button
                    type="submit"
                    className="btn-primary text-light w-100"
                    disabled={step === 3}
                >
                    {step === 1 ? 'Reset Password' : step === 2 ? 'Verifikasi OTP' : 'Pulihkan Password'}
                </Button>
            </form>
        </>
    )
}

export default LoginForm;