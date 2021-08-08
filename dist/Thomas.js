'use strict';

//皇冠和锚
//yysy我还玩不明白，先记上
//随机返回[m,n]之间的整数(包含边界)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
//随即返回代表皇冠和锚游戏中六个面其中之一的字符串
function randFace() {
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

var funds = 50; // starting conditions
var round = 0;

var _loop = function _loop() {
    round++;
    console.log('round ' + round + ':');
    console.log('\tstarting funds: ' + funds + 'p');
    //掷骰子
    var bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    var totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //分配下注总数
        var remaining = totalBet;
        do {
            var bet = rand(1, remaining);
            var face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0);
    }
    funds = funds - totalBet;
    console.log('\tbets:' + Object.keys(bets).map(function (face) {
        return face + ':' + bets[face] + ' pence';
    }).join(',') + ('total:' + totalBet + ' pence'));

    //掷骰子
    var hand = [];
    for (var roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log('\thand:' + hand.join(','));

    //收集赢到的钱
    var winnings = 0;
    for (var die = 0; die < hand.length; die++) {
        var _face = hand[die];
        if (bets[_face] > 0) winnings = winnings + bets[_face];
    }
    funds = funds + winnings;
    console.log('\twinnings:' + winnings);
};

while (funds > 1 && funds < 100) {
    _loop();
}
console.log('\tending funs:' + funds);