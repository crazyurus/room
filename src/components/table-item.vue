<template>
    <div v-if="course.length === 0" class="table-item table-item-null"></div>
    <div v-else class="table-item" :class="'table-item-' + color + (course.length > 1 ? ' table-item-multi' : '')" @click="showCourseList">
        <div>{{course[0].name}}</div>
        <div v-if="course[0].classroom" class="room">{{course[0].classroom}}</div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Detail from './table-course.vue'

  export default {
    name: 'token-table-item',
    props: ['course', 'week', 'no'],
    computed: {
      color() {
        if (this.course[0].valid) return this.week + 1;
        else return 'invalid';
      }
    },
    methods: {
      showCourseList() {
        const self = this;

        if (this.course.length === 1) this.showCourseDetail(this.course[0]);
        else {
          let buttons = [{
            text: '该节次对应 ' + this.course.length + ' 门课程',
            label: true
          }];
          let courses = this.course.map(item => {
            return {
              text: item.name,
              onClick() {
                self.showCourseDetail(item)
              }
            }
          });
          const cancel = [{
            text: '关闭',
            color: 'red'
          }];
          const groups = [buttons.concat(courses), cancel];
          this.$f7.actions(groups);
        }
      },
      showCourseDetail(course) {
        const CourseConstructor = Vue.extend(Detail);
        const instance = new CourseConstructor({
          parent: this,
          propsData: {
            course
          }
        });

        // 打开弹窗
        let $main = document.querySelector('.view-main');
        document.addEventListener('click', e => {
          if (e.target.className === 'layui-m-layershade active-state') $main.style.filter = '';
        }, true);
        $main.style.filter = 'blur(4px)';
        this.$layer.open({
          title: course.name,
          anim: 'scale',  // vue-layer-mobile并没有实现这个默认是up，通过修改css fixed
          content: instance.$mount().$el.innerHTML
        });
      }
    }
  }
</script>

<style scoped>
  .room {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
  }
</style>