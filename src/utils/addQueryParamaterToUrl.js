export const addQueryParameterToUrl = (baseUrl, values) => {
  let tempUrl = baseUrl
  for (const parameter in values) {
    if (values[parameter].length >= 1 && values[parameter] !== 'all') {
      tempUrl = `${tempUrl}&${parameter}=${values[parameter]}`
    }
  }
  return tempUrl
}
