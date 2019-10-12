<template>
  <div class="page-home-films">
    <!-- 二级路由页面 影片列表页 -->
    <div class="tabs">
      <ul>
        <li :class="{'active': curFilmType === 'nowPlaying'}" @click="chgFilmType('nowPlaying')">正在热映</li>
        <li :class="{'active': curFilmType === 'comingSoon'}" @click="chgFilmType('comingSoon')">即将上映</li>
      </ul>
      <div class="active-line" :style="{'left': curFilmType === 'nowPlaying' ? '0' : '50%'}">
        <span></span>
      </div>
    </div>
    <!-- 影片列表  使用动态组件来控制-->
    <component :is="curFilmType" />
  </div>
</template>

<script>
import nowPlaying from '../../components/nowPlaying'
import comingSoon from '../../components/comingSoon'
export default {
  name: 'Flims',

  components: {
    nowPlaying,
    comingSoon
  },
  data () {
    return {
      curFilmType: 'nowPlaying'
    }
  },
  methods: {
    chgFilmType (type) {
      this.curFilmType = type
    }
  }
}
</script>

<style lang="scss">
.page-home-films{
  .tabs{
    position: relative;
    height: 50px;
    ul{
      display: flex;
      height:50px;
      align-items: center;
      li{
        flex: 1;
        text-align: center;
        &.active{
          color: #ff5f16;
        }
      }
    }
    .active-line{
     height: 2px;
     width: 50%;
     position: absolute;
     left: 0;
     bottom: 0;
     transition: all 0.5s;
     span{
       width: 56px;
       margin: auto;
       display: block;
       background: #ff5f16;
       height: 2px;
     }
    }
  }
}
</style>
