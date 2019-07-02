import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProjects} from '../actions/getProjects.js';

class Search extends Component{
  findProject(e){
    if(e.target.value !== undefined){
      this.props.onGetProjects('https://api.github.com/search/repositories?q='+e.target.value)
      console.log('https://api.github.com/search/repositories?q='+e.target.value);
    }
  }
  render(){
    return(
      <React.Fragment>
        <input placeholder='Enter project name' onChange={this.findProject.bind(this)}/>
      </React.Fragment>
    )
  }
}

export default connect(
  state =>({
    projectSearch: state.projects.search
  }),
  dispatch =>({
    onSearchProject: (projectName) => {
      dispatch({type: 'SEARCH_PROJECT', projectName: projectName})
    },
    onGetProjects: (url) =>{
      dispatch(getProjects(url))
    }
  })
)(Search)
