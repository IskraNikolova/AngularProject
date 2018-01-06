import { Injectable } from '@angular/core';

export class AuthService{
    saveUser(user){
        window.localStorage.setItem('user', user);
    }

    getUser(){
        return window.localStorage.getItem('user');
    }

    removeUser(){
        window.localStorage.removeItem('user');
    }

    authenticateUser(token){
        window.localStorage.setItem('token', token)
    }

    isAuthenticated(){
        return window.localStorage.getItem('token') !== null;
    }

    deauthenticateUser(){
        window.localStorage.removeItem('token');
    }

    getToken(){
        return window.localStorage.getItem('token');
    }
}