console.log('golb1');
setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})
setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick1111111111111111');
    })
    process.nextTick(function() {
        console.log('timeout1_nextTick22222222222');
    })
     process.nextTick(function() {
        console.log('timeout1_nextTick333333333333');
    })
      process.nextTick(function() {
        console.log('timeout1_nextTick44444444444');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
    setTimeout(function() {
    	console.log('timeout1_timeout1');
    process.nextTick(function() {
        console.log('timeout1_timeout1_nextTick');
    })
    setImmediate(function() {
    	console.log('timeout1_setImmediate1');
    })
    });
})
new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})
process.nextTick(function() {
    console.log('glob1_nextTick');
})