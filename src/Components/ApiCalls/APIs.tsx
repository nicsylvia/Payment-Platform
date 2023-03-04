import React from 'react';
import { UserData } from '../AllInterfaces/AllInterfaces';
import axios from "axios";

const LocalURL = "http://localhost:3500"

export const RegisterUser = async(data: UserData) =>{
    await axios.post(`${LocalURL}/api/user/register`, data).then((res) =>{
        res.data
    })
}