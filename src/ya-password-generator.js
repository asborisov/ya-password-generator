(function () {
	angular.module('ya.passwordGenerator', [])
		.service('ya.passwordGenerator', passwordGenerator);

	passwordGenerator.$inject = ['$window'];

	/**
	 *
	 * @param $window.generatePassword password-generator module
	 * @returns {{generate: generate}}
	 */
	function passwordGenerator($window) {
		return {
			generate: generate
		};

		/**
		 * Generate password
		 * @param config {{}}
		 * @param config.length=10 {number}
		 * @param config.memorable=false {boolean}
		 * @param config.charsPattern=/[\w\d]/ {RegExp}
		 * @param config.prefix='' {string}
		 * @param config.pattern=/.*\/ {RegExp}
		 * @returns {string}
		 */
		function generate(config) {
			config = config || {};
			var length = config.length || 10;
			var memorable = config.memorable || false;
			var charsPattern = config.charsPattern || /[\w\d]/;
			var prefix = config.prefix || '';
			var pattern = config.pattern || /.*/;
			var password = '';
			do {
				password = $window.generatePassword(length, memorable, charsPattern, prefix);
			} while(!password.match(pattern));
			return password;
		}
	}
}());