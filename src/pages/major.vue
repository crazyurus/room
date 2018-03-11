<template>
	<f7-page>
		<f7-block-title>请选择专业</f7-block-title>
		<f7-list>
			<f7-list-group v-if="major.bks.length > 0">
				<f7-list-item title="本科专业" group-title></f7-list-item>
				<f7-list-item :link="'/college/major/' + item.ZYH" :title="item.ZYMC" v-for="item in major.bks" :key="item.ZYH"></f7-list-item>
			</f7-list-group>
			<f7-list-group v-if="major.yjs.length > 0">
				<f7-list-item title="硕博士专业" group-title></f7-list-item>
				<f7-list-item link="javascript:;" :title="item.ZYMC" v-for="item in major.yjs" :key="item.ZYMC"></f7-list-item>
			</f7-list-group>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-major',
    props: ['id'],
    data() {
      return {
        major: {
          bks: [],
          yjs: []
        }
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