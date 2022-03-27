// #ifdef node
const {parentPort} = require('worker_threads');
// #endif

const stdoutBuffer = [];
const stderrBuffer = [];

function bytesToUtf8(buffer) {
	return new TextDecoder().decode(Uint8Array.from(buffer));
}

Module['preRun'] = function () {
	const inputFiles = Module['inputFiles'];
	inputFiles.forEach(function(inputFile) {
		FS.createDataFile('/', inputFile['fileName'], intArrayFromString(inputFile['contents']), true, true);
	});
};

Module['stdout'] = stdoutBuffer.push.bind(stdoutBuffer);
Module['stderr'] = stderrBuffer.push.bind(stderrBuffer);

Module['onExit'] = function(exitCode) {
	const message = {
		'exitCode': exitCode,
		'stdout': bytesToUtf8(stdoutBuffer),
		'stderr': bytesToUtf8(stderrBuffer),
	};
	// #ifdef node
	parentPort.postMessage(message);
	// #endif
	// #ifdef browser
	postMessage(message);
	// #endif
};

Module['arguments'] = Module['args'];