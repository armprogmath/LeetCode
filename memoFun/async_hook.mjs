import async_hooks from 'async_hooks';
import fs from 'fs';

const asyncHook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId) {
        fs.writeSync(1, `Init: ${type} (asyncId: ${asyncId}, trigger: ${triggerAsyncId})\n`);
    },
    before(asyncId) {
        fs.writeSync(1, `Before: ${asyncId}\n`);
    },
    after(asyncId) {
        fs.writeSync(1, `After: ${asyncId}\n`);
    },
    destroy(asyncId) {
        fs.writeSync(1, `Destroy: ${asyncId}\n`);
    }
});

asyncHook.enable();

setTimeout(() => {
    console.log('Async operation complete');
}, 100);