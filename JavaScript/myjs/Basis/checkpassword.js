const prompt = require('prompt-sync')();

var checkacc = () => {
  var validcode = false;
  var code = '123456';

  var username = false;
  var user = 'root';
  var count = 0;

  while (!validcode && !username) {
    user = prompt('Input Your Account: ');
    code = prompt('Input Your Password: ');

    if (code == '123456' && user == 'root') {
      validcode = true;
      user = true;
      console.log('Password Valid "Thak you!"');
    } else {
      console.log('Password InvaValid Please Reinput your account ***');

      if (count <= 3) {
        checkacc();
        count += 1;
      } else {
        return;
      }
    }
    return;
  }
};

checkacc();
