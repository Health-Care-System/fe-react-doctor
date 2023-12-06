// Icon Default
import dasboardIcon from '../assets/icon/dashboard.svg'
import chatIcon from '../assets/icon/forum.svg'
import patientIcon from '../assets/icon/patient.svg'
import articleIcon from '../assets/icon/post.svg'
import feedBackIcon from '../assets/icon/task.svg'

// Icon White
import dasboardIconWhite from '../assets/icon/dashboardWhite.svg'
import chatIconWhite from '../assets/icon/forumWhite.svg'
import patientIconWhite from '../assets/icon/patientWhite.svg'
import articleIconWhite from '../assets/icon/postWhite.svg'
import feedBackIconWhite from '../assets/icon/taskWhite.svg'

export const menus = [
  {
    icon: dasboardIcon,
    icon2: dasboardIconWhite,
    label: 'Dashboard',
    link: '/'
  },
  {
    icon: chatIcon,
    icon2: chatIconWhite,
    label: 'Chat Pasien',
    link: '/chat?status=all'
  },
  {
    icon: patientIcon,
    icon2: patientIconWhite,
    label: 'Kelola Pasien',
    link: '/patients'
  },
  {
    icon: articleIcon,
    icon2: articleIconWhite,
    label: 'Kelola Artikel',
    link: '/articles'
  },
  {
    icon: feedBackIcon,
    icon2: feedBackIconWhite,
    label: 'Feedback',
    link: '/feedback'
  },
]

export const navbarTitle = [
  {
    route: '',
    title: 'Dashboard',
  },
  {
    route: 'chat',
    title: 'Chat Pasien',
  },
  {
    route: 'patients',
    title: 'Kelola Pasien',
  },
  {
    route: 'articles',
    title: 'Kelola Artikel',
  },
  {
    route: 'feedback',
    title: 'Feedback',
  },
  {
    route: 'settings',
    title: 'Pengaturan',
  },
]

export const chatStatus = [
  { id: 1, value: 'all', label: 'Semua' },
  { id: 2, value: 'unread', label: 'Belum dibaca' },
  { id: 3, value: 'recent', label: 'Terkini' },
]

export const recentPatientsThead = ["Id Pasien", "Nama Lengkap", "Id Transaksi", "Tgl Konsultasi", "Diagnosis", "Status", ""]
export const newPatientsThead = ["Id Pasien", "Nama Lengkap", "Id Transaksi", "Harga", ""]


export const dataChart = [
  {
    disease: 'Demam',
    patient: 35
  },
  {
    disease: 'Tipes',
    patient: 20
  },
  {
    disease: 'Asam Lambung',
    patient: 65
  },
]

export const patientDiagnosa = [
  { label: "Diberi resep", value: "Diberi resep" },
  { label: "Konsultasi lanjutan", value: "Konsultasi lanjutan" },
  { label: "Dirujuk", value: "Dirujuk" },
];

