// Packages
import { Link } from "react-router-dom";

// Components
import { Input } from '../../components/ui/Form';
import { Button } from '../../components/ui/Button';
import visibility from '../../assets/icon/visibility.svg'
import brandLogo from '../../assets/icon/brandLogo.png'
import doctorLogin from '../../assets/image/doctorLogin.png'
import { useState } from "react";
import client from "../../utils/auth";

    export const ForgotPasswordPage = () => (
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
    );

    const Step1Form = ({ email, setEmail }) => (
        <div className="mb-3">
            <h2 className="fw-bold text-primary text-center">Lupa Password?</h2>
            <p className="text-center">Masukkan alamat email yang terkait dengan akun Anda</p>
            <label htmlFor='emailLogin' className="form-label fw-medium mt-3">
                Email
            </label>
            <Input
                type="text"
                name="email"
                placeholder="Masukkan email anda"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex justify-content-end mb-3">
                <Link to={'/login'} className="p-2 g-col-6 text-black link-underline-dark">
                    Kembali ke halaman login?
                </Link>
            </div>
        </div>
    );
  
    const Step2Form = () => (
        <div className="mb-3">
            <h2 className="fw-bold text-primary text-center">Verifikasi OTP</h2>
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
    );
  
    const Step3Form = ({ showPassword, togglePasswordVisibility, setPassword, setConfirmPassword }) => (
        <>
            <h2 className="fw-bold text-primary text-center">Masukkan Password</h2>
            <p className="text-center">Masukkan alamat email yang terkait dengan akun Anda</p>
            <div className="mb-3 mt-3">
                <label htmlFor='newPassword' className="form-label fw-medium">
                    Password
                </label>
                <div className="input-group">
                    <Input
                        type={showPassword ? "text" : "password"}
                        className="form-control-lg bg-neutral-300 border-0 form-color"
                        placeholder="Masukkan password baru"
                        onChange={(e) => setPassword(e.target.value)}
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
                        type={showPassword ? "text" : "password"}
                        className="form-control-lg bg-neutral-300 border-0 form-color"
                        placeholder="Konfirmasi password baru"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name="confirmPassword"
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
    );
  
    const LoginForm = () => {
        const [step, setStep] = useState(1);
        const [showPassword, setShowPassword] = useState(false);
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [email, setEmail] = useState('');
    
        const handleResetPassword = (e) => {
            e.preventDefault();
            handleCreateOTP();
            setStep(2);
        };
    
        const handleVerifyOTP = async () => {
            try {
              const endpoint = '/doctors/verify-otp';
              const requestBody = {
                email: "mutiakhoirunniza@gmail.com",
                otp: '0468'
              };
          
              const responseVerify = await client.post(endpoint, requestBody);
          
              if (responseVerify?.status === 200) {
                // console.log('Verifikasi OTP berhasil:', responseVerify.data.meta.message);
                setStep(3);
              } else {
                console.error('Verifikasi OTP gagal:', responseVerify?.data.error);
              }
            } catch (error) {
              console.error('Terjadi kesalahan saat melakukan verifikasi OTP:', error);
            }
          };
    
          const handleCreateNewPassword = async (e) => {
            e.preventDefault();
          
            try {
              const endpoint = '/doctors/change-password';
              const requestBody = {
                email: email,
                otp: '0468',
                password: password,
              };
          
              const response = await client.post(endpoint, requestBody);
          
              if (response?.status === 200) {
                console.log('Password berhasil diubah:', response.data.meta.message);
                // You might want to redirect the user to a login page or a success page here
              } else {
                console.error('Gagal mengubah password:', response?.data.error);
              }
            } catch (error) {
              console.error('Terjadi kesalahan saat mengubah password:', error);
            }
          };
    
        const togglePasswordVisibility = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        };
    
        // const handleChangePassword = async () => {
        //     try {
        //         const endpoint = '/doctors/change-password';
        //         const requestBody = {
        //             email: email,
        //             otp: '0468',
        //             password: password,
        //         };
        
        //         const response = await client.post(endpoint, requestBody);
        
        //         if (response?.status === 200) {
        //             console.log('Password berhasil diubah:', response.data.meta.message);
        //         } else {
        //             console.error('Gagal mengubah password:', response?.data.error);
        //         }
        //     } catch (error) {
        //         console.error('Terjadi kesalahan saat mengubah password:', error);
        //     }
        // };        
    
        const handleCreateOTP = async () => {
            try {
                const postEndpoint = '/doctors/get-otp';
                const postRequestBody = {
                    email: "mutiakhoirunniza@gmail.com",
                };
                const postResponse = await client.post(postEndpoint, postRequestBody);
        
                console.log('Response:', postResponse);
        
                if (postResponse?.status === 200) {
                    console.log('OTP berhasil dibuat:', postResponse.data.meta.message);
                    const otpInformation = postResponse.data;
                    console.log('Informasi OTP:', otpInformation);
                } else {
                    console.error('Gagal membuat OTP:', postResponse?.data.error);
                }
            } catch (error) {
                console.error('Terjadi kesalahan saat membuat OTP:', error);
            }
        };        
        
        return (
            <>
                <div className="d-flex justify-content-center">
                    <img src={brandLogo} style={{ width: 318, height: 92 }} alt="Brand Logo" />
                </div>
                <form
                    disabled={step === 2 || step === 3}
                    className="mt-3"
                    onSubmit={step === 1 ? handleResetPassword : step === 2 ? handleVerifyOTP : handleCreateNewPassword}
                >
                    <div className="mb-3">
                        {step === 1 && <Step1Form email={email} setEmail={setEmail} />}
                        {step === 2 && <Step2Form />}
                        {step === 3 && <Step3Form
                            showPassword={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                            setPassword={setPassword}
                            setConfirmPassword={setConfirmPassword}
                        />}
                    </div>
            
                    <Button
                        type="submit"
                        className="btn-primary text-light w-100"
                        disabled={step === 3}
                    >
                        {step === 1 ? 'Reset Password' : step === 2 ? 'Verifikasi OTP' : 'Pulihkan Password'}
                    </Button>
                </form>
            </>
        );
    };

 export default LoginForm;