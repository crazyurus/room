<template>
  <div id="app">
		<f7-views>
			<f7-view main>
				<f7-pages>
					<f7-page>
						<div class="title">自习室</div>
						<f7-link class="item" style="background: linear-gradient(45deg, rgb(14,28,41), rgb(27,68,106));" href="/area">
							<div class="item-title">教室课表</div>
							<div class="item-desc">查看教室的课表安排</div>
							<div class="item-button">查看</div>
						</f7-link>
						<f7-link class="item" style="background: linear-gradient(45deg, rgb(40,111,209), rgb(68,192,249));" href="/college">
							<div class="item-title">班级课表</div>
							<div class="item-desc">查看班级的排课信息</div>
							<div class="item-button">查看</div>
						</f7-link>
						<f7-link class="item" style="background: linear-gradient(45deg, rgb(54,48,105), rgb(73,88,163));" href="/teacher">
							<div class="item-title">教师课表</div>
							<div class="item-desc">查看教师的任课安排</div>
							<div class="item-button">查看</div>
						</f7-link>
						<f7-link class="item" style="background: linear-gradient(45deg, rgb(80,66,180), rgb(120,104,228));" href="/course">
							<div class="item-title">课程查询</div>
							<div class="item-desc">查看某门课程的所有安排</div>
							<div class="item-button">查看</div>
						</f7-link>
						<div v-if="$sno !== '(null)'" class="item" style="background: linear-gradient(45deg, rgb(90,192,198), rgb(157,226,219));">
							<f7-input class="item-switch" type="switch" checked></f7-input>
							<div class="item-title">个人课表</div>
							<div class="item-desc">查看自己的课程表</div>
							<div class="item-button" @click="onTable">查看</div>
							<div class="item-button" style="margin-right: 10px;" @click="onShare">分享</div>
						</div>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>
  import { Base64 } from 'js-base64'

  export default {
    methods: {
      onShare() {
        const route = '/detail/share/' + Base64.encode(window.sno) + '/' + encodeURIComponent(window.userName + '的课表');
        const url = 'https://web.wutnews.net/room' + route;
				this.$f7.modal({
					title: '课表分享',
					text: '课表分享链接已生成！快分享给同学吧～（自定义课程是不会被分享的哦）',
					verticalButtons: true,
					buttons: [{
					  text: '分享给同学',
						bold: true,
						onClick() {
					    const title = window.userName + '的个人课表';
							if (window.token && token.invokeShare) token.invokeShare(title, url, 0);
							else location.assign('mqqapi://share/to_fri?src_type=web&version=1&file_type=news&share_id=1103437993&title=' + Base64.encode(title) + '&thirdAppDisplayName=5o6M5LiK55CG5bel5aSn&url=' + Base64.encode(url) + '&description=' + Base64.encode('这是我分享的个人课表，快来看看我有哪些课吧～'));
						}
					}, {
            text: '查看我的课表分享',
            onClick() {
              f7.mainView.router.loadPage(route);
            }
          }, {
					  text: '暂不分享'
					}]
				});
			},
      onTable() {
        location.assign('/table');
			}
		}
	}
</script>

<style scoped>
	.title {
		margin: 16px 25px;
		font-weight: 900;
		font-size: 32px;
	}

	.item {
		display: block;
		border-radius: 12px;
		box-shadow: 0 3px 8px 5px rgb(220,220,220);
		height: 90px;
		color: #fff;
		margin: 0 20px 20px;
		padding: 15px 12px;
	}

	.item-title {
		font-weight: bold;
		font-size: 22px;
	}

	.item-desc {
		font-size: 14px;
		line-height: 2;
	}

	.item-button {
		height: 28px;
		background: rgba(51, 51, 51, 0.6);
		border-radius: 14px;
		width: 62px;
		float: right;
		text-align: center;
		line-height: 28px;
	}

	.item-switch {
		float: right;
	}
</style>