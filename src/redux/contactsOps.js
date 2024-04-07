import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6612f10053b0d5d80f669fc0.mockapi.io/'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try {
        const { data } = await axios.get('Contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async (contactInfo, thunkAPI) => {
    try {
        const { data } = await axios.post('Contacts', contactInfo);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`Contacts/${contactId}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})