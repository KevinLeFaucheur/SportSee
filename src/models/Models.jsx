/**
 * Data model for the energy statistics
 * @param {{ calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number }} data
 * @returns {{ label: string, count: string }}
 */
export const getStatModel = (data) => {
  let dataModel = [];

  for(const property in data) {

    switch(property) {
      case 'calorieCount':
        dataModel.push({ 
          label: 'Calories', 
          count: `${data[property].toLocaleString('en-US')}kCal` 
        });
        break;
      case 'proteinCount':
        dataModel.push({ 
          label: 'Proteines', 
          count: `${data[property].toLocaleString('en-US')}g` 
        });
        break;
      case 'carbohydrateCount':
        dataModel.push({ 
          label: 'Glucides', 
          count: `${data[property].toLocaleString('en-US')}g` 
        });
        break;
      case 'lipidCount':
        dataModel.push({ 
          label: 'Lipides', 
          count: `${data[property].toLocaleString('en-US')}g` 
        });
        break;
      default:
    }
  }
  return dataModel;
}

/**
 * Data model for the performance statistics
 * @param {{ data: { value: number, kind: number }, kind: { string } }} perfData 
 * @returns {{ kind: string, value: number }}
 */
export const getPerformanceModel = (perfData) => {
  const { data, kind } = perfData;
  let dataModel = [];
  // console.log(perfData);

  for(const property in data) {
    switch(kind[parseInt(property)+1]) {
      case 'cardio':
        dataModel.push({
          kind: 'Cardio',
          value: data[property].value
        })
        break;
      case 'energy':
        dataModel.push({
          kind: 'Energie',
          value: data[property].value
        })
        break;
      case 'endurance':
        dataModel.push({
          kind: 'Endurance',
          value: data[property].value
        })
        break;
      case 'strength':
        dataModel.push({
          kind: 'Force',
          value: data[property].value
        })
        break;
      case 'speed':
        dataModel.push({
          kind: 'Vitesse',
          value: data[property].value
        })
        break;
      case 'intensity':
        dataModel.push({
          kind: 'Intensité',
          value: data[property].value
        })
        break;    
      default: break;
    }
  }
  // console.log(dataModel);
  return dataModel;
}

/**
 * Data model for the average sessions statistics
 * @param {{  sessions: [{ day: number, sessionLength: number }] }} data 
 * @returns { { day: string, sessionLength: number }[] } day of the week, sessionLength in minutes
 */
export const getAverageSessionsModel = (data) => {
  const { sessions } = data;
  const dataModel = [];
  const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  console.log(data);

  for(const property in sessions) {
    dataModel.push({
      day: labels[property],
      sessionLength: sessions[property].sessionLength
    })
  }
  console.log(dataModel);
  return dataModel;
}