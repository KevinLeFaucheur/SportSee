export const getStatModel = (data) => {
  let modelData = [];

  for(const property in data) {

    switch(property) {
      case 'calorieCount':
        modelData.push({ 
          label: 'Calories', 
          count: `${data[property]}kCal` 
        }); // add comma
        break;
      case 'proteinCount':
        modelData.push({ 
          label: 'Proteines', 
          count: `${data[property]}g` 
        });
        break;
      case 'carbohydrateCount':
        modelData.push({ 
          label: 'Glucides', 
          count: `${data[property]}g` 
        });
        break;
      case 'lipidCount':
        modelData.push({ 
          label: 'Lipides', 
          count: `${data[property]}g` 
        });
        break;
      default:
    }
  }

  console.log(modelData);

  return modelData;
}

export const getPerformanceModel = (perfData) => {
  const { data, kind } = perfData;
  let modelData = [];

  for(const property in data) {
    switch(kind[parseInt(property)+1]) {
      case 'cardio':
        modelData.push({
          kind: 'Cardio',
          value: data[property].value
        })
        break;
      case 'energy':
        modelData.push({
          kind: 'Energie',
          value: data[property].value
        })
        break;
      case 'endurance':
        modelData.push({
          kind: 'Endurance',
          value: data[property].value
        })
        break;
      case 'strength':
        modelData.push({
          kind: 'Force',
          value: data[property].value
        })
        break;
      case 'speed':
        modelData.push({
          kind: 'Vitesse',
          value: data[property].value
        })
        break;
      case 'intensity':
        modelData.push({
          kind: 'Intensité',
          value: data[property].value
        })
        break;    
      default: break;
    }
  }
              
  console.log(modelData);
  return modelData;
}