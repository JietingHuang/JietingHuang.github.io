"use strict";

/*
 * https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02
 * https://www.fghrsh.net/post/123.html
 */

function loadWidget(waifuPath, apiPath) {
	localStorage.removeItem("waifu-display");
	sessionStorage.removeItem("waifu-text");
	$("body").append("<div id=\"waifu\">\n\t\t\t<div id=\"waifu-tips\"></div>\n\t\t\t<canvas id=\"live2d\" width=\"300\" height=\"300\"></canvas>\n\t\t\t<div id=\"waifu-tool\">\n\t\t\t\t<span class=\"fa fa-lg fa-comment\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-paper-plane\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-user-circle\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-street-view\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-camera-retro\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-info-circle\"></span>\n\t\t\t\t<span class=\"fa fa-lg fa-times\"></span>\n\t\t\t</div>\n\t\t</div>");
	$("#waifu").show().animate({ bottom: 0 }, 3000);

	function registerEventListener() {
		$("#waifu-tool .fa-comment").click(showHitokoto);
		$("#waifu-tool .fa-paper-plane").click(function () {
			if (window.Asteroids) {
				if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
				window.ASTEROIDSPLAYERS.push(new Asteroids());
			} else {
				$.ajax({
					url: "https://cdn.jsdelivr.net/gh/GalaxyMimi/CDN/asteroids.js",
					dataType: "script",
					cache: true
				});
			}
		});
		$("#waifu-tool .fa-user-circle").click(loadOtherModel);
		$("#waifu-tool .fa-street-view").click(loadRandModel);
		$("#waifu-tool .fa-camera-retro").click(function () {
			showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
			Live2D.captureName = "photo.png";
			Live2D.captureFrame = true;
		});
		$("#waifu-tool .fa-info-circle").click(function () {
			open("https://github.com/stevenjoezhang/live2d-widget");
		});
		$("#waifu-tool .fa-times").click(function () {
			localStorage.setItem("waifu-display", new Date().getTime());
			showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
			$("#waifu").animate({ bottom: -500 }, 3000, function () {
				$("#waifu").hide();
				$("#waifu-toggle").show().animate({ "margin-left": -50 }, 1000);
			});
		});
		var re = /x/;
		console.log(re);
		re.toString = function () {
			showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
			return "";
		};
		$(document).on("copy", function () {
			showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
		});
		$(document).on("visibilitychange", function () {
			if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
		});
	}
	registerEventListener();

	function welcomeMessage() {
		var SiteIndexUrl = location.port ? location.protocol + "//" + location.hostname + ":" + location.port + "/" : location.protocol + "//" + location.hostname + "/",
		    text; //自动获取主页
		if (location.href == SiteIndexUrl) {
			//如果是主页
			var now = new Date().getHours();
			if (now > 5 && now <= 7) text = "早上好！一日之计在于晨，美好的一天就要开始了。";else if (now > 7 && now <= 11) text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";else if (now > 11 && now <= 14) text = "中午了，工作了一个上午，现在是午餐时间！";else if (now > 14 && now <= 17) text = "午后很容易犯困呢，今天的运动目标完成了吗？";else if (now > 17 && now <= 19) text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～";else if (now > 19 && now <= 21) text = "晚上好，今天过得怎么样？";else if (now > 21 && now <= 23) text = ["已经这么晚了呀，早点休息吧，晚安～", "深夜时要爱护眼睛呀！"];else text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
		} else if (document.referrer !== "") {
			var referrer = document.createElement("a");
			referrer.href = document.referrer;
			var domain = referrer.hostname.split(".")[1];
			if (location.hostname == referrer.hostname) text = "\u6B22\u8FCE\u9605\u8BFB<span style=\"color:#0099cc;\">\u300E" + document.title.split(" - ")[0] + "\u300F</span>";else if (domain == "baidu") text = "Hello\uFF01\u6765\u81EA \u767E\u5EA6\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span style=\"color:#0099cc;\">" + referrer.search.split("&wd=")[1].split("&")[0] + "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F";else if (domain == "so") text = "Hello\uFF01\u6765\u81EA 360\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span style=\"color:#0099cc;\">" + referrer.search.split("&q=")[1].split("&")[0] + "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F";else if (domain == "google") text = "Hello\uFF01\u6765\u81EA \u8C37\u6B4C\u641C\u7D22 \u7684\u670B\u53CB<br>\u6B22\u8FCE\u9605\u8BFB<span style=\"color:#0099cc;\">\u300E" + document.title.split(" - ")[0] + "\u300F</span>";else text = "Hello\uFF01\u6765\u81EA <span style=\"color:#0099cc;\">" + referrer.hostname + "</span> \u7684\u670B\u53CB";
		} else {
			text = "\u6B22\u8FCE\u9605\u8BFB<span style=\"color:#0099cc;\">\u300E" + document.title.split(" - ")[0] + "\u300F</span>";
		}
		showMessage(text, 7000, 8);
	}
	welcomeMessage();
	//检测用户活动状态，并在空闲时定时显示一言
	var userAction = false,
	    hitokotoTimer = null,
	    messageTimer = null,
	    messageArray = ["好久不见，日子过得好快呢……", "大坏蛋！你都多久没碰人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！"];
	if ($(".fa-share-alt").is(":hidden")) messageArray.push("记得把小家加入Adblock白名单哦！");
	$(document).mousemove(function () {
		userAction = true;
	}).keydown(function () {
		userAction = true;
	});
	setInterval(function () {
		if (!userAction) {
			if (!hitokotoTimer) hitokotoTimer = setInterval(showHitokoto, 25000);
		} else {
			userAction = false;
			clearInterval(hitokotoTimer);
			hitokotoTimer = null;
		}
	}, 1000);

	function showHitokoto() {
		//增加 hitokoto.cn 的 API
		if (Math.random() < 0.6 && messageArray.length > 0) showMessage(messageArray[Math.floor(Math.random() * messageArray.length)], 6000, 9);else $.getJSON("https://v1.hitokoto.cn", function (result) {
			var text = "\u8FD9\u53E5\u4E00\u8A00\u6765\u81EA <span style=\"color:#0099cc;\">\u300E" + result.from + "\u300F</span>\uFF0C\u662F <span style=\"color:#0099cc;\">" + result.creator + "</span> \u5728 hitokoto.cn \u6295\u7A3F\u7684\u3002";
			showMessage(result.hitokoto, 6000, 9);
			setTimeout(function () {
				showMessage(text, 4000, 9);
			}, 6000);
		});
	}

	function showMessage(text, timeout, priority) {
		if (!text) return;
		if (!sessionStorage.getItem("waifu-text") || sessionStorage.getItem("waifu-text") <= priority) {
			if (messageTimer) {
				clearTimeout(messageTimer);
				messageTimer = null;
			}
			if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length)];
			sessionStorage.setItem("waifu-text", priority);
			$("#waifu-tips").stop().html(text).fadeTo(200, 1);
			messageTimer = setTimeout(function () {
				sessionStorage.removeItem("waifu-text");
				$("#waifu-tips").fadeTo(1000, 0);
			}, timeout);
		}
	}

	function initModel() {
		var modelId = localStorage.getItem("modelId"),
		    modelTexturesId = localStorage.getItem("modelTexturesId");
		if (modelId == null) {
			//首次访问加载 指定模型 的 指定材质
			var modelId = 1,
			    //模型 ID
			modelTexturesId = 53; //材质 ID
		}
		loadModel(modelId, modelTexturesId);
		$.getJSON(waifuPath, function (result) {
			$.each(result.mouseover, function (index, tips) {
				$(document).on("mouseover", tips.selector, function () {
					var text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
					text = text.replace("{text}", $(this).text());
					showMessage(text, 4000, 8);
				});
			});
			$.each(result.click, function (index, tips) {
				$(document).on("click", tips.selector, function () {
					var text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
					text = text.replace("{text}", $(this).text());
					showMessage(text, 4000, 8);
				});
			});
			$.each(result.seasons, function (index, tips) {
				var now = new Date(),
				    after = tips.date.split("-")[0],
				    before = tips.date.split("-")[1] || after;
				if (after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0] && after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1]) {
					var text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
					text = text.replace("{year}", now.getFullYear());
					//showMessage(text, 7000, true);
					messageArray.push(text);
				}
			});
		});
	}
	initModel();

	function loadModel(modelId, modelTexturesId) {
		localStorage.setItem("modelId", modelId);
		if (modelTexturesId === undefined) modelTexturesId = 0;
		localStorage.setItem("modelTexturesId", modelTexturesId);
		loadlive2d("live2d", apiPath + "/get/?id=" + modelId + "-" + modelTexturesId, console.log("Live2D \u6A21\u578B " + modelId + "-" + modelTexturesId + " \u52A0\u8F7D\u5B8C\u6210"));
	}

	function loadRandModel() {
		var modelId = localStorage.getItem("modelId"),
		    modelTexturesId = localStorage.getItem("modelTexturesId");
		//可选 "rand"(随机), "switch"(顺序)
		$.ajax({
			cache: false,
			url: apiPath + "/rand_textures/?id=" + modelId + "-" + modelTexturesId,
			dataType: "json",
			success: function success(result) {
				if (result.textures["id"] == 1 && (modelTexturesId == 1 || modelTexturesId == 0)) showMessage("我还没有其他衣服呢！", 4000, 10);else showMessage("我的新衣服好看嘛？", 4000, 10);
				loadModel(modelId, result.textures["id"]);
			}
		});
	}

	function loadOtherModel() {
		var modelId = localStorage.getItem("modelId");
		$.ajax({
			cache: false,
			url: apiPath + "/switch/?id=" + modelId,
			dataType: "json",
			success: function success(result) {
				loadModel(result.model["id"]);
				showMessage(result.model["message"], 4000, 10);
			}
		});
	}
}

function initWidget() {
	var waifuPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/waifu-tips.json";
	var apiPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

	if (screen.width <= 768) return;
	$("body").append("<div id=\"waifu-toggle\" style=\"margin-left: -100px;\">\n\t\t\t<span>\u770B\u677F\u5A18</span>\n\t\t</div>");
	$("#waifu-toggle").hover(function () {
		$("#waifu-toggle").animate({ "margin-left": -30 }, 500);
	}, function () {
		$("#waifu-toggle").animate({ "margin-left": -50 }, 500);
	}).click(function () {
		$("#waifu-toggle").animate({ "margin-left": -100 }, 1000, function () {
			$("#waifu-toggle").hide();
		});
		if ($("#waifu-toggle").attr("first-time")) {
			loadWidget(waifuPath, apiPath);
			$("#waifu-toggle").attr("first-time", false);
		} else {
			localStorage.removeItem("waifu-display");
			$("#waifu").show().animate({ bottom: 0 }, 3000);
		}
	});
	if (localStorage.getItem("waifu-display") && new Date().getTime() - localStorage.getItem("waifu-display") <= 86400000) {
		$("#waifu-toggle").attr("first-time", true).css({ "margin-left": -50 });
	} else {
		loadWidget(waifuPath, apiPath);
	}
}