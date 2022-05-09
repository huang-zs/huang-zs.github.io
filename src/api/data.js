import data from '../../public/data.json'

export function getCategory(category) {
    const categoryInfo = data[category]
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
    const views = require.context('@/views', true, /.*\.vue/).keys()
    // check view contain data
    views.forEach(view => {
        const splits = view.split('/')
        if (splits.length > 2) {
            const category = splits[splits.length - 2]
            const article = splits[splits.length - 1]
            getArticle(category, article.substring(0, article.indexOf('.vue')))
        }
    });

    // check data contain view
    for (var categoryKey in data) {
        const category = data[categoryKey]
        for (var articleKey in category.childrens) {
            var exist = false
            for (let index = views.length - 1; index >= 0; index--) {
                if (views[index].endsWith(`${categoryKey}/${articleKey}.vue`)) {
                    exist = true
                    views.splice(index, 1)
                    break
                }
            }
            if (!exist)
                throw Error(`category[${categoryKey}] article[${articleKey}] view not exist`)
        }
    }
}