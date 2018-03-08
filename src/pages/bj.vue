<template>
	<f7-page>
		<f7-block-title>请选择班级</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/detail/SKBJH/' + item.BJ + '/' + item.BJ" :title="item.BJ" :after="item.SSNJ" v-for="item in bj" :key="item.BH"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-bj',
    props: ['id'],
    data() {
      return {
        bj: []
      }
    },
    mounted() {
      this.$f7.showIndicator();
      this.$http.get('/table/room/bj', {
        params: {
          major: this.id
        }
      }).then(response => {
        this.$f7.hideIndicator();
        this.bj = response.data.data;
      });
    }
  }
</script>