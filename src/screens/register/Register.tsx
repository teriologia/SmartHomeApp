import {Button, Input, Icon} from '@rneui/base';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.registerText}>Kayıt Ol</Text>
        <Text style={styles.registerDesc}>
          BlissHome’u kullanmak için lütfen kayıt olun
        </Text>
      </View>
      <View>
        <Input
          placeholderTextColor={'#000'}
          inputContainerStyle={styles.input}
          placeholder="Ad"
          textContentType="emailAddress"
        />
        <Input
          placeholderTextColor={'#000'}
          inputContainerStyle={styles.input}
          placeholder="Soyad"
          textContentType="emailAddress"
        />
        <Input
          placeholderTextColor={'#000'}
          inputContainerStyle={styles.input}
          placeholder="Telefon"
          textContentType="telephoneNumber"
          keyboardType="numeric"
        />
        <Input
          placeholderTextColor={'#000'}
          inputContainerStyle={styles.input}
          placeholder="E-posta"
          textContentType="emailAddress"
        />
        <Input
          placeholderTextColor={'#000'}
          inputContainerStyle={styles.input}
          placeholder="Parola"
          textContentType="password"
          secureTextEntry
        />
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={styles.checkBoxButton}>
          <View style={isChecked ? styles.checkBoxChecked : styles.checkBox}>
            {isChecked && (
              <Icon
                type="font-awesome-5"
                name="check"
                size={15}
                color={'#FFF'}
              />
            )}
          </View>
          <Text style={styles.accept}>
            Aşağıdaki sözleşmeleri okudum, onaylıyorum.
          </Text>
        </TouchableOpacity>
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
      </View>
      <Button
        onPress={() => props.navigation.navigate('Login')}
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
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACB1B7',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  content: {
    paddingBottom: 15,
  },
  titleContainer: {
    paddingHorizontal: 10,
    marginVertical: 17,
  },
  registerText: {
    color: '#674854',
    fontSize: 25,
    fontWeight: 'bold',
  },
  registerDesc: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 7,
  },
  input: {
    backgroundColor: '#F4F6F8',
    borderBottomWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  bottomContent: {
    paddingHorizontal: 10,
  },
  checkBoxButton: {
    width: '100%',
    flexDirection: 'row',
  },
  accept: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxChecked: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    color: '#080808',
    fontSize: 14,
    paddingTop: 10,
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
    marginTop: 10,
  },
});
