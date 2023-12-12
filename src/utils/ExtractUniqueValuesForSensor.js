/**
 * Fitler an list of objects based on the provided filter object.
 * @param {listSensors} List of Sensor object.
 * @return {result} The filtered object contains 3 keys: type, factory, tank. Value of each key is an array of unique values.
 */
const ExtractUniqueValuesForSensor = (listSensors) => {
    // Use objects to store unique values for each key
    const uniqueValues = {
      'typeList': new Set(),
      'factoryList': new Set(),
      'tankList': new Set(),
    };
  
    // Iterate over the array and add values to respective sets
    listSensors.forEach((sensor) => {
      if (sensor.hasOwnProperty('type')) {
        uniqueValues['typeList'].add(sensor.type);
      }
  
      if (sensor.hasOwnProperty('factory')) {
        uniqueValues['factoryList'].add(sensor.factory);
      }
  
      if (sensor.hasOwnProperty('tank')) {
        uniqueValues['tankList'].add(sensor.tank);
      }
    });
  
    // Convert sets to arrays
    const result = {};
    for (const key in uniqueValues) {
      result[key] = Array.from(uniqueValues[key]);
    }
  
    return result;
}

export default ExtractUniqueValuesForSensor;