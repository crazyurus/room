<template>
  <f7-page>
    <header>
      <div class="head-blank"></div>
      <img class="head-avatar" src="https://avatars.githubusercontent.com/u/2209055">
      <div class="head-user">
        <div class="user-name">
          <span>{{teacher.name}}</span>
          <i v-if="teacher.sex === '1'" class="icon-sex boy"></i>
          <i v-if="teacher.sex === '2'" class="icon-sex girl"></i>
        </div>
        <div class="user-college">{{teacher.college}}</div>
      </div>
    </header>
    <nav>
      <div class="nav-item" :class="{ active: active === 1}" data-tab="1" @click="switchTab">联系方式</div>
      <div class="nav-item" @click="showCourseTable">教师课表</div>
      <div class="nav-item" :class="{ active: active === 2}" data-tab="2" @click="switchTab">学生评价</div>
    </nav>
    <section>
      <div class="nav-container" :class="{ active: active === 1}">
          <p v-if="teacher.mobile">手机：<a :href="'tel:' + teacher.mobile" class="external">{{teacher.mobile}}</a></p>
          <p v-if="teacher.email">电子邮箱：<a :href="'mailto:' + teacher.email" class="external">{{teacher.email.toLowerCase()}}</a></p>
      </div>
      <div class="nav-container" :class="{ active: active === 2}">
        <p>待接入选修客数据，请先前往 <a href="http://m.xuan.wutnews.net/" class="external">m.xuan.wutnews.net</a> 查看</p>
      </div>
    </section>
    <footer>* 如果您是教师并且不想公开以上信息，请在反馈页面联系我们</footer>
  </f7-page>
</template>

<script>
  export default {
    name: "token-teacher-contact",
    props: ['sno'],
    data() {
      return {
        active: 1,
        teacher: {
          name: '加载中…',
          college: '武汉理工大学',
          sex: '1',
          avatar: '//static.wutnews.net/avatar/default.jpg',
          mobile: '',
          email: ''
        },
      };
    },
    mounted() {
      this.$f7.showIndicator();
      this.$http.get('/table/room/contact', {
        params: {
          sno: this.sno
        }
      }).then(response => {
        this.$f7.hideIndicator();
        this.teacher = response.data.data;
      });
    },
    methods: {
      switchTab(e) {
        this.active = Number(e.target.dataset.tab);
      },
      showCourseTable() {
        const { name, sno } = this.teacher;
        this.$f7.mainView.router.loadPage(`/detail/JSGH/${sno}/${encodeURIComponent(name)}`);
      }
    }
  }
</script>

<style scoped>
  .page-content {
    background: #fff;
  }
  header {
    position: relative;
  }

  .head-blank {
    height: 50px;
    background: #45c8dc;
  }

  .android .head-blank {
    background: #55b6a3;
  }

  .head-avatar {
    position: absolute;
    left: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: 19px;
    border: 1px solid #fff;
  }

  .head-user {
    margin: 40px 0 0 15px;
  }

  .user-name {
    font-size: 17px;
    font-weight: bold;
    line-height: 1.6;
  }

  .user-college {
    font-size: 14px;
    color: #999;
    line-height: 1.6;
  }
  nav {
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
  }
  .nav-item {
    margin: 0 10px 0 15px;
    height: 38px;
    line-height: 40px;
    border-bottom: 2px solid #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .nav-item.active {
    color: #45c8dc;
    border-bottom: 2px solid #45c8dc;
  }
  .android .nav-item.active {
    color: #55b6a3;
    border-bottom: 2px solid #55b6a3;
  }
  footer {
    position: absolute;
    bottom: 20px;
    left: 15px;
    color: #999;
    font-size: 14px;
    width: calc(100% - 30px);
  }
  .nav-container {
    margin: 0 15px;
    font-size: 15px;
    font-weight: 300;
    display: none;
  }
  .nav-container.active {
    display: block;
  }
  .nav-container a {
    color: #45c8dc;
    text-decoration: none;
  }
  .android .nav-container a {
    color: #55b6a3;
  }
  .icon-sex {
    display: inline-block;
    vertical-align: top;
    padding-top: 11px;
    width: 1rem;
    height: 1rem;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .icon-sex.boy {
    background-image: url(/Application/SecondHand/Assets/image/sex/boy.png);
  }
  .icon-sex.girl {
    background-image: url(/Application/SecondHand/Assets/image/sex/girl.png);
  }
</style>