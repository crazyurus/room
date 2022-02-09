import AreaPage from './pages/area.vue'
import BuildingPage from './pages/building.vue'
import RoomPage from './pages/room.vue'
import DetailPage from './pages/detail.vue'
import CollegePage from './pages/college.vue'
import MajorPage from './pages/major.vue'
import BJPage from './pages/bj.vue'
import TeacherPage from './pages/teacher.vue'
import CoursePage from './pages/course.vue'
import ContactPage from './pages/contact.vue'

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