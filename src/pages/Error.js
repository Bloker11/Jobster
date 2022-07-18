import React from 'react'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt="not found" />
            <h3>Opss... It looks like something went wrong</h3>
            <p>Back to the home page</p>
            <Link to="/">Back home</Link>
        </div>
    </Wrapper>
  )
}

export default Error