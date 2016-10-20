function activitySelection(activities) {
  var currentTime = 0;
  var maxWeightSubset = [];
  
  activities.forEach(activity => {
    if(activity.startTime >= currentTime) {
      maxWeightSubset.push(activity);
      currentTime = activity.finishTime;
    }
  });
  
  return maxWeightSubset;
}

var activities = [
  {
    startTime: 1,
    finishTime: 4
  },
  {
    startTime: 3,
    finishTime: 5
  },
  {
    startTime: 0,
    finishTime: 6
  },
  {
    startTime: 5,
    finishTime: 7
  },
  {
    startTime: 3,
    finishTime: 9
  },
  {
    startTime: 5,
    finishTime: 9
  },
  {
    startTime: 6,
    finishTime: 10
  },
  {
    startTime: 8,
    finishTime: 11
  },
  {
    startTime: 8,
    finishTime: 12
  },
  {
    startTime: 2,
    finishTime: 14
  },
  {
    startTime: 12,
    finishTime: 16
  }
];

function main() {
  var maxWeightSubset = activitySelection(activities);
  var output = 'The maximum weight subset is (';
  maxWeightSubset.forEach((activity, index) => {
    if(index != maxWeightSubset.length - 1) {
      output += `{${activity.startTime}, ${activity.finishTime}}, `;
    } else {
      output += `{${activity.startTime}, ${activity.finishTime}}`;
    }
  });
  output += ')';
  console.log(output);
}

main();
