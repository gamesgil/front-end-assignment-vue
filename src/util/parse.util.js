export async function fetchData(url, transformer = null, page = 0, size = 5) {
    const response = await fetch(url);
    let data = await response.json();

    if (transformer) {
        data = resTypesToActivities(data)
    }

    const result = data.filter((item, idx) => idx >= page * size && idx < (page + 1) * size);

    return result;
}

export function resTypesToActivities(data) {
    console.log(data)
    const result = [];

    data.forEach(activityType => {
        
        activityType.activities.forEach(activity => {
            result.push(Object.assign(activity, {resource_type: activityType.resource_type}));
        });
    })

    return result;
}

export function isZoom(resType) {
    const defs = ['quiz', 'easy_quiz', 'challenge', 'make_a_map', 'make_a_movie', 'wordplay', 'related_reading', 'draw_about_it']

    return defs.includes(resType);
}