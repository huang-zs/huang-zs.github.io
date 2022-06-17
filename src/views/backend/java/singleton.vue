<template>
  <article-info-item>
    <div v-for="(v, k) in singletonArray" :key="k">
      <h2>{{ v.name }}</h2>
      <highlightjs autodetect :code="v.code"/>
      <hr class="major"/>
    </div>
  </article-info-item>
</template>

<script>
import ArticleInfoItem from '@/components/Article/index.vue'

export default {
  name: "singleton-view",
  components: {ArticleInfoItem},
  data() {
    return {
      singletonArray: [
        {
          name: "饿汉式单例",
          code: `
/**
 * 饿汉式单例<p>
 * 类一加载就创建对象,不管是否使用都会创建<p>
 * 优点：线程安全，没有加锁，执行效率较高<p>
 * 缺点：不是懒加载，类加载时就初始化，浪费内存空间<p>
 *
 * @author Administrator
 */
public class Singleton {
    private static Singleton instance = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return instance;
    }

    public void doSomething() {
        System.out.println(this);
    }

}`
        },
        {
          name: "双重校验锁", code: `/**
 * 双重校验锁,懒汉式单例<p>
 * 双重校验指两次非空判断，synchronized加锁，volatile保证可见性和禁止指令重排序<p>
 * 优点：懒加载，线程安全，效率较高<p>
 *
 * @author Administrator
 */
public class Singleton2 {
    private static volatile Singleton2 instance;

    private Singleton2() {
    }

    public static  Singleton2 getInstance() {
        if (instance == null) {
            synchronized (Singleton2.class) {
                if (instance == null) {
                    instance = new Singleton2();
                }
            }
        }
        return instance;
    }
    public void doSomething(){
        System.out.println(this);
    }
}
`
        },
        {
          name: "静态内部类", code: `/**
 * 静态内部类,懒汉式单例<p>
 * 利用静态内部类延迟初始化的特性实现<p>
 * 优点：懒加载，线程安全，效率较高，实现简单<p>
 *
 * @author Administrator
 */
public class Singleton3 {

    private Singleton3() {
    }

    private static class SingletonHolder {

        private static final Singleton3 instance = new Singleton3();
    }


    public static Singleton3 getInstance() {
        return SingletonHolder.instance;
    }

    public void doSomething(){
        System.out.println(this);
    }

}`
        }, {
          name: "枚举", code: `/**
 * 枚举单例<p>
 * 利用枚举是单例的特性<p>
 * 优点：简单，高效，线程安全<p>
 *
 * @author Administrator
 */
public enum Singleton4 {
    INSTANCE;

    public void doSomething() {
        System.out.println(this);
    }
}`
        }
      ]
    }
  }
}

</script>