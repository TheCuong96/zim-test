import styled from 'styled-components'
export const ItemCountryWrapped = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10px 0;
    /* background-color: rgba(248, 248, 248, 1); */
    background-color: ${props => (props.alternate ? 'rgba(248, 248, 248, 1)' : 'white')};
    border-bottom: 1px solid rgb(238, 238, 238);
    cursor: pointer;
    :hover {
        background-color: rgba(23, 162, 149, 0.5);
    }
`
export const Country = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    text-align: center;
`

export const QuantityCountry = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const TotalConfirmed = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const TotalDeaths = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const TotalRecovered = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
