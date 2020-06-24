// import axios from 'axios';
// import {message} from 'antd';
// // import store from '../store';
// import {getToken,removeToken} from './auth';

// // 创建axios实例
// const service = axios.create({
//   // baseURL: process.env.BASE_API, // api的base_url
//   timeout: 1000 * 60 // 请求超时时间60秒
// });
// var messageObj = null;
// // request拦截器
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   if (getToken()) {
//     config.headers['access-token'] = getToken(); // 让每个请求携带access-token
//   }
//   if (config.responseType === undefined) {
//     config['responseType'] = 'json';
//   }
//   return config;
// }, error => {
//   // Do something with request error
//   /*console.log(error); // for debug*/
//   Promise.reject(error);
// })

// // respone拦截器
// service.interceptors.response.use(
//   response => {
//     const res = response.data;
//     if (response.status !== 200) {
//       if(messageObj == null){
//         messageObj = message(
//           res.message,
//         )
//       }
//       setTimeout(function () {
//         messageObj = null;
//       },3000)

//     }else if(response.data.status==40101){
//       if(messageObj == null){
//         messageObj = message(
//           res.message,
//         );
//       }
//       setTimeout(function () {
//         messageObj = null;
//       },3000)
//     } else {
//       // if (response.data.status === 40101) {
//       //   store.dispatch('FedLogOut').then(() => {
//       //     message.error('登录失效,请重新登录！')
//       //     router.push({path: '/login'});
//       //   })
//       // }else if (response.data.code === 40101) {
//       //   if(messageObj == null){
//       //     messageObj = message.error('您的账户已被登录，请重新登录');
//       //   }
//       //   removeToken();
//         // router.push({path: '/login'});
//   /*      setTimeout (function(){
//           store.dispatch('FedLogOut')
//             .then(() => {
//               location.reload(); // 为了重新实例化vue-router对象 避免bug
//             });
//         },1500);*/
//         // setTimeout(function () {
//         //   messageObj = null;
//         // },3000)

//       }
//   },
//   error => {
//    /* console.log('err' + error); // for debug*/
//    message.info(
//     error.message,
//     );
//     return Promise.reject(error);
//   }
// );

// export default service;
