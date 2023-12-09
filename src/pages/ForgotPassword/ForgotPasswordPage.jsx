// Packages
import { Link } from "react-router-dom";

// Components
import { Input } from '../../components/ui/Form';
import { Button } from '../../components/ui/Button';
import { ErrorMsg } from "../../components/Error/ErrorMsg";

// Assets
import brandLogo from '../../assets/icon/brandLogo.png'
import doctorLogin from '../../assets/image/doctorLogin.png'


export const ForgotPasswordPage = () => {
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

const LoginForm = () => {
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
            <form disabled={true} className="mt-3">
                <div className="mb-3">
                    <h3 className="fw-bold text-primary">Lupa Password?</h3>
                    <p>Jangan khawatir, kami akan mengirimkan Anda instruksi reset password.</p>
                </div>

                <div className="mb-3">
                    <label
                        htmlFor='emailLogin'
                        className="form-label fw-medium">
                        Email
                    </label>
                    <Input
                        disabled={true}
                        type="email"
                        className="form-control-lg bg-neutral-300 border-0 form-color"
                        name="email"
                        placeHolder="Masukkan email anda"
                    />
                    <ErrorMsg msg={'Mohon maaf, saat ini fitur reset password sedang tidak tersedia karena sedang dalam pemeliharaan. Silakan hubungi Customer Service kami untuk bantuan lebih lanjut terkait reset password.'} />
                </div>

                <div className="d-flex justify-content-end mb-3">
                    <Link
                        to={'/login'}
                        className="p-2 g-col-6 text-black link-underline-dark">
                        Kembali ke halaman login?
                    </Link>
                </div>

                <Button
                    type="submit"
                    className="btn-primary text-light w-100"
                    disabled={true}
                >
                    Reset Password
                </Button>
            </form>
        </>
    )
}