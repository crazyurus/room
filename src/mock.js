import Mock from 'mockjs'
import roomData from '../mock/room.json'
import tableData from '../mock/table.json'
import majorData from '../mock/major.json'
import bjData from '../mock/bj.json'
import teacherData from '../mock/teacher.json'
import courseData from '../mock/course.json'
import contactData from '../mock/contact.json'

Mock.mock('/table/room/lists', 'get', roomData)
Mock.mock('/table/index/room', 'get', tableData)
Mock.mock('/table/room/major', 'get', majorData)
Mock.mock('/table/room/bj', 'get', bjData)
Mock.mock('/table/room/teacher', 'get', teacherData)
Mock.mock('/table/room/course', 'get', courseData)
Mock.mock('/table/room/contact', 'get', contactData)
