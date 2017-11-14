var urlParser = require("url");

function mockFactory(config) {
	//这是一个Node.js server请求响应函数
	return function(req, res, next) {
		var parsedUrl = urlParser.parse(req.url);
		if (parsedUrl.pathname === "/register/hasUser") {
			var data = {
				"data": {
					"isUser": true
				},
				"status": {
					"msg": "success",
					"code": 0
				}
			};
			res.setHeader("Content-Type", "text/json");
			res.end(JSON.stringify(data));
		} else {
			//如果不是需要mock的url则使用karma的默认处理
			next();
		}
	};
};
module.exports = {
	'middleware:mock': ['factory', mockFactory]
};