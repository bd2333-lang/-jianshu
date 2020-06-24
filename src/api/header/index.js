import {MethodType} from "../fetch";
const fetch =  require('../fetch.js');
export const getKeywordList = (data) => fetch.request("api/getKeywords",MethodType.GET,data)
// export const getKeywordList = (data) => fetch('api/getKeywords',data,'GET')