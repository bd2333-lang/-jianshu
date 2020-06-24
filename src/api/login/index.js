import {MethodType} from "../fetch";
const fetch =  require('../fetch.js');
// const promise = require('./promise');

// export const login = async (phoneNumber,password)=>{
//     return await fetch.request('/api/jwt/token', MethodType.POST, {
//         phoneNumber,password
//     })
// };
export const login = (data) => fetch.request("api/jwt/token",MethodType.POST,data)

export const sendCode = (data) => fetch.request("api/user/sendCode",MethodType.GET,data)

//注册
export const regist = (data) => fetch.request("api/user/regist",MethodType.POST,data)
