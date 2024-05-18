import {Button, Icon, Input} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Text style={{...styles.IconText, ...styles.bliss}}>Bliss</Text>
        <Text style={{...styles.IconText, ...styles.home}}>Home</Text>
      </View>
      <Input
        placeholderTextColor={'#000'}
        inputContainerStyle={styles.input}
        rightIcon={<Icon type="font-awesome-5" name="user" size={20} />}
        placeholder="E-mail"
        textContentType="emailAddress"
      />
      <Input
        placeholderTextColor={'#000'}
        inputContainerStyle={styles.input}
        rightIcon={<Icon type="font-awesome-5" name="key" size={20} />}
        placeholder="password"
        textContentType="password"
        secureTextEntry
      />
      <View style={styles.textContainer}>
        <Text style={styles.desc}>
          Kişisel verileriniz,{' '}
          <Text style={styles.highlight}>Aydınlatma Metni</Text> kapsamında
          işlenmektedir. Kayıt olarak{' '}
          <Text style={styles.highlight}>Gizlilik Politikası</Text> ve{' '}
          <Text style={styles.highlight}>Kullanım şartlarını</Text>
          kabul etmiş sayılacaksınız.
        </Text>
      </View>
      <View>
        <Text style={(styles.desc, {alignSelf: 'center', paddingBottom: 10})}>
          Bir hesabınız yok mu?{' '}
          <Text
            onPress={() => props.navigation.navigate('Register')}
            style={{...styles.highlight, color: '#000', fontWeight: 'bold'}}>
            Hesap Oluştur!
          </Text>
        </Text>
        <Text style={(styles.desc, {alignSelf: 'center', paddingBottom: 10})}>
          Giriş yaparken sorun yaşıyorum.{' '}
          <Text
            style={{...styles.highlight, color: '#000', fontWeight: 'bold'}}>
            Parolamı Unuttum!
          </Text>
        </Text>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          containerStyle={styles.buttoncontainer}
          radius={'md'}
          buttonStyle={styles.button}>
          Giriş yap
          <Icon
            type="material-community"
            solid={true}
            color={'#FFF'}
            name="login"
            size={20}
          />
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACB1B7',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 45,
    marginBottom: 45,
  },
  IconText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  bliss: {
    color: '#0D212C',
  },
  home: {
    color: '#674854',
  },
  input: {
    backgroundColor: '#F4F6F8',
    borderBottomWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  desc: {
    color: '#080808',
    fontSize: 14,
    paddingHorizontal: 8,
    maxWidth: '90%',
    lineHeight: 20,
  },
  highlight: {
    color: '#FFF',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  textContainer: {flex: 1},
  button: {
    backgroundColor: '#674854',
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  buttoncontainer: {
    backgroundColor: 'red',
    marginHorizontal: 5,
    marginBottom: 10,
  },
});
