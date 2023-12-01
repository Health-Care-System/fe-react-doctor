import dangerIcon from '../../../assets/icon/dangerIcon.png';
import { Button } from '../Button';
import './Modal.css'

export const CustomModal = ({ icon, title, content, cancelAction, confirmAction, disabled}) => {
  return (
    <>
      <div className="wrapper-modal">
        <div className='card border-0 d-flex flex-column rounded-4 justify-content-center custom-modal'>
          <img 
            src={icon ? icon : dangerIcon} 
            height={76} 
            width={76} 
            className='mx-auto'
            alt="Peringatan" 
          />
          <div className="card-body p-0">
            <h5 className="card-title text-center fs-2 fw-semibold">{title}</h5>
            <p className="card-text fs-4 text-center">
              {content}
            </p>
            
            <div className='d-flex flex-row justify-content-center w-100 gap-3 mt-3'>
              <Button
                disabled={disabled}
                type={'button'}
                onClick={cancelAction}
                className={'btn-primary text-white fw-semibold w-50 text-nowrap'}
              >
                Tidak
              </Button>
              <Button
                type={'button'}
                onClick={confirmAction}
                disabled={disabled}
                className={'btn-outline-primary fw-semibold border-2 rounded-2 w-50'}
              >
                {disabled 
                  ?   <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  : 'Ya'
                }
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
