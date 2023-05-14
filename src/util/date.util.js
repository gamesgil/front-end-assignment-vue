export function getMonth(time) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIdx = new Date(parseInt(time)).getMonth();

    return months[monthIdx];
}

export function getFormattedDateTime(time) {
    const dateTime = new Date(parseInt(time));

    const option1 = {
        year: "numeric", month: "short", day: "numeric",
    };
    const option2 = {
        hour: "numeric", minute: "numeric", hour12: true
    };

    const result = `${new Intl.DateTimeFormat("en-US", option1).format(time)} • ${new Intl.DateTimeFormat("en-US", option2).format(dateTime)}`
    .replace('AM', 'am').replace('PM', 'pm');

    return result;
}

