import React, { useEffect, useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

// Components
import { Button } from "../Button"
import { Input } from "../Form/Input"
import { ErrorStatus } from "../../Error/ErrorStatus"
import ImageWithFallback from "../../Error/ImageWithFallback"
import { MedicineSkeleton } from "../Skeleton/MedicineSkeleton"

// Utils
import useForm from "../../../hooks/useForm"
import useDebounce from "../../../hooks/useDebounce"
import { useMedicineStore } from "../../../store/store"
import { getAllMedicines, getMedicineByKey } from "../../../services/medicine-service"

// Assets
import minus from '../../../assets/icon/min.svg'
import plus from '../../../assets/icon/plusWhite.svg'
import leftArrow from '../../../assets/icon/leftArrow.svg'
import medicineImg from '../../../assets/image/medicine.jpg'
import rightArrow from '../../../assets/icon/rightArrow.svg'
import searchGrey from '../../../assets/icon/search-grey.svg'
import closeIcon from '../../../assets/icon/close-modal-obat.svg'
import './Modal.css'

const initState = {
  handleEdit: false,
  searchMedicine: '',
  filterData: []
}

export const PrescriptionModal = ({ setShowPrescription, setOpenModal }) => {
  const [page, setPage] = useState(0);
  const {
    isPending,
    isError,
    data,
    isFetching,
    refetch,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['allMedicines', page],
    queryFn: () => getAllMedicines(page),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });

  const medicineStore = useMedicineStore((state) => state.medicineStore)
  const removeMedicine = useMedicineStore((state) => state.removeMedicine)
  const clearMedicineStore = useMedicineStore((state) => state.clearMedicineStore)

  const {
    form,
    handleChange,
    handleInput,
    loading,
    setLoading
  } = useForm(initState)
  const debouncedValue = useDebounce(form?.searchMedicine, 500);
  useEffect(() => {
    if (debouncedValue !== '') {
      getMedicineByKey(
        setLoading,
        handleChange,
        debouncedValue
      )
    }
  }, [debouncedValue]);

  const closeModal = () => {
    setShowPrescription(false)
    clearMedicineStore()
  }

  return (
    <>
      <div id="prescriptionModal" className=" bg-white shadow rounded-4 p-3 prescription-modal d-flex flex-column gap-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5 className="fw-semibold fs-2 m-0">Daftar Obat</h5>
          <Button onClick={closeModal}>
            <img src={closeIcon} alt="close" />
          </Button>
        </div>

        <div className="d-flex flex-row justify-content-between gap-3">
          <div className=" position-relative">
            <Input
              style={{ maxWidth: '26rem' }}
              name={'searchMedicine'}
              value={form.searchMedicine}
              handleChange={handleInput}
              placeHolder={'Cari obat'}
              className={'rounded-5 ps-5 bg-light border-0 py-2'}
            />
            <img
              src={searchGrey}
              className="position-absolute searchIcon"
              alt="Search"
            />
          </div>
          <div className="d-flex flex-row">
            <Button
              disabled={page === 0}
              onClick={() => setPage(old => Math.max(old - 1, 0))}
              className={'p-0 p-md-2 rounded-circle border-0'}>
              <img width={27} height={27} src={leftArrow} alt="left" />
            </Button>
            <Button
              onClick={() => {
                if (!isPlaceholderData) {
                  setPage(old => old + 1)
                }
              }}
              className={'p-0 p-md-2 rounded-circle border-0'}
              disabled={!data || data?.results?.length < 12 || debouncedValue !== ''}
            >
              <img width={27} height={27} src={rightArrow} alt="right" />
            </Button>
          </div>
        </div>

        <BodyModal
          isError={isError}
          refetch={refetch}
          isDebounce={debouncedValue !== ''}
          isPending={isPending || isFetching || loading}
          data={debouncedValue !== '' ? form.filterData : data} />
        {medicineStore?.length > 0 &&
          <div className="d-flex flex-row justify-content-between w-100">
            <div className="d-flex flex-row align-items-start fw-semibold gap-1">
              <p>{`${medicineStore?.length} Berhasil ditambah : `}</p>
              <ul className=" list-unstyled overflow-y-scroll" style={{ maxHeight: '5rem' }}>
                {medicineStore?.map((item, index) => (
                  <div
                    className="d-flex flex-row align-items-center justify-content-between gap-2"
                    key={index}>
                    <li>{item?.name}</li>
                    {form.handleEdit &&
                      <Button onClick={() => removeMedicine(item?.id)} className={'p-0'}>
                        <img src={minus} width={16} height={16} alt="Delete" />
                      </Button>
                    }
                  </div>
                ))
                }
              </ul>
              <p
                onClick={() => handleChange('handleEdit', !form.handleEdit)}
                className="text-primary m-0 cursor-pointer"
                style={{ paddingTop: '0.1rem' }}>(Ubah)
              </p>

            </div>
            <Button
              onClick={() => setOpenModal(true)}
              className={'btn-primary text-white fw-semibold'} style={{ maxHeight: '3rem' }}>
              Kirim
            </Button>
          </div>
        }
      </div>
    </>
  )
}

const BodyModal = ({
  isPending,
  data,
  isError,
  refetch,
  isDebounce
}) => {
  if (isPending) {
    const skeletons = Array.from({ length: 12 }, (_, index) => (
      <MedicineSkeleton key={index} />
    ));

    return <div className="row px-2 overflow-y-scroll" style={{ maxHeight: '28rem' }}>{skeletons}</div>;
  }

  if (!data) {
    return (
      <p className=" mx-auto py-5 fs-2 fw-semibold text-primary">Data obat sudah tidak ada!</p>
    )
  }

  if (isError) {
    return (
      <ErrorStatus title={'Gagal memuat data obat!'} action={refetch} />
    )
  }

  if (isDebounce) {
    return (
      <div className="row px-2 overflow-y-scroll" style={{ maxHeight: '28rem' }}>
        {data?.map(item => (
          <React.Fragment key={item?.id}>
            <MedicineCard data={item} />
          </React.Fragment>
        ))
        }
      </div>
    )
  }

  return (
    <>
      <div className="row px-2 overflow-y-scroll" style={{ maxHeight: '28rem' }}>
        {data?.results?.map(item => (
          <React.Fragment key={item?.id}>
            <MedicineCard data={item} />
          </React.Fragment>
        ))
        }
      </div>
    </>
  )
}

const MedicineCard = ({ data }) => {
  const addMedicine = useMedicineStore((state) => state.addMedicine);
  const medicineStore = useMedicineStore((state) => state.medicineStore)
  const isAdded = medicineStore.some(item => item.id === data?.id)

  return (
    <>
      <div className="col-6 col-lg-4 col-xl-2 mb-4">
        <div id="medicineCard" className="p-2 rounded-4 d-flex flex-column gap-2 shadow-base mx-auto w-100" style={{ height: 'fit-content' }}>
          <ImageWithFallback className={'object-fit-cover rounded-3'} width={'100%'} height={88} src={data?.image} fallback={medicineImg} />
          <div className="d-flex flex-column gap-1">
            <p className=" fs-4 line-clamp-2 text-secondary" style={{ height: '2rem' }}>{data?.name}</p>
            <div className="d-flex flex-row justify-content-between gap-2 align-items-center">
              <div className="d-flex flex-row gap-1 line-clamp-1 text-nowrap">
                <p className="fs-4 fw-semibold">{`Rp${data?.price.toLocaleString('id-ID')}`}</p>
                <p className="text-secondary-subtle fs-4 text-truncate">&#92; {data?.type}</p>
              </div>
              <Button
                disabled={isAdded}
                onClick={() => addMedicine(data)}
                className={'btn-primary btn-sm d-flex justify-content-center rounded-5'}
                style={{
                  width: '30px',
                  height: '30px'
                }}>
                <img src={plus} alt="add" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
