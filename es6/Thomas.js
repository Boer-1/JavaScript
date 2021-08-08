//皇冠和锚
//yysy我还玩不明白，先记上
//随机返回[m,n]之间的整数(包含边界)
function rand(m,n) {
    return m + Math.floor((n - m + 1)*Math.random());
}
//随即返回代表皇冠和锚游戏中六个面其中之一的字符串
function randFace(){
    return ['crown','anchor','heart','spade','club','diamond'][rand(0,5)];
}

let funds = 50; // starting conditions
let round = 0;

while(funds > 1 && funds < 100){
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    //掷骰子
    let bets = {crown:0,anchor:0,heart:0,spade:0,club:0,diamond:0};
    let totalBet = rand(1,funds);
    if (totalBet ===7){
        totalBet = funds;
        bets.heart = totalBet;
    }else {
        //分配下注总数
        let remaining = totalBet;
        do{
            let bet = rand(1,remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        }while (remaining > 0)
    }
    funds = funds -totalBet;
    console.log(`\tbets:`+Object.keys(bets).map(face => `${face}:${bets[face]} pence`).join(`,`)+`total:${totalBet} pence`);

    //掷骰子
    const hand = [];
    for(let roll = 0 ;roll < 3;roll++){
        hand.push(randFace());
    }
    console.log(`\thand:${hand.join(`,`)}`);

    //收集赢到的钱
    let winnings = 0;
    for(let die = 0;die < hand.length;die++){
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings:${winnings}`);
}
console.log(`\tending funs:${funds}`);
