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
                status: false,
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
                status: false,
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
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "4",
                Nombre: "ALIAGA, Matias",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "5",
                Nombre: "OCCHIPINTI, Nicolas",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "6",
                Nombre: "LOPEZ, Juliano",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "7",
                Nombre: "PEREYRA, Octavio",
                DNI: "43450997",
                Dorsal: '',
                status: false,
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
                ID: "8",
                Nombre: "BASSI, Alessandro",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "9",
                Nombre: "CHARRA, Gonzalo",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "10",
                Nombre: "BOMONE, Matías",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "11",
                Nombre: "VALLES, Tomas",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "12",
                Nombre: "SOSA, Joaquin",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "13",
                Nombre: "CASPARI, Santiago",
                DNI: "43450997",
                Dorsal: '',
                status: false,
                Action: {
                    Type: '',
                    Time: '',
                }
            },
            {
                ID: "14",
                Nombre: "LAFFITE, Lorenzo",
                DNI: "43450997",
                Dorsal: '',
                status: false,
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
            const playerTeam = state.find(team => team.Player.some(player => player.ID === playerId));
            const player = playerTeam.Player.find(player => player.ID === playerId);
            const findDorsal = playerTeam.Player.find(player => player.Dorsal === dorsal);
            
            if (!findDorsal && player) {
                player.Dorsal = dorsal;
                player.status = true
                return;
            }
            alert("Dorsal existente, ingrese otro");
        },
    }
})

export const {
    setDorsal,
} = matchesSlice.actions;

export default matchesSlice.reducer