export function actionType(actionType) {
  return {type: "ACTION_TYPE", payload: actionType};
}

export function location(locationPath) {
  return {type: "LOCATION_PATH", payload: locationPath}
}