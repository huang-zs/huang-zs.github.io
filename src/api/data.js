export default {
    datas: require("../../public/data.json"),

    /**
     * 获取一二级菜单
     * @returns [{url: '/menu1', name: 'Menu1'},{url: undefined, name: 'Menu2', subMenus: Array(2)}]
     */
    getMenu() {
        const menuArray = [];
        this.datas.forEach(data => {
            const menu = {};
            menu.url = data.url;
            menu.name = data.name;
            const childrens = data.childrens;
            if (childrens != null) {
                const subMenus = [];
                childrens.forEach(children => {
                    const subMenu = {};
                    subMenu.url = menu.url + children.url;
                    subMenu.name = children.name;
                    subMenus.push(subMenu);
                });
                menu.subMenus = subMenus;
            }
            menuArray.push(menu);
        });
        return menuArray;
    },

    /**
     * 根据分类路径获取分类
     * @param {*} categoryUrls [ "backend", "springboot" ]
     * @returns `{name: 'Springboot', url: '/springboot', childrens: Array(2)}`
     */
    getCategoryByCategoryUrls(categoryUrls) {
        return getItemByUrls(categoryUrls, this.datas);
    }

}

/**
 * 
 * @param {*} urls [ "backend", "springboot" ]
 * @param {*} datas 
 * @returns `{name: 'Springboot', url: '/springboot', childrens: Array(2)}`
 */
function getItemByUrls(urls, datas) {
    for (let index = 0; index < datas.length; index++) {
        const data = datas[index];
        if (data.url == "/" + urls[0]) {
            if (urls.length > 1)
                return getItemByUrls(urls.slice(1), data.childrens);
            else
                return data;
        }
    }
    return null;
}