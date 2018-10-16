const LineConnect = require('./connect');
let line = require('./main.js');
let LINE = new line();

const auth = {
  authToken: 'WkT3FqeTyp8FP2FEuLU5iNCO4QOQ2dfMX9pe7jSEO8L2IE+NkZMx33L98u1ODyE73ocBlDoEjaUbxNcDfC6R6BCgzZJIlnARwPjanCkgLfExQm1RMIRKiS2B/f18/mjxoEl+LhiYYYwbVqi+28bkcQdB04t89/1O/w1cDnyilFU=',
  certificate: '4675701c310c8736841def25dc0b0026'
}
//let client =  new LineConnect(auth);
   let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
