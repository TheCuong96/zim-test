import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ItemCountry } from '../country/ItemCountry'
import { Content } from './StyledMain'
import { MainWrapped } from './StyledMain'
import { unwrapResult } from '@reduxjs/toolkit'
import { getCountry, getCountryDetail } from './dataCountry'
import { ItemCountryWrapped } from './StyledMain'
import { QuantityCountry } from './StyledMain'
import { Country } from './StyledMain'
import { TotalConfirmed } from './StyledMain'
import { TotalDeaths } from './StyledMain'
import { TotalRecovered } from './StyledMain'
import Popup from 'reactjs-popup'
import { PopupWrapped } from './StyledMain'
import { PopupContent } from './StyledMain'
import { CssPopup } from './StyledMain'
import { ContentCountry } from './StyledMain'
import { ModalWrapped } from './StyledMain'

export const Main = () => {
    const [countryList, setCountryList] = useState([])
    const [state, setState] = useState(null)
    const [open, setOpen] = useState(false)
    const [country, setCountry] = useState(null)
    const [countryDetail, setCountryDetail] = useState({})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountry())
            .then(unwrapResult)
            .then(res => {
                setCountryList(res.Countries)
            })
    }, [dispatch])
    const onClickTotalConfirmed = () => {
        const countryListNew = countryList.sort((a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed
        })
        setCountryList(() => countryListNew)
        setState()
    }
    const onClickTotalDeaths = () => {
        const countryListNew = countryList.sort((a, b) => {
            return b.TotalDeaths - a.TotalDeaths
        })
        setCountryList(() => countryListNew)
        setState()
    }
    const onClickTotalRecovered = () => {
        const countryListNew = countryList.sort((a, b) => {
            return a.TotalRecovered - b.TotalRecovered
        })
        setCountryList(() => countryListNew)
        setState()
    }
    const closeModal = () => {
        setOpen(!open)
    }

    const countryName = name => {
        setCountry(name?.Country)
    }
    // const dataDetail = countryDetail?.0
    console.log('countryDetail?.flags?.svg', countryDetail?.flags?.svg)
    console.log('countryDetail', countryDetail)
    useEffect(() => {
        if (country !== null) {
            dispatch(getCountryDetail(country))
                .then(unwrapResult)
                .then(res => {
                    setCountryDetail(res[0])
                })
        }
    }, [country, dispatch])
    var quantity = 0
    return (
        <MainWrapped>
            <Content>
                <ItemCountryWrapped>
                    <QuantityCountry>Quantity</QuantityCountry>
                    <Country>Country</Country>
                    <TotalConfirmed onClick={() => onClickTotalConfirmed()}>TotalConfirmed</TotalConfirmed>
                    <TotalDeaths onClick={() => onClickTotalDeaths()}>TotalDeaths</TotalDeaths>
                    <TotalRecovered onClick={() => onClickTotalRecovered()}>TotalRecovered</TotalRecovered>
                </ItemCountryWrapped>
                {/* {countryList.map(item => (
                    <ItemCountry item={item} quantity={++quantity} closeModal={closeModal}></ItemCountry>
                ))} */}
                <CssPopup>
                    <Popup
                        trigger={
                            <ContentCountry>
                                {countryList.map(item => (
                                    <ItemCountry
                                        item={item}
                                        quantity={++quantity}
                                        closeModal={closeModal}
                                        nameCountry={countryName}
                                    ></ItemCountry>
                                ))}
                            </ContentCountry>
                        }
                        modal
                        className="popupWrapped"
                    >
                        {close => (
                            <ModalWrapped>
                                <button onClick={close}>
                                    {/* &times; */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-x-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                                <div className="card mb-3" style={{ width: '100%' }}>
                                    <div className="row g-0 rowWrapped">
                                        <div className="col-md-4 flagCountry">
                                            <img
                                                src={countryDetail?.flags?.svg}
                                                className="img-fluid rounded-start ImgModal"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8 detailCountry">
                                            <div className="card-body">
                                                <h2 className="card-title">{countryDetail.name}</h2>
                                                <p className="card-text">population: {countryDetail.population}</p>
                                                <p className="card-text">capital: {countryDetail.capital}</p>
                                                <p className="card-text">region: {countryDetail.region}</p>
                                                <p className="card-text">subregion: {countryDetail.subregion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalWrapped>
                        )}
                    </Popup>
                </CssPopup>
            </Content>
        </MainWrapped>
    )
}
