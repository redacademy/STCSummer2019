import React, { Component } from 'react';
import styles from './styles'
import { Form, Field } from 'react-final-form';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { withNavigation } from 'react-navigation';
import { createToken, queryToken } from "../../config/models/authentication"
import Loader from "../../components/Loader"

export const LOGIN = gql`
mutation authenticateUser($email: String!, $password: String!){
  authenticateUser(email: $email, password: $password) {
    token
    id
  }
}
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      color: '#003399'
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Mutation mutation={LOGIN}>
            {(authenticateUser, { loading }) => (
              <Form
                validate={values => {
                  const errors = {}
                  if (!values.email || !(/\S+@\S+\.\S+/.test(values.email))) {
                    errors.email = 'Email Required'
                  }
                  if (!values.password) {
                    errors.password = 'Password Required'
                  }
                  return errors
                }}
                onSubmit={async (values) => {
                  const email = values.email;
                  const password = values.password
                  try {
                    const userToken = await authenticateUser({ variables: { email, password } }).catch(error => this.setState({ error }))
                    await createToken(userToken.data.authenticateUser.token, userToken.data.authenticateUser.id);
                    navigation.navigate('AuthLoading');
                  }
                  catch (error) {
                    throw error
                  }
                }}
                render={({ handleSubmit, form }) => (
                  <View>
                    {loading ? <Loader /> :
                      <View style={styles.logoContainer}>
                        <Image
                          style={styles.logo}
                          source={require('../../assets/logo.png')}
                        />
                      </View>
                    }

                    <View style={styles.forms}>
                      <Text style={styles.lable} htmlFor="email">Email</Text>
                      <Field name="email" render={({ input, meta }) => (
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            {...input}
                            id="email"
                            type="email"
                            keyboardType="email-address"
                            placeholder="Enter Your Email"
                          />
                          {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
                        </View>
                      )}
                      />

                      <Text style={styles.lable} htmlFor="email">Password</Text>
                      <Field name="password" render={({ input, meta }) => (
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            {...input}
                            secureTextEntry={true}
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                          />
                          {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
                        </View>
                      )} />

                      <TouchableHighlight
                        style={styles.button}
                        onPress={handleSubmit}
                        underlayColor="#003399"
                        onShowUnderlay={() => this.setState({ color: "#fff" })}
                        onHideUnderlay={() => this.setState({ color: '#003399' })}
                      >
                        <Text style={[{ color: this.state.color }, styles.buttonText]}>Sign In</Text>
                      </TouchableHighlight>

                      <TouchableOpacity
                        onPress={() => {
                          form.reset();
                          navigation.navigate('SignUp')
                        }}
                      >
                        <Text style={styles.loginSwitch}>
                          Don't Have an Account? Sign Up Here!
                        </Text>
                      </TouchableOpacity>

                      <Text style={styles.error}>
                        {(this.state.error &&
                          this.state.error.graphQLErrors[0].message) ||
                          (this.state.error &&
                            this.state.error.graphQLErrors[0].message)}
                      </Text>
                    </View>

                  </View>
                )}//close Form render
              />
            )}
          </Mutation>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}


export default withNavigation(SignIn);
