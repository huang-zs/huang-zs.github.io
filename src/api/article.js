/**
 * @file 博客文章相关
 */
import data from '@/assets/data/article.json'

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

/**
 * 检查文章信息和文章页面是否都存在
 */
export function checkData() {
    const views = require.context('@/views', true, /.*\.vue/).keys()
    // 检查页面是否包含对应的文章信息
    views.forEach(view => {
        const splits = view.split('/')
        if (splits.length > 2) {
            const category = splits[splits.length - 2]
            const article = splits[splits.length - 1]
            getArticle(category, article.substring(0, article.indexOf('.vue')))
        }
    });

    // 检查文章信息是否包含对应的页面
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

/**
 * 查询分类或者文章,支持大小写
 * @param {*} query 查询
 * @returns 分类或者文章列表
 */
export function searchArticles(query) {
    const articles = []
    for (const categoryKey in data) {
        const category = data[categoryKey]
        for (const articleKey in category.childrens) {
            const article = category.childrens[articleKey]
            if (articleKey.toLowerCase().includes(query)) {
                articles.push(article)
            } else {
                if (article.description == null ? false : article.description.toLowerCase().includes(query))
                    articles.push(article)
            }

        }
    }
    return articles
}