<template>
	<f7-page>
		<f7-block-title>请选择教室（容量：人）</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/detail/JXDD/' + item.JSH + '/' + item.JSH" :title="item.JSH" :after="item.ZWS" v-for="item in room" :key="item.JSH"></f7-list-item>
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
          building: this.name
        }
			}).then(response => {
        this.$f7.hideIndicator();
        this.room = response.data.data;
      });
    }
  }
</script>