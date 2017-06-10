import React from 'react'

const GifSearch = (props) =>
  <form onSubmit={props.fetchGifs}>
    <input type="text"  onChange={props.handleQuery} />
    <button type="submit">Submit</button>
  </form>

  GifSearch.defaultProps = {
    query: "",
    handleQuery: function(){},
    fetchGifs: function(){}
  }

export default GifSearch;
