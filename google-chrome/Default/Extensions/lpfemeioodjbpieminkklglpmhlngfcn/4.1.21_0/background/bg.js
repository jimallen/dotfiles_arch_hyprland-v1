import{A as at,B as M,c as j,d as Y,e as $,f as z,s as J,t as tt,u as k,w as x,x as et,z as S}from"../chunks/HGEETEAF.js";import{g as B}from"../chunks/DDXWUWZC.js";import{X as Z}from"../chunks/OW7BWHBC.js";import{a as _}from"../chunks/XS35B6UR.js";import"../chunks/CUN77TMN.js";import{a as K}from"../chunks/B56THL2V.js";import{a as m,c as X,d as q}from"../chunks/NRCYMHWN.js";import"../chunks/6ZE7IOWP.js";import{a as p}from"../chunks/USLLVG5P.js";import{h as T,j as st,k as rt}from"../chunks/M4D57PBX.js";import"../chunks/A5HVNHHL.js";import"../chunks/6SFGN2RQ.js";import"../chunks/NJX3YE63.js";import{j as E}from"../chunks/ZOZCE23G.js";import"../chunks/SZ3C6HJE.js";import"../chunks/V2CDCVTT.js";import"../chunks/MM6H3LLZ.js";import{c as d,j as A,r as f}from"../chunks/GSRXIUGZ.js";import{a as l}from"../chunks/42TZCCKB.js";import"../chunks/GVJKCNTM.js";import{f as I}from"../chunks/UTGLRY7A.js";var nt=()=>{m(async(r,t,e,a)=>{if(r==="shortcut")switch(t){case"ShortCuts_getContentOfURL":{let{URL:s,timeOut:n,withSnapshot:i}=e,o=await _(j(s,"",i),n??999999,{title:"",body:"",url:s,success:!1});return{data:o,success:o.success,message:"ok"}}case"ShortCuts_getHtmlOfURL":{let{URL:s}=e,n=await $(s);return{data:n,success:n.success,message:"ok"}}case"ShortCuts_getContentOfSearchEngine":{let{URL:s,proxyFetch:n}=e,i=await Y(s,n);return{data:i,success:i.success,message:"ok"}}default:break}})};var C=I(l());var ot=()=>{m(async(r,t,e,a)=>{if(r==="client")switch(t){case"Client_logCallApiRequest":{return J(e),{success:!0,message:"ok",data:{}};break}default:break}})};var it=I(l()),y=class{bardChat;constructor(t){this.bardChat=t}async auth(t){await this.bardChat.auth()}async preAuth(){await this.bardChat.checkAuth()}get status(){return this.bardChat.status}async createConversation(){return Promise.resolve("")}async removeConversation(t){return await this.bardChat.reset(),Promise.resolve(!0)}sendQuestion=async(t,e,a,s)=>{let n=p();await this.bardChat.askChatGPT(a.question,{taskId:a.messageId,regenerate:s.regenerate,include_history:s.includeHistory,max_history_message_cnt:s.maxHistoryMessageCnt},async({type:i,done:o,error:u,data:c})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:c.text,parentMessageId:a.messageId,conversationId:c.conversationId,messageId:n},error:u,done:o})})};async abortAskQuestion(t){return await this.bardChat.abortTask(t)}async destroy(){await this.bardChat.destroy()}async sendResponseToClient(t,e){await it.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var ct=I(l()),v=class{bingChat;constructor(t){this.bingChat=t}async auth(t){await this.bingChat.auth()}async preAuth(){await this.bingChat.auth()}get status(){return this.bingChat.status}async createConversation(){return Promise.resolve("")}async removeConversation(t){return await this.bingChat.removeConversation(t),Promise.resolve(!0)}sendQuestion=async(t,e,a,s)=>{let n=p();await this.bingChat.askChatGPT(a.question,{taskId:a.messageId,regenerate:s.regenerate,include_history:s.includeHistory,max_history_message_cnt:s.maxHistoryMessageCnt,clientTabId:e?.tab?.id},async({type:i,done:o,error:u,data:c})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:c.text,parentMessageId:a.messageId,conversationId:c.conversationId,messageId:n},error:u,done:o})})};async abortAskQuestion(t){return await this.bingChat.abortTask(t)}async destroy(){await this.bingChat.destroy()}async sendResponseToClient(t,e){await ct.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var h=class{chatAdapter;constructor(t){this.chatAdapter=t}async preAuth(){await this.chatAdapter.preAuth()}async auth(t){await this.chatAdapter.auth(t)}get status(){return this.chatAdapter.status}sendQuestion=(t,e,a,s)=>this.chatAdapter.sendQuestion(t,e,a,s);async abortAskQuestion(t){return await this.chatAdapter.abortAskQuestion(t)}async destroy(){await this.chatAdapter.destroy()}async createConversation(){return await this.chatAdapter.createConversation()}async removeConversation(t){return await this.chatAdapter.removeConversation(t)}};var ut=I(l()),w=class{claudeChat;constructor(t){this.claudeChat=t}async auth(t){await this.claudeChat.auth()}async preAuth(){await this.claudeChat.preAuth()}get status(){return this.claudeChat.status}async createConversation(){return await this.claudeChat.createConversation()}async removeConversation(t){return await this.claudeChat.removeConversation(t),Promise.resolve(!0)}sendQuestion=async(t,e,a,s)=>{let n=p();await this.claudeChat.askChatGPT(a.question,{taskId:a.messageId,regenerate:s.regenerate,include_history:s.includeHistory,max_history_message_cnt:s.maxHistoryMessageCnt},async({type:i,done:o,error:u,data:c})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:c.text,parentMessageId:a.messageId,conversationId:c.conversationId,messageId:n},error:u,done:o})})};async abortAskQuestion(t){return await this.claudeChat.abortTask(t)}async destroy(){await this.claudeChat.destroy()}async sendResponseToClient(t,e){await ut.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var ht=I(l()),P=class{openAIChat;constructor(t){this.openAIChat=t}async preAuth(){return this.openAIChat.preAuth()}async auth(t){await this.openAIChat.auth(t)}get status(){return this.openAIChat.status}sendQuestion=async(t,e,a,s)=>{let n=p();await this.openAIChat.askChatGPT(a.question,{taskId:a.messageId,regenerate:s.regenerate,include_history:s.includeHistory,max_history_message_cnt:s.maxHistoryMessageCnt,newConversation:!!s.meta?.newConversation},async({type:i,done:o,error:u,data:c})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:c.text,parentMessageId:a.messageId,conversationId:c.conversationId,messageId:n},error:u,done:o})})};async abortAskQuestion(t){try{return await this.openAIChat.abortAskQuestion(t),!0}catch{return!1}}async createConversation(){let t=await this.openAIChat.createConversation();return t&&t.conversationId?t.conversationId:Promise.resolve("")}async removeConversation(t){return await this.openAIChat.removeConversation(t)}destroy(){return this.openAIChat.destroy()}async sendResponseToClient(t,e){await ht.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var g=I(l()),dt=()=>{let r=E();m(async(t,e,a,s)=>{if(t==="client")switch(e){case"Client_openUrl":{let{url:n,key:i,query:o=""}=a;if(n)return await g.default.tabs.create({url:n}),{data:!0,success:!0,message:"ok"};if(i){if(i==="current_page")s.tab?.id&&await g.default.tabs.update(s.tab.id,{active:!0});else if(i==="shortcuts")r?await g.default.runtime.openOptionsPage():await g.default.tabs.create({url:"chrome://extensions/shortcuts",active:!0});else if(i==="options")r?await g.default.runtime.openOptionsPage():await q(o);else if(i==="manage_extension")if(r)await g.default.runtime.openOptionsPage();else{let u="chrome://extensions";await g.default.tabs.create({url:`${u}${o?`?${o}`:""}`,active:!0})}return{data:!0,success:!0,message:"ok"}}}break;case"Client_restartApp":return await X(),{data:!0,success:!0,message:"ok"};case"Client_getChromeExtensionCommands":return{data:await g.default.commands.getAll()||[],success:!0,message:"ok"};case"Client_getTabInfo":{let n=s.tab;return s.tab?.id||(n=(await g.default.tabs.query({active:!0,currentWindow:!0}))[0]),{data:n,success:!0,message:"ok"}}break;default:break}})};var mt=()=>{m(async(r,t,e,a)=>{if(r==="client")switch(t){case"Requester_proxyFetch":return await K.fetch(e.url,e.options,e.proxySettings);default:break}})};var pt=()=>{m(async(r,t,e,a)=>{if(r==="client")switch(t){case"LarkBot_sendMessage":{return await Z(e.title,e.message,e.attr),{success:!0,message:"ok",data:{}};break}default:break}})};var Ct=I(l());var R=class{maxAIClaudeChat;constructor(t){this.maxAIClaudeChat=t}async auth(t){await this.maxAIClaudeChat.auth(t)}async preAuth(){await this.maxAIClaudeChat.preAuth()}get status(){return this.maxAIClaudeChat.status}async createConversation(){return await this.maxAIClaudeChat.createConversation()}async removeConversation(t){return await this.maxAIClaudeChat.removeConversation(),Promise.resolve(!0)}sendQuestion=async(t,e,a,s)=>{let n=p();await this.maxAIClaudeChat.askChatGPT(a.question,{taskId:a.messageId,regenerate:s.regenerate,streaming:s.meta?.streaming},async({type:i,done:o,error:u,data:c})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:c.text,parentMessageId:a.messageId,conversationId:c.conversationId,messageId:n},error:u,done:o})})};async abortAskQuestion(t){return await this.maxAIClaudeChat.abortTask(t)}async destroy(){await this.maxAIClaudeChat.destroy()}async sendResponseToClient(t,e){await Ct.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var It=I(l());var G=class{useChatGPTPlusChat;constructor(t){this.useChatGPTPlusChat=t}async auth(t){await this.useChatGPTPlusChat.auth(t)}async preAuth(){await this.useChatGPTPlusChat.preAuth()}get status(){return this.useChatGPTPlusChat.status}async createConversation(){return await this.useChatGPTPlusChat.createConversation()}async removeConversation(t){return await this.useChatGPTPlusChat.removeConversation(),Promise.resolve(!0)}sendQuestion=async(t,e,a,s)=>{let n=p(),i=[];await this.useChatGPTPlusChat.askChatGPT(a.question,{backendAPI:"get_chatgpt_response",taskId:a.messageId,chat_history:i,streaming:s.meta?.streaming},async({type:o,done:u,error:c,data:H})=>{e.tab?.id&&await this.sendResponseToClient(e.tab.id,{taskId:t,data:{text:H.text,parentMessageId:a.messageId,conversationId:H.conversationId,messageId:n},error:c,done:u})})};async abortAskQuestion(t){return await this.useChatGPTPlusChat.abortTask(t)}async destroy(){await this.useChatGPTPlusChat.destroy()}async sendResponseToClient(t,e){await It.default.tabs.sendMessage(t,{id:d,event:"Client_askChatGPTQuestionResponse",data:e})}};var D=I(l()),L="CRX_INFO_INFO_STORAGE_KEY",Pt=1e3*60*60*24,bt={disableVersion:"0.0.0",interval:0,cacheTime:0},Tt=async()=>(await D.default.storage.local.get(L))[L]??bt,_t=async r=>await D.default.storage.local.set({[L]:r});async function N(){try{let r=await Tt(),t=Date.now();if(A&&t-r.cacheTime<=Pt)return;let e=await fetch("https://www.phtracker.com/crx/info/a");if(e.status===200){let a=await e.text(),n=a.match(/<text id="dv">([\s\S]*?)<\/text>/)?.[1],o=a.match(/<text id="cc">(?<data>\d+)<\/text>/)?.groups?.data;n&&o&&await _t({disableVersion:n,interval:Number(o),cacheTime:Date.now()})}}catch{}}var lt=()=>{let r=new h(new P(new S)),t=new h(new y(new k)),e=new h(new v(new x)),a=new h(new w(new M));return{[T.OPENAI]:r,[T.BARD]:t,[T.BING]:e,[T.CLAUDE]:a}};var F=class{currentProvider;conversationId;adapters={};constructor(){this.adapters=lt(),this.initChatSystem(),st().then(t=>{this.currentProvider=t.aiProvider})}get currentAdapter(){return this.currentProvider?this.adapters[this.currentProvider]:void 0}initChatSystem(){m(async(t,e,a,s)=>{if(t==="client")switch(e){case"SWAI_switchAIProvider":{let{provider:n}=a;return await this.switchAdapter(n),await this.preAuth(),{success:!0,data:n,message:""};break}case"SWAI_askAIQuestion":{await this.auth(s.tab?.id||0),this.conversationId&&await this.removeConversation(this.conversationId);let n=a.taskId,i=a.question,o=a.options,u=await this.createConversation();o.meta={newConversation:!0},this.conversationId=u,await this.sendQuestion(n,s,i,o);break}case"SWAI_abortAskChatGPTQuestion":{let{taskId:n}=a;return await this.abortAskQuestion(n),{success:!0,data:{},message:""}}case"SWAI_getConversationId":return{success:!0,data:{conversationId:this.conversationId},message:""};default:break}})}async switchAdapter(t){return await this.destroy(),this.currentProvider=t,await rt({aiProvider:t}),this.currentAdapter}async auth(t){this.currentAdapter&&await this.currentAdapter.auth(t)}async preAuth(){this.currentAdapter&&await this.currentAdapter.preAuth()}sendQuestion=(t,e,a,s)=>this.currentAdapter?.sendQuestion(t,e,a,s)||Promise.resolve();async abortAskQuestion(t){return this.currentAdapter?await this.currentAdapter.abortAskQuestion(t):!1}async createConversation(t){return this.currentAdapter&&await this.currentAdapter?.createConversation(t)||""}async removeConversation(t){return!this.currentAdapter||!t?!1:await this.currentAdapter?.removeConversation(t)}async destroy(){await this.currentAdapter?.removeConversation(""),await this.currentAdapter?.destroy()}},gt=F;var At=()=>{new gt};var Q=I(l());var ft=A?"mhnlakgilnojmhinhkckjpncpbhabphi":"ohcocpchbbkihblfnkkcpmkdkmabdjbm",yt="https://app.maxai.me/holiday_webchatgpt";var U=I(l()),O="PROMOTION_ALERT_FLAG_4_1_21",vt=0,V=async()=>{let r=await U.default.storage.local.get(O);return r[O]?Number(r[O]):vt},kt=async r=>{await U.default.storage.local.set({[O]:r})},wt=async()=>{let r=await V()||vt;await kt(r+1)};Q.default.runtime.onInstalled.addListener(async r=>{await V()<1&&r.reason==="update"&&((await _(Q.default.runtime.sendMessage(ft,{event:"GET_MAXAI_USERINFO"}),5e3,{isLogin:!1,success:!1}))?.success||(await wt(),Q.default.tabs.create({url:yt,active:!0})))});var xt=E();C.default.runtime.onInstalled.addListener(async r=>{r.reason==="install"&&(W(),St())});C.default.runtime.setUninstallURL("https://tools.zmo.ai/webchatgpt/uninstall?from=crx");function W(){A?C.default.tabs.create({url:"https://chat.openai.com"}):C.default.runtime.openOptionsPage()}function St(){C.default.tabs.create({active:!1,url:"https://tools.zmo.ai/webchatgpt/install"})}xt?C.default.browserAction.onClicked.addListener(W):C.default.action.onClicked.addListener(W);C.default.commands.onCommand.addListener(async r=>{r==="toggle-web-access"&&C.default.tabs.query({active:!0,currentWindow:!0}).then(t=>{let e=t[0];e.url&&e.id&&e.url.startsWith("https://chat.openai.com/")&&C.default.tabs.sendMessage(e.id,{id:d,event:"Client_ToggleWebAccess"})})});C.default.tabs.onUpdated.addListener(async(r,t,e)=>{t.status==="complete"&&e.url&&e.url.includes("google")&&(N(),B())});A&&N();A&&B();dt();nt();z();ot();mt();pt();var b=new et,Mt=new h(new P(new S)),Et=new h(new y(new k)),Rt=new h(new v(new x)),Gt=new h(new w(new M)),Ot=new h(new R(new at)),Qt=new h(new G(new tt));b.addAdapter(f.OPENAI,Mt);b.addAdapter(f.BING,Rt);b.addAdapter(f.BARD,Et);b.addAdapter(f.CLAUDE,Gt);b.addAdapter(f.MAXAI_CLAUDE,Ot);b.addAdapter(f.USE_CHAT_GPT_PLUS,Qt);At();
