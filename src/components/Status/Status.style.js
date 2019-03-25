import styled from 'styled-components';

export const Circle = styled.div`
    {
        width:100px;
        height:100px;
        border-radius:100%;
        background-color: ${props => props.exist ? '#ED1C24' : '#39B54A'};
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        padding:10px;
        color:white;
    }

    &:hover{
        cursor:pointer;
    }
`;

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: #1b2431;
    top:0;
    left:0;
`

export const Title = styled.h1`
    color:white;
`;