import React, { Component } from 'react';
import styles from './styles'
import { Form, Field } from 'react-final-form';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export const LOGIN = gql`
mutation authenticateUser($email: String!, $password: String!){
  authenticateUser(email: $email, password: $password) {
    token
  }
}
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }


  render() {
    // const { login } = this.props;
    return (
      <SafeAreaView>
        <Mutation
          mutation={
            LOGIN
          }
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
                // if (!values.confirm) {
                //   errors.confirm = 'Required'
                // } else if (values.confirm !== values.password) {
                //   errors.confirm = 'Must match'
                // }
                return errors
              }}
              onSubmit={async (values) => {
                console.log("submit")
                console.log("submit", values.email)
                const email = values.email;
                const password = values.password
                try {
                  const userToken = await authenticateUser({ variables: { email, password } }).catch(error => this.setState({ error }))
                  console.log(userToken.data.authenticateUser.token)
                }
                catch (error) {
                  throw error
                }
              }}
              render={({ handleSubmit, pristine, invalid, form }) => (
                <View>
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


                  <TouchableHighlight
                    onPress={handleSubmit}
                  >
                    <Text>Sign In</Text>
                  </TouchableHighlight>


                  <TouchableHighlight
                    onPress={() => {
                      form.reset();

                    }}
                  >
                    <Text>Do Not Have an Account Yet? Sign Up Here!
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
      </SafeAreaView>
    );
  }
}


export default SignIn;
