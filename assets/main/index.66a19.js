window.__require=function e(i,t,c){function o(s,a){if(!t[s]){if(!i[s]){var r=s.split("/");if(r=r[r.length-1],!i[r]){var l="function"==typeof __require&&__require;if(!a&&l)return l(r,!0);if(n)return n(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var u=t[s]={exports:{}};i[s][0].call(u.exports,function(e){return o(i[s][1][e]||e)},u,u.exports,e,i,t,c)}return t[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<c.length;s++)o(c[s]);return o}({Ball:[function(e,i){"use strict";cc._RF.push(i,"9b280YbFuZJv4QPGPL8e8iv","Ball"),cc.Class({extends:cc.Component,properties:{rigidbody:cc.RigidBody},init:function(e){this._isReady=!0,this.gameCtl=e,this.node.position=cc.v2(221,50),this.rigidbody.linearVelocity=cc.v2(0,0)},onLoad:function(){this.node.parent.on("touchmove",this.onTouchMove,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.back:cc.director.end();break;default:this._isReady&&(this._isReady=!1,this.rigidbody.linearVelocity=cc.v2(0,1).mul(400))}},onBeginContact:function(e,i,t){if(this.gameCtl)switch(t.tag){case 1:this.gameCtl.onBallContactBrick(i.node,t.node);break;case 2:this.gameCtl.onBallContactGround(i.node,t.node);break;case 3:var c=this.node.parent.convertToWorldSpaceAR(t.node.position),o=e.getWorldManifold().points[0];c.y-=40,this._ballDirectionn=o.sub(c).normalize(),this.gameCtl.onBallContactPaddle(i.node,t.node);break;case 4:this.gameCtl.onBallContactWall(i.node,t.node)}},onEndContact:function(e,i,t){if(this.gameCtl)switch(t.tag){case 1:case 2:break;case 3:this.rigidbody.linearVelocity=this._ballDirectionn.mul(400)}},onTouchMove:function(){this._isReady&&(this._isReady=!1,this.rigidbody.linearVelocity=cc.v2(300,300))}}),cc._RF.pop()},{}],BrickLayout:[function(e,i){"use strict";cc._RF.push(i,"62398FSMJtHJ55jmSoqf4WF","BrickLayout");var t=e("./BrickView");cc.Class({extends:cc.Component,properties:{padding:0,spacing:0,cols:0,brickPrefab:cc.Prefab,bricksNumber:50},init:function(e){this.node.removeAllChildren(),this.bricksNumber=e.column*e.row,this.brickMap=e.brickMap,this.cols=e.column;for(var i=0,c=0;c<this.bricksNumber;c++){var o=this.brickMap[i],n=c%this.cols,s=o[n],a=cc.instantiate(this.brickPrefab);a.getComponent(t).setBrickType(s),a.parent=this.node,a.x=this.padding+c%this.cols*(a.width+this.spacing)+a.width/2,a.y=-this.padding-Math.floor(c/this.cols)*(a.height+this.spacing)-a.height/2,n>=e.column-1&&(i+=1)}}}),cc._RF.pop()},{"./BrickView":"BrickView"}],BrickModel:[function(e,i){"use strict";cc._RF.push(i,"9d87e3ZgIhAN5ntEWz/8tei","BrickModel"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],BrickView:[function(e,i){"use strict";cc._RF.push(i,"446b9MwGVhLTYvIS/KH+BcI","BrickView"),cc.Class({extends:cc.Component,properties:{brickNode:cc.Node,brickSprite:cc.Sprite,brickTextures:[cc.SpriteFrame],brickType0Textures:[cc.SpriteFrame],brickType1Textures:[cc.SpriteFrame],brickType2Textures:[cc.SpriteFrame],brickType3Textures:[cc.SpriteFrame],collider:cc.PhysicsBoxCollider,hp:0,score:0},setBrickType:function(e){this._type=e,0===e?(this.brickSprite.spriteFrame=null,this.collider.node.active=!1):(this.brickSprite.spriteFrame=this.brickTextures[e],this.collider.node.active=!0,this.hp=e,this.score=2*e+10)},hitBall:function(){if(this.hp-=1,this.hp>0){var e;switch(this._type){case 0:e=this.brickType0Textures;break;case 1:e=this.brickType1Textures;break;case 2:e=this.brickType2Textures;break;case 3:e=this.brickType3Textures;break;default:e=this.brickType0Textures}var i=this.hp>this._type/2?1:0;this.brickSprite.spriteFrame=e[i],this.animateHitBrick()}else this.animateBreakBrick()},animateBreakBrick:function(){var e=this;this.collider.enabled=!1,cc.tween(this.brickNode).to(.15,{scale:{value:2,easing:"sineIn"}}).to(.15,{opacity:{value:0,easing:"sineIn"}}).call(function(){return e.node.removeFromParent()}).start()},animateHitBrick:function(){cc.tween(this.brickNode).to(.1,{position:{value:cc.v2(this.brickNode.position.x-2,this.brickNode.position.y),easing:"quartInOut"}}).to(.1,{position:{value:cc.v2(this.brickNode.position.x+4,this.brickNode.position.y),easing:"quartInOut"}}).to(.12,{position:{value:cc.v2(this.brickNode.position.x-1,this.brickNode.position.y),easing:"quartInOut"}}).to(.12,{position:{value:cc.v2(this.brickNode.position.x+2,this.brickNode.position.y),easing:"quartInOut"}}).to(.13,{position:{value:cc.v2(this.brickNode.position.x,this.brickNode.position.y),easing:"quartInOut"}}).start()}}),cc._RF.pop()},{}],GameCtl:[function(e,i){"use strict";cc._RF.push(i,"a337308uxxJva7vh8G06q7Z","GameCtl");var t=e("GameModel"),c=e("../model/LevelModel"),o=e("../view/BrickView");cc.Class({extends:cc.Component,properties:{gameView:e("GameView"),ball:e("Ball"),paddle:e("Paddle"),brickLayout:e("BrickLayout"),overPanel:e("OverPanel"),pausePanel:e("PausePanel"),levelConfig:[cc.JsonAsset],loading:cc.Node,isStopGame:!1,brickHitSound:cc.AudioClip,brickBreakSound:cc.AudioClip,winSound:cc.AudioClip,loseSound:cc.AudioClip,clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){e.keyCode===cc.macro.KEY.back&&cc.director.end()}),this.physicsManager=cc.director.getPhysicsManager(),this.physicsManager.enabled=!0,this.gameModel=new t,this._curLevel=~~cc.sys.localStorage.getItem("curlevel")||1,this.loadLevel(this._curLevel)},init:function(e){this.prepareAds(),this.physicsManager.enabled=!0,this.gameModel.init(e.brickCount),this.gameView.init(this),this.ball.init(this),this.paddle.init(this),this.brickLayout.init(e),this.overPanel.init(this)},startGame:function(e){this.loading.active=!1,cc.audioEngine.playMusic(this.bgmAudioClip,!0),this.init(e),this.isStopGame=!1},loadLevel:function(e){var i=new c(this.levelConfig[e-1].json);this.startGame(i)},loadCurrentLevel:function(){this.loading.active=!0,this.showAds(function(){cc.director.loadScene("game")})},moveNextLevel:function(){var e=this,i=this;this.showAds(function(){var t=i._curLevel+1;e.levelConfig[t-1]?(cc.sys.localStorage.setItem("curlevel",t),cc.director.loadScene("game")):(e.loading.active=!0,cc.director.loadScene("selectLevel"))})},onResumeGame:function(){cc.director.resume(),cc.audioEngine.resumeMusic(),this.physicsManager.enabled=!0,this.isStopGame=!1,this.playSound(this.clickSound)},stopGame:function(e){cc.audioEngine.stopMusic(),this.isStopGame=!0,this.physicsManager.enabled=!1;var i=this.saveHighestScore(this._curLevel,this.gameModel.score);e?(this.playSound(this.winSound),cc.sys.localStorage.setItem("playerLevel",this._curLevel),this.overPanel.show(this.gameModel.score,i,e)):(this.playSound(this.loseSound),this.overPanel.show(this.gameModel.score,i,e))},saveHighestScore:function(e,i){var t=cc.sys.localStorage.getItem("highestLevel"+e)||0;return i>t&&cc.sys.localStorage.setItem("highestLevel"+e,i),i>t?i:t},onBallContactBrick:function(e,i){var t=i.getComponent(o);t.hitBall(),0===t.hp?(this.playSound(this.brickBreakSound),this.gameModel.addScore(t.score),this.gameModel.minusBrick(1),this.gameView.updateScore(this.gameModel.score),this.gameModel.bricksNumber<=0&&(this.playSound(this.winSound),this.stopGame(!0))):this.playSound(this.brickHitSound)},onBallContactGround:function(){this.stopGame(),this.playSound(this.brickHitSound)},onBallContactPaddle:function(){this.playSound(this.brickHitSound)},onBallContactWall:function(){this.playSound(this.brickHitSound)},onDestroy:function(){this.physicsManager.enabled=!1},onPause:function(){this.physicsManager.enabled=!1,this.isStopGame=!0,cc.audioEngine.pauseMusic(),cc.director.pause(),this.playSound(this.clickSound),this.pausePanel.show()},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)},prepareAds:function(){window.isAdPrepared||(window.adBreak({type:"next",name:"menu_view"}),window.isAdPrepared=!0)},showAds:function(e){var i=this;void 0===this._adsCallNumber&&(this._adsCallNumber=0),this._adsCallNumber<0&&(this._adsCallNumber++,e&&e()),this._adsCallNumber=0;var t=function(){document.getElementById("GameCanvas").focus(),e&&e()};this.unscheduleAllCallbacks(),this.scheduleOnce(t,.5);try{window.adBreak({type:"next",name:"game_restart",beforeBreak:function(){i.unscheduleAllCallbacks()}.bind(this),afterBreak:function(){window.isAdPrepared=!1,t()}.bind(this)})}catch(c){cc.error(c),t()}}}),cc._RF.pop()},{"../model/LevelModel":"LevelModel","../view/BrickView":"BrickView",Ball:"Ball",BrickLayout:"BrickLayout",GameModel:"GameModel",GameView:"GameView",OverPanel:"OverPanel",Paddle:"Paddle",PausePanel:"PausePanel"}],GameModel:[function(e,i){"use strict";cc._RF.push(i,"dceaaRUaJhHJ6dPqgG9vpjt","GameModel"),cc.Class({extends:cc.Component,properties:{score:0,bricksNumber:0},init:function(e){this.score=0,this.bricksNumber=e},addScore:function(e){this.score+=e},minusBrick:function(e){this.bricksNumber-=e}}),cc._RF.pop()},{}],GameView:[function(e,i){"use strict";cc._RF.push(i,"e4735UW3lFPMoW0rK22obsG","GameView"),cc.Class({extends:cc.Component,properties:{scoreLabel:cc.Label,levelabel:cc.Label},init:function(e){this.gameCtl=e,this.scoreLabel.string="0";var i=cc.sys.localStorage.getItem("curlevel");this.levelabel.string=i},updateScore:function(e){this.scoreLabel.string=e}}),cc._RF.pop()},{}],LandingScene:[function(e,i){"use strict";cc._RF.push(i,"b85cfPHei5Aio/A9v0oIyPq","LandingScene"),cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip,loading:cc.Node},onLoad:function(){if(window.adsbygoogle)this.initializeAd();else{var e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.setAttribute("data-ad-client","pub-3901483273906883"),e.setAttribute("data-adbreak-test","on"),e.async=!0,e.onload=e.onreadystatechange=this.initializeAd.bind(this),document.head.appendChild(e)}},start:function(){cc.audioEngine.playMusic(this.bgmAudioClip,!0)},onPlayButtonClicked:function(){this.loading.active=!0,cc.director.loadScene("selectLevel"),this.playSound(this.clickSound),cc.audioEngine.stopMusic()},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)},initializeAd:function(){this.isAdInitialized||(this.isAdInitialized=!0,window.adBreak=window.adConfig=function(e){window.adsbygoogle.push(e)})}}),cc._RF.pop()},{}],LevelItem:[function(e,i){"use strict";cc._RF.push(i,"d63b4wIyX1FlbY7igExk7D2","LevelItem"),cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,onLayer:cc.Node,offLayer:cc.Node,level:0,loading:cc.Node,button:cc.Button,levelItem:cc.Node},start:function(){cc.sys.localStorage.getItem("playerLevel"),this.onLayer.active=!0,this.offLayer.active=!1,this.levelItem.opacity=255,this.button.interactable=!0},onSelectLevel:function(e,i){var t=this;this.loading.active=!0,cc.sys.localStorage.setItem("curlevel",i),cc.director.loadScene("game"),this.playSound(this.clickSound),cc.tween(this.bgmAudioSource).to(1,{volume:{value:0,easing:"sineIn"}}).call(function(){return t.bgmAudioSource.stop()}).start()},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)}}),cc._RF.pop()},{}],LevelModel:[function(e,i,t){"use strict";cc._RF.push(i,"f5bf7ZYQy9FtL2z6N3fxQuH","LevelModel"),t.__esModule=!0,t.default=void 0;var c=function(){function e(e){this.brickCount=this.getTotalBricks(e),this.column=Object.keys(e[0]).length,this.row=Object.keys(e).length,this.brickMap=e}return e.prototype.getTotalBricks=function(e){var i=0;for(var t in e)for(var c in e[t])0!==e[t][c]&&(i+=1);return i},e}();t.default=c,i.exports=t.default,cc._RF.pop()},{}],OverPanel:[function(e,i){"use strict";cc._RF.push(i,"60425zRIQ5LNIZ6KmZ5p/LN","OverPanel"),cc.Class({extends:cc.Component,properties:{replayBtn:cc.Node,nextBtn:cc.Node,scoreLabel:cc.Label,highestScoreLabel:cc.Label,titleLabel:cc.Label,clickSound:cc.AudioClip},onLoad:function(){},init:function(e){this.gameCtl=e,this.node.active=!1},show:function(e,i,t){this.node.active=!0,this.titleLabel.active=t?"\u30b9\u30c6\u30fc\u30b8\u30af\u30ea\u30a2":"\u30b2\u30fc\u30e0\u30aa\u30fc\u30d0\u30fc",this.nextBtn.active=t,this.replayBtn.active=!t,this.scoreLabel.string=e,this.highestScoreLabel.string=i},onRestart:function(){this.gameCtl.loadCurrentLevel(),this.playSound(this.clickSound)},onNextLevel:function(){this.gameCtl.moveNextLevel(),this.playSound(this.clickSound)},onChangeStage:function(){cc.director.loadScene("selectLevel"),this.playSound(this.clickSound)},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)}}),cc._RF.pop()},{}],Paddle:[function(e,i){"use strict";cc._RF.push(i,"4dc82c1qO9KbZBsMZGbHlMV","Paddle"),cc.Class({extends:cc.Component,properties:{speed:500},onLoad:function(){this._minX=this.node.width/2,this._maxX=450-this.node.width/2,this.node.parent.on("touchmove",this.onTouchMove,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},update:function(e){if(!this._gameCtrl||!this._gameCtrl.isStopGame){var i=this.node.x;this._isMoveLeft?i=Math.max(this._minX,Math.min(this._maxX,i-this.speed*e)):this._isMoveRight&&(i=Math.max(this._minX,Math.min(this._maxX,i+this.speed*e))),this.node.x=i}},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.left:case cc.macro.KEY.a:this._isMoveLeft=!0;break;case cc.macro.KEY.right:case cc.macro.KEY.d:this._isMoveRight=!0}},onKeyUp:function(e){switch(e.keyCode){case cc.macro.KEY.left:case cc.macro.KEY.a:this._isMoveLeft=!1;break;case cc.macro.KEY.right:case cc.macro.KEY.d:this._isMoveRight=!1}},onTouchMove:function(e){if(!this._gameCtrl.isStopGame){var i=this.node.parent.convertToNodeSpaceAR(e.getLocation());this.node.x=Math.max(this._minX,Math.min(this._maxX,i.x))}},init:function(e){this.node.x=221,this._gameCtrl=e}}),cc._RF.pop()},{}],PausePanel:[function(e,i){"use strict";cc._RF.push(i,"b8352WVqZtHF6g5r3IjErdI","PausePanel"),cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip},show:function(){this.node.active=!0},onReplay:function(){cc.director.resume(),cc.director.loadScene("game"),this.playSound(this.clickSound)},onChangeStage:function(){cc.director.resume(),cc.director.loadScene("selectLevel"),this.playSound(this.clickSound)},onResume:function(){this.node.active=!1},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)}}),cc._RF.pop()},{}],SelectLevelScene:[function(e,i){"use strict";cc._RF.push(i,"31aafb/KpBMD5r8BNEBebec","SelectLevelScene"),e("../view/BrickView"),cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip,levelConfig:[cc.JsonAsset],loading:cc.Node},onLoad:function(){cc.audioEngine.playMusic(this.bgmAudioClip,!0)},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)}}),cc._RF.pop()},{"../view/BrickView":"BrickView"}],SoundButton:[function(e,i){"use strict";cc._RF.push(i,"693b7oTvNhKEL4LhZ6JE9Ie","SoundButton"),cc.Class({extends:cc.Component,properties:{buttonSprite:cc.Sprite,buttonTextures:[cc.SpriteFrame],clickSound:cc.AudioClip},onLoad:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;this.buttonSprite.spriteFrame=this.buttonTextures[e],this.setSoundConfig(e)},onSoundButtonClicked:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(this.clickSound,!1,e);var i=1==e?0:1;cc.sys.localStorage.setItem("soundConfig",i),this.buttonSprite.spriteFrame=this.buttonTextures[i],this.setSoundConfig(i)},setSoundConfig:function(e){1==e?cc.audioEngine.setMusicVolume(1):cc.audioEngine.setMusicVolume(0)}}),cc._RF.pop()},{}],TutorialButton:[function(e,i){"use strict";cc._RF.push(i,"02e0fTuk3RCybE2KHyqK0XM","TutorialButton"),cc.Class({extends:cc.Component,properties:{tutorialLayer:cc.Node,isShow:!1,clickSound:cc.AudioClip},onTutorialClicked:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(this.clickSound,!1,e),this.tutorialLayer.active=!this.isShow,this.isShow=!this.isShow,this.playSound(this.clickSound)},playSound:function(e){var i=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,i)}}),cc._RF.pop()},{}]},{},["GameCtl","BrickModel","GameModel","LevelModel","Ball","BrickLayout","BrickView","GameView","LandingScene","LevelItem","OverPanel","Paddle","PausePanel","SelectLevelScene","SoundButton","TutorialButton"]);