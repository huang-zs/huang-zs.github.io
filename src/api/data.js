import data from '../../public/data.json'

export function getCategory(category) {
    const categoryInfo = data[category]
    console.log(categoryInfo)
    if (categoryInfo == null)
        throw Error(`category[${category}] not exist`)
    categoryInfo.name = category
    return categoryInfo
}

export function getArticle(category, article) {
    const articleInfo = getCategory(category).childrens[article]
    if (articleInfo == null)
        throw Error(`category[${category}] article[${article}] not exist`)
    articleInfo.name = article
    return articleInfo
}

export function checkData() {
    const views = require.context('@/views', true, /.*\.vue/)
    // check view contain data
    views.keys().forEach(view => {
        console.log(view)
        const splits = view.split('/')
        if (splits.length > 2) {
            const category = splits[splits.length - 2]
            const article = splits[splits.length - 1]
            getArticle(category, article.substring(0, article.indexOf('.vue')))
        }
    });
    // TODO check data contain view
}