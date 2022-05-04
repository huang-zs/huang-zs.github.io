const urls = []
// 带有meta.js文件的目录为菜单
const categorys = require.context('@/views', true, /meta\.js$/);
categorys.keys().forEach(category => {
    urls.push(category.match(/\.(.*)\/meta\.js$/)[1]);
});

//构建菜单数组
const menus = []
var url = null
while ((url = urls.shift()) != null) {
    const index = url.lastIndexOf("/");
    if (index > 0) { //二级菜单
        const parentUrl = url.substring(0, index);
        var parentMenu = null;
        for (let index = 0; index < menus.length; index++) {
            if (menus[index].url == parentUrl) {
                parentMenu = menus[index]
                break;
            }
        }
        if (parentMenu != null) {
            var subMenus = parentMenu.subMenus;
            if (subMenus == null) {
                subMenus = [];
                parentMenu.subMenus = subMenus
            }
            subMenus.push(getMenu(url))
        } else
            urls.push(url);
    } else
        menus.push(getMenu(url));

}

function getMenu(url) {
    return {
        "url": url,
        "name": url.substring(url.lastIndexOf('/') + 1)
    }
}

// TODO 菜单排序

export default menus