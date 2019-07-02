export function getProjectsSuccsess(data){
  return {
    type: 'GET_PROJECTS',
    data
  }
}

export function getProjects(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .catch()
      .then(response=> response.json())
      .then(data => dispatch(getProjectsSuccsess(data)))
  }
}
