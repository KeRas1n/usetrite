import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Loader({loading, size, color}) {
  return (
    <ClipLoader
        color={"#E65051" || color}
        loading={loading}
        //cssOverride={override}
        size={size || 50}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
  )
}
