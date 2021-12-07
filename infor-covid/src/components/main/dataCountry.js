import { createAsyncThunk } from '@reduxjs/toolkit'
import countryApi from 'src/api/countryApi'
import countryDetailApi from 'src/api/detailCountryApi'
import { payloadCreator } from 'src/utils/helper'

export const getCountry = createAsyncThunk('country/getCountry', payloadCreator(countryApi.getCountry))

export const getCountryDetail = createAsyncThunk(
    'countryDetail/getCountryDetail',
    payloadCreator(countryDetailApi.getCountryDetail)
)
