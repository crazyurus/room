<template>
	<f7-page>
		<f7-block-title>请选择教室（容量：人）</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/detail/' + (item.ZWS ? 'JXDD' : 'JXBH') + '/JSH/' + item.classroom" :title="item.classroom" :after="item.ZWS|empty" v-for="item in room" :key="item.classroom"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-room',
    props: ['name'],
    data() {
      return {
        room: []
      }
    },
    mounted() {
      this.$f7.showIndicator();
      this.$http.get('/table/room/lists', {
        params: {
          building: decodeURIComponent(this.name)
        }
			}).then(response => {
			  const reg = /[^0-9]/g;
        this.$f7.hideIndicator();
        this.room = response.data.data.course.sort((a, b) => {
          return a.classroom.replace(reg, '') - b.classroom.replace(reg, '');
				});
      });
    },
		filters: {
      empty(value) {
        return value ? value : '';
      }
		}
  }
</script>