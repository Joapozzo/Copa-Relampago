import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dorsal: {
    hidden: true,
    playerSelected: null,
    playerSelectedName: null
  },
  asist: {
    hidden: true,
    dataGol: {}
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
    handleConfirm: (state, action) => {
      const { isLocalTeam, idJugador, nombreJugador, dorsal, accion, minuto } = action.payload;
    
      // Agregar la nueva acción
      let nuevaAccion = { isLocalTeam, idJugador, nombreJugador, dorsal, accion, minuto };
      
      const isGolEnContra = state.asist.dataGol.enContra;

      if (isGolEnContra) {
        nuevaAccion.isLocalTeam = !isLocalTeam;
      }

      // Si la acción es un gol, agregamos la información adicional
      if (accion === 'Gol') {
        nuevaAccion.golDetails = state.asist.dataGol;
      }
    
      state.planilla.actions.push(nuevaAccion);
      
      // Ordenar las acciones por minuto
      state.planilla.actions.sort((a, b) => {
        if (a.minuto < b.minuto) {
          return -1;
        }
        if (a.minuto > b.minuto) {
          return 1;
        }
        return 0;
      });
    },         
    setNamePlayerSelected: (state, action) => {
      state.dorsal.playerSelectedName = action.payload;
    },
    setNewAssist: (state, action) => {
      state.asist.dataGol = action.payload;
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
  setNewAssist,
} = planilleroSlice.actions;

export default planilleroSlice.reducer;
