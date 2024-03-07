import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dorsal: {
    hidden: true,
    playerSelected: null,
    playerSelectedName: null
  },
  asist: {
    hidden: true,
    newDorsal: ''
  },
  planilla: {
    hidden: true,
    navigationSource: '',
    localTeam: null,
    dorsalPlayer: null,
    playerSelected: null,
    actionPlayer: null,
    playerName: null,
    actions: []
  },
  planillaTime: {
    hidden: true,
    newTime: ''
  },
};

const planilleroSlice = createSlice({
  name: 'planillero',
  initialState,
  reducers: {
    toggleHiddenDorsal: (state) => {
      state.dorsal.hidden = !state.dorsal.hidden;
    },
    toggleHiddenAsist: (state) => {
      state.asist.hidden = !state.asist.hidden;
    },
    setNavigationSource: (state, action) => {
      state.planilla.navigationSource = action.payload;
    },
    toggleHiddenAction: (state) => {
      state.planilla.hidden = !state.planilla.hidden;
    },
    setNewTime: (state, action) => {
      state.planillaTime.newTime = action.payload;
    },
    toggleHiddenTime: (state) => {
      state.planillaTime.hidden = !state.planillaTime.hidden;
    },
    setPlayerSelected: (state, action) => {
      state.dorsal.playerSelected = action.payload;
    },
    setPlayerSelectedAction: (state, action) => {
      state.planilla.playerSelected = action.payload;
    },
    setActionPlayer: (state, action) => {
      state.planilla.actionPlayer = action.payload;
    },
    setdorsalPlayer: (state, action) => {
      state.planilla.dorsalPlayer = action.payload;
    },
    setNamePlayer: (state, action) => {
      state.planilla.playerName = action.payload;
    },
    setIsLocalTeam: (state, action) => {
      state.planilla.localTeam = action.payload;
    },
    // Nueva acción para agregar una acción de jugador con ID de partido y equipo
    handleConfirm: (state, action) => {
      const { isLocalTeam, idJugador, nombreJugador, dorsal, accion, minuto } = action.payload;
      state.planilla.actions.push({ isLocalTeam, idJugador, nombreJugador, dorsal, accion, minuto });
    },
    setNamePlayerSelected: (state, action) => {
      state.dorsal.playerSelectedName = action.payload;
    },
  }
});

export const {
  toggleHiddenDorsal,
  setNewDorsal,
  toggleHiddenAsist,
  setNavigationSource,
  toggleHiddenAction,
  setNewTime,
  toggleHiddenTime,
  setPlayerSelected,
  setPlayerSelectedAction,
  setActionPlayer,
  setdorsalPlayer,
  setNamePlayer,
  setIsLocalTeam,
  handleConfirm,
  setNamePlayerSelected,
} = planilleroSlice.actions;

export default planilleroSlice.reducer;
