import React, { Component } from 'react';
import styles from './styles'
import { Form, Field } from 'react-final-form';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CheckBox from 'react-native-check-box'


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
      isChecked: false

    };
  }

  render() {
    return (
      <SafeAreaView>
        <Mutation
          mutation={SIGNUP}
        >
          {(createUser, { data }) => (
            <Mutation
              mutation={LOGIN}
            >
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
                    // if (!values.confirm) {
                    //   errors.confirm = 'Required'
                    // } else if (values.confirm !== values.password) {
                    //   errors.confirm = 'Must match'
                    // }
                    return errors
                  }}
                  onSubmit={async (values) => {
                    console.log("submit", values)
                    const email = values.email;
                    const password = values.password
                    const fullname = values.fullname
                    try {
                      const newUser = await createUser({ variables: { email, password, fullname } }).catch(error => this.setState({ error }));
                      console.log("new user", newUser);
                      const newUserEmail = await newUser.data.createUser.email;
                      const newUserPassword = await newUser.data.createUser.password;
                      console.log("new user", newUserEmail, newUserPassword)
                      const userToken = await authenticateUser({ variables: { email: newUserEmail, password: newUserPassword } }).catch(error => this.setState({ error }))
                      console.log(userToken.data.authenticateUser.token)
                    }
                    catch (error) {
                      throw error
                    }
                  }}

                  render={({ handleSubmit, pristine, invalid, form }) => (
                    <View>
                      <Text htmlFor="fullname">Full Name</Text>
                      <Field name="fullname" render={({ input, meta }) => (
                        <View>
                          <TextInput
                            {...input}
                            id="fullname"
                            placeholder="Enter Your Full Name"
                          />
                          {meta.error && meta.touched && <Text>{meta.error}</Text>}
                        </View>
                      )} />



                      <Text htmlFor="email">Email</Text>
                      <Field name="email" render={({ input, meta }) => (
                        <View>
                          <TextInput
                            {...input}
                            id="email"
                            type="email"
                            keyboardType="email-address"
                            placeholder="Enter Your Email"
                          />
                          {meta.error && meta.touched && <Text>{meta.error}</Text>}
                        </View>
                      )}
                      />


                      <Text htmlFor="email">Password</Text>
                      <Field name="password" render={({ input, meta }) => (
                        <View>
                          <TextInput
                            {...input}
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                          />
                          {meta.error && meta.touched && <Text>{meta.error}</Text>}
                        </View>
                      )} />
                      <Field name="termsAgreement" render={({ input, meta }) => (
                        <View>
                          <CheckBox
                            id='termsAgreement'
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => {
                              this.setState({
                                isChecked: !this.state.isChecked
                              })
                            }}
                            isChecked={this.state.isChecked}
                          />
                          <Text>I agree to Terms and Conditions</Text>
                          {meta.error && meta.touched && <Text>{meta.error}</Text>}
                        </View>
                      )} />


                      <TouchableHighlight
                        onPress={handleSubmit}
                      >
                        <Text>Sign Up</Text>
                      </TouchableHighlight>


                      <TouchableHighlight
                        onPress={() => {
                          form.reset();
                        }}
                      >
                        <Text>Already Have an Account Yet? Sign In Here!
                </Text>
                      </TouchableHighlight>

                      <Text >

                        {(this.state.error &&
                          this.state.error.graphQLErrors[0].message) ||
                          (this.state.error &&
                            this.state.error.graphQLErrors[0].message)}

                      </Text>
                    </View>
                  )}//close Form render
                />
              )}
            </Mutation>
          )}
        </Mutation>
      </SafeAreaView>
    );
  }
}


export default SignUp;
