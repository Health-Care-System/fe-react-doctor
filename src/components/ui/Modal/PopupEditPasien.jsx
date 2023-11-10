import closeMenu from "../../../assets/icon/close.svg";
import avatarIcon from "../../../assets/icon/avatar.svg";
import styles from "./Modal.module.css";
import { Select } from "../Form";
import { Button } from "../Button";

export const PopupEditPasien = ({ title, name, gender, weight, date }) => {
  const optionsArray = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      {/* Modal */}
      <section
        className="modal fade"
        tabIndex={-1}
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${styles.modal__dialog}`}
        >
          <div className="modal-content px-3">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                {title}
              </h1>
              <img src={closeMenu} alt="closeMenu" />
            </div>
            <div className="modal-body">
              <div className="container-fluid py-2">
                <div className="row">
                  <div className="col-12 col-lg-3 px-lg-0 ">
                    <img
                      src={avatarIcon}
                      alt="avatarIcon"
                      className={styles.avatar}
                    />
                  </div>
                  <div className="col-12 col-lg-9 my-lg-0 my-3">
                    <div className="row text-nowrap ">
                      <div className="col-12 col-md-6 ">
                        <div className="mb-2">
                          <p className="fw-bold ">Nama Pasien</p>
                          <p>{name}</p>
                        </div>
                        <div className="mb-2">
                          <p className="fw-bold ">Jenis Kelamin</p>
                          <p>{gender}</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 ">
                        <div className="mb-2">
                          <p className="fw-bold ">Berat Badan</p>
                          <p>{weight}</p>
                        </div>
                        <div className="mb-2">
                          <p className="fw-bold ">Tanggal Konsultasi</p>
                          <p>{date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid ">
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="mb-3 ">
                      <label className="fw-bold mb-2 ">
                        Discase (Diagnosa Penyakit)
                      </label>
                      <input
                        placeholder="Demam"
                        type="text"
                        className="py-2 px-3 w-100 rounded"
                      />
                    </div>
                    <div className="mb-3 ">
                      <label className="fw-bold mb-2 ">Status</label>
                      <Select
                        options={optionsArray}
                        name="option"
                        //   handleChange={(e) => handleChange(e) }
                        //   value={value}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <Button className="btn-primary text-white me-3 ">Save</Button>
                  <Button className="btn-danger">Cancel</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
