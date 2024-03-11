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
  timeMatch: {
    matchState: null,
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
      
      state.planilla.actions.sort((a, b) => {
        const minuteA = parseInt(a.minuto);
        const minuteB = parseInt(b.minuto);
        
        if (minuteA < minuteB) {
          return -1;
        }
        if (minuteA > minuteB) {
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
    toggleStateMatch: (state) => {
      if (state.timeMatch.matchState === null) {
        state.timeMatch.matchState = 'isStarted';
      } else if (state.timeMatch.matchState === 'isStarted') {
        state.timeMatch.matchState = 'isFinish';
      } else {
        state.timeMatch.matchState = 'finish';
      }
    }
  }
});

export const {
  toggleMatchTimes,
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
  toggleStateMatch,
} = planilleroSlice.actions;

export default planilleroSlice.reducer;
