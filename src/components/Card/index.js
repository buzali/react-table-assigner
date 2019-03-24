import React, {Component} from 'react';
import { CardBody, Title, Fecha } from './Card.style';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            date:''
        }
    }

    componentDidMount(){
        const fecha= new Date();
        const date=fecha.toLocaleTimeString('es-MX');
        this.setState({date})
    }

    render(){
        const { title } = this.props;
        const { date } = this.state;
        return (
            <CardBody>
                <Title>{title}</Title>
                <Fecha>{`Disponible desde ${date}`}</Fecha>
            </CardBody>
        )
    }
}

export default Card;