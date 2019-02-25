import React, { Component } from 'react';
import {searchbar }from '../search.action';
import {connect} from 'react-redux';
import SearchBar from 'material-ui-search-bar'

class Search extends Component {

  state = {
    search : ""
  }

 

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
      this.props.searchbar(this.state);
  }
 
render(){
          
    return(
        <div>
             <h1>Welcome To Book-Hub</h1>
            <form>    
             <input type="text" placeholder="Search.." onChange={(e) => this.handleSearch(e)}/>
             <button type="submit" onClick={(e) => this.handleSubmit(e)} >Search</button>
             
             </form>
        </div>       
             
    )
   }
 }
      const mapDispatchToProps = dispatch => {
        return{
          searchbar : (state) => dispatch(searchbar(state))
        }
      }

    // const mapStateToProps = (state) => {
    //   return{
    //         books : state.search_reducer.books,
    //         loading : state.loading
    //   }
    // }


export default connect (null ,mapDispatchToProps) (Search);