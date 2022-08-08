import React from 'react'
import { Spacer } from '../../../components/spacer.component'
import { AuthButton, BgContainer, BgCover, BgImage, Title } from '../components/account.styles'


const AccountScreen = ({navigation}) => {
  return (
      <BgImage>
        <BgCover/>
        <Title>Meals To Go</Title>
        <BgContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
        </BgContainer>
      </BgImage>
   
  )
}

export default AccountScreen
