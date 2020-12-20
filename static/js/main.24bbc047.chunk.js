(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={header:"Header_header__2tevk",small:"Header_small__1uQvM",message:"Header_message__3NbkN",title:"Header_title__ILaB2",titleLogo:"Header_titleLogo__2pj7o",titleText:"Header_titleText__qd3rx",link:"Header_link__slmNi"}},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(37),s=n.n(r),o=n(1),l=n(2),u=n(5),c=n(4),f=n(6),h=n(38),m=n(15),d=n(39),p=n.n(d),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).setBuffer=n.setBuffer.bind(Object(m.a)(Object(m.a)(n))),n.writeBuffer=n.writeBuffer.bind(Object(m.a)(Object(m.a)(n))),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("canvas",{className:p.a.screen,width:256,height:240,ref:function(t){t&&e._initCanvas(t)}})}},{key:"setBuffer",value:function(e){for(var t=0;t<240;++t)for(var n=0;n<256;++n){var a=256*t+n;this.buf32[a]=4278190080|e[a]}}},{key:"writeBuffer",value:function(){this.imageData.data.set(this.buf8),this.context.putImageData(this.imageData,0,0)}},{key:"_initCanvas",value:function(e){this.context=e.getContext("2d"),this.imageData=this.context.getImageData(0,0,256,240),this.context.fillStyle="black",this.context.fillRect(0,0,256,240),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var t=0;t<this.buf32.length;++t)this.buf32[t]=4278190080}}]),t}(a.Component),v=60.098,y=function(){function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;Object(o.a)(this,e),this._run=function(){if(n._isRunning){n._frameId=requestAnimationFrame(n._run);var e=Date.now(),t=e-n._lastTime;t>n._interval&&(n._lastTime=e-t%n._interval,n.onFrame())}},this.onFrame=t,this._fps=a,this._interval=1e3/a,this._lastTime=Date.now(),this._startTime=this._lastTime,this._isRunning=!1}return Object(l.a)(e,[{key:"start",value:function(){this._isRunning=!0,this._run()}},{key:"stop",value:function(){this._isRunning=!1,cancelAnimationFrame(this._frameId)}}]),e}(),g=n(40),b=n.n(g),O=n(7),k=n(3),T=8192,w=function(){function e(){Object(o.a)(this,e),this.bufferSize=T,this.buffer=new b.a(2*this.bufferSize),this.writeSample=this.writeSample.bind(this),this._onAudioProcess=this._onAudioProcess.bind(this)}return Object(l.a)(e,[{key:"start",value:function(){var e=this;this.audioCtx||window.AudioContext&&(this.audioCtx=new window.AudioContext,this.scriptNode=this.audioCtx.createScriptProcessor(1024,0,2),this.scriptNode.onaudioprocess=this._onAudioProcess,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=O.default.sound.gain,this.gainNode.connect(this.audioCtx.destination),this.scriptNode.connect(this.gainNode),k.default.on("volume",function(t){return e.gainNode&&(e.gainNode.gain.value=t)}))}},{key:"stop",value:function(){this.scriptNode&&(this.gainNode.disconnect(this.audioCtx.destination),this.scriptNode.disconnect(this.gainNode),this.scriptNode.onaudioprocess=null,this.scriptNode=null,this.gainNode=null),this.audioCtx&&(this.audioCtx.close().catch(console.error),this.audioCtx=null),k.default.removeListener("volume")}},{key:"getSampleRate",value:function(){if(!window.AudioContext)return 44100;var e=new window.AudioContext,t=e.sampleRate;return e.close(),t}},{key:"writeSample",value:function(e,t){this.buffer.size()/2>=this.bufferSize&&this.buffer.deqN(this.bufferSize/2),this.buffer.enq(e),this.buffer.enq(t)}},{key:"_onAudioProcess",value:function(e){var t,n=e.outputBuffer.getChannelData(0),a=e.outputBuffer.getChannelData(1),i=n.length;try{t=this.buffer.deqN(2*i)}catch(o){for(var r=0;r<i;r++)n[r]=0,a[r]=0;return}for(var s=0;s<i;s++)n[s]=t[2*s],a[s]=t[2*s+1]}}]),e}(),E=n(18),N=n.n(E),B=[1,2,4,8,16,32,64,128],S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;Object(o.a)(this,e),this.player=t,this.getNes=n,this.buttons={BUTTON_A:!1,BUTTON_B:!1,BUTTON_SELECT:!1,BUTTON_START:!1,BUTTON_UP:!1,BUTTON_DOWN:!1,BUTTON_LEFT:!1,BUTTON_RIGHT:!1}}return Object(l.a)(e,[{key:"syncAll",value:function(e){this.sync("BUTTON_A",!!(e&B[0])),this.sync("BUTTON_B",!!(e&B[1])),this.sync("BUTTON_SELECT",!!(e&B[2])),this.sync("BUTTON_START",!!(e&B[3])),this.sync("BUTTON_UP",!!(e&B[4])),this.sync("BUTTON_DOWN",!!(e&B[5])),this.sync("BUTTON_LEFT",!!(e&B[6])),this.sync("BUTTON_RIGHT",!!(e&B[7]))}},{key:"sync",value:function(e,t){var n=this.getNes();!this.buttons[e]&&t?(this.buttons[e]=!0,n.buttonDown(this.player,N.a.Controller[e])):this.buttons[e]&&!t&&(this.buttons[e]=!1,n.buttonUp(this.player,N.a.Controller[e]))}},{key:"toByte",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.buttons;return(e.BUTTON_A&&B[0])|(e.BUTTON_B&&B[1])|(e.BUTTON_SELECT&&B[2])|(e.BUTTON_START&&B[3])|(e.BUTTON_UP&&B[4])|(e.BUTTON_DOWN&&B[5])|(e.BUTTON_LEFT&&B[6])|(e.BUTTON_RIGHT&&B[7])}}]),e}(),j=n(45),C=n(9),U=n.n(C),A=function(e){function t(e,n){var a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e,n)))._processGamepadIfPossible=function(){var e=U.a.first(navigator.getGamepads());if(e&&"standard"===e.mapping){var t=function(t){return e.buttons[t].pressed};a._setButton("BUTTON_A",t(1)),a._setButton("BUTTON_B",t(0)),a._setButton("BUTTON_SELECT",t(8)),a._setButton("BUTTON_START",t(9)),a._setButton("BUTTON_UP",t(12)),a._setButton("BUTTON_DOWN",t(13)),a._setButton("BUTTON_LEFT",t(14)),a._setButton("BUTTON_RIGHT",t(15))}},a._onKeyDown=function(e){var t=a.keyMap[e.key];t&&a._setButton(t,!0)},a._onKeyUp=function(e){var t=a.keyMap[e.key];t&&a._setButton(t,!1)},a.immediateButtons=U.a.clone(a.buttons),a.onStart=i,a.keyMap=O.default.options.input,a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"toByte",value:function(){return Object(j.a)(Object(c.a)(t.prototype),"toByte",this).call(this,this.immediateButtons)}},{key:"attach",value:function(){var e=this;setInterval(function(){e._processGamepadIfPossible()},10),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),k.default.on("keymap-updated",function(){return e.keyMap=O.default.options.input})}},{key:"detach",value:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),k.default.removeListener("keymap-updated")}},{key:"_setButton",value:function(e,t){"BUTTON_START"===e&&t&&this.onStart(),this.immediateButtons[e]=t,this.isMaster&&this.sync(e,t)}},{key:"isMaster",get:function(){return 1===this.player}}]),t}(S),L={buffering:"Buffering",connected:"Connected!",connecting:"Connecting...",controls:"-Controls-",copied:"Copied!",crtEffect:"CRT Effect",dragARomHere:"Drag a NES rom file here!",enabled_false:"Disabled",enabled_true:"Enabled",errors:{connectionFailed:"CONNECTION FAILED :(",invalidRom:"INVALID ROM :(",serverIsDown:"The server is down :("},input:"Input",link:"link",loading:"Loading...",pressStart:"PRESS START",setDefaults:"Set defaults",settings:"Settings",sound:"Sound",shareThis:"Share this",toPlayWithSomeone:"to play with someone!",waiting:"WAITING...",yourXboxController:"Your Xbox controller"},D=function(e){function t(e){var n;Object(o.a)(this,t);var a=function(){return n.nes};return(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).localController=new A(1,a,e.onStartPressed),n.remoteController=new S(2,a),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(_,{ref:function(t){t&&e._initialize(t)}})}},{key:"componentDidMount",value:function(){this.localController.attach()}},{key:"componentWillUpdate",value:function(e){this.stop()}},{key:"start",value:function(){this.frameTimer.start(),this.speakers.start()}},{key:"stop",value:function(){this.frameTimer.stop(),this.speakers.stop()}},{key:"frame",value:function(){try{this.nes.frame(),this.screen.writeBuffer()}catch(e){this.props.onError(L.errors.invalidRom,!1)}}},{key:"componentWillUnmount",value:function(){this.stop(),this.localController.detach()}},{key:"_initialize",value:function(e){var t=this,n=this.props,a=n.rom,i=n.onError;if(a){var r=h.Buffer.from(a).toString("binary");this.screen=e,this.speakers=new w,this.nes=new E.NES({onFrame:this.screen.setBuffer,onAudioSample:this.speakers.writeSample,sampleRate:this.speakers.getSampleRate()}),this.frameTimer=new y(function(){var e=t.props.syncer;e?e.sync():t.frame()});try{this.nes.loadROM(r)}catch(s){i(L.errors.invalidRom,!1)}window.emulator=this,window.jsnes=N.a}}}]),t}(a.Component),x=n(12),R=n.n(x),F=n(20),I=n(25),P=n.n(I),M=n(41),z=n.n(M),W=n(8),H=n.n(W),G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement("section",{className:"message -left"},i.a.createElement("div",{className:H()(P.a.balloon,"nes-balloon","from-left","is-small")},i.a.createElement("p",null,e)),i.a.createElement("br",null),i.a.createElement("img",{className:P.a.character,src:z.a,alt:"character"}))}}]),t}(a.Component),K=n(11),q=n.n(K),J=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={bytes:null},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement("div",{className:q.a.header},i.a.createElement("div",{className:q.a.small},!U.a.isEmpty(e)&&i.a.createElement(G,{className:H()(q.a.message,q.a.small)},e)),i.a.createElement("h2",{className:q.a.title},i.a.createElement("div",null,i.a.createElement("i",{className:H()(q.a.titleLogo,"nes-logo")}),i.a.createElement("span",{className:q.a.titleText},"NEStation")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/rodri042/nestation#nestation",target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},i.a.createElement("i",{className:H()(q.a.link,q.a.titleLogo,"nes-octocat")})))))}}]),t}(a.Component),X=n(17),Q=n.n(X),V=function(){function e(t,n){Object(o.a)(this,e),this.rom=t,this.channel=n,this._sent=0,this._total=t.byteLength}return Object(l.a)(e,[{key:"run",value:function(){if(this._sent===this._total)return this.channel.send("end"),!0;var e=this._total-this._sent,t=Math.min(1024,e),n=this.rom.slice(this._sent,this._sent+t);this._sent+=t,this.channel.send(n)}},{key:"transferred",get:function(){return this._sent}}]),e}(),Y=function(){function e(t){Object(o.a)(this,e),this.rom=new ArrayBuffer,this.channel=t,this._received=0}return Object(l.a)(e,[{key:"run",value:function(e){this.rom=this._appendBuffer(this.rom,e),this._received+=e.byteLength,this.channel.send("next")}},{key:"_appendBuffer",value:function(e,t){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(new Uint8Array(e),0),n.set(new Uint8Array(t),e.byteLength),n.buffer}},{key:"transferred",get:function(){return this._received}}]),e}(),Z=0,$=1,ee=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this))).channel=e,n._reset(),n.channel.on("data",function(e){return n._onData(e)}),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"sync",value:function(){var e=O.default.buffering.masterBufferLimit;this._state!==$||this._blindFrames>e?k.default.emit("isLoading",!0):(k.default.emit("isLoading",!1),this._runFrame())}},{key:"initializeRom",value:function(e){this._transfer=new V(e,this.channel),this._transfer.run(),this.emit("rom",e)}},{key:"updateRom",value:function(e){this.channel.send("new-rom"),this._reset(),this.initializeRom(e)}},{key:"initializeEmulator",value:function(e){this._emulator=e,e.localController.player=1,e.remoteController.player=2}},{key:"onStartPressed",value:function(){}},{key:"_start",value:function(){this._transfer=null,this._state=$,this.emit("start"),k.default.emit("message",null),k.default.emit("isLoading",!1)}},{key:"_runFrame",value:function(){var e=O.default.buffering.masterBufferLimit;if(this._buffer.length>e)for(var t=0;t<this._buffer.length-e;t++)this._buffer.shift();var n=this._buffer.shift();if(n){var a=new Uint8Array(n)[0];this._emulator.remoteController.syncAll(a)}var i=new Uint8Array(2);i[0]=this._emulator.localController.toByte(),i[1]=this._emulator.remoteController.toByte(),this.channel.send(i),this._blindFrames++,this._emulator.frame()}},{key:"_onData",value:function(e){switch(this._state){case Z:if("next"===e)this._transfer.run()&&k.default.emit("message",L.waiting);else"start"===e&&this._start();break;case $:this._buffer.push(e),this._blindFrames=0}}},{key:"_reset",value:function(){this._state=Z,this._transfer=null,this._buffer=[],this._blindFrames=0,k.default.emit("isLoading",!0)}}]),t}(Q.a),te=0,ne=1,ae=2,ie=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this))).channel=e,n._reset(),n.channel.on("data",function(e){return n._onData(e)}),n._hasPressedStart=!1,n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"sync",value:function(){var e=O.default.buffering,t=e.minBufferSize,n=e.maxBufferSize;if(this._buffer.length<t)return this._isBuffering=!0,void k.default.emit("isLoading",!0);if(this._buffer.length>n)for(var a=0;a<this._buffer.length-n;a++)this._runFrame();this._isBuffering&&this._buffer.length<n||this._runFrame()}},{key:"initializeRom",value:function(e){}},{key:"updateRom",value:function(e){}},{key:"initializeEmulator",value:function(e){this._emulator=e,k.default.emit("isLoading",!1),e.localController.player=2,e.remoteController.player=1}},{key:"onStartPressed",value:function(){this._state===ne&&(this._hasPressedStart=!0,this._start())}},{key:"_start",value:function(){this.emit("start"),this.channel.send("start"),k.default.emit("message",null),this._state=ae}},{key:"_runFrame",value:function(){this._ifBuffering=!1,k.default.emit("isLoading",!1);var e=this._buffer.shift(),t=new Uint8Array(e)[0],n=new Uint8Array(e)[1];this._emulator.remoteController.syncAll(t),this._emulator.localController.syncAll(n),this._emulator.frame()}},{key:"_onData",value:function(e){if("new-rom"!==e)switch(this._state){case te:"end"===e?(this.emit("rom",this._transfer.rom),this._transfer=null,this._hasPressedStart?this._start():(k.default.emit("message",L.pressStart),this._state=ne)):this._transfer.run(e);break;case ae:if(!this._emulator)return;this._buffer.push(e);var t=new Uint8Array(1);t[0]=this._emulator.localController.toByte(),this.channel.send(t)}else this._reset()}},{key:"_reset",value:function(){this._state=te,this._transfer=new Y(this.channel),this._isBuffering=!1,this._buffer=[],k.default.emit("isLoading",!0)}}]),t}(Q.a),re=n(14),se=n.n(re),oe=1e3,le=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={token:null,copied:!1,isDown:!1},n._copyLink=function(e){e.preventDefault(),navigator.clipboard.writeText(e.target.href),n.setState({copied:!0}),setTimeout(function(){n.setState({copied:!1})},oe)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.needsRom,t=this.state,n=t.token,a=t.copied,r=t.isDown;return i.a.createElement(J,null,a?i.a.createElement("span",null,L.copied):e?i.a.createElement("span",null,L.dragARomHere):n?i.a.createElement("span",null,L.shareThis," ",i.a.createElement("a",{href:"?token=".concat(n,"#/join"),onClick:this._copyLink,tabIndex:"-1"},L.link)," ",L.toPlayWithSomeone):r?i.a.createElement("span",null,L.errors.serverIsDown):i.a.createElement("span",null,L.loading))}},{key:"componentDidUpdate",value:function(){var e=Object(F.a)(R.a.mark(function e(t){var n,a,i,r,s=this;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.needsRom,i=n.onSyncer,r=n.onError,!a&&!this.channel){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,se.a.createChannel();case 6:this.channel=e.sent,this.channel.on("connected",function(){i(new ee(s.channel))}).on("disconnected",r),this.setState({token:this.channel.token,isDown:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({isDown:!0});case 14:case"end":return e.stop()}},e,this,[[3,11]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(a.Component),ue=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(J,null,i.a.createElement("span",null,L.connecting))}},{key:"componentDidMount",value:function(){var e=Object(F.a)(R.a.mark(function e(){var t,n,a,i;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.onSyncer,a=t.onError,e.prev=1,e.next=4,se.a.joinChannel(this.props.token);case 4:(i=e.sent).on("connected",function(){n(new ie(i))}).on("disconnected",a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a();case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),ce=n(42),fe=n.n(ce),he=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i))))._onAssign=function(){n.props.isAssigning?n.props.onAssignCancel():n.props.onAssignStart()},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.displayName,n=e.isAssigning,a=e.verticalMirror,r=void 0!==a&&a;return i.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:this._onAssign},i.a.createElement("span",{style:r?{transform:"scale(1, -1)",display:"inline-block"}:null},n?"...":t))}}]),t}(a.Component),me=n(21),de=n.n(me),pe=[{name:"BUTTON_LEFT",displayName:"<"},{name:"BUTTON_RIGHT",displayName:">"},{name:"BUTTON_UP",displayName:"v",verticalMirror:!0},{name:"BUTTON_DOWN",displayName:"v"},{name:"BUTTON_B",displayName:"B"},{name:"BUTTON_A",displayName:"A"},{name:"BUTTON_SELECT",displayName:"SELECT"},{name:"BUTTON_START",displayName:"START"}],_e=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={mappingButton:null},n._onClose=function(){k.default.emit("closeSettings")},n._onSetDefaults=function(){O.default.reset(),n._notify()},n._onAssign=function(){n.props.isAssigning||(n.props.onAssignStart(),window.addEventListener("keydown",n._onKeyDown))},n._onKeyDown=function(e){if(n.state.mappingButton){e.preventDefault();var t=U.a.findKey(O.default.options.input,function(e){return e===n.state.mappingButton}),a=e.key;delete O.default.options.input[t],O.default.options.input[a]=n.state.mappingButton,O.default.save(),n._notify(),n.setState({mappingButton:null})}},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this._onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._onKeyDown)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:de.a.settings},i.a.createElement("button",{type:"button",className:H()(de.a.closeButton,"nes-btn","is-error"),onClick:this._onClose},"x"),i.a.createElement("button",{type:"button",className:H()(de.a.setDefaultsButton,"nes-btn","is-warning"),onClick:this._onSetDefaults},L.setDefaults),i.a.createElement("section",{className:H()("nes-container","is-dark","with-title")},i.a.createElement("div",{className:"title"},L.sound),i.a.createElement("div",null,O.default.soundOptions.map(function(t){return i.a.createElement("label",{key:t.name},i.a.createElement("input",{type:"radio",className:"nes-radio is-dark",name:"sound",checked:O.default.options.sound===t.name,onChange:function(n){return e._update("sound",t.name)}}),i.a.createElement("span",null,t.name))}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("section",{className:H()("nes-container","is-dark","with-title")},i.a.createElement("div",{className:"title"},L.buffering),i.a.createElement("div",null,O.default.bufferingOptions.map(function(t){return i.a.createElement("label",{key:t.name},i.a.createElement("input",{type:"radio",className:"nes-radio is-dark",name:"buffering",checked:O.default.options.buffering===t.name,onChange:function(){return e._update("buffering",t.name)}}),i.a.createElement("span",null,t.name))}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("section",{className:H()("nes-container","is-dark","with-title")},i.a.createElement("div",{className:"title"},L.crtEffect),i.a.createElement("div",null,[!0,!1].map(function(t){return i.a.createElement("label",{key:t},i.a.createElement("input",{type:"radio",className:"nes-radio is-dark",name:"crt",checked:O.default.options.crt===t,onChange:function(){return e._update("crt",t)}}),i.a.createElement("span",null,L["enabled_".concat(t)]))}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("section",{className:H()("nes-container","is-dark","with-title")},i.a.createElement("div",{className:"title"},L.input),pe.map(function(t){return i.a.createElement(he,{key:t.name,name:t.name,verticalMirror:t.verticalMirror,displayName:t.displayName,isAssigning:e.state.mappingButton===t.name,onAssignStart:function(){return e.setState({mappingButton:t.name})},onAssignCancel:function(){return e.setState({mappingButton:null})}})})))}},{key:"_update",value:function(e,t){U.a.set(O.default.options,e,t),O.default.save(),this._notify()}},{key:"_notify",value:function(){k.default.emit("volume",O.default.sound.gain),k.default.emit("keymap");var e=document.querySelector("#container");O.default.options.crt?e.classList.add("crt"):e.classList.remove("crt"),this.forceUpdate()}}]),t}(a.Component),ve=n(19),ye=n.n(ve),ge=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={isSettingsMenuOpen:!1,isLoading:!1,message:null},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.isVisible,t=this.state,n=t.isSettingsMenuOpen,a=t.isLoading,r=t.message;return i.a.createElement("div",{className:H()(ye.a.overlay,e&&ye.a.show)},i.a.createElement("div",{className:H()(ye.a.loader,null==r&&ye.a.dark)},n?i.a.createElement(_e,null):null!=r?i.a.createElement("div",{className:ye.a.message},r):a&&i.a.createElement(fe.a,{type:"Watch",color:"#CCCCCC",height:"50",width:"50"})))}},{key:"componentDidMount",value:function(){var e=this;k.default.on("isLoading",function(t){e.setState({isLoading:t})}).on("message",function(t){e.setState({isLoading:!1,message:t})}).on("openSettings",function(){e.setState({isSettingsMenuOpen:!0})}).on("closeSettings",function(){e.setState({isSettingsMenuOpen:!1})})}},{key:"componentWillUnmount",value:function(){k.default.removeListener("isLoading"),k.default.removeListener("message"),k.default.removeListener("openSettings"),k.default.removeListener("closeSettings")}},{key:"isVisible",get:function(){return this.state.isSettingsMenuOpen||this.state.isLoading||null!=this.state.message}}]),t}(a.Component),be=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("canvas",{style:{width:"100%",height:"100%",borderRadius:8},width:256,height:240,ref:function(t){t&&e._initCanvas(t)}})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this._frameId)}},{key:"_initCanvas",value:function(e){var t=this,n=e.getContext("2d");var a=!0;!function e(){(a=!a)?t._frameId=requestAnimationFrame(e):(!function(e){for(var t=e.canvas.width,n=e.canvas.height,a=e.createImageData(t,n),i=new Uint32Array(a.data.buffer),r=i.length,s=0;s<r;)i[s++]=(255*Math.random()|0)<<24;e.putImageData(a,0,0)}(n),t._frameId=requestAnimationFrame(e))}()}}]),t}(a.Component),Oe={cleanQueryString:function(){var e;e=(e=(e=(e=window.location.href).replace(e.substring(e.indexOf("?")),"")).substring(e.indexOf("//")+2)).substring(e.indexOf("/")),window.history.replaceState({},"",e)},ellipsize:function(e,t){return"".concat(e.substring(0,t)).concat(e.length>t?"\u2026":"")}},ke=n(13),Te=n.n(ke),we={ArrowLeft:"<",ArrowRight:">",ArrowUp:"~v",ArrowDown:"v"," ":"[Space]"},Ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i))))._onGamepadConnected=function(e){"standard"===e.gamepad.mapping&&(n.usesGamepad=!0,n.forceUpdate())},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this._keyFor("BUTTON_UP"),t="~v"===e;return i.a.createElement("div",{className:Te.a.controls,id:"controls"},i.a.createElement("b",{className:H()(Te.a.title,Te.a.centered)},L.controls),i.a.createElement("br",null),this.usesGamepad?i.a.createElement("div",{className:Te.a.centered},L.yourXboxController):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:Te.a.controller},i.a.createElement("span",{className:Te.a.dpad},i.a.createElement("span",null,this._keyFor("BUTTON_LEFT"))," ",i.a.createElement("span",null,this._keyFor("BUTTON_RIGHT"))," ",i.a.createElement("span",{style:t?{transform:"scale(1, -1)",display:"inline-block"}:null},t?"v":e)," ",i.a.createElement("span",null,this._keyFor("BUTTON_DOWN"))),i.a.createElement("span",{className:Te.a.buttons},this._keyFor("BUTTON_B")," ",this._keyFor("BUTTON_A"))),i.a.createElement("div",{className:Te.a.centered},this._keyFor("BUTTON_SELECT")," ",this._keyFor("BUTTON_START"))))}},{key:"componentDidMount",value:function(){var e=this;k.default.on("keymap",function(){k.default.emit("keymap-updated"),e.forceUpdate();var t=document.querySelector("#controls");t.classList.remove("blink"),setTimeout(function(){return t.classList.add("blink")},100)}),window.addEventListener("gamepadconnected",this._onGamepadConnected)}},{key:"componentWillUnmount",value:function(){k.default.removeListener("keymap"),window.removeEventListener("gamepadconnected")}},{key:"_keyFor",value:function(e){var t=U.a.findKey(O.default.options.input,function(t){return t===e});return t?this._format(t):"[?]"}},{key:"_format",value:function(e){return we[e]||(1===e.length?e.toUpperCase():"[".concat(Oe.ellipsize(e,6),"]"))}}]),t}(a.Component),Ne=n(43),Be=n.n(Ne),Se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i))))._onClick=function(){k.default.emit("openSettings")},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Be.a.button},i.a.createElement("button",{type:"button",tabIndex:"-1",className:"nes-btn",onClick:this._onClick},L.settings))}}]),t}(a.Component),je=n(16),Ce=n.n(je);window.bus=n(3).default,window.config=n(7).default;var Ue=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={rom:null,syncer:null},n._onSyncer=function(e){n.setState({syncer:e}),e.on("rom",function(t){n._loadRom(t,function(){return e.initializeEmulator(n.emulator)},!1)}),e.on("start",function(){return n.emulator&&n.emulator.start()}),e.initializeRom(n.state.rom)},n._onFileDrop=function(e){e.preventDefault();var t=U.a.first(e.dataTransfer.files),a=new FileReader;t&&(a.onload=function(e){var t=e.target.result;n.state.syncer?n.state.syncer.updateRom(t):n._loadRom(e.target.result)},a.readAsArrayBuffer(t))},n._ignore=function(e){e.stopPropagation(),e.preventDefault()},n._onStartPressed=function(){n.state.syncer&&n.state.syncer.onStartPressed()},n._onError=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n.setState({rom:null}),k.default.emit("message",e||L.errors.connectionFailed),t&&(n.setState({syncer:null}),Oe.cleanQueryString(),window.location.href="#/")},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.token,n=this.state,a=n.rom,r=n.syncer;return i.a.createElement("div",{className:Ce.a.app},r?i.a.createElement(J,null,L.connected):t?i.a.createElement(ue,{onSyncer:this._onSyncer,onError:this._onError,token:t}):i.a.createElement(le,{onSyncer:this._onSyncer,onError:this._onError,needsRom:!a}),i.a.createElement("div",{className:Ce.a.main},i.a.createElement("section",{className:H()(Ce.a.gameContainer,"nes-container","is-dark","with-title")},i.a.createElement("div",{className:Ce.a.overlay},i.a.createElement(ge,null)),a?i.a.createElement(D,{rom:a,syncer:r,onStartPressed:this._onStartPressed,onError:this._onError,ref:function(t){return e.emulator=t}}):i.a.createElement(be,null))),i.a.createElement("div",{className:Ce.a.controls},i.a.createElement(Ee,null)),i.a.createElement("div",{className:Ce.a.menu},i.a.createElement(Se,null)))}},{key:"componentDidMount",value:function(){window.addEventListener("dragover",this._ignore),window.addEventListener("dragenter",this._ignore),window.addEventListener("drop",this._onFileDrop),O.default.options.crt&&document.querySelector("#container").classList.add("crt")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragover",this._ignore),window.removeEventListener("dragenter",this._ignore),window.removeEventListener("drop",this._onFileDrop)}},{key:"_loadRom",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U.a.noop,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];k.default.emit("message",null),this.setState({rom:e},function(){n(),a&&t.emulator.start()})}}]),t}(a.Component),Ae=n(44),Le=n.n(Ae);se.a.setStore(new re.SimpleStore("https://simple-key-value-store.herokuapp.com"));var De=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return window.location.hash.startsWith("#/join")?i.a.createElement(Ue,{token:this.inviteToken}):i.a.createElement(Ue,null)}},{key:"componentWillMount",value:function(){var e=this;this._listener=window.addEventListener("hashchange",function(t){e.forceUpdate()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this._listener)}},{key:"inviteToken",get:function(){return Le.a.parse(window.location.search).token}}]),t}(a.PureComponent);n(125),n(126),n(127);s.a.render(i.a.createElement(De,null),document.getElementById("root"))},13:function(e,t,n){e.exports={controls:"Controls_controls__2Z41f",title:"Controls_title__kk3Y5",controller:"Controls_controller__35wyc",dpad:"Controls_dpad__XQjat",buttons:"Controls_buttons__x_aTK",centered:"Controls_centered__3mb8d"}},16:function(e,t,n){e.exports={app:"PlayScreen_app__19HdR",main:"PlayScreen_main__2DZfL",gameContainer:"PlayScreen_gameContainer__TNJBD",overlay:"PlayScreen_overlay__1M2gy",controls:"PlayScreen_controls__1Ryre",menu:"PlayScreen_menu__1iXjj"}},19:function(e,t,n){e.exports={overlay:"Overlay_overlay__2xHdf",show:"Overlay_show__CYhNa",loader:"Overlay_loader__3Disu",dark:"Overlay_dark__2IwIj",message:"Overlay_message__3zFor"}},21:function(e,t,n){e.exports={settings:"Settings_settings__3IKOb",closeButton:"Settings_closeButton__1E0A8",setDefaultsButton:"Settings_setDefaultsButton__n5JDJ"}},25:function(e,t,n){e.exports={balloon:"BalloonMessage_balloon__3lI4z",character:"BalloonMessage_character__1zLP6"}},3:function(e,t,n){"use strict";n.r(t);var a=n(17),i=new(n.n(a).a);t.default=i},39:function(e,t,n){e.exports={screen:"Screen_screen__2lJdo"}},41:function(e,t,n){e.exports=n.p+"static/media/halu.2e5e0dc3.svg"},43:function(e,t,n){e.exports={button:"SettingsButton_button__3xnE0"}},46:function(e,t,n){e.exports=n(128)},7:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=function(){function e(){Object(a.a)(this,e),this.options=this.defaultOptions,this.load()}return Object(i.a)(e,[{key:"save",value:function(){localStorage.setItem("options",JSON.stringify(this.options))}},{key:"load",value:function(){try{this.options=JSON.parse(localStorage.getItem("options"))||this.defaultOptions}catch(e){this.reset()}}},{key:"reset",value:function(){this.options=this.defaultOptions,this.save()}},{key:"sound",get:function(){var e=this;return this.soundOptions.find(function(t){return t.name===e.options.sound})}},{key:"buffering",get:function(){var e=this;return this.bufferingOptions.find(function(t){return t.name===e.options.buffering})}},{key:"defaultOptions",get:function(){return{sound:"50%",buffering:"Disabled",crt:!0,input:{" ":"BUTTON_A",d:"BUTTON_B",Delete:"BUTTON_SELECT",Enter:"BUTTON_START",ArrowUp:"BUTTON_UP",ArrowDown:"BUTTON_DOWN",ArrowLeft:"BUTTON_LEFT",ArrowRight:"BUTTON_RIGHT"}}}},{key:"soundOptions",get:function(){return[{name:"100%",gain:1},{name:"90%",gain:.9},{name:"75%",gain:.75},{name:"50%",gain:.5},{name:"25%",gain:.25},{name:"10%",gain:.1},{name:"0%",gain:0}]}},{key:"bufferingOptions",get:function(){return[{name:"Disabled",masterBufferLimit:3,minBufferSize:1,maxBufferSize:1},{name:"Low",masterBufferLimit:3,minBufferSize:1,maxBufferSize:2},{name:"Medium",masterBufferLimit:5,minBufferSize:2,maxBufferSize:3},{name:"High",masterBufferLimit:5,minBufferSize:3,maxBufferSize:5}]}}]),e}();t.default=new r}},[[46,1,2]]]);
//# sourceMappingURL=main.24bbc047.chunk.js.map