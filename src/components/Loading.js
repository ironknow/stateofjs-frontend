import React from "react"
import Loader from "react-loader-spinner"
import StyledLoader from "../elements/StyledLoader"

const Loading = () => {
  return (
    <StyledLoader>
      <Loader
        type="ThreeDots"
        color="var(--green-fluo)"
        height={70}
        width={50}
        // timeout={3000} //3 secs
      />
    </StyledLoader>
  )
}

export default Loading
