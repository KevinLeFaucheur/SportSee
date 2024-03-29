import { statsIcons } from "../styles/icons";

/**
 * Data model for the user 
 * @param {Object} data
 * @param {Object} data.userInfos
 * @returns {{ firstName: string, lastName: string, age: number }}
 */
export const getUserModel = (data) => {
  let modelData = {};

  modelData = {
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
  };
  
  return modelData;
};

/**
 * Data model for the user 
 * @param {Object} data
 * @param {number} data.score 
 * @param {number} data.todayScore 
 * @returns {{score: number}} score
 */
export const getScoreModel = (data) => {
  let modelData = {};

  modelData = {
    score: data.todayScore ? data.todayScore : data.score,
  };
  
  return modelData;
};

/**
 * Data model for the activity
 * @param {[{ day: string, kilogram: number, calories: number }]} data
 * @returns {[{ day: string, kilogram: number, calories: number }]}
 */
export const getActivityModel = (data) => {
  let modelData = {};

  modelData = data.sessions.map((session, index) => {
    return { 
      day: `${index + 1}`,
      kilogram: session.kilogram,
      calories: session.calories,
    }
  })

  // console.log(modelData);
  
  return modelData;
};

/**
 * Data model for the energy statistics
 * @param {Object} data
 * @param {number} data.calorieCount
 * @param {number} data.carbohydrateCount 
 * @param {number} data.lipidCount
 * @param {number} data.proteinCount
 * @returns {{ label: string, count: string }}
 */
export const getStatModel = (data) => {
  let dataModel = [];

  for(const property in data) {

    switch(property) {
      case 'calorieCount':
        dataModel.push({ 
          label: 'Calories', 
          count: `${data[property].toLocaleString('en-US')}kCal`,
          icon: statsIcons[0]
        });
        break;
      case 'proteinCount':
        dataModel.push({ 
          label: 'Proteines', 
          count: `${data[property].toLocaleString('en-US')}g`,
          icon: statsIcons[1]
        });
        break;
      case 'carbohydrateCount':
        dataModel.push({ 
          label: 'Glucides', 
          count: `${data[property].toLocaleString('en-US')}g`,
          icon: statsIcons[2]
        });
        break;
      case 'lipidCount':
        dataModel.push({ 
          label: 'Lipides', 
          count: `${data[property].toLocaleString('en-US')}g`,
          icon: statsIcons[3]
        });
        break;
      default:
    }
  }
  return dataModel;
}

/**
 * Data model for the performance statistics
 * @param {Object} performanceData 
 * @param {[{ value: number, kind: number }]} performanceData.data 
 * @param {{index: string}} performanceData.kind
 * @returns {{ kind: string, value: number }}
 */
export const getPerformanceModel = (performanceData) => {
  const { data, kind } = performanceData;
  let dataModel = [];
  console.log(performanceData);

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
 * @returns { [{ day: string, sessionLength: number }] } Day of the week, sessionLength in minutes
 */
export const getAverageSessionsModel = (data) => {
  const { sessions } = data;
  const dataModel = [];
  const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  // console.log(data);

  for(const property in sessions) {
    dataModel.push({
      day: labels[property],
      sessionLength: sessions[property].sessionLength
    })
  }

  /** Data added before and after to simulate week overflow */
  dataModel.push({ day: '', sessionLength: 54 });
  dataModel.unshift({ day: '', sessionLength: 14 });
  
  // console.log(dataModel);
  return dataModel;
}