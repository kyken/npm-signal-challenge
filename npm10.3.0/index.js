
 const sleep = (msec) => {
  return new Promise((resolve) => setTimeout(resolve, msec));
};




const main = async () => {
let cnt = 0
const processId = process.pid
    const shutDown = () => {
console.log(`[${processId}] shutdown gracefully...`);
 process.exit(0);
    }

  process.on("SIGINT", shutDown);
  process.on("SIGTERM", shutDown);

    while(true) {
        console.log(`[${processId}] loop start: ${cnt}`);
   await sleep(1000);
   cnt = cnt + 1
    console.log(`[${processId}] loop end`);
    }
}

 main()