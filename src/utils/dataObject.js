// Icon Default
import dasboardIcon from '../assets/icon/dashboard.svg'
import chatIcon from '../assets/icon/forum.svg'
import patientIcon from '../assets/icon/patient.svg'
import articleIcon from '../assets/icon/post.svg'
import feedBackIcon from '../assets/icon/task.svg'
import settingIcon from '../assets/icon/settings.svg'

// Icon White
import dasboardIconWhite from '../assets/icon/dashboardWhite.svg'
import chatIconWhite from '../assets/icon/forumWhite.svg'
import patientIconWhite from '../assets/icon/patientWhite.svg'
import articleIconWhite from '../assets/icon/postWhite.svg'
import feedBackIconWhite from '../assets/icon/taskWhite.svg'
import settingIconWhite from '../assets/icon/settingsWhite.svg'

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
    link: '/article'
  },
  {
    icon: feedBackIcon,
    icon2: feedBackIconWhite,
    label: 'Feedback',
    link: '/feedback'
  },
  {
    icon: settingIcon,
    icon2: settingIconWhite,
    label: 'Pengaturan',
    link: '/settings'
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
    route: 'article',
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

export const messages = [
  {
    author: 'user',
    content: 'Halo dokter!',
    date: new Date('2023-11-09T12:50:26.000Z'),
    type: 'text',
    status: 'read',
  },
  {
    author: 'doctor',
    content: 'Halo ada yang bisa saya bantu?',
    date: new Date('2023-11-09T12:51:26.000Z'),
    type: 'text',
    status: 'read',
  },
  {
    author: 'user',
    content: 'Iya dokter, saya ingin periksa',
    date: new Date('2023-11-09T12:52:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'user',
    content: 'https://images.unsplash.com/photo-1606618742139-a5f068a9f16a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: new Date('2023-11-09T12:53:26.000Z'),
    type: 'image',
    status: 'unread',
  },
  {
    author: 'doctor',
    content: 'Tentu, saya siap membantu. Silakan jelaskan gejala yang Anda rasakan.',
    date: new Date('2023-11-09T12:54:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'user',
    content: 'Saya merasa pusing dan sakit tenggorokan.',
    date: new Date('2023-11-09T12:55:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'user',
    content: 'Apakah ini gejala flu?',
    date: new Date('2023-11-09T12:56:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'doctor',
    content: 'Gejala yang Anda sebutkan dapat mengindikasikan flu, tetapi saya perlu beberapa informasi lebih lanjut. Apakah Anda juga mengalami demam atau batuk?',
    date: new Date('2023-11-09T12:57:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'user',
    content: 'Iya, saya juga mengalami demam.',
    date: new Date('2023-11-09T12:58:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'user',
    content: 'Bagaimana saya bisa meredakan gejala flu ini?',
    date: new Date('2023-11-09T12:59:26.000Z'),
    type: 'text',
    status: 'unread',
  },
  {
    author: 'doctor',
    content: 'Anda bisa mencoba minum banyak air, beristirahat, dan mengonsumsi obat pereda gejala flu seperti parasetamol. Jika gejalanya memburuk, segera berkonsultasi dengan dokter.',
    date: new Date('2023-11-09T13:00:26.000Z'),
    type: 'text',
    status: 'unread',
  },
];

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


export default messages;
