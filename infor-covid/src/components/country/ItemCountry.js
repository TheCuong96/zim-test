import React, { useEffect, useState } from 'react'
import { TotalDeaths } from './StyledItemCountry'
import { Country } from './StyledItemCountry'
import { TotalRecovered } from './StyledItemCountry'
import { TotalConfirmed } from './StyledItemCountry'
import { QuantityCountry } from './StyledItemCountry'
import { ItemCountryWrapped } from './StyledItemCountry'
import Popup from 'reactjs-popup'

export const ItemCountry = ({ item, quantity, closeModal, nameCountry }) => {
    const handleCLickItem = () => {
        closeModal()
        nameCountry(item)
    }
    return (
        <ItemCountryWrapped onClick={() => handleCLickItem()} alternate={quantity % 2 !== 0}>
            <QuantityCountry>{quantity}</QuantityCountry>
            <Country>{item?.Country}</Country>
            <TotalConfirmed>{item?.TotalConfirmed}</TotalConfirmed>
            <TotalDeaths>{item?.TotalDeaths}</TotalDeaths>
            <TotalRecovered>{item?.TotalRecovered}</TotalRecovered>
        </ItemCountryWrapped>
    )
}
