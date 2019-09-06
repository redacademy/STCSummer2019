import React, { Component } from 'react';
import styles from './styles'
import { Form, Field } from 'react-final-form';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CheckBox from 'react-native-check-box';
import { withNavigation } from 'react-navigation';
import { createToken, queryToken } from "../../config/models/authentication"




export const SIGNUP = gql`
mutation createUser($email: String!, $password: String!, $fullname: String!){
  createUser(email: $email, password: $password, fullname:$fullname) {
    email
    password
  }
}
`;
export const LOGIN = gql`
mutation authenticateUser($email: String!, $password: String!){
  authenticateUser(email: $email, password: $password) {
    token
  }
}
`;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isChecked: false,
      color: '#003399'
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Mutation mutation={SIGNUP}>
            {(createUser, { data }) => (
              <Mutation mutation={LOGIN}>
                {(authenticateUser, { data }) => (
                  <Form
                    validate={values => {
                      const errors = {}
                      if (!values.email) {
                        errors.email = 'Email Required'
                      }
                      if (!values.password) {
                        errors.password = 'Password Required'
                      }
                      if (!values.fullname) {
                        errors.fullname = 'Full Name Required'
                      }
                      if (!this.state.isChecked) {
                        errors.termsAgreement = 'Agree to Terms and Condition is required'
                      }
                      return errors
                    }}
                    onSubmit={async (values) => {
                      const email = values.email;
                      const password = values.password
                      const fullname = values.fullname
                      try {
                        const newUser = await createUser({ variables: { email, password, fullname } }).catch(error => this.setState({ error }));
                        const newUserEmail = await newUser.data.createUser.email;
                        const newUserPassword = await newUser.data.createUser.password;
                        const userToken = await authenticateUser({ variables: { email: newUserEmail, password: newUserPassword } }).catch(error => this.setState({ error }))
                        await createToken(userToken.data.authenticateUser.token);
                        // const newUserToken = await queryToken();
                        navigation.navigate('AuthLoading');
                      }
                      catch (error) {
                        throw error
                      }
                    }}

                    render={({ handleSubmit, form }) => (
                      <View>
                        <View style={styles.logoContainer}>
                          <Image
                            style={styles.logo}
                            source={require('../../assets/logo.png')}
                          />
                        </View>
                        <View style={styles.forms}>
                          <Text style={styles.lable} htmlFor="fullname">Full Name</Text>
                          <Field name="fullname" render={({ input, meta }) => (
                            <View style={styles.inputContainer}>
                              <TextInput
                                style={styles.input}
                                {...input}
                                id="fullname"
                                placeholder="Enter Your Full Name"
                              />
                              {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
                            </View>
                          )} />

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
                                id="password"
                                type="password"
                                secureTextEntry={true}
                                placeholder="Enter Your Password"
                              />
                              {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
                            </View>
                          )} />
                          <Field name="termsAgreement" render={({ input, meta }) => (
                            <View style={styles.checkBoxContainer}>
                              <View style={styles.checkBox}>
                                <CheckBox
                                  id='termsAgreement'
                                  style={{ flex: 1, paddingLeft: 5 }}
                                  onClick={() => {
                                    this.setState({
                                      isChecked: !this.state.isChecked
                                    })
                                  }}
                                  isChecked={this.state.isChecked}
                                />
                                <Text style={styles.terms}>I agree to Terms and Conditions</Text>
                              </View>
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
                            <Text style={[{ color: this.state.color }, styles.buttonText]}>Sign Up</Text>
                          </TouchableHighlight>

                          <TouchableOpacity
                            onPress={() => {
                              form.reset();
                              navigation.navigate('SignIn')
                            }}
                          >
                            <Text style={styles.loginSwitch}>Already Have an Account? Sign In Here!
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
            )}
          </Mutation>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}


export default withNavigation(SignUp);
