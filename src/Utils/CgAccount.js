import React, { createContext } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL,
  ClientId: process.env.REACT_APP_CLIENT_ID
};
// const postURL = process.env.REACT_APP_API_GATEWAY_URL;
const userPool = new CognitoUserPool(poolData);

const CgAccountContext = createContext();

const CgAccount = props => {
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });

            resolve({
              user,
              ...session,
              ...attributes
            });
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, userPool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log("onSuccess:", data);
          resolve(data);
        },

        onFailure: err => {
          console.error("onFailure:", err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log("newPasswordRequired:", data);
          resolve(data);
        }
      });
    });

  const logout = () => {
    const user = userPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <CgAccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout
      }}
    >
      {props.children}
    </CgAccountContext.Provider>
  );
};

export { CgAccount, CgAccountContext };
