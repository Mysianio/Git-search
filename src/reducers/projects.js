export default function projects(state = [], action){
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.data
      break;
    case 'SEARCH_PROJECT':
      return {
        ...state,
        search: action.projectName
      }
    default:
      return state
  }
}
