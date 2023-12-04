import { describe, expect, it, vi } from 'vitest'
import { validateArticleForm } from '../validation';

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
