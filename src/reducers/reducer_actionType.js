export default function (state = null, action) {
  switch (action.type) {
    case "ACTION_TYPE":
      return action.payload;
  }

  return state;
}
