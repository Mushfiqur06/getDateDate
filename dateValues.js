function dateToDays(start_time) {
    if (!start_time) {
      return {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };
    }
    const diff = new Date().valueOf() - new Date(start_time).valueOf();
    const weeks = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24 - weeks * 7);
    const hours = Math.floor(diff / 1000 / 60 / 60 - weeks * 7 * 24 - days * 24);
    const minutes = Math.floor(diff / 1000 / 60 - weeks * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
    const seconds = Math.floor(
      diff / 1000 - weeks * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60,
    );
    const milliseconds = Math.floor(
      diff -
        weeks * 7 * 24 * 60 * 60 * 1000 -
        days * 24 * 60 * 60 * 1000 -
        hours * 60 * 60 * 1000 -
        minutes * 60 * 1000 -
        seconds * 1000,
    );
    return {
      weeks,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }
  
  export const getDateValue = (startDate) => {
    const result = dateToDays(startDate);
    let value;
    if (result.weeks > 0) {
      value = `${result.weeks} ${result.weeks > 1 ? 'weeks' : 'week'} ago`;
    } else if (result.days > 0 && result.days < 7) {
      value = `${result.days} ${result.days > 1 ? 'days' : 'day'} ago`;
    } else if (result.hours > 0) {
      value = `${result.hours} ${result.hours > 1 ? 'hours' : 'hour'} ago`;
    } else if (result.minutes > 0) {
      value = `${result.minutes} ${result.minutes > 1 ? 'minutes' : 'minute'} ago`;
    } else if (result.seconds > 0) {
      value = `${result.seconds} seconds ago`;
    }
  
    return value;
  };
  