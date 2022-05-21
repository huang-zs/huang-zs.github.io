/**
 * @file 菜单相关
 */
import menus from '@/assets/data/menu.json'

menus.forEach(menu => {
    const url = '/' + menu.name
    menu.url = url
    if (menu.childrens != null)
        menu.childrens.forEach(subMenu => {
            subMenu.url = url + '/' + subMenu.name
        });
});

export {
    menus
}