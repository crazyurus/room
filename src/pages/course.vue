<template>
	<f7-page>
		<f7-block-title>请输入课程名称</f7-block-title>
		<f7-list>
			<f7-list-item>
				<f7-input type="search" placeholder="课程名称" v-model.trim.lazy="name" @change="search" />
			</f7-list-item>
		</f7-list>
		<f7-list v-if="course.length > 0">
			<f7-list-item :link="'/detail/KCH/' + item.kch + '/' + item.name" :title="item.name" :after="item.point" v-for="item in course" :key="item.name"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-course',
    data() {
      return {
        name: '',
        course: []
      }
    },
    methods: {
      search() {
        this.$f7.showIndicator();
        this.$http.get('/table/room/course', {
          params: {
            name: this.name
          }
        }).then(response => {
          this.$f7.hideIndicator();
          let course = [];
          for (let name in response.data.data) {
            let arr = response.data.data[name];
            course.push({
              name,
              kch: arr.map(course => course.KCH).unique().join('-'),
              point: arr.map(course => course.XF).unique().sort().join('/') + '学分'
            });
          }
          this.course = course;
        });
      }
		}
  }

  Array.prototype.unique = function () {
    return Array.from(new Set(this));
  }
</script>