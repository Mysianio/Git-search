import React, {Component} from 'react';
import { connect } from 'react-redux';
import Search from './Search.js';
import {getProjects} from '../actions/getProjects.js';
import '../index.css';

class App extends Component{
  componentDidMount(){
    this.props.onGetProjects('https://api.github.com/search/repositories?q='+this.props.projectSearch)
  }
  render(){
    let list;
    if(this.props.projects === undefined){
      list = 'Load data...'
    }else if(this.props.total !==0){
      list = this.props.projects.map((item, key) =>{
        return <li key={key}>
         <a href={item.html_url}>{item.name}</a>
         <span>Amount of stars: {item.stargazers_count}</span>
         <span>Amount of subscribers: {item.watchers_count}</span></li>
      });
    }else{
      list = 'No result'
    }
    return(
      <div className='app'>
        <Search/>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default connect(
  state =>({
    projects: state.projects.items,
    total: state.projects.total_count
  }),
  dispatch =>({
    onGetProjects: (url) =>{
      dispatch(getProjects(url))
    }
  })
)(App)
