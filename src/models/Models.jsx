export const getStatModel = (data) => {
  let modelData = [];

  for(const property in data) {
    console.log(property, data[property]);

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