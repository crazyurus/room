<template>
	<f7-page>
		<f7-block-title>请选择教学楼</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/area/room/' + value" :title="key" v-for="(value, key) in building" :key="value"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  export default {
    name: 'token-building',
		props: ['name'],
		data() {
      return {
        building: {}
			}
		},
		mounted() {
      const data = require('../../mock/building');
      this.building = data[this.name];
		}
  }
</script>