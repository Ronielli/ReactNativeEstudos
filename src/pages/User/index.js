import React, { Component } from 'react';

import api from '../../services/api'


import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Autor

} from './styles';

export default class User extends Component {
  state = {
    stars: [],

  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("user").name,
    };
  };


  async componentDidMount() {

    const { navigation } = this.props
    const user = navigation.getParam("user")
    const response = await api.get(`users/${user.login}/starred`)


    this.setState({
      stars: response.data,

    })

  }

  render() {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam("user");
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Autor>{item.owner.login}</Autor>
              </Info>
            </Starred>

          )}
        />
      </Container>
    );
  }
}
