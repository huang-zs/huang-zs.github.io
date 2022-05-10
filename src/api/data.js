import data from '../../public/data.json'

export function getCategory(category) {
    try {
        const categoryInfo = data[category]
        categoryInfo.name = category
        return categoryInfo
    } catch (error) {
        throw Error(`category[${category}] not exist`)
    }
}

export function getArticle(category, article) {
    try {
        const articleInfo = getCategory(category).childrens[article]
        articleInfo.name = article
        return articleInfo
    } catch (error) {
        throw Error(`category[${category}] article[${article}] not exist`)
    }
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
    for (const categoryKey in data) {
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

export function searchArticles(query) {
    const articles = []
    for (const categoryKey in data) {
        const category = data[categoryKey]
        for (const articleKey in category.childrens) {
            const article = category.childrens[articleKey]
            if (articleKey.includes(query)) {
                articles.push(article)
            } else {
                if (article.description == null ? false : article.description.includes(query))
                    articles.push(article)
            }

        }
    }
    console.log('searchArticles', articles)
    return articles
}