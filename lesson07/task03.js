'use strict'

const addPrefix = (arrPrefix) => {

  let prefix = 'Mr '
  let withPrefix = arrPrefix.map(item => prefix + item);

  return withPrefix;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names));

