import {configureStore} from "@reduxjs/toolkit";
import Films from "./Films";
import {filmsApi} from "./FilmsApi";

export const store=  configureStore({
    reducer:{
        [filmsApi.reducerPath]: filmsApi.reducer
    },
      // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmsApi.middleware)
})
// setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof  store.getState>
