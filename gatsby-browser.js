/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import firebase from "firebase/app";
import "firebase/firestore";
import React from 'react'
import AuthProvider from './src/contexts/auth'

export const wrapRootElement = ({ element }) => (
    <AuthProvider>{element}</AuthProvider>
)