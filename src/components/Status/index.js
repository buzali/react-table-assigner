import React, { Component } from 'react';
import { Circle, Container, Title } from './Status.style';
import { db } from '../../constants/Firebase';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exist: true,
            loading:true
        }
    }
    //this.props.match.params
    handleClick = () => {
        var { exist } = this.state;
        exist ? this.borrar() : this.agregar()
        exist = !exist;
        this.setState({ exist });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        db
            .doc(`Cajas/${id}`)
            .get()
            .then(doc =>{
                if(!doc.exists) this.setState({exist:false});
                this.setState({loading:false});
            })
    }

    borrar = () => {
        const { id } = this.props.match.params;
        db
            .collection(`Cajas/${id}`)
            .doc(`${id}`)
            .delete();
    }

    agregar = () => {
        const { id } = this.props.match.params;
        const nombre = `Caja ${id}`;
        const fecha_cambio = new Date();
        db.doc(`Cajas/${id}`).set({ nombre, fecha_cambio })
    }

    render() {
        const { id } = this.props.match.params;
        const { exist, loading } = this.state;
        const props = {
            exist,
            onClick: this.handleClick
        };
        return (
            <Container>
                <Title>{`Caja no. ${id}`}</Title>
                {
                    loading
                    ?
                    <h1>Cargando...</h1>
                    :
                    <Circle {...props}>
                    {
                        exist
                            ?
                            'Click para caja ocupada'
                            :
                            'Click para caja libre'
                    }
                </Circle>
                }
            </Container>
        )
    }
}

export default Status;