import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface PokemonState {
  data: any | null
  loading: boolean
  error: string | null
}

const initialState: PokemonState = {
  data: null,
  loading: false,
  error: null,
}
// Async thunk to fetch a random Pokémon
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (_, { rejectWithValue }) => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1 // Pokémon API has 898 Pokémon
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch Pokémon')
    }
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchPokemon.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})



// Export the reducer
export default pokemonSlice.reducer
