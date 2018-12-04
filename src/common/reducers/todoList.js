import { handleActions } from 'redux-actions'

//使用redux-actions框架提供的handleActions() 来处理reducer
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false // 刚传入的待办项未完成
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      //不能修改一个对象，须新建一个对象，因为react不好判断一个对象是否改变
      //Object.assign是ES6新添加的接口，主要的用途是用来合并多个JavaScript的对象
      //Object.assign()接口可以接收多个参数，第一个参数是目标对象，后面的都是源对象，assign方法将多个原对象的属性和方法都合并到了目标对象上面
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
  // var a = {a:1};
  // var b = {b:2};
  // var c = {c:3};
  // Object.assign(abc,a,b,c)
  // {a:1,b:2,c:3}
}
//初始值--state
const todoListInit = [{
    id: -3,
    text: 'coding',
    completed: false,
  }, {
    id: -2,
    text: '打篮球',
    completed: false,
  }, { 
    id: -1,
    text: 'reading',
    completed: true,
  }] 

export const todoList = handleActions({
  'ADD_TODO'(state, action) {
    console.log(action.payload);  //action.payload  获取action对象
    return [
      ...state,
      todo(undefined, action.payload)  
    ]
  },
  'TOGGLE_TODO'(state, action) {
    return state.map(t => todo(t, action.payload))
  },
  'DEL_TODO'(state, action) {
    console.log(action.payload);
    return state.filter(t => t.id !== action.payload.id)
  }
}, todoListInit)
// var arr = [1,2,3,6,9];
// var a = arr.filter(function(item){
//   return item !==3;
// })  // 1269

//初始值--state
const setVisibilityInit = {
  filter: 'SHOW_ALL',
}

export const setVisibility = handleActions({
  'SET_VISIBILITY'(state, action) {
    console.log({ ...state})
    console.log({...action.payload})
    console.log({ ...state, ...action.payload})
    //注意，属性相同，后面的属性会把前面的覆盖掉
    return { ...state, ...action.payload}
  }
}, setVisibilityInit)
