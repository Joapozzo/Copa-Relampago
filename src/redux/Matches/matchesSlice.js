import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        ID: "1",
        Local: true,
        Nombre: "Celta de Vino",
        Player: [
            {
                ID: "1",
                Nombre: "POZZO, Joaquin",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "2",
                Nombre: "HELMAN, Ramiro",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "3",
                Nombre: "GIULIANO, Alejo",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
        ]
    },
    {
        ID: "2",
        Local: false,
        Nombre: "T-USA",
        Player: [
            {
                ID: "4",
                Nombre: "BASSI, Alessandro",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "5",
                Nombre: "CHARRA, Gonzalo",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "6",
                Nombre: "BOMONE, Matías",
                DNI: "43450997",
                Dorsal: '',
                Action: {
                    Type: '',
                    Time: '',
                }
            },
        ]
    }
]

const matchesSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        setDorsal: (state, action) => {
            const { playerId, dorsal } = action.payload;
            const player = state.flatMap(team => team.Player).find(player => player.ID === playerId);
            if (player) {
                player.Dorsal = dorsal;
            }
        },
    }
})

export const {
    setDorsal,
} = matchesSlice.actions;

export default matchesSlice.reducer