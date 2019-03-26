import React, { Component } from 'react';
import { CardBody, Title, Fecha } from './Card.style';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es-MX';
import { SyncLoader } from 'react-spinners';
import { db } from '../../constants/Firebase';

TimeAgo.addLocale(es);

const timeAgo = new TimeAgo('es-MX');

function Card({ id, title, date, transit }){

    const onClick=()=>{
        db.doc(`Cajas/${id}`).set({ nombre:title, fecha_cambio:date, transit:true })
    }
        const propsBody={ 
            transit,
            onClick
        };
        const propsFecha={ 
            transit
        };

        console.log({ id, title, date, transit })
        return (
            <CardBody {...propsBody} >
                <Title>{title}</Title>
                {
                    transit
                    ?
                    <SyncLoader color='white' />
                    :
                    null
                }
                <Fecha {...propsFecha}>{`Disponible desde ${getFecha(date ? date.seconds : 0)}.`}</Fecha>
            </CardBody>
        );
}

function getFecha(timestamp) {
    return timeAgo.format(new Date(timestamp * 1000))
}

export default Card;