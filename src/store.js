export const initialStore=()=>{
  const token = localStorage.getItem("access_token");
  return {
    message: null,
    isAuth: !!token // true si hay token guardado
  };
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

     case 'LOGIN':

      return {
        ...store,
        isAuth: true
      };

    case 'LOGOUT':

      return {
        ...store,
        isAuth: false
      };
    default:
      throw Error('Unknown action.');
  }    
}
