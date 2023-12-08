import useForm from "../../../hooks/useForm";
import { validateExtImage } from "../../../utils/validation";
import './Modal.css'
import imageClip from '../../../assets/icon/image-clip.svg'
import resep from '../../../assets/icon/resep-obat.svg'
import { Button } from "../Button";

const initialState = {
  image: null,
  tempImage: null,
}
const initialError = {
  image: '',
}

export const AttachmentModal = () => {
  const {
    form,
    setForm,
    error,
    setError,
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
  return (
    <div className="bg-white p-2 d-flex flex-column gap-1 shadow rounded-2 position-absolute" 
      style={{ 
      width: 'fit-content',
      bottom: '120%',
      left: '4%',
      }}>
      <div className="text-center d-flex flex-row gap-2 align-items-center cursor-pointer">
        <input
          onChange={(e) => handleFileInputChange(e)}
          type="file"
          id="fileWhite"
          className={`inputFileWhite form-control`}
          name="fileWhite"
        />
        <img src={imageClip} alt="" />
        <label htmlFor="fileWhite" className="text-black bg-white w-100 h-100 pt-2 cursor-pointer text-start fw-semibold bg-light">Gambar</label>
      </div>

      <Button className={'d-flex p-0 flex-row align-items-center gap-2'}>
        <img src={resep} alt="" />
        <p className="fw-semibold">Resepkan Obat</p>
      </Button>
    </div>
  )
}
