import './Modal.css'
import { Button } from '../Button';
import IconForAvatar from '../../../assets/icon/avatar.svg'
import { Input, Select } from '../Form';

export const ModalEditPasien = ({ closeModal, PatientListData }) => {
  const { avatar, id_patient, id_transaction, fullname, date } = PatientListData
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  const options = [
    { label: "Diberi resep", value: "Diberi resep" },
    { label: "Konsultasi lanjutan", value: "Konsultasi lanjutan" },
    { label: "Dirujuk", value: "Dirujuk" },
  ];
  return (
    <>
      <div className="modal-backdrop" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1030' }}></div>
      <div
        className="modal "
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: "block", zIndex: '1040'}}
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content px-3">
            <div className="modal-header pb-1 ">
              <h5 className="modal-title fs-1 ">Edit</h5>
              <button
                type="button"
                className="btn-close "
                onClick={() => closeModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col-12 col-sm-3">
                  <img src={avatar || IconForAvatar} alt="avatar" className="modal-avatar mb-3 mb-sm-0 rounded-4 " />
                </div>
                <div className="col-12 col-sm-9">
                  <div className="row g-3 ">
                    <div className="col-4">
                      <h3 className="fw-semibold fs-3 ">Id Pasein</h3>
                      <p className="fs-3 ">{id_patient}</p>
                    </div>
                    <div className="col-8">
                      <h3 className="fw-semibold fs-3 ">Nama Lengkap</h3>
                      <p className="fs-3 ">{fullname}</p>
                    </div>
                    <div className="col-4">
                      <h3 className="fw-semibold fs-3 ">Id Pasein</h3>
                      <p className="fs-3 ">{id_transaction}</p>
                    </div>
                    <div className="col-8">
                      <h3 className="fw-semibold fs-3 ">Id Pasein</h3>
                      <p className="fs-3 ">{formatDate(date)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-grid gap-2 ">
                  <div>
                    <label className="fs-3 fw-semibold ">Diagnosa</label>
                    <Input placeHolder="Masukkan diagnosa Anda"  />
                  </div>
                  <div>
                    <label className="fs-3 fw-semibold ">Status</label>
                    <Select 
                      options={options}
                      name="options" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-start border-0 pt-0 ">
              <Button
                type="button"
                className="btn bg-transparent border-2 border-primary text-primary fw-semibold px-3"
                onClick={() => closeModal(false)}
              >
                Batal
              </Button>
              <Button type="button" className="btn btn-primary text-white fw-semibold px-3 ">
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};