const collectiveWisdom = [['star', 'moon', 'sun', 'comet'],
    ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    ['go out and eat', 'not read this', 'play more', 'trust no one']]

const wisdomMessage = (arr) => {
    let messageArr = [];
    for (let i = 0; i < arr.length; i++) {
        let randomNumber = Math.floor(Math.random()*arr[i].length);
        messageArr.push(arr[i][randomNumber]);
    } return messageArr;
}

const showMessage = arr => {
   console.log(`Your sign right now is a ${arr[0]}`);
   console.log(`You are having ${arr[1]}`);
   console.log(`You should ${arr[2]}`);
}

showMessage(wisdomMessage(collectiveWisdom));
