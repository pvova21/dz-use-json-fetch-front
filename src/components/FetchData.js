import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch';

export default function FetchData(props) {
  const { url, opts } = props;
  const [ { data, loading, error } ] = useJsonFetch(url, opts);
  console.log({ data, loading, error });
  return (
    <div className="item">
      { loading && <progress/> }
      { data && <p>Data status: "{data}" </p> }
      { error && 
      <div>
        <div>Error: </div>
        <span>"{error.name + ' - '}</span>
        <span>{error.message}"</span>
      </div>}
    </div>
  )
}

FetchData.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string
}
