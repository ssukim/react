import {createAction, ActionType, createReducer} from 'typesafe-actions'

// 액션 type 선언
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성 함수 선언
// export const increase = () => ({type: INCREASE});
// export const decrease = () => ({type: DECREASE});
// export const increaseBy = (diff: number) => ({
//     type: INCREASE_BY,
//     payload: diff
// });
export const increase = createAction(INCREASE)();
// () => ({ type: INCREASE })
export const decrease = createAction(DECREASE)();
// () => ({ type: DECREASE }) 
export const increaseBy = createAction(INCREASE_BY)<number>();
// (payload: number) => ({ type: INCREASE_BY, payload })

// 액션 객체들에 대한 type 준비하기
// type CounterAction =
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;
 
// 상태의 타입과 상태의 초깃값 선언하기
type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

// 리듀서 작성하기
// function counter(state: CounterState = initialState, action: CounterAction){
//     switch(action.type){
//         case INCREASE:
//             return {count: state.count + 1};
//         case DECREASE:
//             return {count: state.count - 1};
//         case INCREASE_BY:
//             return {count: state.count + action.payload};
//         default:
//             return state;
//     }
// }
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({count: state.count + 1}),
    [DECREASE]: state => ({count: state.count - 1}),
    [INCREASE_BY]: (state, action) => ({count: state.count + action.payload})
})

export default counter;