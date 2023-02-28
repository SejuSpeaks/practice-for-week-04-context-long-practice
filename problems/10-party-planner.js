	class PartyPlanner {
		constructor (name) {
		this.name = name;
		this.guestList = [];
		}

		addToGuestList(name) {
			this.guestList.push(name);

		}

		throwParty() {
			if (!this.guestList.length)  {
				return `Gotta add people to the guest list`
			}
			else if (this.guestList.length === 1) { return `Welcome to the party ${this.guestList[0]}`}
			else if (this.guestList.length === 2) {return `Welcome to the party ${this.guestList[0]} and ${this.guestList[1]}`}
		}

	}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
