console.log(Module['wasmBinaryFile']);
// Module.wasmBinaryFile = Module['wasmBinaryFile'];
Module['preRun'] = function () {
	Module['inputFiles'].forEach(function(inputFile) {
		FS.createDataFile('/', inputFile['fileName'], intArrayFromString(inputFile['contents']), true, true);
	});
};
