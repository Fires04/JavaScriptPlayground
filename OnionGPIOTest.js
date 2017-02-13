/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global GPIO1, GPIO2 */

var Gpio = require('/usr/bin/onoff-node/onoff.js').Gpio;
var GPIO = new Array();
GPIO[1] = new Gpio(0, 'out');
GPIO[2] = new Gpio(1, 'out');
GPIO[3] = new Gpio(6, 'out');
GPIO[4] = new Gpio(7, 'out');
GPIO[5] = new Gpio(8, 'out');
GPIO[6] = new Gpio(23, 'out');
GPIO[7] = new Gpio(13, 'out');
GPIO[8] = new Gpio(14, 'out');





while (true) {
    for(var i=1;i<9;i++){
        GPIO[i].writeSync(1);
        var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
    }
    for(var i=8;i>0;i--){
        console.log("on: "+i);
        GPIO[i].writeSync(0);
        var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
    }
    for(var i=1;i<9;i++){
        console.log("off: "+i);
        GPIO[i].writeSync(1);
        var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
    }
    
    var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
    for(var i=1;i<9;i++){
        GPIO[i].writeSync(0);
    }
    var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
}