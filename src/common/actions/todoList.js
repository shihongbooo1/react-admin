import { createAction } from 'redux-actions'

//redux-actions框架提供了两个常用的API函数  
//createAction  是用来创建Action的
export const addTodo = createAction('ADD_TODO')
export const setVisibility = createAction('SET_VISIBILITY')
export const toggleTodo = createAction('TOGGLE_TODO')
export const delTodo = createAction('DEL_TODO') 
