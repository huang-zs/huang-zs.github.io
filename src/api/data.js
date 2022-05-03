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
                    subMenu.url = children.url;
                    subMenu.name = children.name;
                    subMenus.push(subMenu);
                });
                menu.subMenus = subMenus;
            }
            menuArray.push(menu);
        });
        console.log(menuArray)
        return menuArray;
    }

}