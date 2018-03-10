<template>
	<f7-page>
		<f7-block-title>请输入教师姓名</f7-block-title>
		<f7-list>
			<f7-list-item>
				<f7-input type="search" placeholder="教师姓名" v-model.trim.lazy="name" @change="search" />
			</f7-list-item>
		</f7-list>
		<f7-list v-if="teacher.length > 0">
			<f7-list-item :link="'/detail/JSGH/' + item.ID_NUMBER + '/' + item.USER_NAME" :title="item.USER_NAME" :after="item.UNIT_NAME" v-for="item in teacher" :key="item.ID_NUMBER"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-teacher',
    data() {
      return {
        name: '',
        teacher: []
      }
    },
    methods: {
      search() {
        this.$f7.showIndicator();
        this.$http.get('/table/room/teacher', {
          params: {
            name: this.name
          }
        }).then(response => {
          this.$f7.hideIndicator();
          this.teacher = response.data.data;
        });
			}
    }
  }
</script>