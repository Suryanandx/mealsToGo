import React from 'react'
import { Spacer } from '../../../components/spacer.component'
import { AuthButton, AuthInput, BgContainer, BgCover, BgImage, ErrorContainer, Title } from '../components/account.styles'
import {useState, useContext} from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/text.component';
import { ActivityIndicator, Colors } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoading, onLogin, error } = useContext(AuthenticationContext);
  return (
      <BgImage>
        <BgCover/>
        <Title>Meals To Go</Title>
        <BgContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
        <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
         {!isLoading ? <AuthButton
            icon="lock"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton> : <ActivityIndicator color={Colors.green500}/> }
        </Spacer>
        </BgContainer>
        <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
      </BgImage>
   
  )
}

export default LoginScreen
