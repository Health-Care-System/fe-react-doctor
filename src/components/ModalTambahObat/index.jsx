import React, { useState } from "react";
import "./TambahObat.css";
import { Input } from "../ui/Form/Input";
import plus from "../../assets/icon/icons_plus.svg";

export const TambahObat = () => {
  const [resepObat, setResepObat] = useState([
    {
      id: 1,
      namaObat: "",
      periodeMinum: "",
      ketentuan: "",
      discase: "",
      catatan: "",
      jumlah: "",
      editMode: false,
    },
  ]);

  const [isTambahMode, setIsTambahMode] = useState(false);

  const handleInputChange = (id, field, value) => {
    setResepObat((prevResepObat) => {
      const updatedResepObat = prevResepObat.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      );
      return updatedResepObat;
    });
  };

  const handleAddEditClick = (id) => {
    setResepObat((prevResepObat) => {
      const updatedResepObat = prevResepObat.map((item) =>
        item.id === id ? { ...item, editMode: !item.editMode } : item
      );
      return updatedResepObat;
    });
  };

  const handleTambahObat = () => {
    setIsTambahMode(true);
    const newId = Math.max(...resepObat.map((item) => item.id)) + 1;
    setResepObat((prevResepObat) => [
      ...prevResepObat,
      {
        id: newId,
        namaObat: "",
        periodeMinum: "",
        ketentuan: "",
        discase: "",
        catatan: "",
        jumlah: "",
        editMode: true,
      },
    ]);
  };

  const isEditMode = resepObat.some((item) => item.editMode);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Resepkan Obat
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Nama Obat</th>
                    <th>Periode Minum</th>
                    <th>Ketentuan</th>
                    <th>Discase</th>
                    <th>Catatan</th>
                    <th>Jumlah</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {resepObat.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <select
                          className="form-select form-nama-obat"
                          value={item.namaObat}
                          onChange={(e) =>
                            handleInputChange(
                              item.id,
                              "namaObat",
                              e.target.value
                            )
                          }
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        >
                          <option value="">Obat</option>
                          <option value="Molagit">Molagit</option>
                          <option value="Parasetamol">Parasetamol</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select form-periode-minum"
                          value={item.periodeMinum}
                          placeholder="Berapa Kali?"
                          onChange={(e) =>
                            handleInputChange(
                              item.id,
                              "periodeMinum",
                              e.target.value
                            )
                          }
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        >
                          <option value="">Berapa Kali?</option>
                          <option value="3 x 1 Hari">3 x 1 Hari</option>
                          <option value="2 x 1 Hari">2 x 1 Hari</option>
                          <option value="1 x 1 Hari">1 x 1 Hari</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select form-ketentuan"
                          value={item.ketentuan}
                          onChange={(e) =>
                            handleInputChange(
                              item.id,
                              "ketentuan",
                              e.target.value
                            )
                          }
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        >
                          <option value="sebelum-makan">Sebelum Makan</option>
                          <option value="sesudah-makan">Sesudah Makan</option>
                        </select>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="discase"
                          value={item.discase}
                          handleChange={(e) =>
                            handleInputChange(
                              item.id,
                              "discase",
                              e.target.value
                            )
                          }
                          placeholder="Nama Penyakit"
                          className="form-control"
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="catatan"
                          value={item.catatan}
                          handleChange={(e) =>
                            handleInputChange(
                              item.id,
                              "catatan",
                              e.target.value
                            )
                          }
                          placeholder="Catatan"
                          className="form-control"
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-jumlah"
                          value={item.jumlah}
                          onChange={(e) =>
                            handleInputChange(item.id, "jumlah", e.target.value)
                          }
                          disabled={
                            (isEditMode || item.editMode) && !isTambahMode
                          }
                        >
                          <option value="1 Per Strip">1 Per Strip</option>
                          <option value="2 Per Strip">2 Per Strip</option>
                          <option value="3 Per Strip">3 Per Strip</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-dark rounded-5"
                          onClick={() => handleAddEditClick(item.id)}
                        >
                          {item.editMode ? "Edit" : "Add"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-muted"
                onClick={handleTambahObat}
              >
                <img src={plus} alt="logo-plus" />
                Tambahkan Obat
              </button>
              <button type="button" className="btn btn-dark rounded-5">
                Kirim Resep
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
