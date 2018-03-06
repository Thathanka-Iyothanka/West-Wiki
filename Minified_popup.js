if($("body").append('<div id="popup_window" class="popup_window"><div class="popup_front"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div></div><div id="popup_contents" class="popup_contents"></div></div>'),$(document).on("mouseenter",".item_container",function(t){Popup.show(this),Popup.setPosition(t)}),$(document).on("mouseleave",".item_container",function(){Popup.hide()}),$(document).on("mousemove",".item_container",function(t){Popup.setPosition(t)}),$(".item_level").mousedown(function(t){t.preventDefault()}),$(document).on("click",".upgrade",function(){var t=$(this).closest(".item_container"),e=parseInt(t.attr("data-lvl"));5!==e&&(t.attr("data-lvl",e+1),t.find(".level").html(e+1)),Popup.show(t[0])}),$(document).on("click",".downgrade",function(){var t=$(this).closest(".item_container"),e=parseInt(t.attr("data-lvl"));0!==e&&(t.attr("data-lvl",e-1),t.find(".level").html(e-1)),Popup.show(t[0])}),1===$("#input_level").length)var input_level=$('<input type="number" style="width:80px;" class="west" placeholder="Your level" min="0" max="150">').bind("propertychange keyup input paste",function(){this.value>150?this.value=150:this.value<0&&(this.value=0),$(".calc").each(function(){0===input_level.val()?($(this).html(this.id),$(".per_level_off").addClass("per_level").removeClass("per_level_off")):($(this).html(Math.ceil(Number(this.id)*input_level.val())),$(".per_level").addClass("per_level_off").removeClass("per_level"))})}).appendTo($("#input_level"));if(1===$("#input_search").length)var input_search=$('<input type="search" class="west" placeholder="Search">').bind("propertychange keyup input paste",function(){var t=this.value.toLowerCase();""===t?$(".item_container").show():($(".item_container").hide(),$(".item_container").filter(function(){return $(this).attr("data-popup").toLowerCase().indexOf(t)>-1}).show())}).appendTo($("#input_search"));1===$("#switch").length&&($("#fire").hide(),$("#switch").on("click",function(){$("#melee, #fire").toggle()}));var Popup={content:"",delay:200,active:!1,show:function(t){Popup.content=Popup.createPopup($(t).attr("data-popup"),$(t).attr("data-cdn-cat"),$(t).attr("data-cdn-img"),parseInt($(t).attr("data-lvl"))),Popup.active=!0,Popup.setTimeout(),Popup.getContainer().html(Popup.content)},hide:function(){Popup.getEl().css({display:"none",top:0,left:0}),Popup.active=!1,Popup.clearTimeout()},setTimeout:function(){Popup.clearTimeout(),Popup.timer=window.setTimeout(function(){Popup.getEl().css("display","block")},Popup.delay)},clearTimeout:function(){Popup.timer&&window.clearTimeout(Popup.timer)},getEl:function(){return $("#popup_window")},getContainer:function(){return $("#popup_contents")},createPopup:function(t,e,a,i){var s='<div class="popup_image"><img src="https://westzz.innogamescdn.com/images/items/'+(t=JSON.parse(t)).cdn_cat+"/"+t.cdn_img+'.png"/></div><div class="popup_divider"></div><p class="popup_name">'+t.name+'</p><p class="popup_type">'+t.type+"</p><br/>",p=!1;for(var n in i>=1&&i<=5&&(p=!0,t.auc=!1),t.dmg_min&&t.dmg_max&&(p&&(t.dmg_min+=Math.round(Math.max(1,.1*t.dmg_min*i)),t.dmg_max+=Math.round(Math.max(1,.1*t.dmg_max*i))),s+='<p class="popup_dmg">'+t.dmg_min+"-"+t.dmg_max+" Damages</p>"),Popup.data){var l=0;for(var o in Popup.data[n])if(t.hasOwnProperty(o)){l++;var c="";t[o]<0?$("#input_level input").val()>0?(t[o]=Math.ceil($("#input_level input").val()*-t[o]),p&&(t[o]+=Math.round(Math.max(1,.1*t[o]*i)))):(t[o]=-t[o],c=" (per Level)",p&&(t[o]=Math.round(1e6*(1*t[o]+Math.round(Math.max(1,1e3*t[o]*i))/1e4))/1e6)):p&&(t[o]<1?t[o]=Math.round(1e6*(1*t[o]+Math.round(Math.max(1,1e3*t[o]*i))/1e4))/1e6:t[o]+=Math.round(Math.max(1,.1*t[o]*i))),s+=Popup.data[n][o].replace("#1",t[o]).replace("#2",c)}l>0&&(s+="<br/>")}if(t.text){for(var r=0;r<t.text.length;r++)s+='<p class="popup_text">'+t.text[r]+"</p>";s+="<br/>"}if(t.bonus){for(r=0;r<t.bonus.length;r++)s+='<p class="popup_bonus">'+t.bonus[r]+"</p>";s+="<br/>"}if(t.jobs){s+='<div style="text-align:center;"><table class="popup_job">';for(r=0;r<t.jobs.length;r++)s+='<tr><td><img src="https://westzz.innogamescdn.com/images/jobs/'+t.jobs[r][1]+'.png"/></td><td><span>&nbsp;&nbsp;'+t.jobs[r][0]+"</span></td></tr>";s+="</table></div>"}if(t.craft){s+='<div style="text-align:center;"><table  class="popup_crafteditem"><tr><td><img src="https://westzz.innogamescdn.com/images/crafting/profsymbol_'+t.craft.id+'_small.png"/></td><td><table><tr>';for(r=0;r<t.craft.req.length;r++)s+='<td><img style="width:36px;height:36px;" src="https://westzz.innogamescdn.com/images/items/yield/'+t.craft.req[r][0]+'.png"/></td>';s+="</tr><tr>";for(r=0;r<t.craft.req.length;r++)s+="<td><span>x"+t.craft.req[r][1]+"</span></td>";s+="</tr></table></td></tr></table></div>"}return s+='<div class="popup_infos">',t.spd&&(p&&(t.spd+=Math.round(Math.max(1,.1*t.spd*i))),s+='<p class="popup_speed">Speed: +'+t.spd+"%</p><br/>"),t.set&&(s+='<p><a class="popup_set" href="/wiki/'+t.set+'">'+t.set+"</a></p><br/>"),t.sp?s+='<img src="/images/5/57/Buy_price.png"/>'+t.bp+'&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/f/fc/Sell_price.png"/>&nbsp;'+t.sp+"<br/><br/>":s+="<i>Unsalable</i><br/><br/>",t.lvl&&(s+="Level <b>"+t.lvl+"</b><br/>"),t.sex&&(0==t.sex?s+='<img src="/images/c/c5/Gender_m.png"/>&nbsp;&nbsp;&nbsp;':s+='<img src="/images/4/41/Gender_f.png"/>&nbsp;&nbsp;&nbsp;'),1==t.auc?s+='<span class="popup_txtgreen">Auctionable</span><br/>':s+='<span class="popup_txtred">Not auctionable</span><br/>',0==t.upg?s+='<span class="popup_txtred">Not upgradeable</span><br/>':s+='<span class="popup_txtgreen">Upgradeable</span><br/>',s+='<br/><p class="popup_id">[item=<b>'+t.id+"</b>]</p></div>"},setPosition:function(t){var e,a,i=$(window).width(),s=$(window).height(),p=Popup.getEl().outerWidth(),n=Popup.getEl().outerHeight(),l=t.clientX,o=t.clientY;a=l+p+20>i?l-p-20+(t.pageX-t.clientX):l+20+(t.pageX-t.clientX),e=o+n+20>s?s-n+(t.pageY-t.clientY):o+20+(t.pageY-t.clientY),Popup.getEl().css({top:e,left:a})},data:{dmg:{dmglvl:'<p class="popup_dmg">+ #1 Damages#2</p>'},skills:{str:'<p class="popup_attribute">+ #1 Strength#2</p>',mob:'<p class="popup_attribute">+ #1 Mobility#2</p>',dex:'<p class="popup_attribute">+ #1 Dexterity#2</p>',cha:'<p class="popup_attribute">+ #1 Charisma#2</p>',con:'<p class="popup_skill">+ #1 Construction#2</p>',vig:'<p class="popup_skill">+ #1 Vigor#2</p>',tou:'<p class="popup_skill">+ #1 Toughness#2</p>',sta:'<p class="popup_skill">+ #1 Stamina#2</p>',hea:'<p class="popup_skill">+ #1 Health Points#2</p>',rid:'<p class="popup_skill">+ #1 Horseback Riding#2</p>',ref:'<p class="popup_skill">+ #1 Reflex#2</p>',dod:'<p class="popup_skill">+ #1 Dodging#2</p>',hid:'<p class="popup_skill">+ #1 Hiding#2</p>',swi:'<p class="popup_skill">+ #1 Swimming#2</p>',aim:'<p class="popup_skill">+ #1 Aiming#2</p>',sho:'<p class="popup_skill">+ #1 Shooting#2</p>',pit:'<p class="popup_skill">+ #1 Setting traps#2</p>',fin:'<p class="popup_skill">+ #1 Fine Motor Skills#2</p>',rep:'<p class="popup_skill">+ #1 Repairing#2</p>',lea:'<p class="popup_skill">+ #1 Leadership#2</p>',tac:'<p class="popup_skill">+ #1 Tactics#2</p>',tra:'<p class="popup_skill">+ #1 Trading#2</p>',ani:'<p class="popup_skill">+ #1 Animal Instinct#2</p>',app:'<p class="popup_skill">+ #1 Appearance#2</p>'},fb:{fbdef:'<p class="popup_fb">+ #1 <b>Defense</b> (Fort battle bonus)</p>',fboff:'<p class="popup_fb">+ #1 <b>Attack</b> (Fort battle bonus)</p>',fbres:'<p class="popup_fb">+ #1 <b>Resistance</b> (Fort battle bonus)</p>',fbdefs:'<p class="popup_fb">+ #1 <b>Defense</b> (Fort battle sector bonus)</p>',fboffs:'<p class="popup_fb">+ #1 <b>Attack</b> (Fort battle sector bonus)</p>',fbdmgs:'<p class="popup_fb">+ #1 <b>Damages</b> (Fort battle sector bonus)</p>'}}};if(new RegExp(mw.config.get("wgFormattedNamespaces")[10]+":Item_*").test(mw.config.get("wgPageName"))&&1===$(".item_container").length&&($("#mw-content-text").append('<center><div id="popup_plain" class="popup_window"><div class="popup_front"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div></div><div id="popup_plain_contents" class="popup_contents"></div></div></center>'),$("#popup_plain").hide(),$("#popup_plain_contents").append(Popup.createPopup($(".item_container").attr("data-popup"),$(".item_container").attr("data-cdn-cat"),$(".item_container").attr("data-cdn-img"),0)),$("#popup_plain").slideDown()),0!==$(".infoSet").length){var set_calc={bonus:{set_bonus:{str:{name:"Strength",img:"/images/thumb/8/8b/Strength.png/40px-Strength.png"},mob:{name:"Mobility",img:"/images/thumb/5/5a/Mobility.png/40px-Mobility.png"},dex:{name:"Dexterity",img:"/images/thumb/0/0d/Dexterity.png/40px-Dexterity.png"},cha:{name:"Charisma",img:"/images/thumb/c/c9/Charisma.png/40px-Charisma.png"},con:{name:"Construction",img:"/images/thumb/3/37/Construction.png/40px-Construction.png"},vig:{name:"Vigor",img:"/images/thumb/9/90/Skill_Punch.png/40px-Skill_Punch.png"},tou:{name:"Toughness",img:"/images/thumb/f/f8/Skill_Tough.png/40px-Skill_Tough.png"},sta:{name:"Stamina",img:"/images/thumb/8/8d/Stamina.png/40px-Stamina.png"},hea:{name:"Health Points",img:"/images/thumb/9/94/Health.png/40px-Health.png"},rid:{name:"Horseback Riding",img:"/images/thumb/7/78/Hbr.png/40px-Hbr.png"},ref:{name:"Reflex",img:"/images/thumb/e/e9/Skill_Reflex.png/40px-Skill_Reflex.png"},dod:{name:"Dodging",img:"/images/thumb/0/07/Skill_Dodge.png/40px-Skill_Dodge.png"},hid:{name:"Hiding",img:"/images/thumb/9/97/Hiding.png/40px-Hiding.png"},swi:{name:"Swimming",img:"/images/thumb/f/f4/Swimming.png/40px-Swimming.png"},aim:{name:"Aiming",img:"/images/thumb/5/53/Skill_Aim.png/40px-Skill_Aim.png"},sho:{name:"Shooting",img:"/images/thumb/7/73/Skill_Shot.png/40px-Skill_Shot.png"},pit:{name:"Setting traps",img:"/images/thumb/e/e1/Trapping.png/40px-Trapping.png"},fin:{name:"Fine Motor Skills",img:"/images/thumb/1/18/Fms.png/40px-Fms.png"},rep:{name:"Repairing",img:"/images/thumb/d/d5/Repairing.png/40px-Repairing.png"},lea:{name:"Leadership",img:"/images/thumb/4/44/Leadership.png/40px-Leadership.png"},tac:{name:"Tactics",img:"/images/thumb/9/91/Skill_Tactic.png/40px-Skill_Tactic.png"},tra:{name:"Trading",img:"/images/thumb/f/f3/Skill_Trading.png/40px-Skill_Trading.png"},ani:{name:"Animal Instinct",img:"/images/thumb/9/9d/AnimalInstinct.png/40px-AnimalInstinct.png"},app:{name:"Appearance",img:"/images/thumb/4/4c/Skill_Appearance.png/40px-Skill_Appearance.png"},fbdef:{name:"<b>Defense</b> (Fort battle bonus)",img:"/images/8/82/Set_Fb_defense.png"},fboff:{name:"<b>Attack</b> (Fort battle bonus)",img:"/images/3/30/Set_Fb_offense.png"},fbres:{name:"<b>Resistance</b> (Fort battle bonus)",img:"/images/4/4b/Resistance.png"},fbdefs:{name:"<b>Defense</b> (Fort battle sector bonus)",img:"/images/1/1a/Set_Fb_defense_sec.png"},fboffs:{name:"<b>Attack</b> (Fort battle sector bonus)",img:"/images/f/fe/Set_Fb_offense_sec.png"},fbdmgs:{name:"<b>Damages</b> (Fort battle sector bonus)",img:"/images/b/b3/Damages_sector.png"}},extra_set_bonus:{}},data:{},itemStatus:{},getData:function(){$(".set_container").each(function(){var t=$(this).attr("data-set-id");set_calc.itemStatus[t]={},set_calc.data[t]={items:{},set:{}},$(this).find(".item_container").each(function(){var e=JSON.parse($(this).attr("data-popup"));for(var a in $(this).is(":hidden")?set_calc.itemStatus[t][e.id]=!1:set_calc.itemStatus[t][e.id]=0,e)e.hasOwnProperty(a)&&set_calc.bonus.set_bonus.hasOwnProperty(a)&&(set_calc.data[t].items[a]||(set_calc.data[t].items[a]={}),set_calc.data[t].items[a][e.id]=e[a])})}),$(".infoSet").each(function(){var t=$(this).attr("data-set-id");$(this).find(".infosetatt").each(function(){var e=$(this).attr("data-nb");set_calc.data[t].set[e]={},$(this).find(".set_bonus").each(function(){key=$(this).attr("data-type"),0!==$(this).find(".calc").length?set_calc.data[t].set[e][key]=-parseFloat($(this).find(".calc").attr("id")):set_calc.data[t].set[e][key]=parseFloat($(this).find(".val").text()),set_calc.bonus.set_bonus.hasOwnProperty(key)||(set_calc.bonus.extra_set_bonus[key]={img:$(this).find("img").attr("src"),name:$(this).find("#tooltip_content").text()})})})})},calc:function(){if(0===$("#input_level").length|""!==$("#input_level input").val()){var t=parseInt($("#input_level input").val());for(var e in total={},set_calc.data){for(var a in set_calc.data[e].items)for(var i in set_calc.data[e].items[a])if(!1!==set_calc.itemStatus[e][i]){lvl=set_calc.itemStatus[e][i],total[a]||(total[a]=0);var s=set_calc.data[e].items[a][i];set_calc.data[e].items[a][i]<0?(s=-s,set_calc.itemStatus[e][i]>0?total[a]+=Math.ceil(s*t)+Math.round(Math.max(1,.1*Math.ceil(s*t)*lvl)):total[a]+=Math.ceil(s*t)):set_calc.itemStatus[e][i]>0?total[a]+=s<1?Math.round(1e6*(1*s+Math.round(Math.max(1,1e3*s*lvl))/1e4))/1e6:Math.round(Math.max(1,.1*s*lvl)):total[a]+=s}var p=0;for(var i in set_calc.itemStatus[e])!1!==set_calc.itemStatus[e][i]&&p++;for(var a in set_calc.data[e].set[p])total[a]||(total[a]=0),set_calc.data[e].set[p][a]<0?total[a]+=Math.ceil(-set_calc.data[e].set[p][a]*t):total[a]+=set_calc.data[e].set[p][a]}var n='<center><table class="infoSet"><caption><br><big><b>Total</b></big></caption><tbody><tr><td></center>';for(var a in set_calc.bonus.set_bonus)total.hasOwnProperty(a)&&(n+='<div class="set_bonus tooltip_container"><img src="'+set_calc.bonus.set_bonus[a].img+'"><b>+'+total[a]+'</b><div class="tooltip_outer"><div class="tooltip"><div class="tt_bg_tl"></div><div class="tt_bg_tr"></div><div class="tt_bg_bl"></div><div class="tt_bg_br"></div><div id="tooltip_content">'+set_calc.bonus.set_bonus[a].name+"</div></div></div></div>");for(var a in set_calc.bonus.extra_set_bonus)total.hasOwnProperty(a)&&(n+='<div class="set_bonus tooltip_container"><img src="'+set_calc.bonus.extra_set_bonus[a].img+'"><b>+'+total[a]+(-1!==["xp","money","luck","spd","regen","drop"].indexOf(a)?"%":"")+'</b><div class="tooltip_outer"><div class="tooltip"><div class="tt_bg_tl"></div><div class="tt_bg_tr"></div><div class="tt_bg_bl"></div><div class="tt_bg_br"></div><div id="tooltip_content">'+set_calc.bonus.extra_set_bonus[a].name+"</div></div></div></div>");$("#set_calc").html(n)}else $("#set_calc").html("")},initEvents:function(){$(".item_container > img").on("click",function(){var t=$(this).closest(".item_container");t.toggleClass("item_off");var e=t.closest(".set_container").attr("data-set-id"),a=JSON.parse(t.attr("data-popup")).id;t.hasClass("item_off")||t.is(":hidden")?set_calc.itemStatus[e][a]=!1:set_calc.itemStatus[e][a]=parseInt(t.attr("data-lvl")),set_calc.calc()}),$(document).on("click",".upgrade, .downgrade",function(){var t=$(this).closest(".item_container"),e=t.closest(".set_container").attr("data-set-id");t.hasClass("item_off")||t.is(":hidden")||(set_calc.itemStatus[e][JSON.parse(t.attr("data-popup")).id]=parseInt(t.attr("data-lvl")),set_calc.calc())}),$("#input_level").bind("propertychange keyup input paste",function(){set_calc.calc()}),$("#switch").on("click",function(){$("#melee, #fire").each(function(){var t=$(this).find(".item_container"),e=$(this).closest(".set_container").attr("data-set-id");$(this).is(":hidden")?set_calc.itemStatus[e][JSON.parse(t.attr("data-popup")).id]=!1:set_calc.itemStatus[e][JSON.parse(t.attr("data-popup")).id]=parseInt(t.attr("data-lvl"))}),set_calc.calc()})},init:function(){set_calc.initEvents(),set_calc.getData(),$("#mw-content-text").append('<div id="set_calc"></div>'),0===$("#input_level").length&&set_calc.calc()}};set_calc.init()}
