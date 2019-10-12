import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmList:[] //影片列表集合
  },
  getters: {

  },
  mutations: {
    setFilmList(state, payload){
      state.filmList = payload
    }
  },
  actions: {
    getFilmList(context,payload) {
      axios.get('https://m.maizuo.com/gateway',{
          params:{
            cityId:440300, //城市ID
            pageNum:1, // 页码
            pageSize:10, //每页显示条数
            type:1, //影片类型，正在热映1，即将上映2
            k:9818915
          },
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157079477920169166422068"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        }
      )
    }
  }
}
