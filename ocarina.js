var ocarina = {

	from(format, dateString){
	
	},

	fromISO(dateString){
	
	},
	
	to(format, dateString){
	
	},
	
	toISO(dateString){
		return this.to(ISO_FORMAT, dateString);
	},
	
	add: {
		
		year(yearsToAdd, timestamp){
			return timestamp + (yearsToAdd * MILLISECONDS_IN_YEAR);
		}
		
	},
	
	addMs(msToAdd, timestamp){
		return timestamp + 
	},
	
	addYear(yearsToAdd, timestamp){
		return timestamp + (yearsToAdd * MS_IN_YEAR);
	},
	
	addThese({ years, year, yrs, yr, y, months, month, mon, days, day, dy, d, hours, hour, hrs, hr, h, minutes, minute, mins, min, seconds, second, secs, sec, s,  }){
	
	}
	
};

export default ocarina;