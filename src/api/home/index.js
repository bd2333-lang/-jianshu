import {MethodType} from "../fetch";
const fetch =  require('../fetch.js');
export const getArtitleLists = (data) => fetch.request("api/getArtitleList",MethodType.GET,data)
export const getAuthor = (data) => fetch.request("api/getAuthor",MethodType.GET,data)

// export const getArtitleLists = (data) => fetch('api/getArtitleList',data,'GET')
// export const getAuthor = (data) => fetch("api/getAuthor",data,'GET')