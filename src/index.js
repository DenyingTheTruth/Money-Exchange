module.exports = function makeExchange(currency) {
    var coins ={};
    var buf = 0;
    if(currency >= 10000){
      coins.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else{
      buf = Math.floor(currency/50);
      currency = currency - buf*50;
      if (buf > 0) coins.H = buf;
      if (currency !== 0){
        buf = Math.floor(currency/25);
        currency = currency - buf*25;
        if (buf > 0) coins.Q = buf;
        if (currency !== 0){
          buf = Math.floor(currency/10);
          currency = currency - buf*10;
          if (buf > 0) coins.D = buf;
          if (currency !== 0){
            buf = Math.floor(currency/5);
            currency = currency - buf*5;
            if (buf > 0) coins.N = buf;
            if (currency !== 0){
              buf = 0;
              while (currency !== 0){
                currency--;
                buf ++;
              }
              if (buf > 0) coins.P = buf;
            }
          }
        }
      }
    }
  
    return coins;
}
