import AreaPage from './pages/area'
import BuildingPage from './pages/building'
import RoomPage from './pages/room'
import DetailPage from './pages/detail'
import CollegePage from './pages/college'
import MajorPage from './pages/major'
import BJPage from './pages/bj'
import TeacherPage from './pages/teacher'
import CoursePage from './pages/course'
import ContactPage from './pages/contact'

export default [
  {
    path: '/area',
    component: AreaPage
  },
  {
    path: '/area/:name',
    component: BuildingPage
  },
  {
    path: '/area/room/:name',
    component: RoomPage
  },
  {
    path: '/detail/:type/:value/:title',
    component: DetailPage
  },
  {
    path: '/college',
    component: CollegePage
  },
  {
    path: '/college/:id',
    component: MajorPage
  },
  {
    path: '/college/major/:id',
    component: BJPage
  },
  {
    path: '/teacher',
    component: TeacherPage
  },
  {
    path: '/teacher/:sno',
    component: ContactPage
  },
  {
    path: '/course',
    component: CoursePage
  }
]