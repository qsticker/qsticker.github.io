(function(e){function t(t){for(var a,r,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"20c562d1","chunk-13f1ec5a":"527f78c7","chunk-100cdea2":"3c30f0dd","chunk-b1a482b4":"008fc3de","chunk-15684da7":"d7e3861a","chunk-4a5f46a6":"d396d799","chunk-69c0dcf9":"507f2fd8","chunk-84dce888":"ab9b93ba","chunk-5a6f62b6":"f83c2ef7","chunk-c61e5506":"7d9554e7","chunk-2904004b":"964a243d","chunk-6b27b25e":"53cc112e","chunk-5e5c435d":"0a33cf91","chunk-205d914a":"7fc8846b","chunk-2b91cc66":"162aba0e","chunk-38e66ea8":"81b19f9c","chunk-3d2bfd50":"041799f6","chunk-3e4b6426":"fa008303","chunk-34e02f07":"7b88087a","chunk-5befd940":"c499826b","chunk-b50ad92e":"e3cd0f86"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-100cdea2":1,"chunk-b1a482b4":1,"chunk-15684da7":1,"chunk-69c0dcf9":1,"chunk-84dce888":1,"chunk-5a6f62b6":1,"chunk-c61e5506":1,"chunk-2904004b":1,"chunk-6b27b25e":1,"chunk-5e5c435d":1,"chunk-205d914a":1,"chunk-2b91cc66":1,"chunk-38e66ea8":1,"chunk-3d2bfd50":1,"chunk-3e4b6426":1,"chunk-34e02f07":1,"chunk-5befd940":1,"chunk-b50ad92e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"8cb9775d","chunk-13f1ec5a":"31d6cfe0","chunk-100cdea2":"79d3cf74","chunk-b1a482b4":"fce5e9dd","chunk-15684da7":"a02147c7","chunk-4a5f46a6":"31d6cfe0","chunk-69c0dcf9":"914da3ff","chunk-84dce888":"1153a1da","chunk-5a6f62b6":"262dc65b","chunk-c61e5506":"272d7b50","chunk-2904004b":"c33abb76","chunk-6b27b25e":"db4344f0","chunk-5e5c435d":"7579b61a","chunk-205d914a":"1be4bd9d","chunk-2b91cc66":"0c1ca89d","chunk-38e66ea8":"6594b3b5","chunk-3d2bfd50":"dee17b0c","chunk-3e4b6426":"85819f03","chunk-34e02f07":"010db3d3","chunk-5befd940":"c497d6b7","chunk-b50ad92e":"013e055b"}[e]+".css",o=c.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n("7db0"),n("b0c0");var a=n("2b0e"),r=n("2f62"),o=n("bfa9");a["default"].use(r["a"]);var u=function(){return{focusObject:{options:{}},localOptions:{},globalOptions:[],workspaceList:[],currentWorkspace:null,currentQuizGroup:{},currentMemberGroup:{},currentQuizEvent:{},homepageRoute:{name:""},isLoading:!1,debugMode:!1,stageAnswer:[],stagePendingTaskCount:0,stageHighlightLabel:null,profile:null,currentFolder:null,childrenFolderNum:0,editPermission:!1,cardDisplayMode:"list-mode",showGuidedTour:!0,solutionImage:{url:"",width:0,height:0},solutionContent:"",featureFlags:{}}};t["a"]=new r["a"].Store({state:u(),mutations:{updateCurrentFolder:function(e,t){e.currentFolder=t},resetCurrentFolder:function(e){e.currentFolder=null},onFocusObject:function(e,t){e.focusObject=t},setLocalOption:function(e,t){e.localOptions=t},resetLocalOption:function(e){e.localOptions={}},addGlobalOption:function(e,t){e.globalOptions.push(t)},setGlobalOption:function(e,t){e.globalOptions=t},editGlobalOption:function(e,t){var n=t.optionLabel,a=t.newValue,r=e.globalOptions.find((function(e){return e.label===n}));r&&(r.value=a)},updateWorkspaceList:function(e,t){e.workspaceList=t},changeWorkspace:function(e,t){e.currentWorkspace=t},changeQuizGroup:function(e,t){e.currentQuizGroup=t},saveProfile:function(e,t){e.profile=t},changeMemberGroup:function(e,t){e.currentMemberGroup=t},changeQuizEvent:function(e,t){e.currentQuizEvent=t},updateQuizGroupName:function(e,t){e.currentQuizGroup.metadata.name=t},updateLoading:function(e,t){e.isLoading=t},updateStageAnswer:function(e,t){e.stageAnswer=t},addStagePendingTask:function(e){e.stagePendingTaskCount+=1},finishStagePendingTask:function(e){e.stagePendingTaskCount-=1},cleanStagePendingTask:function(e){e.stagePendingTaskCount=0},updateStageHighlightLabel:function(e,t){e.stageHighlightLabel=t},resetStage:function(e){e.stageAnswer=[],e.localOptions={},e.stagePendingTaskCount=0},toggleDebugMode:function(e){e.debugMode=!e.debugMode},resetState:function(e){Object.assign(e,u())},updateEditPermission:function(e,t){e.editPermission=t},changeCardDisplayMode:function(e,t){e.cardDisplayMode=t},updateGuidedTour:function(e,t){e.showGuidedTour=t},updateSolutionImage:function(e,t){e.solutionImage=t},updateSolutionContent:function(e,t){e.solutionContent=t},updateFeatureFlags:function(e,t){e.featureFlags=t}},actions:{},modules:{},plugins:[(new o["a"]).plugin]})},1752:function(e,t,n){"use strict";var a=n("8d89"),r=n.n(a);r.a},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh-TW.json":"9ea5"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="49f8"},"521d":function(e,t,n){},5405:function(e,t,n){"use strict";var a=n("7cd2"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"60c8":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var a=n("5530"),r=(n("96cf"),n("1da1")),o=n("d4ec"),u=n("bee2"),i=n("6ad1"),c=n("88c3"),s=function(){function e(){Object(o["a"])(this,e)}return Object(u["a"])(e,null,[{key:"retrieve",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].get("workspace/quiz-groups/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:c["a"].t("未命名題組"),parentId:t},e.next=3,i["a"].post("workspace/quiz-groups/",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(a["a"])({},n),e.next=3,i["a"].post("workspace/quiz-groups/".concat(t),r);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"saveAsPdf",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].get("workspace/quiz-groups/".concat(t,"/pdf"),{responseType:"arraybuffer"});case 2:a=e.sent,r=a.data,o=new Blob([r],{type:"application/pdf"}),u=URL.createObjectURL(o),c=document.createElement("a"),c.href=u,c.download="".concat(n,".pdf"),c.click();case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()},"6ad1":function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),r=n.n(a),o=n("cd49"),u=n("aa73"),i=r.a.create({baseURL:"https://prod.qsticker.net/service/v1/",headers:{Accept:"*/*","Content-Type":"application/json",Authorization:{toString:function(){return o["default"].$cookies.get("token")}}}});i.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return o["default"].$notify({type:"error",title:"無法連線到伺服器",text:"請確認您的網路狀況是否正常"}),Promise.reject(e);var t="";switch(e.response.status){case 401:o["default"].$cookies.isKey("token")?o["default"].$notify({type:"info",title:"請重新登入",text:"您的驗證已過期，請重新登入"}):o["default"].$notify({type:"info",title:"登入失敗",text:"錯誤的帳號或密碼"}),u["a"].logout();break;case 403:o["default"].$notify({type:"error",title:"錯誤",text:"您沒有此資源的存取權限"});break;default:break}return""!==t&&t!==o["default"].$router.currentRoute.path&&o["default"].$router.push(t),Promise.reject(e)})),t["a"]=i},"7cd2":function(e,t,n){},"88c3":function(e,t,n){"use strict";n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0");var a=n("2b0e"),r=n("a925");function o(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}a["default"].use(r["a"]),t["a"]=new r["a"]({locale:"zh-TW",fallbackLocale:"zh-TW",messages:o()})},"8d89":function(e,t,n){},"9c0c":function(e,t,n){},"9ea5":function(e){e.exports=JSON.parse('{"brandname":"互動貼圖","發生未知的錯誤":"發生未知的錯誤","回首頁":"回首頁","檢查您的信箱來驗證您的 Email":"檢查您的信箱來驗證您的 Email","我們已經送出一封信件到您的 Email":"我們已經送出一封信件到您的 Email","沒有收到驗證信嗎？":"沒有收到驗證信嗎？","重新送出驗證信":"重新送出驗證信","Email 驗證協助我們確保您的資料是安全的。":"Email 驗證協助我們確保您的資料是安全的。","已重送驗證信":"已重送驗證信","登入":"登入","請填寫這個欄位":"請填寫這個欄位","第一次使用":"第一次使用","互動貼圖":"互動貼圖","註冊":"註冊","登入失敗，錯誤的帳號或密碼":"登入失敗，錯誤的帳號或密碼","題庫":"題庫","班級":"班級","測驗":"測驗","修改名稱":"修改名稱","序號":"序號","班級名稱":"班級名稱","學生人數":"學生人數","姓名":"姓名","學號":"學號","綁定帳號(電話)":"綁定帳號(電話)","刪除":"刪除","待審核":"待審核","已審核":"已審核","編輯":"編輯","儲存":"儲存","確定刪除嗎?":"確定刪除嗎?","這個學生資料刪掉就不會再回來了":"這個學生資料刪掉就不會再回來了","取消":"取消","確定":"確定","與我共享":"與我共享","我的班級":"我的班級","編輯測驗":"編輯測驗","基本設定":"基本設定","測驗名稱":"測驗名稱","測驗代碼":"測驗代碼","選擇班級":"選擇班級","選擇題組":"選擇題組","選擇測驗細節":"選擇測驗細節","儲存測驗":"儲存測驗","已儲存":"已儲存","上一頁":"上一頁","測驗總覽":"測驗總覽","尚未選擇":"尚未選擇","有效時間":"有效時間","至":"至","止":"止","全部":"全部","尚未安排":"尚未安排","發送時間":"發送時間","發送狀態":"發送狀態","排程發送中":"排程發送中","已發送完畢":"已發送完畢","再測一次":"再測一次","開啟":"開啟","關閉":"關閉","我的測驗":"我的測驗","加入題目音檔":"加入題目音檔","儲存修改":"儲存修改","加入題組":"加入題組","貼圖模板":"貼圖模板","編輯項目":"編輯項目","尚有檔案在上傳中，請等所有檔案上傳完成後重試...":"尚有檔案在上傳中，請等所有檔案上傳完成後重試...","我的題組":"我的題組","開始使用 互動貼圖":"開始使用 互動貼圖","使用者名稱":"使用者名稱","僅允許輸入 a-Z、0-9 (非首位字元)":"僅允許輸入 a-Z、0-9 (非首位字元)","您的使用者名稱":"您的使用者名稱","您的 Email":"您的 Email","密碼":"密碼","密碼長度須為 8 到 128 個字，且包含英文字母及數字。":"密碼長度須為 8 到 128 個字，且包含英文字母及數字。","您的密碼":"您的密碼","建立帳戶":"建立帳戶","請輸入符合規則的使用者名稱":"請輸入符合規則的使用者名稱","無效的 Email":"無效的 Email","密碼不符合複雜度要求":"密碼不符合複雜度要求","此使用者名稱已經被其他使用者註冊，請換一個名稱":"此使用者名稱已經被其他使用者註冊，請換一個名稱","錯誤":"錯誤","此 Email 已經被其他使用者註冊，請換一個 Email":"此 Email 已經被其他使用者註冊，請換一個 Email","認證中...":"認證中...","認證成功":"認證成功","回":"回","登入頁面":"登入頁面","。":"。","此連結無效。":"此連結無效。","請前往":"請前往","註冊頁面":"註冊頁面","重送認證連結。":"重送認證連結。","複製班級":"複製班級","送出":"送出","建立":"建立","只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。":"只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。","題組名稱":"題組名稱","重新命名":"重新命名","數學符號":"數學符號","輸入格內容":"輸入格內容","數值調整":"數值調整","上傳音檔":"上傳音檔","請控制音檔長度，音檔最長10分鐘":"請控制音檔長度，音檔最長10分鐘","無法讀取檔案":"無法讀取檔案","已選項目":"已選項目","n人":"{n} 人","n題":"{n} 題","資料夾":"資料夾","新資料夾":"新資料夾","勾選":"勾選","項目":"項目","人數":"人數","題數":"題數","測驗有效時間":"測驗有效時間","清空":"清空","開始日期":"開始日期","開始時間":"開始時間","結束日期":"結束日期","結束時間":"結束時間","測驗發送模式":"測驗發送模式","排程發送":"排程發送","發送日期":"發送日期","測驗發送時間":"測驗發送時間","手動發送":"手動發送","此測驗已發送":"此測驗已發送","儲存並":"儲存並","立即發送":"立即發送","代碼發送":"代碼發送","複製測驗代碼":"複製測驗代碼","已複製測驗代碼":"已複製測驗代碼","開啟再測一次":"開啟再測一次","創建班級":"創建班級","創建":"創建","目前尚無任何內容":"目前尚無任何內容","與使用者共用":"與使用者共用","不存在的使用者":"不存在的使用者","已新增使用者":"已新增使用者","輸入使用者名稱":"輸入使用者名稱","新增":"新增","移除":"移除","完成":"完成","編輯者":"編輯者","檢視者":"檢視者","使用者":"使用者","無權限":"無權限","複製班級名稱":"複製班級名稱","共用":"共用","刪掉就不會再回來囉":"刪掉就不會再回來囉","已作答數：":"已作答數：","正確率：":"正確率：","複製":"複製","統計資料":"統計資料","擁有者":"擁有者","檢視":"檢視","可編輯":"可編輯","可檢視":"可檢視","僅可使用":"僅可使用","未知":"未知","我的題庫":"我的題庫","創建新題組":"創建新題組","創建新班級":"創建新班級","創建新測驗":"創建新測驗","目前登入為":"目前登入為","登出":"登出","檔案":"檔案","選取":"選取","與我共用":"與我共用","建立新資料夾":"建立新資料夾","題組總覽":"題組總覽","題組擁有者":"題組擁有者","題目數量":"題目數量","題組內容":"題組內容","尚無內容":"尚無內容","解答":"解答","本題無解答":"本題無解答","第n題":"第 {n} 題","班級總覽":"班級總覽","班級擁有者":"班級擁有者","班級人數":"班級人數","已審核人數":"已審核人數","待審核人數":"待審核人數","代號":"代號","審核狀態":"審核狀態","未命名資料夾":"未命名資料夾","未命名題組":"未命名題組","未命名測驗":"未命名測驗","移至這裡":"移至這裡","讀取資料夾失敗，請稍後重試":"讀取資料夾失敗，請稍後重試","確認":"確認","請輸入測驗名稱":"請輸入測驗名稱","搜尋名稱":"搜尋名稱","沒有對應的搜尋結果":"沒有對應的搜尋結果","搜尋":"搜尋","有n個結果":"有{n}個結果","無法存取":"無法存取","移至":"移至","帳號":"帳號","您的帳號":"您的帳號","修改objectType名稱":"修改{objectType}名稱","其他文件":"其他文件","請輸入題組名稱":"請輸入題組名稱","請輸入班級名稱":"請輸入班級名稱","請輸入名稱":"請輸入名稱","推送方式":"推送方式","週期性推送":"週期性推送","一次性推送":"一次性推送","待發送題組":"待發送題組","已發送題組":"已發送題組","尚未有發送紀錄":"尚未有發送紀錄","同發送時間":"同發送時間","週期設定":"週期設定","週":"週","日":"日","週期細節":"週期細節","每":"每","週間日期":"週間日期","一":"一","二":"二","三":"三","四":"四","五":"五","六":"六","星期日":"日","日期調整":"日期調整","週期性推送設定":"週期性推送設定","此測驗名稱僅在此平台顯示，測驗邀請將會以題組名稱作為測驗名稱":"此測驗名稱僅在此平台顯示，測驗邀請將會以題組名稱作為測驗名稱","其他設定":"其他設定","最近發送測驗資訊":"最近發送測驗資訊","排程中的發送資訊":"排程中的發送資訊","已完成的發送資訊":"已完成的發送資訊","無限制":"無限制","最近發送時間":"最近發送時間","有效時間(始)":"有效時間(始)","有效時間(終)":"有效時間(終)","重送":"重送","設定更多":"設定更多","測驗發送後":"測驗發送後","小時":"小時","分鐘":"分鐘","已發送題組數":"已發送題組數","總發送題組數":"總發送題組數","最近傳送時間":"最近傳送時間","更多":"更多","排程中":"排程中","總題數":"總題數","縮圖":"縮圖","總人數":"總人數","發送後":"發送後","最新":"最新","已完成發送":"已完成發送","僅在週期性推送開啟時適用重送機制":"僅在週期性推送開啟時適用重送機制","已在排程中":"已在排程中","請先設定發送日期":"請先設定發送日期","週期性推送不接受一次性重送":"週期性推送不接受一次性重送","名稱":"名稱","權限":"權限","總數":"總數","重新安排測驗":"重新安排測驗","開啟排程發送機制":"開啟排程發送機制","發送代碼":"發送代碼","請確定儲存後再複製":"請確定儲存後再複製","尚未選擇題組":"尚未選擇題組","複製代碼":"複製代碼","未使用排程發送功能":"未使用排程發送功能","複製代碼請先儲存測驗":"複製代碼請先儲存測驗","自動審核":"自動審核","本題無答案":"本題無答案","無答案":"無答案","輸入格內容設定":"輸入格內容設定","文字":"文字","圖片":"圖片","字體大小":"字體大小","圖片尺寸":"圖片尺寸","留白空間":"留白空間","圓角":"圓角"}')},aa73:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("d4ec"),r=n("bee2"),o=n("cd49"),u=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,null,[{key:"loginCheck",value:function(){return!!o["default"].$cookies.isKey("token")||(this.logout(),!1)}},{key:"logout",value:function(){o["default"].$cookies.isKey("token")&&o["default"].$cookies.remove("token"),o["default"].$store.commit("resetState"),o["default"].$router.push("/login")}}]),e}()},b8fd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("99af"),n("4160"),n("159b"),n("96cf");var a=n("1da1"),r=n("d4ec"),o=n("bee2"),u=n("bc3a"),i=n.n(u),c=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,null,[{key:"fetchAllFeatureFlags",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="production",a="https://feature-flag-5iz3p3mbtq-de.a.run.app/feature-flag/list?email=".concat(t,"&environment=").concat(n),e.next=4,i.a.get(a);case 4:return r=e.sent,o={},r.data.forEach((function(e){o[e.feature_flag_name]=e.access})),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("3f9d"),r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var u=n("bc3a"),i=n.n(u),c=n("2106"),s=n.n(c),l=n("9062"),d=n.n(l),f=(n("e40d"),n("2b27")),h=n.n(f),p=n("4eb5"),m=n.n(p),b=(n("b0c0"),n("d3b7"),n("8c4f"));r["default"].use(b["a"]);var g=[{path:"*",redirect:"/"},{path:"/",alias:["/login"],name:"Login",component:function(){return n.e("chunk-205d914a").then(n.bind(null,"a55b"))}},{path:"/under-construction",name:"UnderConstruction",component:function(){return n.e("about").then(n.bind(null,"9fd2"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2b91cc66").then(n.bind(null,"73cf"))}},{path:"/finish-register",name:"FinishRegister",component:function(){return n.e("chunk-38e66ea8").then(n.bind(null,"0a47"))}},{path:"/verify",name:"RegisterVerification",component:function(){return n.e("chunk-3d2bfd50").then(n.bind(null,"cd4b"))}},{path:"/manager",name:"Manager",component:function(){return n.e("about").then(n.bind(null,"1692"))},children:[{path:"workspace",name:"Workspace",component:function(){return n.e("chunk-b50ad92e").then(n.bind(null,"20b0"))},children:[{path:"quizgroups/local/:folderId",name:"QuizGroups",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"quizgroups/share/:folderId",name:"QuizGroupSoftLinks",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"quizgroups/trash/:folderId",name:"QuizGroupTrash",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"membergroups/local/:folderId",name:"MemberGroups",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"membergroups/share/:folderId",name:"MemberGroupSoftLinks",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"membergroups/trash/:folderId",name:"MemberGroupTrash",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-6b27b25e")]).then(n.bind(null,"5f2b"))}},{path:"quizevents/local/:folderId",name:"QuizEvents",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-2904004b")]).then(n.bind(null,"8496"))}},{path:"quizevents/share/:folderId",name:"QuizEventSoftLinks",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-2904004b")]).then(n.bind(null,"8496"))}},{path:"quizevents/trash/:folderId",name:"QuizEventTrash",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-c61e5506"),n.e("chunk-2904004b")]).then(n.bind(null,"8496"))}}]},{path:"quizgroup-maker",name:"QuizGroupMaker",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-b1a482b4"),n.e("chunk-4a5f46a6"),n.e("chunk-84dce888")]).then(n.bind(null,"680f"))}},{path:"quizgroup-preview",name:"QuizGroupPreview",component:function(){return Promise.all([n.e("chunk-4a5f46a6"),n.e("chunk-34e02f07")]).then(n.bind(null,"193a"))}},{path:"membergroup-maker",name:"MemberGroupMaker",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-b1a482b4"),n.e("chunk-5a6f62b6")]).then(n.bind(null,"2268"))}},{path:"membergroup-preview",name:"MemberGroupPreview",component:function(){return n.e("chunk-3e4b6426").then(n.bind(null,"fbb6"))}},{path:"memberGroup-statistics",name:"MemberGroupStatistics",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-b1a482b4"),n.e("chunk-15684da7")]).then(n.bind(null,"38dc"))}},{path:"quizevent-maker",name:"QuizEventMaker",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-100cdea2"),n.e("chunk-b1a482b4"),n.e("chunk-4a5f46a6"),n.e("chunk-69c0dcf9")]).then(n.bind(null,"66e7"))}},{path:"quizevent-preview",name:"QuizEventPreview",component:function(){return Promise.all([n.e("chunk-13f1ec5a"),n.e("chunk-5e5c435d")]).then(n.bind(null,"c6d6"))}}]},{path:"/error",name:"Error",component:function(){return n.e("chunk-5befd940").then(n.bind(null,"dda8"))}}],k=new b["a"]({routes:g,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),v=b["a"].prototype.push;b["a"].prototype.push=function(e){var t=this;return new Promise((function(n,a){v.call(t,e,(function(){n(t.currentRoute)}),(function(e){"NavigationDuplicated"===e.name?n(t.currentRoute):a(e)}))}))};var y=k,w=n("0613"),z=n("1881"),S=n.n(z),E=n("5887"),C=n.n(E),T=n("8203"),O=n.n(T),P=n("ee98"),_=n.n(P),N=n("4971"),$=n.n(N),G=n("f206"),Q=n.n(G),M=(n("24df"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("loading",{attrs:{active:e.$store.state.isLoading},on:{"update:active":function(t){return e.$set(e.$store.state,"isLoading",t)}}}),n("notifications",{attrs:{position:"bottom center","ignore-duplicates":!0}}),e.debugMode?n("notifications",{attrs:{group:"debug",position:"bottom left",duration:-1}}):e._e(),n("router-view",{staticClass:"router-view"})],1)}),x=[],L=(n("96cf"),n("1da1")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"navbar-brand"},[n("DebugToggler",[n("router-link",{attrs:{to:e.homepageLocation}},[n("i",{staticClass:"far fa-comment fa-flip-horizontal"}),e._v(" "+e._s(e.$t("brandname"))+" ")])],1)],1),e.$store.state.featureFlags.test?n("div",{staticStyle:{color:"red"}},[e._v(" Test Feature Enabled ")]):e._e(),e.isLogin&&"QuizGroupMaker"===e.$route.name?n("QuizGroupNameInput",{staticClass:"group-name"}):e._e(),n("div",{staticClass:"rwd-icon",on:{click:function(t){e.showSideNav=!0}}},[e._m(0)]),n("div",{staticClass:"nav",class:{"side-close":!e.showSideNav}},[n("div",{staticClass:"rwd-icon",on:{click:e.closeSideNav}},[e._m(1)]),e.isLogin?n("div",{staticClass:"rwd-title"},[n("h6",[e._v(e._s(e.$t("頁面選擇")))])]):e._e(),e.isLogin?n("div",{staticClass:"nav-btn-wrapper",on:{click:e.closeSideNav}},e._l(e.links,(function(t,a){return n("router-link",{key:a,staticClass:"nav-btn",class:{stayHere:e.$route.path.includes(t.location.name.toLowerCase().slice(0,-1))},attrs:{to:t.location}},[e._v(" "+e._s(t.label)+" ")])})),1):e._e(),n("div",{staticClass:"rwd-title"},[n("h6",[e._v(e._s(e.$t("功能選擇")))])]),n("div",{staticClass:"lang-btn",on:{click:e.closeSideNav}},[n("LanguageSelector",{staticClass:"mr-2"})],1),e.isLogin?n("div",{staticClass:"login-btn",on:{click:e.closeSideNav}},[e.isLogin?n("b-dropdown",{attrs:{id:"account-dropdown",right:"",size:"sm",variant:"light","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-avatar",{attrs:{size:"1.5rem"}}),n("i",{staticClass:"fas fa-sort-down ml-2"})]},proxy:!0}],null,!1,1756701510)},[n("b-dropdown-item",[e._v(" "+e._s(e.$t("目前登入為"))+" "),n("br"),n("strong",[e._v(e._s(e.username))])]),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v(" "+e._s(e.$t("登出"))+" ")])],1):e._e()],1):n("div",{staticClass:"not-login-btn",on:{click:e.closeSideNav}},[n("b-btn",{staticClass:"px-3 py-1",attrs:{variant:"light",to:"/register"}},[e._v(" "+e._s(e.$t("註冊"))+" ")]),n("b-btn",{staticClass:"px-3 py-1 mx-1",attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v(" "+e._s(e.$t("登入"))+" ")])],1)])],1)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"fas fa-bars"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"fas fa-times"})])}],I=(n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("div",{staticClass:"label"},[e._v(" "+e._s(e.$t("題組名稱"))+"： ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.quizGroupName,expression:"quizGroupName"}],attrs:{type:"text",name:"","data-toggle":"tooltip","data-placement":"top",title:e.$t("重新命名")},domProps:{value:e.quizGroupName},on:{input:[function(t){t.target.composing||(e.quizGroupName=t.target.value)},e.autoSaveQuizGroupName]}})])}),A=[],F=n("60c8"),q=r["default"].extend({data:function(){return{autoSaveTimerId:-1}},computed:{quizGroupName:{get:function(){return this.$store.state.currentQuizGroup.metadata.name},set:function(e){this.$store.commit("updateQuizGroupName",e)}}},methods:{autoSaveQuizGroupName:function(){var e=this;clearTimeout(this.autoSaveTimerId),this.autoSaveTimerId=setTimeout((function(){var t=e.$store.state.currentQuizGroup,n=t.uuid,a=t.metadata;F["a"].update(n,{name:a.name}).catch((function(t){409===t.response.status&&e.$notify({type:"error",title:"更改名稱失敗",text:"此名稱已經被同資料夾內的其他檔案使用"})}))}),1e3)}}}),R=q,U=(n("1752"),n("2877")),W=Object(U["a"])(R,I,A,!1,null,"49aa520b",null),B=W.exports,H=n("aa73"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:function(t){return t.preventDefault(),e.debugModeToggler(t)}}},[e._t("default")],2)},Y=[],Z=r["default"].extend({name:"DebugToggler",data:function(){return{clickCount:0,triggerThreshold:6,timeout:3,timeoutId:-1}},computed:{debugMode:function(){return this.$store.state.debugMode}},methods:{debugModeToggler:function(){var e=this;this.clickCount+=1,this.clickCount>=this.triggerThreshold?(this.$store.commit("toggleDebugMode"),this.$nextTick((function(){e.$notify({type:"info",title:e.debugMode?"Debug mode is ON":"Debug mode is OFF"})})),clearTimeout(this.timeoutId),this.clickCount=0):(clearTimeout(this.timeoutId),setTimeout((function(){e.clickCount=0}),1e3*this.timeout))}}}),J=Z,K=Object(U["a"])(J,V,Y,!1,null,null,null),X=K.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-dropdown",{attrs:{id:"lang-dropdown",right:"",size:"sm",variant:"light","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("div",{staticClass:"center"},[n("i",{staticClass:"fas fa-globe-americas",staticStyle:{"font-size":"1.5rem",color:"#6c757d"}}),n("i",{staticClass:"fas fa-sort-down ml-2",staticStyle:{"margin-bottom":"1px"}})])]},proxy:!0}])},e._l(e.langs,(function(t,a){return n("b-dropdown-item",{key:a,on:{click:function(n){n.preventDefault(),e.$i18n.locale=t.code}}},[e._v(" "+e._s(t.label)+" ")])})),1)},te=[],ne=r["default"].extend({data:function(){return{langs:[{label:"繁體中文",code:"zh-TW"},{label:"English",code:"en"}]}}}),ae=ne,re=(n("5405"),Object(U["a"])(ae,ee,te,!1,null,"faa7cfe6",null)),oe=re.exports,ue=r["default"].extend({components:{QuizGroupNameInput:B,DebugToggler:X,LanguageSelector:oe},data:function(){return{showSideNav:!1}},computed:{links:function(){return this.$store.state.currentWorkspace?[{location:{name:"QuizGroups",params:{folderId:this.$store.state.currentWorkspace.quizFolders.local}},label:this.$t("題庫").toString()},{location:{name:"MemberGroups",params:{folderId:this.$store.state.currentWorkspace.memberFolders.local}},label:this.$t("班級").toString()},{location:{name:"QuizEvents",params:{folderId:this.$store.state.currentWorkspace.eventFolders.local}},label:this.$t("測驗").toString()}]:[]},username:function(){return this.$store.state.profile?this.$store.state.profile.username:"unknown"},homepageLocation:function(){return"Login"!==this.$route.name&&this.$store.state.currentWorkspace?{name:"QuizGroups",params:{folderId:this.$store.state.currentWorkspace.quizFolders.local}}:{name:"Login"}},isLogin:function(){return Boolean(this.$store.state.profile)}},methods:{logout:function(){H["a"].logout()},closeSideNav:function(){this.showSideNav=!1}}}),ie=ue,ce=(n("dc31"),Object(U["a"])(ie,j,D,!1,null,"76eb3f19",null)),se=ce.exports,le=n("b8fd"),de={components:{navbar:se},computed:{debugMode:function(){return this.$store.state.debugMode}},mounted:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$store.state.profile){t.next=6;break}return t.next=4,le["a"].fetchAllFeatureFlags(e.$store.state.profile.username);case 4:n=t.sent,e.$store.commit("updateFeatureFlags",n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},fe=de,he=(n("5c0b"),Object(U["a"])(fe,M,x,!1,null,null,null)),pe=he.exports,me=(n("20d0"),n("88c3"));r["default"].use(Q.a),r["default"].use(h.a),r["default"].$cookies.config("7d"),r["default"].use(m.a),r["default"].use(a["a"]),r["default"].use(S.a,{dialog:!0}),r["default"].config.productionTip=!1,r["default"].use(s.a,i.a),r["default"].component("Loading",d.a),r["default"].component("VueSlider",$.a),r["default"].component("VueNumberInput",O.a),r["default"].use(_.a),r["default"].use(C.a,{componentPrefix:"vc"}),w["a"].commit("updateLoading",!1),document.addEventListener("keydown",(function(e){"Enter"===e.key&&(document.execCommand("insertLineBreak"),e.preventDefault())}));t["default"]=new r["default"]({router:y,store:w["a"],i18n:me["a"],render:function(e){return e(pe)}}).$mount("#app")},dc31:function(e,t,n){"use strict";var a=n("521d"),r=n.n(a);r.a},edd4:function(e){e.exports=JSON.parse('{"brandname":"QSticker","發生未知的錯誤":"Unknown error","回首頁":"Back to home page","檢查您的信箱來驗證您的 Email":"Check your mailbox to verify your email","我們已經送出一封信件到您的 Email":"We have sent you an email","沒有收到驗證信嗎？":"Didn\'t you receive the verification letter?","重新送出驗證信":"Resend verification letter","Email 驗證協助我們確保您的資料是安全的。":"Email verification helps us ensure that your information is safe.","已重送驗證信":"Resent verification letter","登入":"Login","請填寫這個欄位":"Please fill in this field.","第一次使用":"First time using ","互動貼圖":"QSticker","註冊":"Register","登入失敗，錯誤的帳號或密碼":"Login failed. Wrong account or password.","題庫":"Quiz Group","班級":"Member Group","測驗":"Quiz Event","修改名稱":"Edit name","序號":"Serial number","班級名稱":"Member Group name","學生人數":"Student quantity","姓名":"Name","學號":"ID","綁定帳號(電話)":"Binding account (phone number)","刪除":"Delete","待審核":"Pending","已審核":"Confirmed","編輯":"Edit","儲存":"Save","確定刪除嗎?":"Are you sure you want to delete it?","這個學生資料刪掉就不會再回來了":"It cannot be restored after deletion.","取消":"Cancel","確定":"Yes","與我共享":"Share with me","我的班級":"My Member Groups","編輯測驗":"Edit Quiz Event","基本設定":"Basic Setting","測驗名稱":"Quiz Event Name","測驗代碼":"Quiz Event ID","選擇班級":"Choose Member Group","選擇題組":"Choose Quiz Group","選擇測驗細節":"Quiz Event Details","儲存測驗":"Save","已儲存":"Saved","上一頁":"Previous page","測驗總覽":"Quiz Event overview","尚未選擇":"Not yet selected","有效時間":"Effective time","至":"to","止":" ","全部":"All","尚未安排":"Not yet scheduled","發送時間":"Time","發送狀態":"Send status","排程發送中":"Scheduled","已發送完畢":"Sent complete","再測一次":"Retest Quiz Event","開啟":"Open","關閉":"Close","我的測驗":"My Quiz Events","加入題目音檔":"Add an audio file","儲存修改":"Save","加入題組":"Add","貼圖模板":"QSticker template","編輯項目":"Others","尚有檔案在上傳中，請等所有檔案上傳完成後重試...":"There are still files being uploaded. Please wait until all files are uploaded and try again...","我的題組":"My Quiz Groups","開始使用 互動貼圖":"Start Using QSticker","使用者名稱":"User name","僅允許輸入 a-Z、0-9 (非首位字元)":"Only allow input a-Z, and 0-9 (non-first character)","您的使用者名稱":"Your User Name","您的 Email":"Your Email","密碼":"Passwoed","密碼長度須為 8 到 128 個字，且包含英文字母及數字。":"The password must be 8 to 128 characters and contains English letters and numbers.","您的密碼":"Your Password","建立帳戶":"Create Account","請輸入符合規則的使用者名稱":"Please enter a username that meets the rules","無效的 Email":"Invalid Email","密碼不符合複雜度要求":"The password does not meet the complexity requirements","此使用者名稱已經被其他使用者註冊，請換一個名稱":"This username has already been registered, please change it.","錯誤":"Error","此 Email 已經被其他使用者註冊，請換一個 Email":"This email has already been registered, please change it.","認證中...":"Authenticating...","認證成功":"Authentication is successful","回":"Back to ","登入頁面":"login page ","。":".","此連結無效。":"This link is invalid.","請前往":"Please goto ","註冊頁面":"Register page ","重送認證連結。":"and resend the authentication link.","複製班級":"Copy Member Group","送出":"Done","建立":"Create","只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。":"Only Chinese, English and numbers are allowed, and at least two characters. No blanks, special symbols(~!@#$%^&*()_/)","題組名稱":"Quiz Group name","重新命名":"Rename","數學符號":"Mathematics Symbol","輸入格內容":"Content","數值調整":"Value adjustment","上傳音檔":"Upload audio file","請控制音檔長度，音檔最長10分鐘":"Please control the length of the audio file, the longest audio file is 10 minutes.","無法讀取檔案":"Cannot read file","已選項目":"Choosed items","n人":"{n} member | {n} member | {n} members","n題":"{n} quiz | {n} quiz | {n} quizzes","資料夾":"Folder","新資料夾":"New Folder","勾選":"Check","項目":"Item","人數":"Number of member","題數":"Number of question","測驗有效時間":"Available Time","清空":"Clear","開始日期":"Start Date","開始時間":"Start","結束日期":"End Date","結束時間":"End","測驗發送模式":"Quiz Event Sending Mode","排程發送":"Scheduled","發送日期":"Date","測驗發送時間":"Send Time","手動發送":"Send manually","此測驗已發送":"The Quiz Event has been sent","儲存並":"Save and ","立即發送":"send now","代碼發送":"Send by Quiz Event ID","複製測驗代碼":"Copy the Quiz Event ID","已複製測驗代碼":"Copied","開啟再測一次":"Retest Quiz Event","創建班級":"Create New Member Group","創建":"Create","目前尚無任何內容":"No any content yet","與使用者共用":"Share with other user","不存在的使用者":"The user doesn\'t exist","已新增使用者":"Add successfully","輸入使用者名稱":"input the username","新增":"Add","移除":"Remove","完成":"Done","編輯者":"Editor","檢視者":"Viewer","使用者":"User","無權限":"No permission","複製班級名稱":"Copy Member Group name","共用":"Share","刪掉就不會再回來囉":"It cannot be restored after deletion.","已作答數：":"Number of answers：","正確率：":"Correct Rate：","複製":"Copy","統計資料":"Statistical data","擁有者":"Owner","檢視":"View","可編輯":"Editable","可檢視":"Viewable","僅可使用":"Usable","未知":"Unknown","我的題庫":"My Quiz Groups","創建新題組":"Create New Quiz Group","創建新班級":"Create Member Group","創建新測驗":"Create New Quiz Event","目前登入為":"Currently logged in as ","登出":"Log out","檔案":"Files","選取":"Select","與我共用":"Shared with me","建立新資料夾":"Create New Folder","題組總覽":"Quiz Group Preview","題組擁有者":"Owner","題目數量":"Quiz Count","題組內容":"Contents","尚無內容":"No content yet","解答":"Answer","本題無解答":"No Answer","第n題":"Quiz {n}","班級總覽":"Member Group Preview","班級擁有者":"Owner","班級人數":"Total Member Count","已審核人數":"Confirmed Member Count","待審核人數":"Pending Member Count","代號":"Student ID","審核狀態":"Confirm Status","未命名資料夾":"New Folder","未命名題組":"New Quiz Group","未命名測驗":"New Quiz Event","移至這裡":"Move here","讀取資料夾失敗，請稍後重試":"Failed to read the folder, please try again later","確認":"Done","請輸入測驗名稱":"Please enter Quiz Event name","搜尋名稱":"Search","沒有對應的搜尋結果":"No result","搜尋":"Search for","有n個結果":"{n} result","無法存取":"Can\'t access","移至":"move","帳號":"Account","您的帳號":"Your Account","修改objectType名稱":"Edit {objectType} Name","其他文件":"Others","請輸入題組名稱":"Please enter Quiz Group name","請輸入班級名稱":"Please enter Member Group name","請輸入名稱":"Please enter name","推送方式":"Sending method","週期性推送":"Periodic scheduled","一次性推送":"One-time scheduled","待發送題組":"To be sent","已發送題組":"Has been sent","尚未有發送紀錄":"No sending record yet","同發送時間":"Same as sending time","週期設定":"Period setting","週":"Week","日":"Day","週期細節":"Cycle details","每":"Every","週間日期":"Day of the week","一":"MON","二":"TUE","三":"WED","四":"THU","五":"FRI","六":"SAT","星期日":"SUN","日期調整":"Date adjustment","週期性推送設定":"Periodic scheduled settings","此測驗名稱僅在此平台顯示，測驗邀請將會以題組名稱作為測驗名稱":"Only displayed on this platform","其他設定":"Other settings","最近發送測驗資訊":"The latest sent quiz information","排程中的發送資訊":"Scheduled delivery information","已完成的發送資訊":"Completed sending information","無限制":"Unlimited","最近發送時間":"Last sent time","有效時間(始)":"Available time","有效時間(終)":"Available time","重送":"Resend","設定更多":"Set more","測驗發送後":"After the quiz","小時":"Hour","分鐘":"Minute","已發送題組數":"Sent","總發送題組數":"Total","最近傳送時間":"Latest time","更多":"More","排程中":"","總題數":"Total","縮圖":"","總人數":"Total","發送後":"After sending","最新":"Latest ","已完成發送":"Finished sending","僅在週期性推送開啟時適用重送機制":"Applied when periodic scheduled is turned on","已在排程中":"Scheduled","請先設定發送日期":"Please set the delivery date first","週期性推送不接受一次性重送":"週期性推送不接受一次性重送","名稱":"Name","權限":"Authority","總數":"Total","重新安排測驗":"Reschedule","開啟排程發送機制":"Open scheduled mode","發送代碼":"Quiz Event ID","請確定儲存後再複製":"Please make sure to save and then copy","尚未選擇題組":"No quiz group selected","複製代碼":"copy code","未使用排程發送功能":"Not using this function","複製代碼請先儲存測驗":"Please save the quiz first before copy code","自動審核":"Automatic confirmation","本題無答案":"No answer","無答案":"No answer","輸入格內容設定":"Setting","文字":"Text","圖片":"Image","字體大小":"Size","圖片尺寸":"Size","留白空間":"Margins","圓角":"Border radius"}')}});
//# sourceMappingURL=app.a1185326.js.map