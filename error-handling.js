var s = 'Sting';

s = 100;

s = [1, 2, 3];

s = { name: 'sanjay' };

// 

// throw new Error('Testing Error');
try {
  // Codes which prone to throw an error
  // console.run('Hellow');

  // Manual error throw on a particular
  throw Error('Typeerror msg for display');

} catch (err) {

  console.log('##Error##', err);

} finally {
  console.log(' It will execute at last ');
}