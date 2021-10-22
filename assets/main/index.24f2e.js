window.__require=function e(t,i,n){function o(c,s){if(!i[c]){if(!t[c]){var r=c.split("/");if(r=r[r.length-1],!t[r]){var l="function"==typeof __require&&__require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+c+"'")}c=r}var u=i[c]={exports:{}};t[c][0].call(u.exports,function(e){return o(t[c][1][e]||e)},u,u.exports,e,t,i,n)}return i[c].exports}for(var a="function"==typeof __require&&__require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(e,t){var i="en",n="ja",o={jp:{play:"\u30b9\u30bf\u30fc\u30c8"},en:{play:"Play Now!"}},a=500;function c(){this._isInitialised=!1,this._splashAdShown=!1}function s(e){for(var t in e=e||{})void 0===e[t]&&delete e[t];return e}function r(e,t){console.error(e),(t=t||{}).noBreak?t.noBreak():(t.beforeBreak&&t.beforeBreak(),t.afterBreak&&t.afterBreak())}function l(){if(!navigator.language)return n;let e=navigator.language.toLowerCase().substr(0,2);return o[e]?e:i}c.prototype.initialize=function(e){if(this._isInitialised)console.warn("h5ad: already initialized");else{if(this._isInitialised=!0,e&&void 0!==e.adBreakTimeout&&(a=e.adBreakTimeout),!window.adsbygoogle){var t=document.createElement("script");t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.setAttribute("data-ad-client","ca-pub-123456789"),t.setAttribute("data-adbreak-test","on"),t.async=!0,document.head.appendChild(t),window.adsbygoogle=window.adsbygoogle||[],adBreak=window.adBreak=function(e){console.log("adBreak:",e),window.adsbygoogle.push(e)},adConfig=window.adConfig=function(e){console.log("adConfig:",e),window.adsbygoogle.push(e)}}adConfig({sound:"on"})}},c.prototype.onStart=function(e){if(e=e||{},this._isInitialised||this.initialize({adBreakTimeout:e.adBreakTimeout}),this._splashAdShown)console.warn("h5ad: onStart has already been called");else{this._splashAdShown=!0;var t="";t+=".splahContainer {",t+="    background-color: black;",t+="    position: absolute;",t+="    width: 100%;",t+="    height: 100%;",t+="    text-align: left;",t+="}",t+=".splahContainer .gameIcon {",t+="    position: relative;",t+="    width: 100px;",t+="    height: 100px;",t+="    background-size: 100%;",t+="    transform: translate(-50%, -50%);",t+="    left: 50%;",t+="    top: 15%;",t+="    border-radius: 10px;",t+="    border: 2px white solid;",t+="    border-radius: min(2vh,2vw);",t+="    border: min(0.7vw, 0.7vh) white solid;",t+="    width: min(30vw, 20vh);",t+="    height: min(30vw, 20vh);",t+="}",t+=".splahContainer .startButton {",t+="    background-color: rgb(255, 193, 7);",t+="    display: inline-block;",t+="    padding: 20px 30px;",t+="    border-radius: 13px;",t+="    transform: translate(-50%, -50%);",t+="    left: 50%;",t+="    top: 55%;",t+="    border: 5px solid white;",t+="    position: relative;",t+="    cursor: pointer;",t+="    font-size: 26px;",t+="    font-family: arial, verdana;",t+="    color: white;",t+="    text-align: center;",t+="    transition: all 0.1s;",t+="    width: min(24vw,27vh);",t+="    padding: min(3vw,3vh);",t+="    font-size: 4vh;",t+="    border-radius: min(2vh,2vw);",t+="    border: min(1vw, 1vh) white solid;",t+="}",t+=".splahContainer .startButton:hover {",t+="    transform: translate(-50%, -50%) scale(1.1);",t+="    background-color: rgb(255 217 104);",t+="}";var i=document.createElement("style");i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(i);var n=document.createElement("div");e.color&&(n.style.backgroundColor=e.color),n.className="splahContainer";var c=document.createElement("div");c.textContent=o[l()].play,c.className="startButton",n.appendChild(c);var u=document.createElement("div");u.className="gameIcon",e.icon&&(u.style.backgroundImage="url("+e.icon+")"),n.appendChild(u),document.body.appendChild(n),c.onclick=function(){afterBreakCallbackCalled=!1;let t=setTimeout(function(){afterBreakCallbackCalled||(afterBreakCallbackCalled=!0,e.afterBreak&&e.afterBreak())},a);try{adBreak(s({type:"start",name:e.name||"splash_screen",beforeBreak:function(){clearTimeout(t)},afterBreak:function(){afterBreakCallbackCalled||(afterBreakCallbackCalled=!0,e.afterBreak&&e.afterBreak())}}))}catch(i){r(i,e)}setTimeout(function(){document.body.removeChild(n)},200)}}},c.prototype.onNext=function(e){(e=e||{}).type="next",this.adBreak(e)},c.prototype.onBrowse=function(e){(e=e||{}).type="browse",this.adBreak(e)},c.prototype.onPause=function(e){(e=e||{}).type="pause",this.adBreak(e)},c.prototype.adBreak=function(e){if("next"!==(e=e||{}).type&&"browse"!==e.type&&"pause"!==e.type)return console.error("H5ad: unknown type",e.type);let t=setTimeout(function(){e.noBreak&&e.noBreak()},a);try{adBreak(s({type:e.type,name:e.name||e.type,beforeBreak:function(){clearTimeout(t),e.beforeBreak&&e.beforeBreak()},afterBreak:function(){e.afterBreak&&e.afterBreak()}}))}catch(i){r(i,e)}},c.prototype.onMute=function(){adConfig({sound:"off"})},c.prototype.onUnmute=function(){adConfig({sound:"on"})},t.exports=new c},{}],Ball:[function(e,t){"use strict";cc._RF.push(t,"9b280YbFuZJv4QPGPL8e8iv","Ball"),cc.Class({extends:cc.Component,properties:{rigidbody:cc.RigidBody},init:function(e){this.gameCtl=e,this._isReady=!0,this.node.x=0,this.node.y=this.gameCtl.paddle.node.y+25,this.rigidbody.linearVelocity=cc.v2(0,0)},onLoad:function(){this.node.parent.on("touchmove",this.onTouchMove,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.back:cc.director.end();break;default:this._isReady&&(this._isReady=!1,this.rigidbody.linearVelocity=cc.v2(0,1).mul(400))}},onBeginContact:function(e,t,i){if(this.gameCtl)switch(i.tag){case 1:this.gameCtl.onBallContactBrick(t.node,i.node);break;case 2:this.gameCtl.onBallContactGround(t.node,i.node);break;case 3:var n=this.node.parent.convertToWorldSpaceAR(i.node.position),o=e.getWorldManifold().points[0];n.y-=40,this._ballDirectionn=o.sub(n).normalize(),this.gameCtl.onBallContactPaddle(t.node,i.node);break;case 4:this.gameCtl.onBallContactWall(t.node,i.node)}},onEndContact:function(e,t,i){if(this.gameCtl)switch(i.tag){case 3:this.rigidbody.linearVelocity=this._ballDirectionn.mul(400);break;case 4:var n=this.rigidbody.linearVelocity.normalize();if(Math.abs(n.y)<.15){var o=cc.v2(this.rigidbody.linearVelocity.x,100*(n.y>=0?1:-1));this.rigidbody.linearVelocity=o}}},onTouchMove:function(){this._isReady&&(this._isReady=!1,this.rigidbody.linearVelocity=cc.v2(0,1).mul(400))}}),cc._RF.pop()},{}],BrickLayout:[function(e,t){"use strict";cc._RF.push(t,"62398FSMJtHJ55jmSoqf4WF","BrickLayout");var i=e("./BrickView");cc.Class({extends:cc.Component,properties:{padding:0,spacing:0,cols:0,brickPrefab:cc.Prefab,bricksNumber:50},init:function(e){this.node.removeAllChildren(),this.bricksNumber=e.column*e.row,this.brickMap=e.brickMap,this.cols=e.column;for(var t=0,n=0;n<this.bricksNumber;n++){var o=this.brickMap[t],a=n%this.cols,c=o[a],s=cc.instantiate(this.brickPrefab);s.getComponent(i).setBrickType(c),s.parent=this.node,s.x=this.padding+n%this.cols*(s.width+this.spacing)+s.width/2,s.y=-this.padding-Math.floor(n/this.cols)*(s.height+this.spacing)-s.height/2,a>=e.column-1&&(t+=1)}}}),cc._RF.pop()},{"./BrickView":"BrickView"}],BrickModel:[function(e,t){"use strict";cc._RF.push(t,"9d87e3ZgIhAN5ntEWz/8tei","BrickModel"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],BrickView:[function(e,t){"use strict";cc._RF.push(t,"446b9MwGVhLTYvIS/KH+BcI","BrickView"),cc.Class({extends:cc.Component,properties:{brickNode:cc.Node,brickSprite:cc.Sprite,brickTextures:[cc.SpriteFrame],brickType0Textures:[cc.SpriteFrame],brickType1Textures:[cc.SpriteFrame],brickType2Textures:[cc.SpriteFrame],brickType3Textures:[cc.SpriteFrame],collider:cc.PhysicsBoxCollider,hp:0,score:0},setBrickType:function(e){this._type=e,0===e?(this.brickSprite.spriteFrame=null,this.collider.node.active=!1):(this.brickSprite.spriteFrame=this.brickTextures[e],this.collider.node.active=!0,this.hp=e,this.score=2*e+10)},hitBall:function(){if(this.hp-=1,this.hp>0){var e;switch(this._type){case 0:e=this.brickType0Textures;break;case 1:e=this.brickType1Textures;break;case 2:e=this.brickType2Textures;break;case 3:e=this.brickType3Textures;break;default:e=this.brickType0Textures}var t=this.hp>this._type/2?1:0;this.brickSprite.spriteFrame=e[t],this.animateHitBrick()}else this.animateBreakBrick()},animateBreakBrick:function(){var e=this;this.collider.enabled=!1,cc.tween(this.brickNode).to(.15,{opacity:{value:0,easing:"sineIn"}}).start(),cc.tween(this.brickNode).to(.15,{scale:{value:2,easing:"sineIn"}}).call(function(){return e.node.removeFromParent()}).start()},animateHitBrick:function(){cc.tween(this.brickNode).to(.1,{position:{value:cc.v2(this.brickNode.position.x-2,this.brickNode.position.y),easing:"quartInOut"}}).to(.1,{position:{value:cc.v2(this.brickNode.position.x+4,this.brickNode.position.y),easing:"quartInOut"}}).to(.12,{position:{value:cc.v2(this.brickNode.position.x-1,this.brickNode.position.y),easing:"quartInOut"}}).to(.12,{position:{value:cc.v2(this.brickNode.position.x+2,this.brickNode.position.y),easing:"quartInOut"}}).to(.13,{position:{value:cc.v2(this.brickNode.position.x,this.brickNode.position.y),easing:"quartInOut"}}).start()}}),cc._RF.pop()},{}],ComboBoxItem:[function(e,t){"use strict";cc._RF.push(t,"e3eb2OoYnVNLpiehtkwiOa4","ComboBoxItem"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},_parentCtrl:null,_data:null},setData:function(e,t){this._parentCtrl=e,this._data=t,this.label.string=LocalizationHelper.getText("label_text."+t.languageName)},onClickItemBtn:function(){this._parentCtrl.onClickItemBtn(),this._data.languageCode!=LocalizationHelper.language&&(LocalizationHelper.setLanguage(this._data.languageCode),this._parentCtrl.comboLabel.string=LocalizationHelper.getText("label_text."+this._data.languageName))}}),cc._RF.pop()},{}],ComboBox:[function(e,t){"use strict";cc._RF.push(t,"654288QCkNOzqcBu3xCbhmH","ComboBox");var i=["English","Japanese"],n=["en","ja"];cc.Class({extends:cc.Component,properties:{triangle:cc.Node,comboLabel:cc.Label,dropDown:cc.Node,vLayoutNode:cc.Node,contentNode:cc.Node,itemPrefab:cc.Prefab},onLoad:function(){this.isDropDown=!1},start:function(){this.comboLabel.string="en"==LocalizationHelper.language?LocalizationHelper.getText("label_text.English"):LocalizationHelper.getText("label_text.Japanese")},onClickItemBtn:function(e){this.rotateTriangle(),this.showHideDropDownBox(),this.isDropDown?this.isDropDown=!1:this.isDropDown=!0,e&&this.initItems()},rotateTriangle:function(){if(this.isDropDown){var e=cc.rotateTo(.5,-90).easing(cc.easeCubicActionOut());this.triangle.runAction(e)}else{var t=cc.rotateTo(.5,0).easing(cc.easeCubicActionOut());this.triangle.runAction(t)}},showHideDropDownBox:function(){this.isDropDown?this.dropDown.active=!1:this.dropDown.active=!0},initItems:function(){this.vLayoutNode.removeAllChildren();for(var e=0;e<i.length;e++){var t=cc.instantiate(this.itemPrefab);t.getComponent("ComboBoxItem").setData(this,{languageName:i[e],languageCode:n[e]}),this.vLayoutNode.addChild(t)}}}),cc._RF.pop()},{}],GameCtl:[function(e,t){"use strict";cc._RF.push(t,"a337308uxxJva7vh8G06q7Z","GameCtl");var i=e("GameModel"),n=e("../model/LevelModel"),o=e("../view/BrickView"),a=e("utils");cc.Class({extends:cc.Component,properties:{gameView:e("GameView"),ball:e("Ball"),paddle:e("Paddle"),brickLayout:e("BrickLayout"),overPanel:e("OverPanel"),pausePanel:e("PausePanel"),levelConfig:[cc.JsonAsset],loading:cc.Node,isStopGame:!1,brickHitSound:cc.AudioClip,brickBreakSound:cc.AudioClip,winSound:cc.AudioClip,loseSound:cc.AudioClip,clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip},onLoad:function(){a.fit(this.node.getComponent(cc.Canvas)),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){e.keyCode===cc.macro.KEY.back&&cc.director.end()}),this.physicsManager=cc.director.getPhysicsManager(),this.physicsManager.enabled=!0,this.gameModel=new i,this._curLevel=~~cc.sys.localStorage.getItem("curlevel")||1,this.loadLevel(this._curLevel)},init:function(e,t){void 0===t&&(t=!0),this.physicsManager.enabled=!0,t&&this.gameModel.init(e.brickCount),t&&this.gameView.init(this),this.paddle.init(this),this.ball.init(this),t&&this.brickLayout.init(e),this.overPanel.init(this)},startGame:function(e,t){this.loading.active=!1,cc.audioEngine.playMusic(this.bgmAudioClip,!0),this.init(e,t),this.isStopGame=!1},loadLevel:function(e,t){var i=new n(this.levelConfig[e-1].json);this.startGame(i,t)},loadCurrentLevel:function(e){this.loadLevel(this._curLevel,e)},moveNextLevel:function(){var e=this;this.loading.active=!0,a.showAds("next",!0,function(t){e.loading.active=!1;var i=new Object;if(i.adType="Interstitial",i.gameName=a.getAppName(),i.gameFeature="interstitialAD_next",i.weblinkSource=a.getWeblinkSource(),t?a.gtaPushEvent("AdShowSuccess",i):a.gtaPushEvent("AdShowFail",i),t){var n=e._curLevel+1;e.levelConfig[n-1]?(cc.sys.localStorage.setItem("curlevel",n),cc.director.loadScene("game")):(e.loading.active=!0,cc.director.loadScene("selectLevel"))}})},onResumeGame:function(){cc.director.resume(),cc.audioEngine.resumeMusic(),this.physicsManager.enabled=!0,this.isStopGame=!1,this.playSound(this.clickSound)},stopGame:function(e){cc.audioEngine.stopMusic(),this.isStopGame=!0,this.physicsManager.enabled=!1,this.saveHighestScore(this._curLevel,this.gameModel.score),e?(this.playSound(this.winSound),(cc.sys.localStorage.getItem("playerLevel")||0)<this._curLevel&&cc.sys.localStorage.setItem("playerLevel",this._curLevel),this.overPanel.show(this.gameModel.score,e)):(this.playSound(this.loseSound),this.overPanel.show(this.gameModel.score,e))},saveHighestScore:function(e,t){var i=JSON.parse(cc.sys.localStorage.getItem("scoreData")||"[]");t<=(i[e-1]||0)||(i[e-1]=t,cc.sys.localStorage.setItem("scoreData",JSON.stringify(i)))},onBallContactBrick:function(e,t){var i=t.getComponent(o);i.hitBall(),0===i.hp?(this.playSound(this.brickBreakSound),this.gameModel.addScore(i.score),this.gameModel.minusBrick(1),this.saveHighestScore(this._curLevel,this.gameModel.score),this.gameView.updateScore(this.gameModel.score),this.gameModel.bricksNumber<=0&&(this.playSound(this.winSound),this.stopGame(!0))):this.playSound(this.brickHitSound)},onBallContactGround:function(){this.stopGame(),this.playSound(this.brickHitSound)},onBallContactPaddle:function(){this.playSound(this.brickHitSound)},onBallContactWall:function(){this.playSound(this.brickHitSound)},onDestroy:function(){this.physicsManager.enabled=!1},onPause:function(){cc.audioEngine.pauseMusic(),cc.director.pause(),this.physicsManager.enabled=!1,this.isStopGame=!0,this.playSound(this.clickSound);var e=this;a.showAds("pause",!1,function(t){var i=new Object;i.adType="Interstitial",i.gameName=a.getAppName(),i.gameFeature="interstitialAD_pause",i.weblinkSource=a.getWeblinkSource(),t?a.gtaPushEvent("AdShowSuccess",i):a.gtaPushEvent("AdShowFail",i),t&&e.pausePanel.show()})},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}}),cc._RF.pop()},{"../model/LevelModel":"LevelModel","../view/BrickView":"BrickView",Ball:"Ball",BrickLayout:"BrickLayout",GameModel:"GameModel",GameView:"GameView",OverPanel:"OverPanel",Paddle:"Paddle",PausePanel:"PausePanel",utils:"utils"}],GameModel:[function(e,t){"use strict";cc._RF.push(t,"dceaaRUaJhHJ6dPqgG9vpjt","GameModel"),cc.Class({extends:cc.Component,properties:{score:0,bricksNumber:0},init:function(e){this.score=0,this.bricksNumber=e},addScore:function(e){this.score+=e},minusBrick:function(e){this.bricksNumber-=e}}),cc._RF.pop()},{}],GameView:[function(e,t){"use strict";cc._RF.push(t,"e4735UW3lFPMoW0rK22obsG","GameView"),e("utils"),cc.Class({extends:cc.Component,properties:{highestScoreLabel:cc.Label,scoreLabel:cc.Label,levelabel:cc.Label},init:function(e){this.gameCtl=e,this.updateScore(0),this.levelabel.string=LocalizationHelper.getText("label_text.level")+" "+cc.sys.localStorage.getItem("curlevel")},updateScore:function(e){this.scoreLabel.string=e;var t=JSON.parse(cc.sys.localStorage.getItem("scoreData")||"[]");this.highestScoreLabel.string=t[this.gameCtl._curLevel-1]||0}}),cc._RF.pop()},{utils:"utils"}],LandingScene:[function(e,t){"use strict";cc._RF.push(t,"b85cfPHei5Aio/A9v0oIyPq","LandingScene");var i=e("h5ad"),n=e("../controller/utils");cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip,loading:cc.Node},onLoad:function(){LocalizationHelper.init(),n.fit(this.node.getComponent(cc.Canvas)),n.gtaInit("321085","0033cb7f59e3cd9a32e9a1abd8807afa");var e={weblinkSource:n.getWeblinkSource(),gameName:n.getAppName(),version:"1.0.0"};n.gtaSetUserProperties(e),n.gtaPushEvent("gameSession",e),cc.audioEngine.setMusicVolume(.6),cc.sys.localStorage.setItem("isFirstTime",1),i.onStart({icon:n.getResourceUrl("icon"),color:"rgb(3 76 133)",afterBreak:this.afterSplash.bind(this),adBreakTimeout:3e3})},afterSplash:function(){cc.audioEngine.playMusic(this.bgmAudioClip,!0)},start:function(){},onPlayButtonClicked:function(){this.loading.active=!0,cc.director.loadScene("selectLevel"),this.playSound(this.clickSound),cc.audioEngine.stopMusic()},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}}),cc._RF.pop()},{"../controller/utils":"utils",h5ad:1}],LanguageData:[function(e,t){"use strict";cc._RF.push(t,"31e138UXBhB5qwuxOaE7JZ1","LanguageData");var i=e("polyglot.min"),n=null;function o(e){return window.i18n.languages[e]}function a(e){e&&(n?n.replace(e):n=new i({phrases:e,allowMissing:!0}))}window.i18n||(window.i18n={languages:{},curLang:""}),t.exports={init:function(e){if(e!==window.i18n.curLang){var t=o(e)||{};window.i18n.curLang=e,a(t),this.inst=n}},t:function(e,t){if(n)return n.t(e,t)},inst:n,updateSceneRenderers:function(){for(var e=cc.director.getScene().children,t=[],i=0;i<e.length;++i){var n=e[i].getComponentsInChildren("LocalizedLabel");Array.prototype.push.apply(t,n)}for(var o=0;o<t.length;++o){var a=t[o];a.node.active&&a.updateLabel()}for(var c=[],s=0;s<e.length;++s){var r=e[s].getComponentsInChildren("LocalizedSprite");Array.prototype.push.apply(c,r)}for(var l=0;l<c.length;++l){var u=c[l];u.node.active&&u.updateSprite(window.i18n.curLang)}}},cc._RF.pop()},{"polyglot.min":"polyglot.min"}],LevelItem:[function(e,t){"use strict";cc._RF.push(t,"d63b4wIyX1FlbY7igExk7D2","LevelItem");var i=e("../controller/utils"),n=cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,onLayer:cc.Node,offLayer:cc.Node,button:cc.Button,levelItem:cc.Node,levelLabel:cc.Label},statics:{isFirst:!0},setLevel:function(e,t){this._handler=t,this._level=e,this.levelLabel.string=e;var i=cc.sys.localStorage.getItem("playerLevel")||0,n=i>=this._level;this.onLayer.active=n,this.offLayer.active=!n;var o=this._level>=2+~~i;this.levelItem.opacity=o?100:255,this.button.interactable=!o},onSelectLevel:function(){var e=this,t=function(){e._handler&&e._handler(),cc.sys.localStorage.setItem("curlevel",e._level),cc.director.loadScene("game"),e.playSound(e.clickSound),cc.tween(e.bgmAudioSource).to(1,{volume:{value:0,easing:"sineIn"}}).call(function(){return e.bgmAudioSource.stop()}).start()};n.isFirst?(n.isFirst=!1,t()):i.showAds("next",!0,function(e){var n=new Object;n.adType="Interstitial",n.gameName=i.getAppName(),n.gameFeature="interstitialAD_next",n.weblinkSource=i.getWeblinkSource(),e?i.gtaPushEvent("AdShowSuccess",n):i.gtaPushEvent("AdShowFail",n),e&&t()})},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}});t.exports=n,cc._RF.pop()},{"../controller/utils":"utils"}],LevelModel:[function(e,t,i){"use strict";cc._RF.push(t,"f5bf7ZYQy9FtL2z6N3fxQuH","LevelModel"),i.__esModule=!0,i.default=void 0;var n=function(){function e(e){this.brickCount=this.getTotalBricks(e),this.column=Object.keys(e[0]).length,this.row=Object.keys(e).length,this.brickMap=e}return e.prototype.getTotalBricks=function(e){var t=0;for(var i in e)for(var n in e[i])0!==e[i][n]&&(t+=1);return t},e}();i.default=n,t.exports=i.default,cc._RF.pop()},{}],LocalizationHelper:[function(e,t){"use strict";cc._RF.push(t,"fe46fQs9fJFnZhJJkECJfLR","LocalizationHelper");var i=function(){function t(){this.languageData=null}var i=t.prototype;return i.init=function(){this.language=cc.sys.localStorage.getItem("breaknought_lang"),this.language||(this.language=this._getBrowserLanguage()),cc.sys.localStorage.setItem("breaknought_lang",this.language),this.languageData=e("LanguageData"),this.languageData.init(this.language)},i.getText=function(e){return this.languageData.t(e)},i.setLanguage=function(e){this.language=e,cc.sys.localStorage.setItem("breaknought_lang",this.language),this.languageData.init(this.language),this.languageData.updateSceneRenderers()},i._getBrowserLanguage=function(){var e,t,i=window.navigator,n=["language","browserLanguage","systemLanguage","userLanguage"];if(Array.isArray(i.languages))for(e=0;e<i.languages.length;e++)if((t=i.languages[e])&&t.length)return t.slice(0,2);for(e=0;e<n.length;e++)if((t=i[n[e]])&&t.length)return t.slice(0,2);return null},t}();t.exports=new i,window.LocalizationHelper=e("LocalizationHelper"),cc._RF.pop()},{LanguageData:"LanguageData",LocalizationHelper:"LocalizationHelper"}],LocalizedLabel:[function(e,t){"use strict";cc._RF.push(t,"85fa0KsWHVCBofvyuY2la/x","LocalizedLabel");var i=e("LanguageData");cc.Class({extends:cc.Component,editor:{executeInEditMode:!0,menu:"i18n/LocalizedLabel"},properties:{dataID:{get:function(){return this._dataID},set:function(e){this._dataID!==e&&(this._dataID=e,this.updateLabel())}},_dataID:""},onLoad:function(){i.inst||i.init(),this.fetchRender()},fetchRender:function(){var e=this.getComponent(cc.Label);if(e)return this.label=e,void this.updateLabel()},updateLabel:function(){this.label?i.t(this.dataID)&&(this.label.string=i.t(this.dataID)):cc.error("Failed to update localized label, label component is invalid!")}}),cc._RF.pop()},{LanguageData:"LanguageData"}],LocalizedSprite:[function(e,t){"use strict";cc._RF.push(t,"ec55bdFcLtEn5n7fz3twVni","LocalizedSprite");var i=e("SpriteFrameSet");cc.Class({extends:cc.Component,editor:{executeInEditMode:!0,inspector:"packages://i18n/inspector/localized-sprite.js",menu:"i18n/LocalizedSprite"},properties:{spriteFrameSet:{default:[],type:i}},onLoad:function(){this.fetchRender()},fetchRender:function(){var e=this.getComponent(cc.Sprite);if(e)return this.sprite=e,void this.updateSprite(window.i18n.curLang)},getSpriteFrameByLang:function(e){for(var t=0;t<this.spriteFrameSet.length;++t)if(this.spriteFrameSet[t].language===e)return this.spriteFrameSet[t].spriteFrame},updateSprite:function(e){if(this.sprite){var t=this.getSpriteFrameByLang(e);!t&&this.spriteFrameSet[0]&&(t=this.spriteFrameSet[0].spriteFrame),this.sprite.spriteFrame=t}else cc.error("Failed to update localized sprite, sprite component is invalid!")}}),cc._RF.pop()},{SpriteFrameSet:"SpriteFrameSet"}],OverPanel:[function(e,t){"use strict";cc._RF.push(t,"60425zRIQ5LNIZ6KmZ5p/LN","OverPanel");var i=e("../controller/utils");cc.Class({extends:cc.Component,properties:{replayBtn:cc.Node,nextBtn:cc.Node,scoreLabel:cc.Label,highestScoreLabel:cc.Label,clickSound:cc.AudioClip,gameOverPanel:cc.Node,gameWinPanel:cc.Node},onLoad:function(){},init:function(e){this.gameCtl=e,this.node.active=!1},show:function(e,t){this.node.active=!0,this.gameOverPanel.active=!t,this.gameWinPanel.active=t,this.nextBtn.active=t,this.replayBtn.active=!t&&"1"===cc.sys.localStorage.getItem("isFirstTime"),this.scoreLabel.string=e,this.highestScoreLabel.string=this.getHighestScore()},getHighestScore:function(){return JSON.parse(cc.sys.localStorage.getItem("scoreData")||"[]").reduce(function(e,t){return e+t})},onRestart:function(){this.playSound(this.clickSound);var e=this;this.gameCtl&&(this.gameCtl.loading.active=!0),i.showAds("reward",!0,function(t){e.gameCtl&&(e.gameCtl.loading.active=!1);var n=new Object;n.adType="Reward",n.gameName=i.getAppName(),n.gameFeature="rewardAD_rePlay",n.weblinkSource=i.getWeblinkSource(),t?i.gtaPushEvent("AdShowSuccess",n):i.gtaPushEvent("AdShowFail",n),t&&(cc.sys.localStorage.setItem("isFirstTime",0),e.gameCtl.loadCurrentLevel(!1),e.node.active=!1)})},onNextLevel:function(){this.gameCtl.moveNextLevel(),this.playSound(this.clickSound)},onChangeStage:function(){this.playSound(this.clickSound);var e=this;this.gameCtl&&(this.gameCtl.loading.active=!0),i.showAds("browse",!0,function(t){e.gameCtl&&(e.gameCtl.loading.active=!1);var n=new Object;n.adType="Interstitial",n.gameName=i.getAppName(),n.gameFeature="interstitialAD_selectLevel",n.weblinkSource=i.getWeblinkSource(),t?i.gtaPushEvent("AdShowSuccess",n):i.gtaPushEvent("AdShowFail",n),t&&cc.director.loadScene("selectLevel")})},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}}),cc._RF.pop()},{"../controller/utils":"utils"}],Paddle:[function(e,t){"use strict";cc._RF.push(t,"4dc82c1qO9KbZBsMZGbHlMV","Paddle"),cc.Class({extends:cc.Component,properties:{speed:500},onLoad:function(){var e=cc.winSize.width>this.node.parent.width?this.node.parent.width:cc.winSize.width;this._minX=this.node.width/2-e/2,this._maxX=e/2-this.node.width/2,this.node.parent.on("touchmove",this.onTouchMove,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},update:function(e){if(!this._gameCtrl||!this._gameCtrl.isStopGame){var t=this.node.x;this._isMoveLeft?t=Math.max(this._minX,Math.min(this._maxX,t-this.speed*e)):this._isMoveRight&&(t=Math.max(this._minX,Math.min(this._maxX,t+this.speed*e))),this.node.x=t}},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.left:case cc.macro.KEY.a:this._isMoveLeft=!0;break;case cc.macro.KEY.right:case cc.macro.KEY.d:this._isMoveRight=!0}},onKeyUp:function(e){switch(e.keyCode){case cc.macro.KEY.left:case cc.macro.KEY.a:this._isMoveLeft=!1;break;case cc.macro.KEY.right:case cc.macro.KEY.d:this._isMoveRight=!1}},onTouchMove:function(e){if(!this._gameCtrl.isStopGame){var t=this.node.x+e.getDelta().x;this.node.x=Math.max(this._minX,Math.min(this._maxX,t))}},init:function(e){this._gameCtrl=e,this.node.x=0;var t=this.node.getComponent(cc.Widget);t&&(t.bottom=110,t.updateAlignment())}}),cc._RF.pop()},{}],PausePanel:[function(e,t){"use strict";cc._RF.push(t,"b8352WVqZtHF6g5r3IjErdI","PausePanel");var i=e("../controller/utils");cc.Class({extends:cc.Component,properties:{loading:{default:null,type:cc.Node},clickSound:cc.AudioClip},show:function(){this.node.active=!0},onReplay:function(){var e=this;this.loading.active=!0,i.showAds("next",!1,function(t){e.loading.active=!1;var n=new Object;n.adType="Interstitial",n.gameName=i.getAppName(),n.gameFeature="interstitialAD_home",n.weblinkSource=i.getWeblinkSource(),t?i.gtaPushEvent("AdShowSuccess",n):i.gtaPushEvent("AdShowFail",n),t&&(cc.director.resume(),cc.director.loadScene("game"),e.playSound(e.clickSound))})},onChangeStage:function(){var e=this;this.loading.active=!0,i.showAds("browse",!1,function(t){e.loading.active=!1;var n=new Object;n.adType="Interstitial",n.gameName=i.getAppName(),n.gameFeature="interstitialAD_selectLevel",n.weblinkSource=i.getWeblinkSource(),t?i.gtaPushEvent("AdShowSuccess",n):i.gtaPushEvent("AdShowFail",n),t&&(cc.director.resume(),cc.director.loadScene("selectLevel"),e.playSound(e.clickSound))})},onResume:function(){this.node.active=!1},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}}),cc._RF.pop()},{"../controller/utils":"utils"}],SelectLevelScene:[function(e,t){"use strict";cc._RF.push(t,"31aafb/KpBMD5r8BNEBebec","SelectLevelScene");var i=e("./LevelItem"),n=e("../controller/utils");cc.Class({extends:cc.Component,properties:{clickSound:cc.AudioClip,bgmAudioClip:cc.AudioClip,loading:cc.Node,levelPrefab:cc.Prefab,contentView:cc.Node},onLoad:function(){n.fit(this.node.getComponent(cc.Canvas)),cc.sys.localStorage.setItem("isFirstTime",1),cc.audioEngine.playMusic(this.bgmAudioClip,!0),this.loadLevelConfig()},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)},loadLevelConfig:function(){for(var e=0;e<30;e++){var t=cc.instantiate(this.levelPrefab);t.getComponent(i).setLevel(e+1,this.onSelect.bind(this)),this.contentView.addChild(t)}},onSelect:function(){this.loading.active=!0}}),cc._RF.pop()},{"../controller/utils":"utils","./LevelItem":"LevelItem"}],SoundButton:[function(e,t){"use strict";cc._RF.push(t,"693b7oTvNhKEL4LhZ6JE9Ie","SoundButton"),cc.Class({extends:cc.Component,properties:{buttonSprite:cc.Sprite,buttonTextures:[cc.SpriteFrame],clickSound:cc.AudioClip},onLoad:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;this.buttonSprite.spriteFrame=this.buttonTextures[e],this.setSoundConfig(e)},onSoundButtonClicked:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(this.clickSound,!1,e);var t=1==e?0:1;cc.sys.localStorage.setItem("soundConfig",t),this.buttonSprite.spriteFrame=this.buttonTextures[t],this.setSoundConfig(t)},setSoundConfig:function(e){1==e?cc.audioEngine.setMusicVolume(1):cc.audioEngine.setMusicVolume(0)}}),cc._RF.pop()},{}],SpriteFrameSet:[function(e,t){"use strict";cc._RF.push(t,"ecbd3Ze139EO6Y/mdovRqSS","SpriteFrameSet");var i=cc.Class({name:"SpriteFrameSet",properties:{language:"",spriteFrame:cc.SpriteFrame}});t.exports=i,cc._RF.pop()},{}],TutorialButton:[function(e,t){"use strict";cc._RF.push(t,"02e0fTuk3RCybE2KHyqK0XM","TutorialButton"),cc.Class({extends:cc.Component,properties:{tutorialLayer:cc.Node,isShow:!1,clickSound:cc.AudioClip},onTutorialClicked:function(){var e=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(this.clickSound,!1,e),this.tutorialLayer.active=!this.isShow,this.isShow=!this.isShow,this.playSound(this.clickSound)},playSound:function(e){var t=cc.sys.localStorage.getItem("soundConfig")||1;cc.audioEngine.play(e,!1,t)}}),cc._RF.pop()},{}],"polyglot.min":[function(e,t,i){"use strict";cc._RF.push(t,"0c57bENkHNHF5R1+cLnLXbj","polyglot.min"),function(e,n){"function"==typeof define&&define.amd?define([],function(){return n(e)}):"object"==typeof i?t.exports=n(e):e.Polyglot=n(e)}(void 0,function(e){function t(e){e=e||{},this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en",this.allowMissing=!!e.allowMissing,this.warn=e.warn||r}function i(e){var t,i,n,o={};for(t in e)if(e.hasOwnProperty(t))for(n in i=e[t])o[i[n]]=t;return o}function n(e){return e.replace(/^\s+|\s+$/g,"")}function o(e,t,i){var o;return null!=i&&e?n((o=e.split(u))[c(t,i)]||o[0]):e}function a(e){var t=i(h);return t[e]||t.en}function c(e,t){return d[a(e)](t)}function s(e,t){for(var i in t)"_"!==i&&t.hasOwnProperty(i)&&(e=e.replace(new RegExp("%\\{"+i+"\\}","g"),t[i]));return e}function r(t){e.console&&e.console.warn&&e.console.warn("WARNING: "+t)}function l(e){var t={};for(var i in e)t[i]=e[i];return t}t.VERSION="0.4.3",t.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},t.prototype.extend=function(e,t){var i;for(var n in e)e.hasOwnProperty(n)&&(i=e[n],t&&(n=t+"."+n),"object"==typeof i?this.extend(i,n):this.phrases[n]=i)},t.prototype.clear=function(){this.phrases={}},t.prototype.replace=function(e){this.clear(),this.extend(e)},t.prototype.t=function(e,t){var i,n;return"number"==typeof(t=null==t?{}:t)&&(t={smart_count:t}),"string"==typeof this.phrases[e]?i=this.phrases[e]:"string"==typeof t._?i=t._:this.allowMissing?i=e:(this.warn('Missing translation for key: "'+e+'"'),n=e),"string"==typeof i&&(t=l(t),n=s(n=o(i,this.currentLocale,t.smart_count),t)),n},t.prototype.has=function(e){return e in this.phrases};var u="||||",d={chinese:function(){return 0},german:function(e){return 1!==e?1:0},french:function(e){return e>1?1:0},russian:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},czech:function(e){return 1===e?0:e>=2&&e<=4?1:2},polish:function(e){return 1===e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!=1||e%100==11?1:0}},h={chinese:["fa","id","ja","ko","lo","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl","pt-br"],russian:["hr","ru"],czech:["cs"],polish:["pl"],icelandic:["is"]};return t}),cc._RF.pop()},{}],utils:[function(e,t){"use strict";cc._RF.push(t,"edc1bnU0BhO64vKFQYCrNHB","utils");var i=e("h5ad");t.exports={showAds:function(e,t,n){var o=new Object;o.type=e,o.beforeBreak=function(){console.log("beforeBreak"),t&&(cc.director.pause(),cc.audioEngine.pauseAll())},o.afterBreak=function(){console.log("afterBreak"),t&&(cc.director.resume(),cc.audioEngine.resumeAll()),"reward"!=e&&n&&n(!0)},"reward"==e&&(o.beforeReward=function(e){console.log("beforeReward"),e()}),o.adDismissed=function(){console.log("adDismissed"),n&&n(!1)},"reward"==e&&(o.adViewed=function(){console.log("adViewed"),n&&n(!0)}),o.noBreak=function(){console.log("noBreak"),t&&(cc.director.resume(),cc.audioEngine.resumeAll()),n&&n(!0)},i.adBreak(o)},getResourceUrl:function(e){var t=cc.resources.getInfoWithPath(e),i=t.uuid;return t.nativeVer&&(i+="."+t.nativeVer),"./assets/resources/native/"+i.substr(0,2)+"/"+i+".png"},fit:function(e){var t=cc.view.getVisibleSize(),i=cc.view.getDesignResolutionSize();t.width/i.width>=t.height/i.height?(console.log("fitHeight"),e.fitHeight=!0,e.fitWidth=!1):t.width/i.width<t.height/i.height&&(console.log("fitWidth"),e.fitHeight=!1,e.fitWidth=!0)},gtaInit:function(e,t){console.log("init:",e+" ** "+t);var i={gameId:e,version:"1.0.0",debugLog:!0,amplitude:{apiKey:t,debugLog:!0}};gcTurboAnalytics.init(i)},gtaSendBaseUserProperties:function(){var e=new Object;e.version="1.0.0",gcTurboAnalytics.setUserProperties(e)},gtaSetUserProperties:function(e){gcTurboAnalytics.setUserProperties(e)},gtaPushEvent:function(e,t){gcTurboAnalytics.pushEvent(e,t)},getAppName:function(){return"BrickBreaker"},getWeblinkSource:function(){return document?document.referrer||document.URL:"Unknown"}},cc._RF.pop()},{h5ad:1}]},{},["GameCtl","LocalizationHelper","utils","BrickModel","GameModel","LevelModel","Ball","BrickLayout","BrickView","ComboBox","ComboBoxItem","GameView","LandingScene","LevelItem","OverPanel","Paddle","PausePanel","SelectLevelScene","SoundButton","TutorialButton","LanguageData","LocalizedLabel","LocalizedSprite","SpriteFrameSet","polyglot.min"]);