// widgets o constantes
const dataInicial = {
    array : []
};

//Actions

const GET_POKEMON_EXITO = 'GET_POKEMON_EXITO';

// Reducers
export default function pokeReducer(state = dataInicial , action) {
    switch (action.type) {
        case 'ignacio':
            
            return console.log('ignacio');
        case 'victor':
        
            return console.log('victor');
    
        default:
            return;
    }
}

// Actions Creators