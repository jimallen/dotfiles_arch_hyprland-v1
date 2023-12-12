LPServer.sharing=LPServer.sharing||{},LPServer.sharing.individual=function(){var e=(s={noemailspecified:function(e,r){r.error(LPServer.ext.translate("Please enter at least one email and try again."))},usernameisnotvalidemail:function(e,r){var e=LPServer.getRecordsFromResponse(e,"email",LPServer.getAttrInt(e,"numinvalid",0));r.error(LPServer.ext.translate("The following emails are invalid: %s",e.join(", ")))},toomanyemails:function(e,r){var e=LPServer.getAttrInt(e,"numexcess");"1"===e?r.error(LPServer.ext.translate("You are trying to share with too many people. Please remove at least 1 email and try again.",e)):r.error(LPServer.ext.translate("You are trying to share with too many people. Please remove at least %d emails and try again.",e))},upgradeneeded:function(e,r){r.error(LPServer.ext.translate("Free users are limited to sharing one item with one person only. Upgrade to LastPass Premium to allow one-to-many sharing."))},cantsharewithself:function(e,r){r.error(LPServer.ext.translate("You can not share with yourself."))}},m=function(e,r,t){this.email=e,this.pubkey=r,this.encpass=t},(i=function(e,r){this.aid=e.getAttribute("aid"),this.username=LPServer.ext.decrypt(e.getAttribute("username"),r),this.password=LPServer.ext.decrypt(e.getAttribute("password"),r);var t=e.getAttribute("url"),a;t&&"!"===t[0]&&(this.url=LPServer.ext.decrypt(t,r)),this.totp=LPServer.ext.decrypt(e.getAttribute("totp"),r),this.name=LPServer.ext.decrypt(e.getAttribute("name"),r),this.grouping=LPServer.ext.decrypt(e.getAttribute("grouping"),r),this.extra=LPServer.ext.decrypt(e.getAttribute("extra"),r),this.attachkey=LPServer.ext.decrypt(e.getAttribute("attachkey"),r),this.afids=this.parseFields(e.getAttribute("afids"),r),this.otherafids=this.parseFields(e.getAttribute("otherafids"),r),this.accts_notes=this.parseFields(e.getAttribute("accts_notes"),r),this.accts_usernames=this.parseFields(e.getAttribute("accts_usernames"),r),this.accts_passwords=this.parseFields(e.getAttribute("accts_passwords"),r),this.template=e.getAttribute("template")}).prototype.parseFields=function(e,r){var t=[];if(e)for(var a=0,s=(e=e.split("^")).length,n;a<s;++a){""!==(n=e[a])&&(n=e[a].split("&"),t.push({name:n[0],value:LPServer.ext.decrypt(n[1],r)}))}return t},i.prototype.encrypt=(n=function(e,r){return e?LPServer.ext.encryptCBC(e,r):""},o=function(e,r){for(var t=JSON.parse(JSON.stringify(e)),a=0,s=t.length;a<s;++a)t[a].value=n(t[a].value,r);return t},function(e){var r={username:n(this.username,e),password:n(this.password,e),totp:n(this.totp,e),name:n(this.name,e),grouping:n(this.grouping,e),extra:n(this.extra,e),attachkey:n(this.attachkey,e),afids:o(this.afids,e),otherafids:o(this.otherafids,e),accts_notes:o(this.accts_notes,e),accts_usernames:o(this.accts_usernames,e),accts_passwords:o(this.accts_passwords,e)},t="http://sn"!==this.url&&"http://group"!==this.url,a="undefined"!=typeof reduxApp&&reduxApp.getState().settings.features.url_encryption,s="undefined"!=typeof g_sites&&g_sites[this.aid]&&g_sites[this.aid].encryptedUrl;return t&&(a||s)&&(r.url=n(this.url,e)),r}),d=function(e,r,t,a){for(var s=0,n=t.length;s<n;++s)e[r+a+s+"name"]=t[s].name,e[r+a+s+"value"]=t[s].value;e[r+"num"+a]=t.length},v=function(e,r){var t=LPServer.getAttrInt(e,"numemails",0);1===t?r.success(LPServer.ext.translate("Share sent to %s.",LPServer.getAttr(e,"email0",""))):r.success(LPServer.ext.translate("Share sent to %d recipients.",t))},g=function(e,r,t){for(var a={cmd:"share",sharemessage:"",giveshare:t.params.giveshare?1:0,numemails:e.length,numaids:r.length,fromrole:0,sharesyncpush:0,shareautopull:0,reportname:[]},s=0,n=e.length;s<n;++s){var i=e[s],o=LPServer.ext.createRandomHexString(64),c=LPServer.ext.hex2bin(o),o=new LPServer.ext.RSAKey,o=(LPServer.ext.parsePublicKey(o,i.pubkey),o.encrypt(c)),l="email"+s;a[l]=i.email,a["sharekeyenchex"+s]=o,a["sharekeyenchexsig"+s]="",i.encpass&&(a["encpass"+s]=i.encpass);for(var p=0;p<r.length;++p){var u=r[p],h=u.encrypt(c),m=(1==t.params.logname&&a.reportname.push({aid:u.aid,name:u.name}),l+"aid"+p);a[m]=u.aid,a[m+"username"]=h.username,a[m+"password"]=h.password,h.url&&(a[m+"url"]=h.url),a[m+"name"]=h.name,a[m+"grouping"]=h.grouping,a[m+"extra"]=h.extra,a[m+"attachkey"]=h.attachkey,a[m+"template"]=u.template,a[m+"totp"]=h.totp,a[m+"url"]=h.url,d(a,m,h.afids,"afid"),d(a,m,h.otherafids,"otherafid"),d(a,m,h.accts_notes,"accts_notes"),d(a,m,h.accts_usernames,"accts_usernames"),d(a,m,h.accts_passwords,"accts_passwords")}}LPServer.xmlRequest({url:"showshare.php",data:a,callbacks:{shareok:v},userSupplied:t})},S=function(e,r){for(var t=[],a=LPServer.getNodes(e,"encdata"),s=0,n=a.length;s<n;++s)t.push(new i(a[s],r));return t},P=function(e,r){for(var t=[],a=0,s=e.length;a<s;++a){var n=e[a];n&&t.push({email:n,reason:r})}return t},c=function(e,r){var t=LPServer.getAttrInt(e,"numsharesok",0);if(0<t){for(var a=[],s=0;s<t;++s){var n=LPServer.getAttr(e,"emailok"+s,""),i=LPServer.getAttr(e,"emailokpubkeyhex"+s,""),o=LPServer.getAttr(e,"emailencp"+s,"");a.push(new m(n,i,o))}g(a,S(e,r.params.key),r)}var c=LPServer.getAttrInt(e,"numsharesdne",0),c=(0<c&&r.callbacks&&r.callbacks.invite&&r.callbacks.invite({emails:LPServer.getRecordsFromResponse(e,"emaildne",c)}),LPServer.getAttr(e,"sharingwithself","")),l=LPServer.getAttrInt(e,"numsharesinv",0),p=LPServer.getAttrInt(e,"numsharesuns",0),u=LPServer.getAttrInt(e,"numsharesspa",0),h=LPServer.getAttrInt(e,"numsharesres",0),c,c,l;(c||0<l||0<p||0<u||0<h)&&r.callbacks&&r.callbacks.problems&&(c=(c=(c=(c=(c=P([c],LPServer.ext.translate("You can not share with yourself."))).concat(P(LPServer.getRecordsFromResponse(e,"emailinv",l),LPServer.ext.translate("Invalid email address.")))).concat(P(LPServer.getRecordsFromResponse(e,"emailuns",p),LPServer.ext.translate("The user must login to LastPass at least once to permit sharing.")))).concat(P(LPServer.getRecordsFromResponse(e,"emailspa",u),LPServer.ext.translate("The user does not want to receive emails from LastPass.")))).concat(P(LPServer.getRecordsFromResponse(e,"emailres",h),LPServer.ext.translate("Sharing is restricted by a LastPass Enterprise policy."))),r.callbacks.problems(c)),0<p&&(l=getBG())&&l.sendLpImprove("sharing_failed"),0===t&&r.error()},function(e){e.callbacks=LPServer.extend(e.callbacks,s);for(var r={cmd:"getclientdata",shareeusername:e.params.emails,numaids:e.params.aids.length},t=0,a=e.params.aids.length;t<a;++t)r["aid"+t]=e.params.aids[t];LPServer.xmlRequest({url:"showshare.php",data:r,callbacks:{getclientdataack:c},userSupplied:e})}),s,m,i,n,o,d,v,g,S,P,c,r,t,a,l,p,u,h,f;t=function(e,r){r.success(LPServer.ext.translate("Share revoked from %s",r.params.email))},l=function(e,r){r.success(LPServer.ext.translate("Share accepted."))},p=function(e,r,t){var e=LPServer.ext.decrypt(e,r);return e?LPServer.ext.encryptCBC(e,t):""},u=function(e){var r=e.params.key,t=e.params.pendingShareKey,a=e.params.pendingShare,s={cmd:"acceptshare",msgtosharer:"",aid:a.id,newgroup:LPServer.ext.encryptCBC(e.params.group,r),name:p(a.sharename,t,r),grouping:p(a.sharegroup,t,r),username:p(a.username,t,r),password:p(a.password,t,r),extra:p(a.extra,t,r),attachkey:p(a.attachkey,t,r),totp:p(a.totp,t,r)},n=(a.url&&"!"===a.url[0]&&(s.url=p(a.url,t,r)),s.newname=e.params.name?LPServer.ext.encryptCBC(e.params.name,r):s.name,a.save_all?"otherafid":"afid"),i;for(i in a.shareafids){var o,o=(o=a.shareafids[i])&&p(o,t,r);s[n+i]=o}LPServer.xmlRequest({url:"showacceptshare.php",data:s,callbacks:{acceptshareok:l},userSupplied:e})},f=function(e,r){r.success(LPServer.ext.translate("Share rejected."))},y=function(e,r){var t,a,a,a,a,a=(r.callbacks&&r.callbacks.problems&&(t=[],0<(a=LPServer.getAttrInt(e,"numalready",0))&&(a=LPServer.getRecordsFromResponse(e,"emailalready",a).join(", "),t.push(LPServer.ext.translate("You have already invited the following friends: %s. Please send them a reminder using your personal email as the email invitation sent by LastPass might not have reached them.",a))),0<(a=LPServer.getAttrInt(e,"numspam",0))&&(a=LPServer.getRecordsFromResponse(e,"emailspam",a).join(", "),t.push(LPServer.ext.translate("The following friends have marked your invitations as spam: %s.",a))),0<t.length)&&r.callbacks.problems(t),LPServer.getAttrInt(e,"numsent",0));1===a?r.success(LPServer.ext.translate("%s was invited. We will send you a notification email when they join LastPass so you can retry sharing your data with them.",LPServer.getAttr(e,"emailsent0",""))):1<a?r.success(LPServer.ext.translate("%d friends were invited. We will send you a notification email when any of them join LastPass so you can retry sharing your data with them.",a)):r.error()};var L,y,x,k=function(e){var r=e.params&&e.params.id?{aid:e.params.id}:{};e.params.url&&w(e.params.url)&&(r.from="acceptshare",r.confirm_token=b(e.params.url)),LPServer.jsonRequest({url:"getReceivedShareInfo.php",data:r,userSupplied:e})},w=function(e){return!!e.match(/acceptshare=/gi)},b=function(e){var e=e.match(/confirm_token=[^&]*/gi);return e?e[0].split("=")[1]:""};return{shareItems:e,unshareItem:function(e){LPServer.xmlRequest({url:"showshare.php",data:{cmd:"unshare",aid:e.params.id,username:e.params.email},callbacks:{unshareok:t},userSupplied:e})},acceptShare:function(t){t.params.pendingShare?u(t):t.params.id&&k(LPServer.extend({},t,{params:{id:t.params.id},success:function(e){t.params.pendingShare=e.pendingShare;var r=new LPServer.ext.RSAKey;LPServer.ext.parsePrivateKey(r,LPServer.ext.extractPrivateKey(e.privateKey,t.params.key)),t.params.pendingShareKey=r.decrypt(t.params.pendingShare.sharekeyenchex),u(t)}}))},rejectShare:function(e){LPServer.xmlRequest({url:"showacceptshare.php",data:{cmd:"rejectshare",aid:e.params.id},callbacks:{rejectshareok:f},userSupplied:e})},inviteFriends:function(e){for(var r={cmd:"invite",numemails:e.params.emails.length},t=0,a=e.params.emails.length;t<a;++t)r["email"+t]=e.params.emails[t];LPServer.xmlRequest({url:"showshare.php",data:r,callbacks:{inviteack:y},userSupplied:e})},getSentShareData:function(e){LPServer.jsonRequest({url:"getSentShareInfo.php",data:e.params&&e.params.id?{aid:e.params.id}:null,userSupplied:e})},getReceivedShareData:k}}();