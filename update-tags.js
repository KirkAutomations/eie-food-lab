var fs = require('fs');
var js = fs.readFileSync('./app.js','utf8');

var tagMap = {
  1: ['beef','mealprep','kidfriendly','glutenfree','dairyfree','highprotein'],
  2: ['chicken','mealprep','dairyfree','under30','highprotein'],
  3: ['chicken','mealprep','highprotein','under30'],
  4: ['pork','slow','mealprep','kidfriendly','under30'],
  5: ['pork','fast','kidfriendly','glutenfree','under30','highprotein'],
  6: ['chicken','slow','mealprep','dairyfree','glutenfree','kidfriendly','highprotein'],
  7: ['chicken','mealprep','glutenfree','kidfriendly'],
  8: ['beef','mealprep','glutenfree','dairyfree','highprotein','kidfriendly'],
  9: ['chicken','dairyfree','under30','highprotein','kidfriendly'],
  10: ['beef','fast','kidfriendly','under30','highprotein'],
  11: ['pork','slow','mealprep','dairyfree','glutenfree','kidfriendly','highprotein'],
  12: ['chicken','mealprep','kidfriendly'],
  13: ['chicken','slow','mealprep','kidfriendly','glutenfree'],
  14: ['beef','fast','kidfriendly','glutenfree','under30'],
  15: ['chicken','slow','mealprep','glutenfree','kidfriendly'],
  16: ['chicken','under30','kidfriendly','highprotein'],
  17: ['beef','kidfriendly','under30','mealprep'],
  18: ['beef','fast','kidfriendly','under30'],
  19: ['pork','slow','mealprep','glutenfree','dairyfree','highprotein'],
  20: ['chicken','under30'],
  21: ['chicken','under30'],
  22: ['veg','vegan','mealprep','glutenfree','dairyfree','highprotein','under30'],
  23: ['chicken','dairyfree','glutenfree','under30','highprotein'],
  24: ['chicken','fast','kidfriendly','under30','highprotein'],
  25: ['beef','mealprep','glutenfree','dairyfree','kidfriendly'],
  26: ['veg','fast','kidfriendly','under30','highprotein'],
  27: ['chicken','slow','mealprep','glutenfree','kidfriendly','highprotein'],
  28: ['pork','mealprep','dairyfree','under30'],
  29: ['veg','budget','glutenfree','under30'],
  30: ['veg','budget','fast','kidfriendly','under30'],
  31: ['veg','budget','under30','vegan','dairyfree'],
  32: ['veg','budget','glutenfree','dairyfree','vegan','kidfriendly'],
  33: ['veg','budget','kidfriendly'],
  34: ['veg']
};

for (var id in tagMap) {
  var tags = tagMap[id];
  var pattern = new RegExp('(id:' + id + ',.*?tags:\\[)[^\\]]+(\\])', 's');
  var newTags = tags.map(function(t){ return '"' + t + '"'; }).join(',');
  if (js.match(pattern)) {
    js = js.replace(pattern, '$1' + newTags + '$2');
    console.log('Updated recipe ' + id);
  } else {
    console.log('NOT FOUND: recipe ' + id);
  }
}

fs.writeFileSync('./app.js', js);
console.log('Done');
