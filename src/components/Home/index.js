import React, { Component } from 'react';
import { Container, Hora, Title, Logo } from './Home.style';
import Card from '../Card';
import { db } from '../../constants/Firebase';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    /*db
      .collection('Cajas')
      .get()
      .then(collection => {
        const suggestions = collection.docs.map(doc => {
          const data=doc.data();
          const id=doc.id;
          return {...data, id} 
        })
        console.log(suggestions)
      })*/

    db.collection('Cajas').onSnapshot(collection => {
      const items = collection.docs.map(doc => {
        const data = doc.data();
        const title = data.nombre;
        const date = data.fecha_cambio;
        return { title, date };
      })
      this.setState({ items, loading:false });
    })

    var intervalId = setInterval(() => {
      this.setState({
        time: `${new Date().toLocaleTimeString('es-MX')} `
      });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  getCajas = () => {
    db.collection('Cajas').onSnapshot('')
  }

  render() {
    const { items, time, loading } = this.state;
    return (
      <React.Fragment>
        <Logo src='http://www.grupoaxo.com/facturacion/logo-axo.png' alt='' />
        <Title>{'Venta Grupo Axo - Cajas Disponibles:'}</Title>
        <Hora>{time}</Hora>
        <Container>
          {
            loading
              ?
              <h1>Cargando...</h1>
              :
              <React.Fragment>
                {
                  items.map(
                    (item, index) => <Card {...item} key={index} />
                  )
                }
              </React.Fragment>
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
