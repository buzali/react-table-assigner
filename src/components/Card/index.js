import React, {Component} from 'react';
import { CardBody, Title, Fecha } from './Card.style';

function Card({title,date}){
        return (
            <CardBody>
                <Title>{title}</Title>
                <Fecha>{`Disponible desde ${getFecha(date?date.seconds:0)}`}</Fecha>
            </CardBody>
        )
}

function getFecha(timestamp){
    return new Date(timestamp*1000).toLocaleTimeString('es-MX')
}

export default Card;