



export const validateArticleForm = (form, content, setErrors) => {
  let valid = true;
  const newErrors = { title: '', image: null, content: '' };

  if (!form.title) {
    newErrors.title = 'Judul artikel harap diisi';
    valid = false;
  } else if (form.title.length > 50) {
    newErrors.title = 'Maksimal judul adalah 50 karakter!';
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
  } else if (content.length > 3000) {
    newErrors.content = 'Maksimal isi konten artikel adalah 3000 karakter!';
    valid = false;
  } else {
    newErrors.content = '';
  }
  
  console.log(newErrors)
  setErrors(newErrors);
  return valid;
};

export const validateExtImage = (file) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const fileName = file.name.toLowerCase();
  const isValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

  return isValidExtension;
}