import Mock from 'mockjs'

Mock.mock('/table/room/lists', 'get', require('./mock/room.json'));
Mock.mock('/table/index/room', 'get', require('./mock/table.json'));
Mock.mock('/table/room/major', 'get', require('./mock/major.json'));
Mock.mock('/table/room/bj', 'get', require('./mock/bj.json'));
Mock.mock('/table/room/teacher', 'get', require('./mock/teacher.json'));
Mock.mock('/table/room/course', 'get', require('./mock/course.json'));