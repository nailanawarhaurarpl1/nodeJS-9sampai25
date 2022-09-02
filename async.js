function samplePromise(){
    return Promise.resolve ("Eko");
}
// cobain
async function run(){
    const name = await samplePromise();
    console.info (name);
}

run();