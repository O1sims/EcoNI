// Used by menu directive to show currently active page in the menu.

angular.module('belfastCos')
.service('menuService', function(){

	var self = this;
	this.item = "";

	this.setMenuItem = function(item){
		self.item = item;
	};

	this.getMenuitem = function(){
		return self.item;
	};

	this.activeMenuItemQuery = function(item){
		if (item == self.getMenuitem()){
			return 'active';
		}
	};

})