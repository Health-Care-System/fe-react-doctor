import { describe, expect, it, vi } from 'vitest'
import { validateArticleForm, validateFormLogin } from '../validation';

const mockSetErrors = vi.fn();
describe('validateArticleForm', () => {
  it('return false, dan error untuk bagian title', () => {
    const form = { title: '', image: 'sample.jpg' };
    const content = 'Sample content';
    const result = validateArticleForm(form, content, mockSetErrors);
    expect(result).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      title: 'Judul artikel harap diisi',
      image: '',
      content: '',
    });
  });

  it('return false, dan error jika input title lebih dari 70 karakter', () => {
    const form = { title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet lorem ipsum kiw kiw', image: 'sample.jpg' };
    const content = 'Sample content';
    const result = validateArticleForm(form, content, mockSetErrors);

    expect(result).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      title: 'Maksimal judul adalah 70 karakter!',
      image: '',
      content: '',
    });
  });

  it('return false, dan buat error untuk input gambar yang kosong', () => {
    const form = { title: 'Sample Title', image: null };
    const content = 'Sample content';
    const result = validateArticleForm(form, content, mockSetErrors);

    expect(result).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      title: '',
      image: 'Harap pilih file untuk thumbnail artikel!',
      content: '',
    });
  });

  it('return false, dan ada error jika isi konten lebih 5000 karakter', () => {
    const form = { title: 'Sample Title', image: 'sample.jpg' };
    const content = 'a'.repeat(5001);
    const result = validateArticleForm(form, content, mockSetErrors);

    expect(result).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      title: '',
      image: '',
      content: 'Maksimal isi konten artikel adalah 5000 karakter!',
    });
  });

  it('return true dan tidak ada pesan error', () => {
    const form = { title: 'Sample Title', image: 'sample.jpg' };
    const content = 'Sample content';
    const result = validateArticleForm(form, content, mockSetErrors);

    expect(result).toBe(true);
    expect(mockSetErrors).toHaveBeenCalledWith({
      title: '',
      image: '',
      content: '',
    });
  });
});

// Form Login
const validateFormLoginWrapper = (formData) => validateFormLogin(formData, mockSetErrors);

describe('validateFormLogin', () => {
  it('should return true for valid input', () => {
    const formData = {
      email: 'test@example.com',
      password: 'Password1',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(true);
    expect(mockSetErrors).toHaveBeenCalledWith({ email: '', password: '' });
  });

  it('should set errors for empty email and password', () => {
    const formData = {
      email: '',
      password: '',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: 'Email wajib diisi!',
      password: 'Password wajib diisi!',
    });
  });

  it('should set errors for invalid email format', () => {
    const formData = {
      email: 'invalidemail',
      password: 'Password1',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: 'Format email tidak valid!',
      password: '',
    });
  });

  it('should set errors for password length and format', () => {
    const formData = {
      email: 'test@example.com',
      password: 'pass',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: '',
      password: 'Password harus memiliki setidaknya 8 karakter!',
    });
  });

  it('should set errors for password format (no number)', () => {
    const formData = {
      email: 'test@example.com',
      password: 'password',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: '',
      password: 'Password harus mengandung setidaknya satu angka!',
    });
  });

  it('should set errors for password format (no letter)', () => {
    const formData = {
      email: 'test@example.com',
      password: '12345678',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: '',
      password: 'Password harus mengandung setidaknya satu huruf!',
    });
  });

  it('should set errors for password format (only letters)', () => {
    const formData = {
      email: 'test@example.com',
      password: 'abcdefgh',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: '',
      password: 'Password harus mengandung setidaknya satu angka!',
    });
  });

  it('should set errors for password format (only numbers)', () => {
    const formData = {
      email: 'test@example.com',
      password: '12345678',
    };

    const isValid = validateFormLoginWrapper(formData);

    expect(isValid).toBe(false);
    expect(mockSetErrors).toHaveBeenCalledWith({
      email: '',
      password: 'Password harus mengandung setidaknya satu huruf!',
    });
  });
});
