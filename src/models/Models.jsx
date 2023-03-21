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

  console.log(dataModel);

  return dataModel;
}

export const getPerformanceModel = (perfData) => {
  const { data, kind } = perfData;
  let dataModel = [];

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
              
  console.log(dataModel);
  return dataModel;
}

export const getAverageSessionsModel = (data) => {
  const { sessions } = data;
  const dataModel = [];
  const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  for(const property in sessions) {
    dataModel.push({
      day: labels[property],
      sessionLength: sessions[property].sessionLength
    })
  }

  return dataModel;
}