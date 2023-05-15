export async function fetchData(url, page = 0, size = 5) {
    const response = await fetch(url);
    const data = await response.json();

    const result = data.filter((item, idx) => idx >= page * size && idx < (page + 1) * size);

    console.log(page, size)

    return result;
}

export function regularParser(data) {
    const sorted = data
    .sort((item1, item2) => new Date(parseInt(item1.d_created)) > new Date(parseInt(item2.d_created)) ? -1 : 1)
    .reduce((acc, item, idx) => {
        const month = new Date(parseInt(item.d_created)).getMonth()
        
        if (!acc[month]) {
            acc[month] = [];
        }

        acc[month].push(item);

        return acc
    }, [])
    .filter(item => !!item);
    
    return sorted;
   
}

export function isZoom(resType) {
    const defs = ['quiz', 'easy_quiz', 'challenge', 'make_a_map', 'make_a_movie', 'wordplay', 'related_reading', 'draw_about_it']

    return defs.includes(resType);
}