import styled from 'styled-components'
export const MainWrapped = styled.section`
    width: 80%;
    background-color: rgba(248, 248, 248, var(1));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Content = styled.div`
    width: 80%;
    padding: 1.25rem;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    border-radius: 10px;
    --tw-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(0 0 #0000, 0 0 #0000), var(--tw-shadow);
`

export const ContentCountry = styled.div`
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    border-radius: 10px;
    --tw-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(0 0 #0000, 0 0 #0000), var(--tw-shadow);
`
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
    * {
        cursor: pointer;
        font-family: Roboto, sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.75rem;
        color: rgba(20, 83, 136, 1);
        text-align: center;
        :hover {
            background-color: rgba(23, 162, 149, 0.5);
        }
        border-radius: 10px;
    }
`
export const Country = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
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

// export const PopupWrapped = styled.div`
//     /* width: 100vw; */
//     /* height: 100vh; */
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background: rgba(0, 0, 0, 0.7);
//     transition: opacity 1000ms;
//     /* visibility: ${props => (props.open ? 'show' : 'hidden')}; */
//     /* visibility: show; */
//     /* opacity: ${props => (props.open ? 1 : 0)}; */
//     /* opacity: 1; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* z-index: 1; */
// `

// export const PopupContent = styled.div`
//     background-color: white;
//     width: 60%;
//     height: 60%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     z-index: 999;
// `
export const CssPopup = styled.div`
    .modal {
        font-size: 12px;
    }
    .modal > .header {
        width: 100%;
        border-bottom: 1px solid gray;
        font-size: 18px;
        text-align: center;
        padding: 5px;
    }
    .modal > .content {
        width: 100%;
        padding: 10px 5px;
    }
    .modal > .actions {
        width: 100%;
        padding: 10px 5px;
        margin: auto;
        text-align: center;
    }
    .modal > .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 1px solid #cfcece;
    }
    .popupWrapped {
        background-color: red;
        display: flex;
    }
`
export const ModalWrapped = styled.div`
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    border-radius: 10px;
    --tw-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(0 0 #0000, 0 0 #0000), var(--tw-shadow);
    button {
        display: flex;
        margin-left: 96%;
        text-decoration: none;
        background: transparent;
        border: none;
        font-size: 30px;
        svg {
            width: 100%;
        }
    }
    img {
        width: 100%;
        height: 100%;
        --tw-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
        border-radius: 10px;
        --tw-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.16);
        box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(0 0 #0000, 0 0 #0000), var(--tw-shadow);
    }
    .rowWrapped {
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
    .flagCountry {
        width: 50%;
    }
    .detailCountry {
        width: 40%;
    }
`
