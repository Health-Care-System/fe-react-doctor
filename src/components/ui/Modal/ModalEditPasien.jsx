import './Modal.css'
import { Button } from '../Button';
import IconForAvatar from '../../../assets/icon/avatar.svg'
import { Input, Select } from '../Form';
import { formattedDate } from '../../../utils/helpers';
import { patientDiagnosa } from '../../../utils/dataObject';
import useForm from '../../../hooks/useForm';
import { Spinner } from '../../Loader/Spinner';

import ImageWithFallback from '../../Error/ImageWithFallback';


export const ModalEditPasien = ({ closeModal, PatientListData, handleSubmitEdit, pending }) => {
  const { user_id, transaction_id, fullname, created_at, patient_status, health_details, profile_picture } = PatientListData;
  const initState = {
    status: patient_status,
    diagnosa: health_details,
  }
  const {
    form,
    handleInput,
  } = useForm(initState);
  
  const healthDetailsIsChange = health_details === form.diagnosa;
  const patientStatusIsChange = patient_status === form.status;

  return (
    <>
      <div
        className="modal-backdrop"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          zIndex: '1030'
        }}>
      </div>
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: "block", zIndex: '1040' }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" >
          <div className="modal-content px-4 pb-5 rounded-5 border-0" style={{ maxWidth: '51.25rem' }}>
            <div className="modal-header p-3 ">
              <h5 className="modal-title fs-1 ">Edit</h5>
              <button
                type="button"
                className="btn-close "
                onClick={() => closeModal(false)}
              ></button>
            </div>
            <div className="modal-body" >
              <div className="row mb-3">
                <div className="col-12 col-sm-3">
                  <ImageWithFallback 
                    src={profile_picture} 
                    fallback={IconForAvatar} 
                    alt="avatar" 
                    className="modal-avatar mb-3 mb-sm-0 rounded-4 object-fit-cover" />
                </div>
                <div className="col-12 col-sm-9">
                  <div className="row g-3 ">
                    <div className="col-6">
                      <h3 className="fw-semibold fs-3 ">Id Pasein</h3>
                      <p className="fs-3 ">{user_id}</p>
                    </div>
                    <div className="col-6">
                      <h3 className="fw-semibold fs-3 ">Nama Lengkap</h3>
                      <p className="fs-3 ">{fullname}</p>
                    </div>
                    <div className="col-6">
                      <h3 className="fw-semibold fs-3 ">Id Transaksi</h3>
                      <p className="fs-3 ">{transaction_id}</p>
                    </div>
                    <div className="col-6">
                      <h3 className="fw-semibold fs-3 ">Tanggal Konsultasi</h3>
                      <p className="fs-3 ">{formattedDate(created_at)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-grid gap-2 ">
                  <div>
                    <label className="fs-3 fw-semibold ">Diagnosa</label>
                    <Input
                      name={'diagnosa'}
                      value={form.diagnosa}
                      type={'text'}
                      handleChange={handleInput}
                      className="input-diagnosa"
                      placeHolder="Masukkan diagnosa Anda" />
                  </div>
                  <div>
                    <label className="fs-3 fw-semibold ">Status</label>
                    <Select
                      options={patientDiagnosa}
                      name="status"
                      value={form.status}
                      handleChange={handleInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-start border-0 pt-0 ">
              <Button
                type="button"
                className="btn-outline-primary border-2 fw-semibold px-3"
                style={{ minWidth: '5.75rem'}}
                onClick={() => closeModal(false)}
              >
                Batal
              </Button>
              <Button
                onClick={(e) => handleSubmitEdit(e, form.diagnosa, form.status, transaction_id)}
                disabled={(!form.status || form.status === 'pending') || pending || !form.diagnosa || (healthDetailsIsChange && patientStatusIsChange)}
                type="button"
                className="btn btn-primary text-white fw-semibold px-3"
                style={{ minWidth: '5.75rem' }}
              >
                {pending
                  ? <Spinner />
                  : 'Simpan'
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};