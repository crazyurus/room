import Mock from 'mockjs'

Mock.mock(/^\/table\/room\/lists/i, 'get', require('./mock/room.json'));
Mock.mock(/^\/table\/index\/room/i, 'get', require('./mock/table.json'));
Mock.mock(/^\/table\/room\/major/i, 'get', require('./mock/major.json'));
Mock.mock(/^\/table\/room\/bj/i, 'get', require('./mock/bj.json'));
Mock.mock(/^\/table\/room\/teacher/i, 'get', require('./mock/teacher.json'));