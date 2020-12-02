export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
// export const increment = () => {
//     return {
//       type: "INCREMENT",
//     }
// }

//上記の省略形
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
