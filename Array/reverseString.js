//Reverse String
//Hi My Name is Meet
module.exports.reverse = (str) => {
  //check Input
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good'
  }

  const backwards = [];
  const totalItems = str.length-1;
  for(let i = totalItems; i >=0 ; i--){
    backwards.push(str[i]);
  }

  return backwards.join('');
}