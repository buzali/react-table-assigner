import styled from 'styled-components';

export const CardBody = styled.div`
    {
        background-color: ${props=>props.transit?'#da932c':'#273142'};
        color: black;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:10px;
        border-radius:12px;
        border:1px solid #313d4f;
        margin:10px;
    }
    &:hover{
        cursor:pointer;
    }
`;

export const Title = styled.h1`
    text-align:center;
    color:white;
`;

export const Fecha = styled.p`
    text-align:center;
    color: ${props=>props.transit?'white':'#7f8fa4'};
`;

