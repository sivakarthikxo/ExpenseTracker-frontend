// export default (state, action) => {

//     switch((action.type)){
//         case `DELETE_TRANSACTION`:
//             return{
//                 ...state,
//                 transaction:state.transaction
//                 .filter(transaction=>transaction.id!==action.payload)
//             }

//         case `ADD_TRANSACTION`:
//             return{
//                 ...state,
//                 transaction:[action.payload, ...state.transaction]
//             }
//         default:
//             return state;
//     }
// }


//frontend integration to backend

export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transaction: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };
    default:
      return state;
  }
};


