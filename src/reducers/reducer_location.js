export default function (state = null, location) {
  switch (location.type) {
    case "LOCATION_PATH":
      return location.payload;
  }
  return state;
}
