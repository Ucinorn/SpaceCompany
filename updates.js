Game.updates = (function(){
	
	var instance = {};
	instance.entries = [];

	instance.versionNumber = 1;
	instance.updateRead = false;

	instance.updateTitleTemplate = Handlebars.compile(['<div id="updateAlert" class="alert alert-info alert-dismissible fade in">',
	    '<button href="#" class="close btn.btn-info" data-dismiss="alert" aria-label="close">Close</button>',
	    '<strong>New Update!</strong> These are the features since you last played (V0.4.4.8 onwards):<br>',
	    '<ul id="updateLog"></ul>',
	'</div>'].join('\n'));
	instance.updateTemplate = Handlebars.compile('<li><span>{{desc}}</span></li>');

	instance.initialise = function(){
		if(metal != 0){
			var extra = 0;
			var target = $('#updateBox');
			var html = this.updateTitleTemplate();
			target.append($(html));
			for(var id in Game.updatesData) {
				if(this.entries.length < 5){
					this.createDisplay(Game.updatesData[id]);
				}
				else{
					extra += 1;
				}
	            
	        }
	        if(extra > 0){
	        	var extraUpdates = {
	        		desc: '+' + extra + ' more. Click the version number to see the full changelog.',
	        		read: false
	        	}
	        	this.createDisplay(extraUpdates);
	        }
	    	if(this.updateRead === false){
	    		document.getElementById("updateAlert").className = "hidden";
	    	}
	    } else {
	    	for(var id in Game.updatesData) {
				Game.updatesData[id].read = true;
	            
	        }
	    }
	}

	instance.createDisplay = function(self){
		if(self.read == false){
			this.entries.push(self);
			var target = $('#updateLog');
	        var html = this.updateTemplate(self);
	        target.append($(html));
	        self.read = true;
	        this.updateRead = true;
		}
	}

	instance.save = function(data){
		data.updates = {versionNumber: 1, entries: {}};
		for(var id in Game.updatesData){
			data.updates.entries[id] = Game.updatesData[id];
		}
	}

	instance.load = function(data){
		if(data.updates) {
			if(data.updates.versionNumber && data.updates.versionNumber == 1){
				Game.updates.versionNumber = data.versionNumber;
				for(var id in data.updates.entries){
					Game.updatesData[id] = data.updates.entries[id];
				}
			}
		}
	}

	instance.getUpdateData = function(id) {
        return Game.updatesData[id];
    };

	return instance;

}());

Game.updatesData = (function(){

	var instance = {};

	instance.nerfEnergyEff = {
		desc: 'Nerfed Energy Efficiency to be 100x cheaper, but only go up to 25%',
		read: false
	};

	instance.batteryEff = {
		desc: 'Battery Efficiency Upgrade increases your battery storage by 1% (max 50)',
		read: false
	};

	instance.effResearchLevel = {
		desc: 'Changed Efficiency researches to show current level instead of next level',
		read: false
	};

	instance.buffBattEff = {
		desc: 'Buffed Battery Efficiency to go up to 200 levels instead of 50.',
		read: false
	};

	instance.redDestroy = {
		desc: 'More -> Graphics Options. Added option to turn destroy buttons red.',
		read: false
	};

	instance.nerfRocketFuelResearch = {
		desc: 'Increased the Science cost of Rocket Fuel researches',
		read: false
	};

	instance.rocketFuelT3 = {
		desc: 'Added Hydrazine Catalyst - T3 Rocket Fuel',
		read: false
	};

	instance.achievFormat = {
		desc: 'Added Achievement Number Formatting',
		read: false
	};

	instance.splash = {
		desc: 'There are now 100 Loading Messages!',
		read: false
	};

	instance.stargazeIntro = {
		desc: 'Barebones + Intro added for Stargaze tab',
		read: false
	};

	instance.irs = {
		desc: 'Added Interstellar Radar Scanner (Interstellar -> Comms)',
		read: false
	};

	instance.ranks = {
		desc: 'Added Achievement Ranks',
		read: false
	};

	instance.lunarite = {
		desc: 'Changed Space Metal to Lunarite',
		read: false
	};

	instance.hideWonder = {
		desc: 'The Wonder Tab hides itself when completed (makes space for more tabs)',
		read: false
	};

	instance.dmCounter = {
		desc: 'Dark Matter is now calculated and shown.',
		read: false
	};

	instance.hideButton = {
		desc: 'You can unhide completed tabs if wanted. More -> Graphics Options.',
		read: false
	};

	instance.achivementsReset = {
		desc: 'Achievements have been reset, you will get back any you are currently over the level needed for.',
		read: false
	};

	return instance;

}());