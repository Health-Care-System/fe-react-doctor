export const validateArticleForm = (form, content, setErrors) => {
  let valid = true;
  const newErrors = { title: '', image: null, content: '' };

  if (!form.title) {
    newErrors.title = 'Judul artikel harap diisi';
    valid = false;
  } else if (form.title.length > 70) {
    newErrors.title = 'Maksimal judul adalah 70 karakter!';
    valid = false;
  } else {
    newErrors.title = '';
  }

  if (!form.image) {
    newErrors.image = 'Harap pilih file untuk thumbnail artikel!';
    valid = false;
  } else {
    newErrors.image = '';
  }

  if (!content) {
    newErrors.content = 'Harap input konten artikel!';
    valid = false;
  } else if (content.length > 5000) {
    newErrors.content = 'Maksimal isi konten artikel adalah 5000 karakter!';
    valid = false;
  } else {
    newErrors.content = '';
  }  
  setErrors(newErrors);
  return valid;
};



export const validateFormLogin = (formData, setErrors) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  const newErrors = { email: '', password: '' };

  if (!formData.email) {
    newErrors.email = 'Email wajib diisi!';
    valid = false;
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Format email tidak valid!';
    valid = false;
  }

  if (!formData.password) {
    newErrors.password = 'Password wajib diisi!';
    valid = false;
  } else if (formData.password.length < 8) {
    newErrors.password = 'Password harus memiliki setidaknya 8 karakter!';
    valid = false;
  } else if (!/(?=.*[a-z])(?=.*\d)/.test(formData.password)) {
    if (/^[a-zA-Z]+$/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung setidaknya satu angka!';
    } else if (/^\d+$/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung setidaknya satu huruf!';
    } else {
      newErrors.password = 'Password harus mengandung setidaknya satu huruf dan satu angka!';
    }
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};


export const validateExtImage = (file) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const fileName = file.name.toLowerCase();
  const isValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

  return isValidExtension;
}

export const forgotPasswordEmailValidation = (formData, setError) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  const newErrors = { email: ''};

  if (!formData.email) {
    newErrors.email = 'Email wajib diisi!';
    valid = false;
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Format email tidak valid!';
    valid = false;
  }
  
  setError(newErrors)
  return valid;
}
export const passwordValidation = (formData, setError) => {
  let valid = true;
  const newErrors = { password: '', confirmPassword: ''};

  if (!formData.password) {
    newErrors.password = 'Password wajib diisi!';
    valid = false;
  } else if (formData.password.length < 8) {
    newErrors.password = 'Password harus memiliki setidaknya 8 karakter!';
    valid = false;
  } else if (!/(?=.*[a-z])(?=.*\d)/.test(formData.password)) {
    if (/^[a-zA-Z]+$/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung setidaknya satu angka!';
    } else if (/^\d+$/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung setidaknya satu huruf!';
    } else {
      newErrors.password = 'Password harus mengandung setidaknya satu huruf dan satu angka!';
    }
    valid = false;
  }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = 'Konfirmasi Password wajib diisi!';
    valid = false;
  } else if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = 'Konfirmasi Password harus sama dengan password';
    valid = false;
  }

  setError(newErrors);
  return valid;
}
