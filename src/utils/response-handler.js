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