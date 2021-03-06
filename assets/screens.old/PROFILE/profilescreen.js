import React, { Component } from 'react';
import { Image, View, Text, } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: 'black',
          flex: 1,  
          FlexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Content>
          <View style={{ alignItems: 'center', marginTop: 150 }}>
            <Image
              source={require('../../images/vishwapreneur_logo.png')}
              style={{ height: 100, width: 100 }}
            />
          </View>

          <View style={{ alignItems: 'center', paddingTop: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              Login
            </Text>
          </View>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input style={{ color: 'white' }} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              secureTextEntry <Input />
            </Item>
          </Form>
          <View style={{ justifyContent: 'center' }}>
            <Button success>
              <Text>Success</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
