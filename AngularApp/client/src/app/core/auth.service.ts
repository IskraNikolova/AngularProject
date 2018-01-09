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
        window.localStorage.setItem('token', token);
    }

    hasAdmin(){
        return window.localStorage.getItem('admin') !== null;
    }

    setAdmin(key){
        window.localStorage.setItem('admin', key);
    }

    getAdminKey(){
        return window.localStorage.getItem("admin");
    }

    saveAdminSession() {
        window.sessionStorage.setItem('admin', "true");
    }

    isAdmin(){
        return window.sessionStorage.getItem('admin') !== null;
    }

    clearAdminSession(){
        window.sessionStorage.clear();
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