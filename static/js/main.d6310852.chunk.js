(this["webpackJsonpcovid-edu"]=this["webpackJsonpcovid-edu"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),s=a.n(r),c=a(1),i=a.n(c),o=a(3),u=a(6),d=a(7),m=a(2),p=a(9),E=a(8),v=function(e){var t=e.totalCases,a=e.activeCases,n=e.criticalCases,r=e.totalDeaths,s=e.newDeaths,c=e.clickCovid;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"block-header"},l.a.createElement("h1",null,"COVID 19"),l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"images/russia.png",alt:"russia.png"}))),l.a.createElement("p",{className:"block-desc"},l.a.createElement("span",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0438")),l.a.createElement("form",null,l.a.createElement("input",{type:"text",value:t,readOnly:!0}),l.a.createElement("div",{className:"content-mobile"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435"),l.a.createElement("td",null,n)),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},"\u041a\u043e\u043b-\u0432\u043e \u0441\u043c\u0435\u0440\u0442\u0435\u0439")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u0412\u0441\u0435\u0433\u043e"),l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null,"\u041d\u043e\u0432\u044b\u0435"),l.a.createElement("td",null,s))))),l.a.createElement("div",{className:"content-table"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{className:"header-caption"},l.a.createElement("th",null,"\u0412\u0441\u0435\u0433\u043e"),l.a.createElement("th",null,"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),l.a.createElement("th",null,"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435"),l.a.createElement("th",{colSpan:"2"},"\u0423\u043c\u0435\u0440\u043b\u043e")),l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,"\u0432\u0441\u0435\u0433\u043e"),l.a.createElement("td",null,"\u043d\u043e\u0432\u044b\u0435")),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,r),l.a.createElement("td",null,s)),l.a.createElement("tr",null)))),l.a.createElement("div",{className:"controls"},l.a.createElement("button",{type:"button",onClick:c},"\u041e\u0411\u041d\u041e\u0412\u0418\u0422\u042c"))))},h=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).getCovidJson=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"russia","covid-193.p.rapidapi.com","ae61153825mshf5d7179ef888deap132741jsnd421646d8d62",e.next=5,fetch("https://covid-193.p.rapidapi.com/statistics?country=".concat("russia"),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"ae61153825mshf5d7179ef888deap132741jsnd421646d8d62"}}).then((function(e){return e.json()}));case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),e.state={totalCases:"",newCases:"",activeCases:"",criticalCases:"",recovered:"",newDeaths:"",totalDeaths:"",date:"",time:""},e.updateStats=e.updateStats.bind(Object(m.a)(e)),e}return Object(d.a)(a,[{key:"updateStats",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getCovidJson();case 3:a=e.sent,this.setState({totalCases:a.response[0].cases.total,newCases:a.response[0].cases.new,activeCases:a.response[0].cases.active,criticalCases:a.response[0].cases.critical,recovered:a.response[0].cases.recovered,newDeaths:a.response[0].deaths.new,totalDeaths:a.response[0].deaths.total,date:a.response[0].day,time:a.response[0].time}),document.querySelector(".form input").value+=" \u0441\u043b\u0443\u0447\u0430\u0435\u0432";case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.timeCovid,a=e.totalCases,n=e.activeCases,r=e.criticalCases,s=e.totalDeaths,c=e.newDeaths,i=e.date,o=e.time,u=e.newCases,d=e.recovered,m=this.updateStats;return l.a.createElement("div",{className:"container"},l.a.createElement(v,{CovidSubmitMethod:this.getCovidJson,timeCovid:t,clickCovid:m,totalCases:a,activeCases:n,criticalCases:r,totalDeaths:s,newDeaths:c,date:i,time:o,newCases:u,recovered:d}))}}]),a}(l.a.Component);a(16);s.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d6310852.chunk.js.map