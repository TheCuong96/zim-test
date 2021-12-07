import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const rootReducer = {
    // country: ProductAll,
}

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
