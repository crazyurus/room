<template>
  <div id="app">
    <div class="title">自习室</div>
		<div class="item" style="background: linear-gradient(45deg, rgb(14,28,41), rgb(27,68,106));">
			<div class="item-title">教室课表</div>
			<div class="item-desc">查看教室的课表安排</div>
			<div class="item-button">查看</div>
		</div>
		<div class="item" style="background: linear-gradient(45deg, rgb(40,111,209), rgb(68,192,249));">
			<div class="item-title">班级课表</div>
			<div class="item-desc">查看班级的排课信息</div>
			<div class="item-button">查看</div>
		</div>
		<div class="item" style="background: linear-gradient(45deg, rgb(54,48,105), rgb(73,88,163));">
			<div class="item-title">教师课表</div>
			<div class="item-desc">查看教师的任课安排</div>
			<div class="item-button">查看</div>
		</div>
		<div class="item" style="background: linear-gradient(45deg, rgb(90,192,198), rgb(157,226,219));">
			<div class="item-title">个人课表</div>
			<div class="item-desc">查看自己的课程表</div>
			<div class="item-button">查看</div>
		</div>
  </div>
</template>

<script>

</script>

<style scoped>
	.title {
		margin: 15px 25px;
		font-weight: bold;
		font-size: 30px;
	}

	.item {
		border-radius: 12px;
		box-shadow: 0 3px 8px 5px rgb(220,220,220);
		height: 84px;
		color: #fff;
		margin: 0 20px 20px;
		padding: 15px 12px;
	}

	.item-title {
		font-weight: 900;
		font-size: 20px;
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
</style>