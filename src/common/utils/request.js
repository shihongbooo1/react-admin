import $ from 'jquery';
// export const ajax=(url,type,data)=>{
//     return $.ajax
// }
const curUrl ='http://localhost:3333';
export const get =(url,data)=>{
    return $.get(curUrl+url,data);
}
export const post =(url,data)=>{
    return $.post(curUrl+url,data);
}
