import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice  from './components/slice/CounterSlice'
import  AddtoCartSlice  from './components/slice/AddtoCartSlice'

export default configureStore({
  reducer: {
        counter:CounterSlice,
        // counter:AddtoCartSlice
  },
//   reducer: {
//     cart:AddtoCartSlice
// },
})