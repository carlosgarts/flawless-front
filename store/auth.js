import api from '~/api'

export const state = () => ({
  user: null
})

export const mutations = {
  set_user (store, data) {
    store.user = data
  },
  reset_user (store) {
    store.user = null
  }
}

export const actions = {
  fetch ({commit}) {
    return api.auth.me()
      .then(response => {
        commit('set_user', response.data.result)
        return response
      })
      .catch(error => {
        commit('reset_user')
        return error
      })
  },
  login ({commit}, data) {
    return api.auth.login(data)
      .then(response => {
        commit('set_user', response.data.user)
        return response
      })
  },
  reset ({commit}) {
    commit('reset_user')
    return Promise.resolve()
  }
}

// import axios from 'axios'
// const Cookie = process.client ? require('js-cookie') : undefined
//   //Cookie.set('name', 'value', { expires: 7 });
//
// var Token = Cookie.get('flawless_small_token');
//
//   if(Token !== undefined) {
//     var
//   }else{
//
//   }
//         var varsu =  Cookie.get('name');
//         console.log(varsu);
//         Cookie.remove('name');
//
// export default {
//   auth: {
//     me: () => axios.get('auth/me'),
//     login: (data) => axios.post('auth/login', data)
//   }
// }
//
// const Cookie = process.client ? require('js-cookie') : undefined
//   //Cookie.set('name', 'value', { expires: 7 });
//         var varsu =  Cookie.get('name');
//         console.log(varsu);
//         Cookie.remove('name');
// //////////////////////////////////////////////////////////////////////////
//
//         const cookieparser = process.server ? require('cookieparser') : undefined
//
//         export const state = () => {
//           return {
//             auth: null
//           }
//         }
//         export const mutations = {
//           setAuth(state, auth) {
//             state.auth = auth
//           }
//         }
//         export const actions = {
//           nuxtServerInit({ commit }, { req }) {
//             let auth = null
//             if (req.headers.cookie) {
//               const parsed = cookieparser.parse(req.headers.cookie)
//               try {
//                 auth = JSON.parse(parsed.auth)
//               } catch (err) {
//                 // No valid cookie found
//               }
//             }
//             commit('setAuth', auth)
//           }
//         }
//
