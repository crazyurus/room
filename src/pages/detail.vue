<template>
  <f7-views>
     <f7-view main>
        <f7-pages>
          <f7-page>
            <token-table :week="$store.state.week" :course="$store.state.course" :start="$store.state.start" @change-title="changeTitle"></token-table>
          </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script>
    import Table from './components/table'
    import Course from './course.js'

    export default {
        components: {
            'token-table': Table,
            'token-form': Form
        },
        mounted() {
            const storage = localStorage.getItem('course');
            if (storage) this.updateTable(JSON.parse(storage));
            this.$http.get('/table/index/api').then(response => {
                const data = response.data.data;
                localStorage.setItem('course', JSON.stringify(data));
                this.updateTable(data);
            });
        },
        methods: {
            updateTable(data) {
                this.changeTitle(data.week);
                this.$store.commit('init', data);
            },
            showPopup() {
                this.$store.commit('current', new Course());
                this.$f7.popup('.popup-course');
            },
            changeTitle(week) {
                if (week < 1) document.title = '放假中';
                else document.title = '第' + week + '周';
                if (window.token && token.changeTitle) token.changeTitle(document.title);
            }
        }
    }
</script>