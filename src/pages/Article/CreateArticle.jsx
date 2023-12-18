// Pacakages
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

// Utility & Hooks
import useForm from "../../hooks/useForm"
import {
  validateExtImage
} from "../../utils/validation"

// Components
import { Editor } from "../../components/Editor"
import { Input } from "../../components/ui/Form"
import { Button } from "../../components/ui/Button"
import { ErrorMsg } from "../../components/Error/ErrorMsg"

// Assets
import './Article.css'
import penIcon from '../../assets/icon/filled-pen.svg'
import { handlePostArticle } from "../../services/article-service";
import { useQueryClient } from "@tanstack/react-query";
import sendIcon from '../../assets/icon/send-white.svg';


const initialState = {
  title: '',
  image: null,
  tempImage: null,
  clickImg: false,
}
const initialError = {
  title: '',
  image: '',
  content: '',
}
export const CreateArticle = () => {
  const [content, setContent] = useState('');
  const {
    form,
    setForm,
    error,
    setError,
    handleInput,
  } = useForm(initialState, initialError);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!validateExtImage(file)) {
        setError({
          ...error,
          image: 'Hanya file dengan ekstensi .jpg, .jpeg, dan .png yang diperbolehkan.'
        });
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataURL = e.target.result;
          setForm({
            ...form,
            image: file,
            tempImage: dataURL,
            clickImg: false,
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const handleImage = () => {
    setForm((prev) => ({
      ...form,
      clickImg: !prev.clickImg
    }))
  }

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePost = async () => {
    const res = await handlePostArticle(form, content, setError, setLoading);
    if (res) {
      navigate('/articles');
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      queryClient.invalidateQueries({ queryKey: ['articlesDashboard'] })
      toast.success('Artikel berhasil dipublish!', {
        delay: 800
      });
    } else {
      toast.error('Artikel gagal dipublish!', {
        delay: 800
      });
    }
  }

  return (
    <>
      <div className="px-4 d-flex flex-column gap-4 mt-3">
        <div>
          <div className="d-flex flex-row justify-content-between gap-3">
            <Input
              type={'text'}
              name={'title'}
              maxLength={50}
              value={form.title}
              placeHolder={'Judul'}
              style={{ maxWidth: '90%' }}
              handleChange={(e) => handleInput(e)}
              className={'border-start-0 border-top-0 border-2 bg-light rounded-0 border-end-0 fw-bold fs-2'}
            />
            <Button
              disabled={loading}
              onClick={handlePost}
              className={'btn-primary text-white d-flex flex-row fkex-nowrap align-items-center'}>
              <img src={sendIcon} className="pe-3" alt="" />
              <p>Posting</p>
            </Button>
          </div>
          {error.title && <ErrorMsg msg={error.title} />}
        </div>

        <div className="mx-auto">
          {form.tempImage === null
            ?
            <>
              <div className="text-center">
                <input
                  id="file"
                  type="file"
                  name="file"
                  onChange={(e) => handleFileInputChange(e)}
                  className={`inputfile form-control`}
                />
                <label htmlFor="file">Upload Foto</label>
              </div>
              {error.image && <ErrorMsg msg={error.image} />}
            </>
            :
            <div className="position-relative mb-3">
              <img
                src={form.tempImage}
                onClick={handleImage}
                width={211}
                height={200}
                className={form.clickImg
                  ? 'object-fit-cover opacity-75'
                  : ' object-fit-cover'
                }
                alt="temp image" />
              {form.clickImg &&
                <>
                  <img
                    src={penIcon}
                    width={24}
                    className="article-edit-icon"
                    alt="Edit" />
                  <EditButtonImage
                    tempImage={form.tempImage}
                    handleFileInputChange={handleFileInputChange}
                    setForm={setForm} />
                </>
              }
            </div>
          }
        </div>

        <div className="mb-5">
          {error.content && <ErrorMsg msg={error.content} />}
          <Editor content={content} setContent={setContent} />
        </div>
      </div>
    </>
  )
}

export const EditButtonImage = ({ setForm, handleFileInputChange, tempImage }) => {
  const deleteImage = () => {
    setForm((prev) => ({
      ...prev,
      tempImage: null,
      image: null,
      clickImg: false,
    }))
  }

  return (
    <>
      <div className="d-flex flex-column shadow rounded-2 p-2 edit-btn-wrapper" style={{ width: 'fit-content' }}>
        <Link
          target="_blank"
          to={`${tempImage}`}
          className={'btn fw-semibold'}>
          {'Lihat Foto'}
        </Link>
        <div className="text-center">
          <input
            onChange={(e) => handleFileInputChange(e)}
            type="file"
            id="fileWhite"
            className={`inputFileWhite form-control`}
            name="fileWhite"
          />
          <label htmlFor="fileWhite" className="text-black bg-light">Unggah Foto</label>
        </div>
        <Button
          onClick={deleteImage}
          className={'fw-semibold text-center'}>
          {'Hapus Foto'}
        </Button>
      </div>
    </>
  )
}
