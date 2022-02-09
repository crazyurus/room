<template>
  <f7-page>
    <token-table :week="table.week" :course="table.course" :start="table.start"></token-table>
  </f7-page>
</template>

<script>
    import Table from '../components/table.vue'

    export default {
      components: {
        'token-table': Table
      },
      props: ['type', 'value', 'title'],
      data() {
        return {
          table: {
            week: 0,
            course: []
          }
        }
      },
      mounted() {
        this.$f7.showIndicator();
        this.$http.get('/table/index/room', {
          params: {
            type: this.type,
            value: decodeURIComponent(this.value)
          }
        }).then(response => {
          this.$f7.hideIndicator();
          this.table = response.data.data;
          this.changeTitle(decodeURIComponent(this.title));
        });
      },
      methods: {
        changeTitle(title) {
          document.title = title;
          if (window.token && token.changeTitle) token.changeTitle(document.title);
        }
      }
    }
</script>