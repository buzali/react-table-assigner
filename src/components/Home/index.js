import React, { Component } from 'react';
import { Container, Hora, Title, Logo } from './Home.style';
import Card from '../Card';
import { db } from '../../constants/Firebase';
import { PulseLoader } from 'react-spinners';

class Home extends Component {
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
        const transit=data.transit;
        const id = doc.id;
        return { title, date, id, transit };
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
        <Logo src={process.env.REACT_APP_IMGURL} alt='' />
        <Title>{`Venta ${process.env.REACT_APP_TIENDA} - Cajas Disponibles:`}</Title>
        <Hora>{time}</Hora>
        <Container>
          {
            loading
              ?
              <PulseLoader color='#36D7B7'/>
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

export default Home;
