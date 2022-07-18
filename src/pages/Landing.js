import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracking</span> app</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum temporibus error culpa aut dolorem ullam possimus excepturi harum autem, repellat.
            </p>
            
            <Link to="/register" className="btn btn-hero">login/register</Link>
            </div>
            <img src={main} alt="main" className="img main-img" />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
}
.page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}
h1{
    font-weight: 700;
    span{
    color: var(--primary-500);
}
}
.main-img{
    display: none;
}
p{
    color: var(--grey-600);
}
@media (min-width: 992px){
    .page{
        grid-template-columns:1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{
        display: block;
    }
}

`

export default landing