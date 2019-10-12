<template>
  <div class="film-list">
    <ul>
      <li>
        <div class="left">
          <img src="https://static.maizuo.com/pc/v5/usr/movie/ab0ee357e3fb0718059df8d8717a1bf7.jpg?x-oss-process=image/quality,Q_70">
        </div>
        <div class="center">
          <div class="name">中国机长</div>
          <div class="grade">观众评分:<span>7</span></div>
          <div class="actors">
            主演：张三、李四、王五、马六、赵七
          </div>
          <div class="detail">
            中国大陆 | 111分钟
          </div>
        </div>
        <div class="right">
          <button class="buy">购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/styles/cccc/mixins.scss';
.film-list{
  ul{
    margin-left: 15px;
  }
  li{
    @include border-bottom;
    display: flex;
    height:94px;
    padding: 15px 15px 15px 0;
    overflow: hidden;
    .left{
      width: 66px;
      flex-shrink: 0;
      img{
        width: 100%;
      }
    }
    .right{
      width: 50px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      .buy{
        @include border;
        width: 50px;
        height: 25px;
        border: none;
        background: none;
        color: #ff5f16;
      }
    }
    .center{
      flex: 1;
      overflow: hidden;
      padding: 0 10px;
      line-height: 1.4;
      > div{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
