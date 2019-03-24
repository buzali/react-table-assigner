import React, { Component } from 'react';
import { Container, Hora, Title } from './App.style';
import Card from '../Card';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    text-align:center;
    padding:0;
    margin:0;
    background-color: #F4F4F4;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'caja 1'
        },
        {
          title: 'caja 2'
        },
        {
          title: 'caja 3'
        },
        {
          title: 'caja 4'
        },
        {
          title: 'caja 5'
        },
        {
          title: 'caja 6'
        },
        {
          title: 'caja 7'
        },
        {
          title: 'caja 8'
        },
        {
          title: 'caja 9'
        },
        {
          title: 'caja 10'
        },
        {
          title: 'caja 11'
        },
        {
          title: 'caja 12'
        },
        {
          title: 'caja 13'
        },
        {
          title: 'caja 14'
        },
        {
          title: 'caja 15'
        },
        {
          title: 'caja 16'
        },
        {
          title: 'caja 17'
        },
        {
          title: 'caja 18'
        },
        {
          title: 'caja 19'
        },
        {
          title: 'caja 20'
        }
      ]
    }
  }

  componentDidMount() {
    var intervalId = setInterval(() => {
      this.setState({
        time: `${new Date().toLocaleTimeString('es-MX')} `
      });
    }, 1000);
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
  }

  render() {
    const { items, time } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Title>{'Venta Grupo Axo'}</Title>
        <Hora>{time}</Hora>
        <Container>
          {
            items.map(
              item => <Card {...item} />
            )
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
