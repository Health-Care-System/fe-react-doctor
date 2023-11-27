import { useState } from "react"
import { Editor } from "../../components/Editor"
import { Input } from "../../components/ui/Form"
import useForm from "../../hooks/useForm"
import './Article.css'
import { Button } from "../../components/ui/Button"
import client from "../../utils/auth"
import { useNavigate } from "react-router-dom"

const initialState = {
  title: '',
  image: null,
  tempImage: null,
}

export const CreateArticle = () => {
  const {
    form,
    setForm,
    handleInput,
  } = useForm(initialState)
  const [content, setContent] = useState('')

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setForm({
          ...form,
          image: file,
          tempImage: dataURL,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const navigate = useNavigate();
  const handlePost = async () => {
    const data = new FormData(); 
    data.append('title', form.title);
    data.append('content', content);
    data.append('image', form.image);
    try {
      const res = await client.post('/doctors/articles', data);
      if (res.data.status === 201) {
        navigate('/articles')
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="px-4 d-flex flex-column gap-4 mt-3">

        <div className="d-flex flex-row justify-content-between gap-3">
          <Input
            placeHolder={'Judul'}
            name={'title'}
            type={'text'}
            style={{ maxWidth: '90%' }}
            className={'border-start-0 border-top-0 border-end-0'}
            handleChange={(e) => handleInput(e)}
            value={form.title}
          />
          <Button
            onClick={handlePost}
            className={'btn-primary text-white'}
          >
            Posting
          </Button>
        </div>
        <div className="mx-auto">
          {form.tempImage === null
            ?
            <>
              <input
                onChange={(e) => handleFileInputChange(e)}
                type="file"
                id="file"
                className={`inputfile form-control`}
                name="file"
              />
              <label htmlFor="file">Upload Foto</label>
            </>
            : <img src={form.tempImage} width={211} alt="temp image" />
          }
        </div>
        <Editor content={content} setContent={setContent} />
      </div>
    </>
  )
}
