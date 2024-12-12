
var Module = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Module = {})  {

var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa,h;f.ready=new Promise(function(a,b){aa=a;h=b});f.preRun=function(){f.inputFiles.forEach(function(a){var b=a.fileName;a=ba(a.contents);var c="/",d=b;c&&(c="string"==typeof c?c:l(c),d=b?m(c+"/"+b):c);b=ca(!0,!0);d=q(d,(void 0!==b?b:438)&4095|32768,0);if(a){if("string"==typeof a){c=Array(a.length);for(var e=0,g=a.length;e<g;++e)c[e]=a.charCodeAt(e);a=c}da(d,b|146);c=t(d,577);ea(c,a,0,a.length,0);ha(c);da(d,b)}})};
var ia=Object.assign({},f),ja=[],ka="./this.program",la=(a,b)=>{throw b;},v="";"undefined"!=typeof document&&document.currentScript&&(v=document.currentScript.src);_scriptDir&&(v=_scriptDir);0!==v.indexOf("blob:")?v=v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):v="";var ma=f.print||console.log.bind(console),w=f.printErr||console.warn.bind(console);Object.assign(f,ia);ia=null;f.arguments&&(ja=f.arguments);f.thisProgram&&(ka=f.thisProgram);f.quit&&(la=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);
var noExitRuntime=f.noExitRuntime||!1;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,na=!1,oa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function B(a,b){b>>>=0;for(var c=b+NaN,d=b;a[d]&&!(d>=c);)++d;if(16<d-b&&a.buffer&&oa)return oa.decode(a.subarray(b,d));for(c="";b<d;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))c+=String.fromCharCode((e&31)<<6|g);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|k:(e&7)<<18|g<<12|k<<6|a[b++]&63;65536>e?c+=String.fromCharCode(e):(e-=65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else c+=String.fromCharCode(e)}return c}function C(a){return(a>>>=0)?B(D,a):""}
function pa(a,b,c,d){c>>>=0;if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var k=a.charCodeAt(g);if(55296<=k&&57343>=k){var n=a.charCodeAt(++g);k=65536+((k&1023)<<10)|n&1023}if(127>=k){if(c>=d)break;b[c++>>>0]=k}else{if(2047>=k){if(c+1>=d)break;b[c++>>>0]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++>>>0]=224|k>>12}else{if(c+3>=d)break;b[c++>>>0]=240|k>>18;b[c++>>>0]=128|k>>12&63}b[c++>>>0]=128|k>>6&63}b[c++>>>0]=128|k&63}}b[c>>>0]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var E,D,ra,F,G;function sa(){var a=A.buffer;f.HEAP8=E=new Int8Array(a);f.HEAP16=ra=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=G=new Uint32Array(a);f.HEAPF32=new Float32Array(a);f.HEAPF64=new Float64Array(a)}var H=f.INITIAL_MEMORY||16777216;
65536<=H||z("INITIAL_MEMORY should be larger than STACK_SIZE, was "+H+"! (STACK_SIZE=65536)");f.wasmMemory?A=f.wasmMemory:A=new WebAssembly.Memory({initial:H/65536,maximum:65536});sa();H=A.buffer.byteLength;var ta=[],ua=[],va=[],wa=[],ya=[];function za(){var a=f.preRun.shift();ta.unshift(a)}var I=0,Aa=null,J=null;function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";w(a);na=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");h(a);throw a;}
function Ba(a){return a.startsWith("data:application/octet-stream;base64,")}var K;K="xmllint.wasm";if(!Ba(K)){var Ca=K;K=f.locateFile?f.locateFile(Ca,v):v+Ca}function Da(a){try{if(a==K&&y)return new Uint8Array(y);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Ea(a){return y||"function"!=typeof fetch?Promise.resolve().then(function(){return Da(a)}):fetch(a,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(function(){return Da(a)})}function Fa(a,b,c){return Ea(a).then(function(d){return WebAssembly.instantiate(d,b)}).then(function(d){return d}).then(c,function(d){w("failed to asynchronously prepare wasm: "+d);z(d)})}
function Ga(a,b){var c=K;return y||"function"!=typeof WebAssembly.instantiateStreaming||Ba(c)||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(function(d){return WebAssembly.instantiateStreaming(d,a).then(b,function(e){w("wasm streaming compile failed: "+e);w("falling back to ArrayBuffer instantiation");return Fa(c,a,b)})})}var L,M;function Ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function N(a){for(;0<a.length;)a.shift()(f)}
var Ia=(a,b)=>{for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a},m=a=>{var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Ia(a.split("/").filter(d=>!!d),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a},Ja=a=>{var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b},Ka=a=>{if("/"===
a)return"/";a=m(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)};function La(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var a=new Uint8Array(1);return()=>{crypto.getRandomValues(a);return a[0]}}return()=>z("randomDevice")}
function Ma(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!=typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Ia(a.split("/").filter(d=>!!d),!b).join("/");return(b?"/":"")+a||"."}function ba(a,b){var c=Array(qa(a)+1);a=pa(a,c,0,c.length);b&&(c.length=a);return c}var Na=[];function Oa(a,b){Na[a]={input:[],G:[],O:b};Pa(a,Qa)}
var Qa={open:function(a){var b=Na[a.node.R];if(!b)throw new O(43);a.F=b;a.seekable=!1},close:function(a){a.F.O.U(a.F)},U:function(a){a.F.O.U(a.F)},read:function(a,b,c,d){if(!a.F||!a.F.O.ia)throw new O(60);for(var e=0,g=0;g<d;g++){try{var k=a.F.O.ia(a.F)}catch(n){throw new O(29);}if(void 0===k&&0===e)throw new O(6);if(null===k||void 0===k)break;e++;b[c+g]=k}e&&(a.node.timestamp=Date.now());return e},write:function(a,b,c,d){if(!a.F||!a.F.O.ca)throw new O(60);try{for(var e=0;e<d;e++)a.F.O.ca(a.F,b[c+
e])}catch(g){throw new O(29);}d&&(a.node.timestamp=Date.now());return e}},Ra={ia:function(a){if(!a.input.length){var b=null;"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=ba(b,!0)}return a.input.shift()},ca:function(a,b){null===b||10===b?(ma(B(a.G,0)),a.G=[]):0!=b&&a.G.push(b)},U:function(a){a.G&&0<a.G.length&&(ma(B(a.G,0)),a.G=[])}},Sa={ca:function(a,
b){null===b||10===b?(w(B(a.G,0)),a.G=[]):0!=b&&a.G.push(b)},U:function(a){a.G&&0<a.G.length&&(w(B(a.G,0)),a.G=[])}},P={K:null,L:function(){return P.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new O(63);P.K||(P.K={dir:{node:{J:P.v.J,H:P.v.H,P:P.v.P,V:P.v.V,la:P.v.la,na:P.v.na,ma:P.v.ma,ka:P.v.ka,Z:P.v.Z},stream:{N:P.B.N}},file:{node:{J:P.v.J,H:P.v.H},stream:{N:P.B.N,read:P.B.read,write:P.B.write,ea:P.B.ea,W:P.B.W,Y:P.B.Y}},link:{node:{J:P.v.J,
H:P.v.H,S:P.v.S},stream:{}},fa:{node:{J:P.v.J,H:P.v.H},stream:Ta}});c=Ua(a,b,c,d);16384===(c.mode&61440)?(c.v=P.K.dir.node,c.B=P.K.dir.stream,c.C={}):32768===(c.mode&61440)?(c.v=P.K.file.node,c.B=P.K.file.stream,c.D=0,c.C=null):40960===(c.mode&61440)?(c.v=P.K.link.node,c.B=P.K.link.stream):8192===(c.mode&61440)&&(c.v=P.K.fa.node,c.B=P.K.fa.stream);c.timestamp=Date.now();a&&(a.C[b]=c,a.timestamp=c.timestamp);return c},Ea:function(a){return a.C?a.C.subarray?a.C.subarray(0,a.D):new Uint8Array(a.C):new Uint8Array(0)},
ga:function(a,b){b>>>=0;var c=a.C?a.C.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.C,a.C=new Uint8Array(b),0<a.D&&a.C.set(c.subarray(0,a.D),0))},Ba:function(a,b){b>>>=0;if(a.D!=b)if(0==b)a.C=null,a.D=0;else{var c=a.C;a.C=new Uint8Array(b);c&&a.C.set(c.subarray(0,Math.min(b,a.D)));a.D=b}},v:{J:function(a){var b={};b.ta=8192===(a.mode&61440)?a.id:1;b.ba=a.id;b.mode=a.mode;b.za=1;b.uid=0;b.ua=0;b.R=a.R;16384===(a.mode&61440)?b.size=4096:32768===(a.mode&61440)?
b.size=a.D:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.pa=new Date(a.timestamp);b.xa=new Date(a.timestamp);b.sa=new Date(a.timestamp);b.qa=4096;b.ra=Math.ceil(b.size/b.qa);return b},H:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&P.Ba(a,b.size)},P:function(){throw Va[44];},V:function(a,b,c,d){return P.createNode(a,b,c,d)},la:function(a,b,c){if(16384===(a.mode&61440)){try{var d=Wa(b,c)}catch(g){}if(d)for(var e in d.C)throw new O(55);
}delete a.parent.C[a.name];a.parent.timestamp=Date.now();a.name=c;b.C[c]=a;b.timestamp=a.parent.timestamp;a.parent=b},na:function(a,b){delete a.C[b];a.timestamp=Date.now()},ma:function(a,b){var c=Wa(a,b),d;for(d in c.C)throw new O(55);delete a.C[b];a.timestamp=Date.now()},ka:function(a){var b=[".",".."],c;for(c in a.C)a.C.hasOwnProperty(c)&&b.push(c);return b},Z:function(a,b,c){a=P.createNode(a,b,41471,0);a.link=c;return a},S:function(a){if(40960!==(a.mode&61440))throw new O(28);return a.link}},B:{read:function(a,
b,c,d,e){var g=a.node.C;if(e>=a.node.D)return 0;a=Math.min(a.node.D-e,d);if(8<a&&g.subarray)b.set(g.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=g[e+d];return a},write:function(a,b,c,d,e,g){b.buffer===E.buffer&&(g=!1);if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.C||a.C.subarray)){if(g)return a.C=b.subarray(c,c+d),a.D=d;if(0===a.D&&0===e)return a.C=b.slice(c,c+d),a.D=d;if(e+d<=a.D)return a.C.set(b.subarray(c,c+d),e),d}P.ga(a,e+d);if(a.C.subarray&&b.subarray)a.C.set(b.subarray(c,
c+d),e);else for(g=0;g<d;g++)a.C[e+g]=b[c+g];a.D=Math.max(a.D,e+d);return d},N:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.D);if(0>b)throw new O(28);return b},ea:function(a,b,c){P.ga(a.node,b+c);a.node.D=Math.max(a.node.D,b+c)},W:function(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new O(43);a=a.node.C;if(e&2||a.buffer!==E.buffer){if(0<c||c+b<a.length)a.subarray?a=a.subarray(c,c+b):a=Array.prototype.slice.call(a,c,c+b);c=!0;b=65536*Math.ceil(b/65536);(e=
Xa(65536,b))?(D.fill(0,e,e+b),b=e):b=0;if(!b)throw new O(48);b>>>=0;E.set(a,b>>>0)}else c=!1,b=a.byteOffset;return{Aa:b,oa:c}},Y:function(a,b,c,d){P.B.write(a,b,0,d,c,!1);return 0}}},Ya=null,Za={},Q=[],$a=1,R=null,ab=!0,O=null,Va={},S=(a,b={})=>{a=Ma(a);if(!a)return{path:"",node:null};b=Object.assign({ha:!0,da:0},b);if(8<b.da)throw new O(32);a=a.split("/").filter(k=>!!k);for(var c=Ya,d="/",e=0;e<a.length;e++){var g=e===a.length-1;if(g&&b.parent)break;c=Wa(c,a[e]);d=m(d+"/"+a[e]);c.X&&(!g||g&&b.ha)&&
(c=c.X.root);if(!g||b.T)for(g=0;40960===(c.mode&61440);)if(c=bb(d),d=Ma(Ja(d),c),c=S(d,{da:b.da+1}).node,40<g++)throw new O(32);}return{path:d,node:c}},l=a=>{for(var b;;){if(a===a.parent)return a=a.L.ja,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}},cb=(a,b)=>{for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%R.length},Wa=(a,b)=>{var c;if(c=(c=db(a,"x"))?c:a.v.P?0:2)throw new O(c,a);for(c=R[cb(a.id,b)];c;c=c.ya){var d=c.name;if(c.parent.id===a.id&&
d===b)return c}return a.v.P(a,b)},Ua=(a,b,c,d)=>{a=new eb(a,b,c,d);b=cb(a.parent.id,a.name);a.ya=R[b];return R[b]=a},fb={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},gb=a=>{var b=["r","w","rw"][a&3];a&512&&(b+="w");return b},db=(a,b)=>{if(ab)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0},hb=(a,b)=>{try{return Wa(a,b),20}catch(c){}return db(a,"wx")},ib=(a=0)=>{for(;4096>=a;a++)if(!Q[a])return a;throw new O(33);
},jb=(a,b)=>{T||(T=function(){this.$={}},T.prototype={},Object.defineProperties(T.prototype,{object:{get:function(){return this.node},set:function(c){this.node=c}},flags:{get:function(){return this.$.flags},set:function(c){this.$.flags=c}},position:{get:function(){return this.$.position},set:function(c){this.$.position=c}}}));a=Object.assign(new T,a);b=ib(b);a.M=b;return Q[b]=a},Ta={open:a=>{a.B=Za[a.node.R].B;a.B.open&&a.B.open(a)},N:()=>{throw new O(70);}},Pa=(a,b)=>{Za[a]={B:b}},kb=(a,b)=>{var c=
"/"===b,d=!b;if(c&&Ya)throw new O(10);if(!c&&!d){var e=S(b,{ha:!1});b=e.path;e=e.node;if(e.X)throw new O(10);if(16384!==(e.mode&61440))throw new O(54);}b={type:a,Fa:{},ja:b,wa:[]};a=a.L(b);a.L=b;b.root=a;c?Ya=a:e&&(e.X=b,e.L&&e.L.wa.push(b))},q=(a,b,c)=>{var d=S(a,{parent:!0}).node;a=Ka(a);if(!a||"."===a||".."===a)throw new O(28);var e=hb(d,a);if(e)throw new O(e);if(!d.v.V)throw new O(63);return d.v.V(d,a,b,c)},lb=(a,b,c)=>{"undefined"==typeof c&&(c=b,b=438);q(a,b|8192,c)},pb=(a,b)=>{if(!Ma(a))throw new O(44);
var c=S(b,{parent:!0}).node;if(!c)throw new O(44);b=Ka(b);var d=hb(c,b);if(d)throw new O(d);if(!c.v.Z)throw new O(63);c.v.Z(c,b,a)},bb=a=>{a=S(a).node;if(!a)throw new O(44);if(!a.v.S)throw new O(28);return Ma(l(a.parent),a.v.S(a))},da=(a,b)=>{a="string"==typeof a?S(a,{T:!0}).node:a;if(!a.v.H)throw new O(63);a.v.H(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()})},t=(a,b,c)=>{if(""===a)throw new O(44);if("string"==typeof b){var d=fb[b];if("undefined"==typeof d)throw Error("Unknown file open mode: "+
b);b=d}c=b&64?("undefined"==typeof c?438:c)&4095|32768:0;if("object"==typeof a)var e=a;else{a=m(a);try{e=S(a,{T:!(b&131072)}).node}catch(g){}}d=!1;if(b&64)if(e){if(b&128)throw new O(20);}else e=q(a,c,0),d=!0;if(!e)throw new O(44);8192===(e.mode&61440)&&(b&=-513);if(b&65536&&16384!==(e.mode&61440))throw new O(54);if(!d&&(c=e?40960===(e.mode&61440)?32:16384===(e.mode&61440)&&("r"!==gb(b)||b&512)?31:db(e,gb(b)):44))throw new O(c);if(b&512&&!d){c=e;c="string"==typeof c?S(c,{T:!0}).node:c;if(!c.v.H)throw new O(63);
if(16384===(c.mode&61440))throw new O(31);if(32768!==(c.mode&61440))throw new O(28);if(d=db(c,"w"))throw new O(d);c.v.H(c,{size:0,timestamp:Date.now()})}b&=-131713;e=jb({node:e,path:l(e),flags:b,seekable:!0,position:0,B:e.B,Da:[],error:!1});e.B.open&&e.B.open(e);!f.logReadFiles||b&1||(qb||(qb={}),a in qb||(qb[a]=1));return e},ha=a=>{if(null===a.M)throw new O(8);a.aa&&(a.aa=null);try{a.B.close&&a.B.close(a)}catch(b){throw b;}finally{Q[a.M]=null}a.M=null},rb=(a,b,c)=>{if(null===a.M)throw new O(8);if(!a.seekable||
!a.B.N)throw new O(70);if(0!=c&&1!=c&&2!=c)throw new O(28);a.position=a.B.N(a,b,c);a.Da=[]},ea=(a,b,c,d,e)=>{c>>>=0;if(0>d||0>e)throw new O(28);if(null===a.M)throw new O(8);if(0===(a.flags&2097155))throw new O(8);if(16384===(a.node.mode&61440))throw new O(31);if(!a.B.write)throw new O(28);a.seekable&&a.flags&1024&&rb(a,0,2);var g="undefined"!=typeof e;if(!g)e=a.position;else if(!a.seekable)throw new O(70);b=a.B.write(a,b,c,d,e,void 0);g||(a.position+=b);return b},sb=()=>{O||(O=function(a,b){this.name=
"ErrnoError";this.node=b;this.Ca=function(c){this.I=c};this.Ca(a);this.message="FS error"},O.prototype=Error(),O.prototype.constructor=O,[44].forEach(a=>{Va[a]=new O(a);Va[a].stack="<generic error, no stack>"}))},tb,ca=(a,b)=>{var c=0;a&&(c|=365);b&&(c|=146);return c},V=(a,b,c)=>{a=m("/dev/"+a);var d=ca(!!b,!!c);ub||(ub=64);var e=ub++<<8|0;Pa(e,{open:g=>{g.seekable=!1},close:()=>{c&&c.buffer&&c.buffer.length&&c(10)},read:(g,k,n,r)=>{for(var p=0,u=0;u<r;u++){try{var x=b()}catch(U){throw new O(29);
}if(void 0===x&&0===p)throw new O(6);if(null===x||void 0===x)break;p++;k[n+u]=x}p&&(g.node.timestamp=Date.now());return p},write:(g,k,n,r)=>{for(var p=0;p<r;p++)try{c(k[n+p])}catch(u){throw new O(29);}r&&(g.node.timestamp=Date.now());return p}});lb(a,d,e)},ub,W={},T,qb,X=void 0;function Y(){X+=4;return F[X-4>>2>>>0]}function Z(a){a=Q[a];if(!a)throw new O(8);return a}var vb={};
function wb(){if(!xb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ka||"./this.program"},b;for(b in vb)void 0===vb[b]?delete a[b]:a[b]=vb[b];var c=[];for(b in a)c.push(b+"="+a[b]);xb=c}return xb}var xb;
function yb(a){if(!noExitRuntime){zb();N(wa);tb=!1;Ab(0);for(var b=0;b<Q.length;b++){var c=Q[b];c&&ha(c)}}if(!noExitRuntime){if(f.onExit)f.onExit(a);na=!0}la(a,new Ha(a))}function eb(a,b,c,d){a||(a=this);this.parent=a;this.L=a.L;this.X=null;this.id=$a++;this.name=b;this.mode=c;this.v={};this.B={};this.R=d}
Object.defineProperties(eb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});sb();R=Array(4096);kb(P,"/");q("/tmp",16895,0);q("/home",16895,0);q("/home/web_user",16895,0);
(()=>{q("/dev",16895,0);Pa(259,{read:()=>0,write:(b,c,d,e)=>e});lb("/dev/null",259);Oa(1280,Ra);Oa(1536,Sa);lb("/dev/tty",1280);lb("/dev/tty1",1536);var a=La();V("random",a);V("urandom",a);q("/dev/shm",16895,0);q("/dev/shm/tmp",16895,0)})();(()=>{q("/proc",16895,0);var a=q("/proc/self",16895,0);q("/proc/self/fd",16895,0);kb({L:()=>{var b=Ua(a,"fd",16895,73);b.v={P:(c,d)=>{var e=Q[+d];if(!e)throw new O(8);c={parent:null,L:{ja:"fake"},v:{S:()=>e.path}};return c.parent=c}};return b}},"/proc/self/fd")})();
var Cb={h:function(a,b,c,d){z("Assertion failed: "+C(a)+", at: "+[b?C(b):"unknown filename",c,d?C(d):"unknown function"])},e:function(a,b,c){X=c;try{var d=Z(a);switch(b){case 0:var e=Y();return 0>e?-28:jb(d,e).M;case 1:case 2:return 0;case 3:return d.flags;case 4:return e=Y(),d.flags|=e,0;case 5:return e=Y(),ra[e+0>>1>>>0]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return F[Bb()>>2>>>0]=28,-1;default:return-28}}catch(g){if("undefined"==typeof W||"ErrnoError"!==g.name)throw g;return-g.I}},
s:function(a,b){try{if(0===b)return-28;var c=qa("/")+1;if(b<c)return-68;pa("/",D,a,b);return c}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.I}},j:function(a,b,c){X=c;try{var d=Z(a);switch(b){case 21509:case 21505:return d.F?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return d.F?0:-59;case 21519:if(!d.F)return-59;var e=Y();return F[e>>2>>>0]=0;case 21520:return d.F?-28:-59;case 21531:a=e=Y();if(!d.B.va)throw new O(59);return d.B.va(d,b,a);case 21523:return d.F?
0:-59;case 21524:return d.F?0:-59;default:return-28}}catch(g){if("undefined"==typeof W||"ErrnoError"!==g.name)throw g;return-g.I}},f:function(a,b,c,d){X=d;try{b=C(b);var e=b;if("/"===e.charAt(0))b=e;else{var g=-100===a?"/":Z(a).path;if(0==e.length)throw new O(44);b=m(g+"/"+e)}var k=d?Y():0;return t(b,c,k).M}catch(n){if("undefined"==typeof W||"ErrnoError"!==n.name)throw n;return-n.I}},n:function(a,b){try{a=C(a);a:{try{var c=S(a,{T:!0}).node;if(!c)throw new O(44);if(!c.v.J)throw new O(63);var d=c.v.J(c)}catch(r){if(r&&
r.node&&m(a)!==m(l(r.node))){var e=-54;break a}throw r;}F[b>>2>>>0]=d.ta;F[b+8>>2>>>0]=d.ba;F[b+12>>2>>>0]=d.mode;G[b+16>>2>>>0]=d.za;F[b+20>>2>>>0]=d.uid;F[b+24>>2>>>0]=d.ua;F[b+28>>2>>>0]=d.R;M=[d.size>>>0,(L=d.size,1<=+Math.abs(L)?0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[b+40>>2>>>0]=M[0];F[b+44>>2>>>0]=M[1];F[b+48>>2>>>0]=4096;F[b+52>>2>>>0]=d.ra;var g=d.pa.getTime(),k=d.xa.getTime(),n=d.sa.getTime();M=[Math.floor(g/1E3)>>>0,
(L=Math.floor(g/1E3),1<=+Math.abs(L)?0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[b+56>>2>>>0]=M[0];F[b+60>>2>>>0]=M[1];G[b+64>>2>>>0]=g%1E3*1E3;M=[Math.floor(k/1E3)>>>0,(L=Math.floor(k/1E3),1<=+Math.abs(L)?0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[b+72>>2>>>0]=M[0];F[b+76>>2>>>0]=M[1];G[b+80>>2>>>0]=k%1E3*1E3;M=[Math.floor(n/1E3)>>>0,(L=Math.floor(n/1E3),1<=+Math.abs(L)?
0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[b+88>>2>>>0]=M[0];F[b+92>>2>>>0]=M[1];G[b+96>>2>>>0]=n%1E3*1E3;M=[d.ba>>>0,(L=d.ba,1<=+Math.abs(L)?0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[b+104>>2>>>0]=M[0];F[b+108>>2>>>0]=M[1];e=0}return e}catch(r){if("undefined"==typeof W||"ErrnoError"!==r.name)throw r;return-r.I}},o:function(a,b,c,d,e,g,k){try{var n=Z(d);if(0!==(b&2)&&
0===(c&2)&&2!==(n.flags&2097155))throw new O(2);if(1===(n.flags&2097155))throw new O(2);if(!n.B.W)throw new O(43);var r=n.B.W(n,a,e,b,c);var p=r.Aa;F[g>>2>>>0]=r.oa;G[k>>2>>>0]=p>>>0;return 0}catch(u){if("undefined"==typeof W||"ErrnoError"!==u.name)throw u;return-u.I}},p:function(a,b,c,d,e,g){try{var k=Z(e);if(c&2){if(32768!==(k.node.mode&61440))throw new O(43);d&2||(a>>>=0,k.B.Y&&k.B.Y(k,D.slice(a,a+b),g>>>0,b,d))}}catch(n){if("undefined"==typeof W||"ErrnoError"!==n.name)throw n;return-n.I}},g:function(){return Date.now()},
k:function(a,b,c){D.copyWithin(a>>>0,b>>>0,b+c>>>0)},m:function(a){var b=D.length;a>>>=0;if(4294901760<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,g=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var k=A.buffer;try{A.grow(g.call(e,4294901760,d)-k.byteLength+65535>>>16);sa();var n=1;break a}catch(r){}n=void 0}if(n)return!0}return!1},q:function(a,b){var c=0;wb().forEach(function(d,e){var g=b+c;e=G[a+4*e>>2>>>0]=g;for(g=0;g<d.length;++g)E[e++>>0>>>0]=d.charCodeAt(g);
E[e>>0>>>0]=0;c+=d.length+1});return 0},r:function(a,b){var c=wb();G[a>>2>>>0]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});G[b>>2>>>0]=d;return 0},i:yb,c:function(a){try{var b=Z(a);ha(b);return 0}catch(c){if("undefined"==typeof W||"ErrnoError"!==c.name)throw c;return c.I}},d:function(a,b,c,d){try{a:{var e=Z(a);a=b;for(var g,k=b=0;k<c;k++){var n=G[a>>2>>>0],r=G[a+4>>2>>>0];a+=8;var p=e,u=n,x=r,U=g,Hb=E;u>>>=0;if(0>x||0>U)throw new O(28);if(null===p.M)throw new O(8);if(1===(p.flags&2097155))throw new O(8);
if(16384===(p.node.mode&61440))throw new O(31);if(!p.B.read)throw new O(28);var mb="undefined"!=typeof U;if(!mb)U=p.position;else if(!p.seekable)throw new O(70);var nb=p.B.read(p,Hb,u,x,U);mb||(p.position+=nb);var fa=nb;if(0>fa){var ob=-1;break a}b+=fa;if(fa<r)break;"undefined"!==typeof g&&(g+=fa)}ob=b}G[d>>2>>>0]=ob;return 0}catch(xa){if("undefined"==typeof W||"ErrnoError"!==xa.name)throw xa;return xa.I}},l:function(a,b,c,d,e){try{b=c+2097152>>>0<4194305-!!b?(b>>>0)+4294967296*c:NaN;if(isNaN(b))return 61;
var g=Z(a);rb(g,b,d);M=[g.position>>>0,(L=g.position,1<=+Math.abs(L)?0<L?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)];F[e>>2>>>0]=M[0];F[e+4>>2>>>0]=M[1];g.aa&&0===b&&0===d&&(g.aa=null);return 0}catch(k){if("undefined"==typeof W||"ErrnoError"!==k.name)throw k;return k.I}},b:function(a,b,c,d){try{a:{var e=Z(a);a=b;for(var g,k=b=0;k<c;k++){var n=G[a>>2>>>0],r=G[a+4>>2>>>0];a+=8;var p=ea(e,E,n,r,g);if(0>p){var u=-1;break a}b+=p;"undefined"!==
typeof g&&(g+=p)}u=b}G[d>>2>>>0]=u;return 0}catch(x){if("undefined"==typeof W||"ErrnoError"!==x.name)throw x;return x.I}},a:A};
(function(){function a(c){c=c.exports;f.asm=c;ua.unshift(f.asm.t);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(0==I&&(null!==Aa&&(clearInterval(Aa),Aa=null),J)){var d=J;J=null;d()}return c}var b={a:Cb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){w("Module.instantiateWasm callback failed with error: "+c),h(c)}Ga(b,function(c){a(c.instance)}).catch(h);return{}})();
var Db=f._main=function(){return(Db=f._main=f.asm.u).apply(null,arguments)};function Bb(){return(Bb=f.asm.w).apply(null,arguments)}var Ab=f._fflush=function(){return(Ab=f._fflush=f.asm.x).apply(null,arguments)};function zb(){return(zb=f.asm.y).apply(null,arguments)}function Xa(){return(Xa=f.asm.z).apply(null,arguments)}function Eb(){return(Eb=f.asm.A).apply(null,arguments)}var Fb;J=function Gb(){Fb||Ib();Fb||(J=Gb)};
function Jb(a=[]){var b=Db;a.unshift(ka);var c=a.length,d=Eb(4*(c+1)),e=d>>2;a.forEach(k=>{var n=F,r=e++>>>0,p=qa(k)+1,u=Eb(p);pa(k,E,u,p);n[r]=u});F[e>>>0]=0;try{var g=b(c,d);yb(g,!0)}catch(k){k instanceof Ha||"unwind"==k||la(1,k)}}
function Ib(){var a=ja;function b(){if(!Fb&&(Fb=!0,f.calledRun=!0,!na)){f.noFSInit||tb||(tb=!0,sb(),f.stdin=f.stdin,f.stdout=f.stdout,f.stderr=f.stderr,f.stdin?V("stdin",f.stdin):pb("/dev/tty","/dev/stdin"),f.stdout?V("stdout",null,f.stdout):pb("/dev/tty","/dev/stdout"),f.stderr?V("stderr",null,f.stderr):pb("/dev/tty1","/dev/stderr"),t("/dev/stdin",0),t("/dev/stdout",1),t("/dev/stderr",1));ab=!1;N(ua);N(va);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Kb&&Jb(a);if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ya.unshift(c)}N(ya)}}if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)za();N(ta);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Kb=!0;f.noInitialRun&&(Kb=!1);Ib();


  return Module.ready
}

);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Module; });
else if (typeof exports === 'object')
  exports["Module"] = Module;
;(function initWorker() {

	function bytesToUtf8(buffer) {
		return new TextDecoder().decode(Uint8Array.from(buffer));
	}

	const stdoutBuffer = [];
	const stderrBuffer = [];

	function onExit(exitCode) {
		const message = {
			exitCode,
			stdout: bytesToUtf8(stdoutBuffer),
			stderr: bytesToUtf8(stderrBuffer),
		};
		postMessage(message);
	};
	function onWorkerMessage(event) {
		var data = event.data;
		const wasmMemory = new WebAssembly.Memory({
			initial: data.initialMemory,
			maximum: data.maxMemory
		});

		Module({
			inputFiles: data.inputFiles,
			arguments: data.args,
			stderr: stderrBuffer.push.bind(stderrBuffer),
			stdout: stdoutBuffer.push.bind(stdoutBuffer),
			onExit,
			wasmMemory,
			locateFile(path) {
				if (path !== 'xmllint.wasm') {
					return path;
				}
				// Fix wasm file path to be relative to the worker file path.
				// This also makes bundlers automatically pick up the wasm file.
				return new URL('./xmllint.wasm', import.meta.url).href;
			}
		});
	}


	addEventListener('message', onWorkerMessage);
})();