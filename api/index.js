import axios from 'axios'

export default {
  auth: {
    me: (token) => axios.get('http://localhost/proyectos/new/bagisto-master/public/api/customer/get', token),
    login: (data) => axios.post('http://localhost/proyectos/new/bagisto-master/public/api/customer/login', data)
  }
}

// import axios from 'axios'
// const Cookie = process.client ? require('js-cookie') : undefined
//   //Cookie.set('name', 'value', { expires: 7 });
//
// const Session = Cookie.
//
//   if()
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
