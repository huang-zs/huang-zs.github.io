<template>
  <article-info-item>
    <h2>常用配置</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commonConfig,key in commonConfigArray" :key="key">
            <td>{{commonConfig.name}}</td>
            <td>{{commonConfig.operate}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="major" />
    <h2>常用快捷键</h2>
    <div v-for="(v,k) in commonCommandArray" :key="k">
      <h4>{{k}}</h4>
      <div class="table-wrapper">
        <table class="alt">
          <tbody>
            <tr v-for="commonCommand,key in v" :key="key">
              <td>{{commonCommand.operate}}</td>
              <td>{{commonCommand.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr class="major" />
    <h2>常用插件</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commonPlugin,key in commonPluginArray" :key="key">
            <td>{{commonPlugin.name}}</td>
            <td>{{commonPlugin.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article-info-item>
</template>

<script>
import ArticleInfoItem from '@/components/Article/index.vue'
export default {
  name: 'idea-view',
  components: { ArticleInfoItem },
  data() {
    return {
      commonConfigArray: [
        { name: "关闭idea更新检查", operate: "Appearance & Behavior -> System Settings -> Updates =>取消勾选Check IDE updates for" },

        { name: "自动导包", operate: "Editor->General->Auto Import=>勾选Add unambiguous imports on the fly,勾选Optimize imports on the fly" },
        { name: "显示方法分隔符", operate: "Editor->General->Appearance=>勾选Show method separators" },
        { name: "忽略大小写提示", operate: "Editor->General->Code Completion=>取消勾选Match Case" },
        { name: "星号标识编辑过的文件", operate: "Editor->General->Editor Tabs=>勾选Mark modified (*)" },
        { name: "设置字体", operate: "Editor->Font" },
        { name: "生成 serialversuinUID", operate: "Editor -> Inspections -> Java -> Serialization issues -> 勾选Serializable class without 'serialVersionUID'" },
        { name: "注释模板", operate: "Editor->File and Code Templates" },
        { name: "设置文件编码", operate: "Editor -> File Encodings=>Global Encoding选择UTF-8,Project Encoding选择UTF-8,Default encoding for properties files选择UTF-8,勾选Transparent native-to-ascli conversion" },
        { name: "隐藏文件", operate: "Editor->File Types=>Ignore files and folders添加" },

        { name: "配置maven", operate: "Build,Execution,Deployment->Build Tools->Maven=>Maven home path选择maven安装路径,User settings file选择setting配置文件" },
        { name: "配置maven下载源码和doc", operate: "Build,Execution,Deployment->Build Tools->Maven->Importing=>Automatically download勾选Sources,Documentation" },
        { name: "配置gradle", operate: "Build,Execution,Deployment->Build Tools->Gradle=>配置gradle下载路径" },
        { name: "设置自动编译", operate: "Build,Execution,Deployment->Compiler=>勾选Build project automatically||勾选Compile independent moudules in parallel" },
        { name: "配置编译版本", operate: "Buil,Execution,Deployment->Compiler->java compiler=>Project byte code version选择8" },

        { name: "设置默认浏览器", operate: "Tools->Web Browsers and Preview=>Default browser选择First listed" },

        { name: "配置jdk(?)", operate: "打开项目->file->new projects setup->structure" },

      ],
      // 基于官方pdf
      commonCommandArray: {
        "Editing": [
          { "operate": "Ctrl + Space", "description": "基本代码补全" },
          { "operate": "Ctrl + Shift + Space", "description": "智能代码补全" },
          { "operate": "Ctrl + Shift + Enter", "description": "结束代码，行末添加分号" },
          { "operate": "Ctrl + P (Parameter info)", "description": "查看参数信息（方法）" },
          { "operate": "Ctrl + Q (Quick documentation lookup)", "description": "查看文档，等效于鼠标悬浮" },
          { "operate": "Alt + Insert", "description": "生成代码(Getters, Setters,Constructors, hashCode/ equals, toString) " },
          { "operate": "Ctrl + O (Override methods)", "description": "重写方法" },
          { "operate": "Ctrl + I (Implement methods)", "description": "实现方法" },
          { "operate": "Ctrl + Alt + T", "description": "代码环绕(if..else,try..catch, for,synchronized, etc.) " },
          { "operate": "Alt + Enter", "description": "显示意图操作和快速修复" },
          { "operate": "Ctrl + Alt + L", "description": "格式化代码" },
          { "operate": "Ctrl + Alt + O (Optimize imports)", "description": "优化导入" },
          { "operate": "Ctrl + Alt + L", "description": "格式化代码" },
          { "operate": "Ctrl + D (Duplicate current line or selected block)", "description": "复制代码" },
          { "operate": "Ctrl + Y", "description": "删除行" },
          { "operate": "Shift + Enter", "description": "开始新的一行" },
          { "operate": "Ctrl + Shift + ]/[", "description": "选到结束或开始" },
          { "operate": "Ctrl + F4", "description": "关闭活动tab" },
        ],
        "Usage Search": [
          { "operate": "Ctrl + Alt + F7", "description": "查看类或者变量被调用的地方" },
        ],
        "Navigation": [
          { "operate": "Esc", "description": "转到编辑器" },
          { "operate": "Shift + Esc", "description": "隐藏窗口" },
          { "operate": "Ctrl + G (Go to line)", "description": "跳转到指定行" },
          { "operate": "Ctrl + E", "description": "查看最近文件" },
          { "operate": "Ctrl + B , Ctrl + Click", "description": "跳转到声明，如变量定义的位置" },
          { "operate": "Ctrl + Alt + B", "description": "跳转到实现" },
          { "operate": "Ctrl + Shift + I", "description": "新窗口查看定义" },
          { "operate": "Ctrl + Shift + B", "description": "跳转到类定义" },
          { "operate": "Ctrl + U", "description": "跳转到父类或者父方法" },
          { "operate": "Ctrl + ]/[", "description": "跳转到结束或开始" },
          { "operate": "Ctrl + F12", "description": "查看类结构" },
          { "operate": "Ctrl + H", "description": "查看子类" },
          { "operate": "Ctrl + Alt + H", "description": "查看方法调用位置" },
        ],
        "Search/Replace": [
          { "operate": "Double Shift", "description": "万能查找" },
          { "operate": "Ctrl + F", "description": "当前页面中找" },
          { "operate": "Ctrl + Shift + F", "description": "指定路径中找" },
        ],
      },
      commonPluginArray: [
        { name: "Alibaba Java Coding Guidelines", description: "阿里巴巴代码规范" },
        { name: "Maven Helper", description: "帮助我们查找和排除maven冲突依赖项" },
        { name: "Translation", description: "翻译，右键选择Translation" },
        { name: "GsonFormatPlus", description: "json转实体，对接第三方时定义实体很方便" },
      ]
    }
  },
}
</script>

<style>
</style>