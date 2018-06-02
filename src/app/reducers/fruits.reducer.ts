import * as fruitActions from './../actions/fruit.actions'
export function fruitReducer(state = [], action: fruitActions.Action) {
    switch (action.type) {
        case fruitActions.LOAD_FRUITS_SUCCESS:
            {             
                return action.payload;
            }
        case fruitActions.RATE_FRUIT_SUCCESS:
            {
                let fruitIndex = state.map(fruit => fruit.name).indexOf(action.payload.name);
                return [
                    ...state.slice(0, fruitIndex),
                    Object.assign({}, state[fruitIndex], action.payload),
                    ...state.slice(fruitIndex + 1)
                ];
            }
        default:
            {
                return state;
            }
    }
}