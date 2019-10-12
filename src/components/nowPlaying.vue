<template>
  <div class="film-list">
    <ul>
      <li v-for="film in filmList" :key="film.filmId">
        <div class="left">
          <img :src="film.poster">
        </div>
        <div class="center">
          <div class="name">{{film.name}}</div>
          <div class="grade">观众评分:<span>{{film.grade}}</span></div>
          <div class="actors">
            主演：{{film.actors}}
          </div>
          <div class="detail">
            {{film.nation}} | {{film.runtime}}分钟
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
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NowPlaying',
  computed: {
    ...mapState('film',['filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList'])
  },
  created () {
    this.getFilmList()
  }
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
