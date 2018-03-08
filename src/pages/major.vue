<template>
	<f7-page>
		<f7-block-title>请选择专业</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/college/major/' + item.ZYH" :title="item.ZYMC" v-for="item in major" :key="item.ZYH"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-major',
    props: ['id'],
    data() {
      return {
        major: []
      }
    },
    mounted() {
      this.$f7.showIndicator();
      this.$http.get('/table/room/major', {
        params: {
          college: this.id
        }
      }).then(response => {
        this.$f7.hideIndicator();
        this.major = response.data.data;
      });
    }
  }
</script>