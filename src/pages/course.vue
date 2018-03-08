<template>
	<f7-page>
		<f7-block-title>请输入课程名称</f7-block-title>
		<f7-list>
			<f7-list-item>
				<f7-input type="search" placeholder="课程名称" v-model.trim="name" @change="search" />
			</f7-list-item>
		</f7-list>
		<f7-list v-if="course.length > 0">
			<f7-list-item :link="'/detail/KCH/' + item.KCH + '/' + item.KCMC" :title="item.KCMC" :after="item.XF + '学分'" v-for="item in course" :key="item.KCH"></f7-list-item>
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
          this.course = response.data.data;
        });
      }
    }
  }
</script>