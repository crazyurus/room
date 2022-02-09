<template>
	<f7-page>
		<f7-block-title>请选择教学楼</f7-block-title>
		<f7-list>
			<f7-list-item :link="'/area/room/' + value" :title="key" v-for="(value, key) in building" :key="value"></f7-list-item>
		</f7-list>
	</f7-page>
</template>

<script>
  import buildingData from '../../mock/building.json'

  export default {
    name: 'token-building',
		props: ['name'],
		data() {
      return {
        building: {}
			}
		},
		mounted() {
      const name = decodeURIComponent(this.name);
      this.building = buildingData[name];
		}
  }
</script>