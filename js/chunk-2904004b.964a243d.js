(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2904004b"],{"0f3a":function(t,e,s){},"18bc":function(t,e,s){"use strict";var i=s("0f3a"),a=s.n(i);a.a},"339e":function(t,e,s){"use strict";var i=s("7e7e"),a=s.n(i);a.a},"7e7e":function(t,e,s){},8496:function(t,e,s){"use strict";s.r(e),s.d(e,"Visibility",(function(){return i}));var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"workspace-browser-event"},[s("div",{staticClass:"top mx-4"},[s("div",{staticStyle:{"min-width":"110px"}},[t.currentFolder?s("Breadcrumb",{attrs:{situation:"workspaceBrower",path:t.currentFolder.path},on:{visitFolder:t.visitFolder}}):t._e()],1),s("div",{staticClass:"action-area p-4"},[t.selectModeOpen&&t.selection.length>0?s("div",{staticClass:"action-btns"},[s("div",{staticClass:"buttons"},[1===t.selection.length&&"WorkspaceFolder"!==t.selection[0].metadata.type?s("b-button",{staticClass:"btn-preview",on:{click:function(e){return e.preventDefault(),t.enterGroupPreview(e)}}},[s("i",{staticClass:"fas fa-eye"}),s("span",{staticClass:"remind"},[t._v(t._s(t.$t("檢視")))])]):t._e(),1===t.selection.length&&"WorkspaceFolder"!==t.selection[0].metadata.type?s("b-button",{staticClass:"btn-edit",on:{click:function(e){return e.preventDefault(),t.enterGroup(e)}}},[s("i",{staticClass:"fas fa-pen"}),s("span",{staticClass:"remind"},[t._v(t._s(t.$t("編輯")))])]):t._e(),1===t.selection.length&&"WorkspaceFolder"===t.selection[0].metadata.type?s("b-button",{staticClass:"btn-edit-name",on:{click:function(e){return e.preventDefault(),t.$modal.show("update-workspace-object-name-modal",{workspaceObject:t.selection[0]})}}},[s("i",{staticClass:"fas fa-pen"}),s("span",{staticClass:"remind"},[t._v(t._s(t.$t("編輯")))])]):t._e(),s("b-button",{staticClass:"btn-remove",on:{click:function(e){return e.preventDefault(),t.removeCards(e)}}},[s("i",{staticClass:"fas fa-trash-alt"}),s("span",{staticClass:"remind"},[t._v(t._s(t.$t("移除")))])]),s("b-button",{staticClass:"btn-move",on:{click:function(e){return e.preventDefault(),t.moveCards(e)}}},[s("i",{staticClass:"fas fa-arrows-alt"}),s("span",{staticClass:"remind"},[t._v(t._s(t.$t("移至")))])])],1)]):t._e(),t.$route.path.includes("share")?t._e():s("div",{staticClass:"btn-area"},[s("button",{staticClass:"select-btn btn btn-secondary",on:{click:t.toggleSelectMode}},[t.selectModeOpen?s("span",[t._v(t._s(t.$t("取消")))]):t._e(),t.selectModeOpen?t._e():s("span",[t._v(t._s(t.$t("選取")))])]),s("button",{staticClass:"display-btn btn",on:{click:t.toggleCardDisplayMode}},["list-mode"===t.cardDisplayMode?s("span",[s("i",{staticClass:"fas fa-th"})]):t._e(),"pic-mode"===t.cardDisplayMode?s("span",[s("i",{staticClass:"fas fa-bars"})]):t._e()])])])]),s("div",{staticClass:"p-4"},[t.subfolders.length>0?s("div",{staticClass:"folder-area mb-4"},[s("h1",{staticClass:"m-3 part"},[t._v(" "+t._s(t.$t("資料夾"))+" ")]),s("FolderList",{attrs:{subfolders:t.subfolders,selection:t.selection,"select-mode-open":t.selectModeOpen},on:{toggle:t.toggleSelection}})],1):t._e(),t.workspaceObjects.length>0?s("div",{staticClass:"workspace-objects"},[s("div",{staticClass:"search-area"},[s("h1",{staticClass:"ml-3 part"},[t._v(" "+t._s(t.$t("檔案"))+" "),"pic-mode"===t.cardDisplayMode?s("span",{staticClass:"remind"},[t._v(" * 右上角【"),s("i",{staticClass:"fas fa-bars"}),t._v("】按鈕可將圖示顯示切換為條列式顯示 ")]):t._e()]),s("div",{staticClass:"input-group part"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"form-control",attrs:{id:"search",type:"text",placeholder:t.$t("請輸入測驗名稱")},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),t.searchString?s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"input-group-text clear-btn",on:{click:function(e){t.searchString=""}}},[s("i",{staticClass:"fas fa-times"})])]):t._e(),""!==t.trimSearchString?s("div",{staticClass:"searchTip"},[t._v(" "+t._s(t.$t("搜尋"))+' "'+t._s(t.trimSearchString)+'"：'+t._s(t.$t("有n個結果",{n:t.searchList.length}))+" ")]):t._e()])]),s("div",{staticClass:"filter-area"},[s("ul",{staticClass:"nav nav-tabs"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.visibility===t.Visibility.ALL},on:{click:function(e){e.preventDefault(),t.visibility=t.Visibility.ALL}}},[t._v(" "+t._s(t.$t("全部"))+" ("+t._s(t.workspaceObjects.length)+") ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.visibility===t.Visibility.SENT},on:{click:function(e){e.preventDefault(),t.visibility=t.Visibility.SENT}}},[t._v(" "+t._s(t.$t("已發送完畢"))+" ("+t._s(t.sentList.length)+") ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.visibility===t.Visibility.SCHEDULED},on:{click:function(e){e.preventDefault(),t.visibility=t.Visibility.SCHEDULED}}},[t._v(" "+t._s(t.$t("排程發送中"))+" ("+t._s(t.scheduledList.length)+") ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.visibility===t.Visibility.NOT_SCHEDULED},on:{click:function(e){e.preventDefault(),t.visibility=t.Visibility.NOT_SCHEDULED}}},[t._v(" "+t._s(t.$t("尚未安排"))+" ("+t._s(t.notScheduledList.length)+") ")])])])]),"list-mode"===t.cardDisplayMode?s("div",{staticClass:"t-head"},[s("div",{staticClass:"content"},[s("div",{staticClass:"section"},[s("div",{staticClass:"group-title"},[t._v(" "+t._s(t.$t("測驗名稱"))+" ")]),s("div",{staticClass:"sending-status"},[t._v(" "+t._s(t.$t("已發送題組數"))+" / "),s("br"),t._v(" "+t._s(t.$t("總發送題組數"))+" ")])]),s("div",{staticClass:"sending-time"},[t._v(" "+t._s(t.$t("最近傳送時間"))+" ")]),s("div",{staticClass:"btn-area"},[t._v(" "+t._s(t.$t("更多"))+" ")])])]):t._e(),s("transition-group",{staticClass:"transition-tag",attrs:{name:"list-complete",tag:"div"}},t._l(t.filteredMethodList,(function(e,i){return s("div",{key:e.uuid,class:{eventItem:"list-mode"===t.cardDisplayMode,"my-3":"pic-mode"===t.cardDisplayMode,"list-complete-item":"pic-mode"===t.cardDisplayMode,"col-lg-4":"pic-mode"===t.cardDisplayMode,"col-xl-3":"pic-mode"===t.cardDisplayMode,"ui-card":"pic-mode"===t.cardDisplayMode}},[s("div",{staticClass:"selectedItem"},[s("WorkspaceObjectItem",{attrs:{"workspace-object":e,"default-selected":!1,"allow-select-many":!0,"select-mode-open":t.selectModeOpen,selection:t.selection,index:i+1,"display-mode":"workspaceSelectFile"},on:{toggle:function(s){return t.toggleSelection(e)},removeMe:function(s){return t.removeGroupCard(e)}}})],1)])})),0)],1):t._e(),0===t.workspaceObjects.length&&0===t.subfolders.length?s("div",[s("EmptyHint")],1):t._e()]),s("MovePositionModal",{attrs:{selection:t.selection,current:t.currentFolder},on:{submit:t.moveCardsSubmit}}),s("UpdateWorkspaceObjectNameModal",{on:{submit:t.reload}}),s("v-dialog")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text",attrs:{for:"search"}},[s("i",{staticClass:"fas fa-search"})])])}],r=(s("99af"),s("4de4"),s("c740"),s("4160"),s("c975"),s("a434"),s("b0c0"),s("d3b7"),s("3ca3"),s("498a"),s("159b"),s("ddb0"),s("96cf"),s("1da1")),o=s("2b0e"),c=s("d98b"),l=s("aa73"),u=s("0ccf"),d=s("f410"),p=s("18ad"),m=s("b26e"),h=s("010d"),v=s("8eb5"),f=s("dcc1"),b=s("add5");(function(t){t[t["ALL"]=0]="ALL",t[t["SENT"]=1]="SENT",t[t["SCHEDULED"]=2]="SCHEDULED",t[t["NOT_SCHEDULED"]=3]="NOT_SCHEDULED"})(i||(i={}));var g=o["default"].extend({components:{EmptyHint:c["a"],FolderList:u["a"],Breadcrumb:h["a"],WorkspaceObjectItem:v["a"],MovePositionModal:f["a"],UpdateWorkspaceObjectNameModal:b["a"]},data:function(){return{selection:[],selectModeOpen:!1,searchString:"",Visibility:i,visibility:i.ALL,showGuidedTour:!0,sentList:[],scheduledList:[],notScheduledList:[]}},computed:{isLoading:function(){return this.$store.state.isLoading},currentFolder:function(){return this.$store.state.currentFolder},cardDisplayMode:function(){return this.$store.state.cardDisplayMode},subfolders:function(){if(this.currentFolder){var t=this.currentFolder.children.filter((function(t){return t.metadata.type===p["a"].Folder})),e=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});return t.sort((function(t,s){return e.compare(t.metadata.name.toUpperCase().trim(),s.metadata.name.toUpperCase().trim())}))}return[]},showGuidedTourItem:function(){if(this.currentFolder){var t="/manager/workspace/quizevents/local/".concat(this.currentFolder.uuid);if(this.showGuidedTour&&this.$route.path===t)return!0}return!1},workspaceObjects:function(){if(this.currentFolder){var t=this.currentFolder.children.filter((function(t){return t.metadata.type===p["a"].QuizEvent}));return this.sortList(t)}return[]},visibleList:function(){switch(this.visibility){case i.ALL:return this.workspaceObjects;case i.SENT:return this.sentList;case i.SCHEDULED:return this.scheduledList;case i.NOT_SCHEDULED:return this.notScheduledList;default:return[]}},trimSearchString:function(){var t=this.searchString.trim();return t},searchList:function(){var t=this,e=[];return this.visibleList.forEach((function(s){var i=s.metadata.name,a=t.trimSearchString,n=i.toUpperCase().indexOf(a.toUpperCase());n>=0&&e.push(s)})),e},filteredMethodList:function(){return""!==this.trimSearchString?this.searchList:this.visibleList}},watch:{"$route.params.folderId":{handler:function(t){t&&(m["a"].loadFolder(t),this.selectInit())},immediate:!0}},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:l["a"].loginCheck();case 1:case"end":return t.stop()}}),t)})))()},methods:{setShowGuidedTour:function(t){this.showGuidedTour=t},sortList:function(t){var e=[],s=[],i=[],a=[];t.forEach((function(t){var e=t.PushedQuizGroupList.length;t.scheduledTime||e?!t.scheduledTime&&e>0?i.push(t):s.push(t):a.push(t)}));var n=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});return s.sort((function(t,e){return t.scheduledTime!==e.scheduledTime?t.scheduledTime<e.scheduledTime?-1:t.scheduledTime>e.scheduledTime?1:0:n.compare(t.metadata.name.toUpperCase().trim(),e.metadata.name.toUpperCase().trim())})),this.scheduledList=s,i.sort((function(t,e){var s=t.PushedQuizGroupList[t.PushedQuizGroupList.length-1].scheduledTime,i=e.PushedQuizGroupList[e.PushedQuizGroupList.length-1].scheduledTime;return s!==i?s>i?-1:s<i?1:0:n.compare(t.metadata.name.toUpperCase().trim(),e.metadata.name.toUpperCase().trim())})),this.sentList=i,a.sort((function(t,e){return n.compare(t.metadata.name.trim(),e.metadata.name.trim())})),this.notScheduledList=a,s.forEach((function(t){e.push(t)})),i.forEach((function(t){e.push(t)})),a.forEach((function(t){e.push(t)})),e},reload:function(){this.currentFolder&&m["a"].loadFolder(this.currentFolder.uuid),this.selectInit()},selectInit:function(){this.selectModeOpen=!1,this.selection=[],this.searchString=""},toggleSelectMode:function(){this.selectModeOpen=!this.selectModeOpen,this.selectModeOpen||(this.selection=[])},toggleCardDisplayMode:function(){"list-mode"===this.cardDisplayMode?this.$store.commit("changeCardDisplayMode","pic-mode"):this.$store.commit("changeCardDisplayMode","list-mode")},toggleSelection:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:i=e.selection.findIndex((function(e){return e.uuid===t.uuid})),-1===i?e.selection.push(t):e.selection.splice(i,1);case 2:case"end":return s.stop()}}),s)})))()},moveCards:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$modal.show("move-position-modal",{currentFolder:t.currentFolder});case 1:case"end":return e.stop()}}),e)})))()},moveCardsSubmit:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log(t),e.$store.commit("updateLoading",!0),i=[],a=0;case 4:if(!(a<e.selection.length)){s.next=11;break}return s.next=7,d["a"].move(e.selection[a].uuid,t);case 7:console.log("(".concat(a+1,"/").concat(e.selection.length,")"));case 8:a+=1,s.next=4;break;case 11:return s.next=13,Promise.all(i);case 13:e.visitFolder(t),e.$modal.hide("move-position-modal"),e.selectInit(),e.$store.commit("updateLoading",!1);case 17:case"end":return s.stop()}}),s)})))()},removeCards:function(){var t=this;this.$modal.show("dialog",{title:"確定刪除嗎?",text:"刪掉就不會再回來囉",buttons:[{title:"取消",handler:function(){t.$modal.hide("dialog")}},{title:"確定",handler:function(){t.$modal.hide("dialog"),t.removeManyGroups()}}]})},shareCards:function(){this.$modal.show("manage-share-mapping-modal",{sourceObjectId:this.selection[0].uuid}),this.selectInit()},enterGroupPreview:function(){var t=this.selection[0];"WorkspaceQuizEvent"===t.metadata.type&&(this.$store.commit("changeQuizEvent",t),this.$router.push("/manager/quizevent-preview"))},enterGroup:function(){var t=this.selection[0];"WorkspaceQuizEvent"===t.metadata.type&&(this.$store.commit("changeQuizEvent",t),this.$router.push("/manager/quizevent-maker"))},removeManyGroups:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.commit("updateLoading",!0),s=[],i=0;case 3:if(!(i<t.selection.length)){e.next=10;break}return e.next=6,d["a"].remove(t.selection[i].uuid);case 6:console.log("(".concat(i+1,"/").concat(t.selection.length,")"));case 7:i+=1,e.next=3;break;case 10:return e.next=12,Promise.all(s);case 12:t.selectInit(),t.currentFolder&&m["a"].loadFolder(t.currentFolder.uuid),t.$store.commit("updateLoading",!1);case 15:case"end":return e.stop()}}),e)})))()},removeGroupCard:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,d["a"].remove(t.uuid);case 2:e.currentFolder&&m["a"].loadFolder(e.currentFolder.uuid);case 3:case"end":return s.stop()}}),s)})))()},visitFolder:function(t){var e=this.$store.state.currentFolder.uuid;t!==e&&this.$router.push({params:{folderId:t}})}}}),C=g,_=(s("18bc"),s("339e"),s("2877")),w=Object(_["a"])(C,a,n,!1,null,"0fd7023a",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2904004b.964a243d.js.map