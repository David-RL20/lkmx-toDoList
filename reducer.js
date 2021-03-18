export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.payLoad.id,
            name: action.payLoad.name,
          },
        ],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payLoad.id),
      };
    case 'EDIT_TASK':
      console.log(state);
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payLoad.id) {
            return {
              ...task,
              name: action.payLoad.name,
            };
          } else {
            return task;
          }
        }),
      };

    default:
      return state;
  }
};
