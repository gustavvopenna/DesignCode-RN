import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import styled from 'styled-components'
import { Icon } from 'expo'
import { NotificationIcon } from './components/Icons'

import Card from './components/Cards'

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: '100%' }}>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Gustavo</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5 }}
            />
          </TitleBar>
          <Subtitle>Continue learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              image={require('./assets/background2.jpg')}
              title="Styled Components"
              logo={require('./assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              image={require('./assets/background2.jpg')}
              title="Styled Components 2"
              logo={require('./assets/logo-react.png')}
              caption="React"
              subtitle="10 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`
