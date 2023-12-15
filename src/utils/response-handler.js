export const handleLoginError = (error, setErrors) => {
  if (error.response) {
    const field = error?.response?.data?.meta?.message;
    switch (error.response.status) {
      case 401:
        setErrors({
          email: field.split(' ')[0].toLowerCase() === 'email'
            ? 'Email tidak terdaftar!'
            : '',
          password: field.split(' ')[1].toLowerCase() === 'password'
            ? 'Password tidak valid!'
            : '',
        });
        break;
      case 400:
        setErrors({
          default: 'Form data tidak valid, harap masukkan data yang sesuai!',
        });
        break;
      default:
        setErrors({
          default: 'Maaf, permintaan anda tidak dapat kami proses saat ini. Harap coba lagi',
        });
    }
  }
};
export const handleEmailForgotPasswordError = (error, setErrors) => {
  if (error.response) {
    const field = error?.response?.data?.meta?.message;
    switch (field) {
      case 'failed to get send OTP':
        setErrors({
          email: 'Gagal mengirim verifikasi OTP, harap masukan email yang valid'
        });
        break;
      case "Field 'Email' failed on 'email' validation":
        setErrors({
          email: 'Masukan email yang valid!',
        });
        break;
      default:
        setErrors({
          email: 'Maaf, permintaan anda tidak dapat kami proses saat ini. Harap coba lagi',
        });
    }
  }
};
export const handleVerifyOTPError = (error, setErrors) => {
  if (error.response) {
    const field = error?.response?.data?.meta?.message;
    switch (field) {
      case 'failed to get OTP not found':
        setErrors({
          otpError: 'OTP yang anda inputkan tidak valid'
        });
        break;
      default:
        setErrors({
          email: 'Maaf, permintaan anda tidak dapat kami proses saat ini. Harap coba lagi',
        });
    }
  }
};
export const handleResetPasswordError = (error, setErrors) => {
  if (error.response) {
    const field = error?.response?.data?.meta?.message;
    switch (field) {
      case 'Invalid request':
        setErrors({
          confirmPassword: 'Input form tidak valid'
        });
        break;
      case 'failed to get OTP verification failed':
        setErrors({
          confirmPassword: 'Gagal memverifikasi kode OTP, harap coba lagi!'
        });
        break;
      case 'failed to get update password':
        setErrors({
          confirmPassword: 'Gagal untuk memperbarui pasword baru, harap coba lagi beberapa saat lagi!'
        });
        break;
      default:
        setErrors({
          email: 'Maaf, permintaan anda tidak dapat kami proses saat ini. Harap coba lagi',
        });
    }
  }
};