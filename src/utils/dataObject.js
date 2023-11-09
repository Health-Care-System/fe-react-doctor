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
    link: '/chat'
  },
  {
    icon: patientIcon,
    icon2: patientIconWhite,
    label: 'Pasien',
    link: '/patients'
  },
  {
    icon: articleIcon,
    icon2: articleIconWhite,
    label: 'Artikel',
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
    route: '/',
    title: 'Dashboard',
    content: 'You Have Following appointments today'
  },
  {
    route: '/patients',
    title: 'Manage Pasien',
    content: 'Simpan perubahan pasien'
  },
  {
    route: '/article',
    title: 'Manage Artikel',
    content: 'Kelola informasi kesehatan'
  },
  {
    route: '/feedback',
    title: 'Feedback',
    content: 'Saran dan Masukan'
  },
  {
    route: '/settings',
    title: 'Pengaturan',
    content: 'Kelola pengaturan'
  },
]