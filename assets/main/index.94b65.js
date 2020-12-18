window.__require=function e(t,c,i){function n(s,a){if(!c[s]){if(!t[s]){var r=s.split("/");if(r=r[r.length-1],!t[r]){var l="function"==typeof __require&&__require;if(!a&&l)return l(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var d=c[s]={exports:{}};t[s][0].call(d.exports,function(e){return n(t[s][1][e]||e)},d,d.exports,e,t,c,i)}return c[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Ball:[function(e,t){"use strict";cc._RF.push(t,"9b280YbFuZJv4QPGPL8e8iv","Ball"),cc.Class({extends:cc.Component,properties:{},init:function(e){this.gameCtl=e,this.getComponent(cc.RigidBody).linearVelocity=cc.v2(800,800)},onBeginContact:function(e,t,c){switch(c.tag){case 1:this.gameCtl.onBallContactBrick(t.node,c.node);break;case 2:this.gameCtl.onBallContactGround(t.node,c.node);break;case 3:this.gameCtl.onBallContactPaddle(t.node,c.node);break;case 4:this.gameCtl.onBallContactWall(t.node,c.node)}}}),cc._RF.pop()},{}],BrickLayout:[function(e,t){"use strict";cc._RF.push(t,"62398FSMJtHJ55jmSoqf4WF","BrickLayout"),cc.Class({extends:cc.Component,properties:{padding:0,spacing:0,cols:0,brickPrefab:cc.Prefab,bricksNumber:0,cells:[cc.Node]},init:function(e){this.node.removeAllChildren(),this.bricksNumber=e;for(var t=0;t<this.bricksNumber;t++){var c=cc.instantiate(this.brickPrefab);c.parent=this.node,c.x=this.padding+t%this.cols*(c.width+this.spacing)+c.width/2,c.y=-this.padding-Math.floor(t/this.cols)*(c.height+this.spacing)-c.height/2}}}),cc._RF.pop()},{}],BrickModel:[function(e,t){"use strict";cc._RF.push(t,"9d87e3ZgIhAN5ntEWz/8tei","BrickModel"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],BrickView:[function(e,t){"use strict";cc._RF.push(t,"446b9MwGVhLTYvIS/KH+BcI","BrickView"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],GameCtl:[function(e,t){"use strict";cc._RF.push(t,"a337308uxxJva7vh8G06q7Z","GameCtl");var c=e("GameModel");cc.Class({extends:cc.Component,properties:{gameView:e("GameView"),ball:e("Ball"),paddle:e("Paddle"),brickLayout:e("BrickLayout"),overPanel:e("OverPanel")},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){e.keyCode===cc.KEY.back&&cc.director.end()}),this.physicsManager=cc.director.getPhysicsManager(),this.gameModel=new c,this.startGame()},init:function(){this.physicsManager.enabled=!0,this.gameModel.init(),this.gameView.init(this),this.ball.init(this),this.paddle.init(),this.brickLayout.init(this.gameModel.bricksNumber),this.overPanel.init(this)},startGame:function(){this.init()},pauseGame:function(){this.physicsManager.enabled=!1},resumeGame:function(){this.physicsManager.enabled=!0},stopGame:function(){this.physicsManager.enabled=!1,this.overPanel.show(this.gameModel.score,0===this.gameModel.bricksNumber)},onBallContactBrick:function(e,t){t.parent=null,this.gameModel.addScore(1),this.gameModel.minusBrick(1),this.gameView.updateScore(this.gameModel.score),this.gameModel.bricksNumber<=0&&this.stopGame()},onBallContactGround:function(){this.stopGame()},onBallContactPaddle:function(){},onBallContactWall:function(){},onDestroy:function(){this.physicsManager.enabled=!1}}),cc._RF.pop()},{Ball:"Ball",BrickLayout:"BrickLayout",GameModel:"GameModel",GameView:"GameView",OverPanel:"OverPanel",Paddle:"Paddle"}],GameModel:[function(e,t){"use strict";cc._RF.push(t,"dceaaRUaJhHJ6dPqgG9vpjt","GameModel"),cc.Class({extends:cc.Component,properties:{score:0,bricksNumber:0},init:function(){this.score=0,this.bricksNumber=50},addScore:function(e){this.score+=e},minusBrick:function(e){this.bricksNumber-=e}}),cc._RF.pop()},{}],GameView:[function(e,t){"use strict";cc._RF.push(t,"e4735UW3lFPMoW0rK22obsG","GameView"),cc.Class({extends:cc.Component,properties:{scoreLabel:cc.Label},init:function(e){this.gameCtl=e,this.scoreLabel.string="0"},updateScore:function(e){this.scoreLabel.string=e}}),cc._RF.pop()},{}],LandingScene:[function(e,t){"use strict";cc._RF.push(t,"b85cfPHei5Aio/A9v0oIyPq","LandingScene"),cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,bgmAudioSource:cc.AudioSource,loading:cc.Node},onPlayButtonClicked:function(){var e=this;this.loading.active=!0,cc.director.loadScene("game"),cc.audioEngine.play(this.clickSound,!1,1),cc.tween(this.bgmAudioSource).to(1,{volume:{value:0,easing:"sineIn"}}).call(function(){return e.bgmAudioSource.stop()}).start()}}),cc._RF.pop()},{}],OverPanel:[function(e,t){"use strict";cc._RF.push(t,"60425zRIQ5LNIZ6KmZ5p/LN","OverPanel"),cc.Class({extends:cc.Component,properties:{resultLabel:cc.Label,scoreLabel:cc.Label},onLoad:function(){},init:function(e){this.gameCtl=e,this.node.active=!1},show:function(e,t){this.node.active=!0,this.resultLabel.string=t?"YOU WIN!":"YOU LOSE!",this.scoreLabel.string=e+""},onBtnRestart:function(){this.gameCtl.startGame()}}),cc._RF.pop()},{}],Paddle:[function(e,t){"use strict";cc._RF.push(t,"4dc82c1qO9KbZBsMZGbHlMV","Paddle"),cc.Class({extends:cc.Component,onLoad:function(){var e=this;this.node.parent.on("touchmove",function(t){var c=e.node.parent.convertToNodeSpace(t.getLocation());c.x<e.node.width/2?e.node.x=e.node.width/2:c.x>450-e.node.width/2?e.node.x=450-e.node.width/2:e.node.x=c.x})},init:function(){this.node.x=360}}),cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(e,t){"use strict";cc._RF.push(t,"00b34XidUlKmYJ4M7MFy5dJ","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["use_v2.0.x_cc.Toggle_event","GameCtl","BrickModel","GameModel","Ball","BrickLayout","BrickView","GameView","LandingScene","OverPanel","Paddle"]);