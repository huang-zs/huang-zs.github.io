<template>
  <article-info-item>
    <div v-for="(v, k) in data" :key="k">
      <h2>{{ v.name }}</h2>
      <div class="table-wrapper">
        <table>
          <tbody>
          <tr v-for="(char, key) in v.charArr" :key="key">
            <td>{{ char.symbol }}</td>
            <td>{{ char.description }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <highlightjs autodetect :code="v.code"/>
      <hr class="major"/>
    </div>
  </article-info-item>
</template>

<script>
/* eslint-disable */
import ArticleInfoItem from "@/components/Article/index.vue";

export default {
  name: "regex-view",
  components: {ArticleInfoItem},
  data() {
    return {
      data: [
        {
          name: "普通字符",
          charArr: [
            {symbol: "\\", description: "转义"},
            {symbol: "^", description: "匹配输入开始"},
            {symbol: "$", description: "匹配输入结束"},
            {symbol: ".", description: '匹配除"\r""\n"之外的任何单个字符'},
            {symbol: "x|y", description: "匹配集合中任意一个字符"},
            {symbol: "[xyz]", description: "匹配集合中列出的任意字符"},
            {symbol: "[^xyz]", description: "匹配集合中未列出的任意字符"},
            {symbol: "[a-z]", description: "匹配范围内的任意字符"},
            {symbol: "[^a-z]", description: "匹配非范围内的任意字符"},
          ],
          code: `@Test
	void basicCharTest(){
		// \ 转义
		log.info("\"*\".matches(\"\\\\*\") {}","*".matches("\\*"));
		// ^ 匹配开头
		log.info("\"google\".matches(\"^g.*\") {}","google".matches("^g.*"));
		// $ 匹配结尾
		log.info("\"google\".matches(\".*e$\") {}","google".matches(".*e$"));
		// . 匹配除"\\r""\\n"之外的任何单个字符
		log.info("\"a\".matches(\".\") {}","google".matches("."));
		log.info("System.lineSeparator().matches(\".*\") {}",System.lineSeparator().matches(".*"));
		// x|y 匹配其中一个
		log.info("\"x\".matches(\"x|y\") {}","x".matches("x|y"));
		log.info("\"y\".matches(\"x|y\") {}","y".matches("x|y"));
		log.info("\"z\".matches(\"x|y\") {}","z".matches("x|y"));
		// [xyz] 匹配集合中任意一个
		log.info("\"x\".matches(\"[xyz]\") {}","x".matches("[xyz]"));
		log.info("\"a\".matches(\"[xyz]\") {}","a".matches("[xyz]"));
		// [^xyz] 排除集合中任意一个
		log.info("\"x\".matches(\"[^xyz]\") {}","x".matches("[^xyz]"));
		log.info("\"a\".matches(\"[^xyz]\") {}","a".matches("[^xyz]"));
		// [a-z] 匹配字符范围
		log.info("\"a\".matches(\"[a-z]\") {}","a".matches("[a-z]"));
		log.info("\"A\".matches(\"[a-z]\") {}","A".matches("[a-z]"));
		// [^a-z] 排除字符范围
		log.info("\"a\".matches(\"[^a-z]\") {}","a".matches("[^a-z]"));
		log.info("\"A\".matches(\"[^a-z]\") {}","A".matches("[^a-z]"));
	}`,
        },
        {
          name: "重复修饰符",
          charArr: [
            {symbol: "*", description: "匹配前面表达式零次或多次,等价于{0,}"},
            {symbol: "+", description: "匹配前面表达式一次或多次,等价于{1,}"},
            {
              symbol: "?",
              description: "匹配前面表达式零次或一次,等价于{0,1}",
            },
            {symbol: "{n}", description: "匹配前面表达式n次"},
            {symbol: "{n,}", description: "匹配前面表达式最小n次"},
            {symbol: "{n,m}", description: "匹配前面表达式最小n次最大m次"},
            {symbol: "?", description: "非贪心量化,当该字符紧跟在任何一个其他重复修饰符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。"},
          ],
          code: `@Test
	void repeatCharTest(){
		// * 匹配零或多次
		log.info("\"z\".matches(\"zo*\") {}","z".matches("zo*"));
		log.info("\"zo\".matches(\"zo*\") {}","zo".matches("zo*"));
		// + 匹配一次或多次
		log.info("\"z\".matches(\"zo+\") {}","z".matches("zo+"));
		log.info("\"zo\".matches(\"zo+\") {}","zo".matches("zo+"));
		log.info("\"zoo\".matches(\"zo+\") {}","zoo".matches("zo+"));
		// ? 匹配零次或一次
		log.info("\"z\".matches(\"zo?\") {}","z".matches("zo?"));
		log.info("\"zo\".matches(\"zo?\") {}","zo".matches("zo?"));
		log.info("\"zoo\".matches(\"zo?\") {}","zoo".matches("zo?"));
		// {n} 匹配n次
		log.info("\"zo\".matches(\"zo{2}\") {}","zo".matches("zo{2}"));
		log.info("\"zoo\".matches(\"zo{2}\") {}","zoo".matches("zo{2}"));
		// {n,} 匹配最小n次
		log.info("\"zo\".matches(\"zo{2,}\") {}","zo".matches("zo{2,}"));
		log.info("\"zoo\".matches(\"zo{2,}\") {}","zoo".matches("zo{2,}"));
		log.info("\"zooo\".matches(\"zo{2,}\") {}","zooo".matches("zo{2,}"));
		// {n,m} 匹配最小n次，最多m次
		log.info("\"zo\".matches(\"zo{2,3}\") {}","zo".matches("zo{2,3}"));
		log.info("\"zoo\".matches(\"zo{2,3}\") {}","zoo".matches("zo{2,3}"));
		log.info("\"zoooo\".matches(\"zo{2,3}\") {}","zoooo".matches("zo{2,3}"));
		// ？ 非贪心量化
        String str = "google";
        Pattern compile = Pattern.compile("go+");
        Matcher matcher = compile.matcher(str);
        while (matcher.find()) {
            log.info("{} : {}", compile, matcher.group());
        }
        compile = Pattern.compile("go+?");
        matcher = compile.matcher(str);
        while (matcher.find()) {
            log.info("{} : {}", compile, matcher.group());
        }
	}`,
        },
        {
          name: "pattern",
          charArr: [
            {
              symbol: "(pattern)",
              description: "匹配 pattern 并捕获该匹配的子表达式",
            },
            {
              symbol: "(?:pattern)",
              description: "匹配pattern但不获取匹配的子字符串",
            },
            {
              symbol: "(?=pattern)",
              description:
                  "正向肯定预查,在任何匹配pattern的字符串开始处匹配查找字符串,预查不消耗字符",
            },
            {
              symbol: "(?!pattern)",
              description:
                  "正向否定预查,在任何不匹配pattern的字符串开始处匹配查找字符串。",
            },
          ],
          code: `	@Test
	void patternCharTest(){
		// (pattern) 匹配pattern
		log.info("\"google\".matches(\"g(oogle)\") {}","google".matches("g(oogle)"));

		// (?:pattern) 匹配pattern 与 "|"一起使用
		log.info("\"industry\".matches(\"industr(?:y|ies)\") {}","industry".matches("industr(?:y|ies)"));
		log.info("\"industries\".matches(\"industr(?:y|ies)\") {}","industries".matches("industr(?:y|ies)"));

		// (?=pattern) 正向肯定预查,预查不消耗字符,即匹配pattern,但是不消耗pattern的字符
		// 匹配Windows2000X
		// 错解，Windows(?=95|98|NT|2000)只匹配了Windows,2000没被消耗,后边从2继续匹配
		log.info("\"Windows2000X\".matches(\"Windows(?=95|98|NT|2000)X\") {}","Windows2000X".matches("Windows(?=95|98|NT|2000)X"));
		// 正解
		log.info("\"Windows2000X\".matches(\"Windows(?=95|98|NT|2000)2000X\") {}","Windows2000X".matches("Windows(?=95|98|NT|2000)2000X"));

		// (?!pattern) 正向否定预查
		log.info("\"Windows1000X\".matches(\"Windows(?!95|98|NT|2000)1000X\") {}","Windows1000X".matches("Windows(?!95|98|NT|2000)1000X"));
	}`,
        },
        {
          name: "特殊字符",
          charArr: [
            {
              symbol: "\\b",
              description: "匹配一个单词边界，也就是指单词和空格间的位置。记忆border",
            },
            {
              symbol: "\\B",
              description: "匹配非单词边界。",
            },
            {
              symbol: "\\d",
              description: "匹配一个数字字符。等价于[0-9]。记忆digit",
            },
            {
              symbol: "\\D",
              description: "匹配一个非数字字符",
            },
            {
              symbol: "\\n",
              description: "匹配一个换行符。记忆new line",
            },
            {
              symbol: "\\r",
              description: "匹配一个回车符。记忆return",
            },
            {
              symbol: "\\s",
              description: "匹配任何空白字符。记忆space",
            },
            {
              symbol: "\\S",
              description: "匹配任何非空白字符",
            },
            {
              symbol: "\\w",
              description: "匹配包括下划线的任何单词字符。等价于\"[A-Za-z0-9_]\",记忆word",
            },
            {
              symbol: "\\W",
              description: "匹配任何非单词字符",
            },
            {
              symbol: "\\un",
              description:
                  "Unicode转义字符序列,n是一个用四个十六进制数字表示的Unicode字符",
            }, {
              symbol: "[\\u4e00-\\u9fa5]",
              description:
                  "匹配中文",
            }, {
              symbol: "\\num",
              description:
                  "num为数字,匹配第num个分组,\\1表示匹配第1个分组的内容",
            }
          ],
          code: `    @Test
    void specialCharTest() {
        // \\b 匹配单词边界
        log.info("\\"never\\".matches(\\".*er\\\\\\\\b.*\\") {}", "never".matches(".*er\\\\b.*"));
        log.info("\\"verb\\".matches(\\".*er\\\\\\\\b.*\\") {}", "verb".matches(".*er\\\\b.*"));

        // \\B  匹配非单词边界
        log.info("\\"never\\".matches(\\".*er\\\\\\\\B.*\\") {}", "never".matches(".*er\\\\B.*"));
        log.info("\\"verb\\".matches(\\".*er\\\\\\\\B.*\\") {}", "verb".matches(".*er\\\\B.*"));

        // \\d 匹配一个数字字符
        log.info("\\"1\\".matches(\\"\\\\\\\\d\\") {}", "1".matches("\\\\d"));
        log.info("\\"a\\".matches(\\"\\\\\\\\d\\") {}", "a".matches("\\\\d"));

        // \\D 匹配一个非数字字符
        log.info("\\"1\\".matches(\\"\\\\\\\\D\\") {}", "1".matches("\\\\D"));
        log.info("\\"a\\".matches(\\"\\\\\\\\D\\") {}", "a".matches("\\\\D"));

        // \\n 匹配一个换行符, \\r 匹配一个回车符
        log.info("System.lineSeparator().matches(\\"\\\\\\\\r\\\\\\\\n\\") {}", System.lineSeparator().matches("\\\\r\\\\n"));

        // \\s 匹配任何空白字符
        log.info("\\"\\".matches(\\"\\\\\\\\s\\") {}", "".matches("\\\\s"));
        log.info("\\" \\".matches(\\"\\\\\\\\s\\") {}", " ".matches("\\\\s"));
        log.info("\\"\t\\".matches(\\"\\\\\\\\s\\") {}", "\t".matches("\\\\s"));

        // \\S 匹配任何非空白字符
        log.info("\\"a\\".matches(\\"\\\\\\\\S\\") {}", "a".matches("\\\\S"));

        // \\w 匹配包括下划线的任何单词字符
        log.info("\\"_\\".matches(\\"\\\\\\\\w\\") {}", "_".matches("\\\\w"));
        log.info("\\"a\\".matches(\\"\\\\\\\\w\\") {}", "a".matches("\\\\w"));

        // \\W 匹配任何非单词字符
        log.info("\\"+\\".matches(\\"\\\\\\\\W\\") {}", "+".matches("\\\\W"));

        // \\\\un Unicode转义字符序列
        log.info("\\"黄\\".matches(\\"\\\\\\\\u9ec4\\") {}", "黄".matches("\\\\u9ec4"));

        // \\\\num num为数字,匹配第num个分组
        List<String> numList = Arrays.asList("a1a", "a2a", "a1b");
        // \\\\1 替换成第1个分组的内容
        String numRegex = "(a)(\\\\d)\\\\1";
        for (String s : numList) {
            log.info("{} match {} {}", s, numRegex, s.matches(numRegex));
        }

    }`,
        }, {
          name: "常见用法", code: ` @Test
    void useTest() {

        log.info("================={}=====================","验证电话号码");
        // 验证电话号码(135,137开头)
        List<String> phoneList = Arrays.asList("13712345677", "13812345677", "13912345677", "15712345677", "13512345677");
        String phoneRegex = "^13[57]\\\\d{8}";
        for (String s : phoneList) {
            log.info("{} match {} {}", s, phoneRegex, s.matches(phoneRegex));
        }
        log.info("================={}=====================","验证用户名");

        // 验证用户名(只能输入汉字、英文、数字和下划线)
        List<String> nameList = Arrays.asList("大大", "大a1", "a_a2", "a!o", "a-da");
        String nameRegex = "[\\\\u4e00-\\\\u9fa5\\\\w]*";
//        String nameRegex = "[\\\\u4e00-\\\\u9fa5A-Za-z_0-9]*";
        for (String s : nameList) {
            log.info("{} match {} {}", s, nameRegex, s.matches(nameRegex));
        }

        log.info("================={}=====================","验证用户密码强度");
        // 验证用户密码强度(长度6-10位,只能包含英文和数字,至少包括1个大写字母、2个小写字母、1个数字)
        List<String> passwordList = Arrays.asList("Abc123", "Abbbb", "Ac11111", "a!o", "abc123", "a!aa123", "Aza!aa123", "Abc123456789");
        String password = "Abc123";
        // 实现长度6-10位,只能包含英文和数字
        log.info("{}", password.matches("^[A-Za-z\\\\d]{6,10}$"));
        // 至少1个大写字母 (?=.*[A-Z]+)
        log.info("{}", password.matches("^(?=.*[A-Z]+)[A-Za-z\\\\d]{6,10}$"));
        // 至少2个小写字母 (?=.*[a-z]{2,})
        log.info("{}", password.matches("^(?=.*[A-Z]+)(?=.*[a-z]{2,})[A-Za-z\\\\d]{6,10}$"));
        // 至少1个数字 (?=.*\\d+)
        log.info("{}", password.matches("^(?=.*[A-Z]+)(?=.*[a-z]{2,})(?=.*\\\\d+)[A-Za-z\\\\d]{6,10}$"));

        String passwordRegex = "^(?=.*[A-Z]+)(?=.*[a-z]{2,})(?=.*\\\\d+)[A-Za-z0-9]{6,10}$";
        for (String s : passwordList) {
            log.info("{} match {} {}", s, passwordRegex, s.matches(passwordRegex));
        }

        log.info("================={}=====================","验证邮箱");
        // 验证邮箱
        List<String> emailList = Arrays.asList("1234@qq.com", "wang@126.com", "wang123@126.com", "wang123@vip.163.com", "wang_email@outlook.com", "wang.email@gmail.com");
        String emailRegex = "^\\\\w*(\\\\.\\\\w+)*@\\\\w*(\\\\.\\\\w+)+$";
        for (String s : emailList) {
            log.info("{} match {} {}", s, emailRegex, s.matches(emailRegex));
        }

        log.info("================={}=====================","身份证获取");
        //身份证获取 省级行政区、地级行政区、县级行政区、生日、性别
        List<String> idCardList = Arrays.asList("440125199703011214", "44012519970302122X");
        Pattern idCardPattern = Pattern.compile("^(?<province>\\\\d{2})(?<city>\\\\d{2})(?<county>\\\\d{2})(?<birthday>\\\\d{8})\\\\d{2}(?<sex>\\\\d)(?:\\\\d|X)$");
        for (String s : idCardList) {
            Matcher idCardMatcher = idCardPattern.matcher(s);
            while (idCardMatcher.find()) {
                log.info("{} province[{}] city[{}] county[{}] birthday[{}] sex[{}]", s, idCardMatcher.group("province"), idCardMatcher.group("city"), idCardMatcher.group("county"), idCardMatcher.group("birthday"), idCardMatcher.group("sex"));
            }
        }

        log.info("================={}=====================","数字价格千分位分隔");
        // 数字价格千分位分隔 123456789转123,456,789
        String price = "123456789";
        // 先把后面的第一个逗号搞出来,(?=\\d{3}$)匹配结尾三位数前的位置加逗号
        log.info("{}", price.replaceAll("(?=\\\\d{3}$)", ","));// 123456,789
        // 把所有逗号搞出来,(\\d{3})+每三位匹配一次
        log.info("{}", price.replaceAll("(?=(\\\\d{3})+$)", ",")); // ,123,456,789
        // 去掉开始的逗号, (?!^)不匹配开头
        log.info("{}", price.replaceAll("(?!^)(?=(\\\\d{3})+$)", ",")); // 123,456,789

        log.info("================={}=====================","手机号3-4-4分隔");
        // 手机号3-4-4分隔 12345678910转123-4567-8910
        String phone = "12345678910";
        log.info("{}", phone.replaceAll("(?=\\\\d{4}$)", "-")); // 1234567-8910
        log.info("{}", phone.replaceAll("(?=(\\\\d{4})+$)", "-")); // 123-4567-8910

        log.info("================={}=====================","获取连续重复字符");
        // 获取连续重复字符
        Pattern continuousRepeatCharacterPattern = Pattern.compile("(.+)\\\\1+");
        Matcher continuousRepeatCharacterMatcher = continuousRepeatCharacterPattern.matcher("12323454545666");
        while (continuousRepeatCharacterMatcher.find()) {
            log.info("{}", continuousRepeatCharacterMatcher.group(1));
        }

        log.info("================={}=====================","去首尾空格");
        // 去首尾空格
        // 去除空格
        log.info("{}"," ab ".replaceAll("^\\\\s*|\\\\s*$",""));
        // 提取非空格
        log.info("{}"," ab ".replaceAll("^\\\\s*(.*)\\\\s*$","$1"));

        log.info("================={}=====================","获取url query");
        // 获取url query
        String query="?sex=boy&name=test&age=&age=100";
        Pattern queryPattern = Pattern.compile("([^&=?]+)=?([^&]*)");
        Matcher  queryMatcher = queryPattern.matcher(query);
        while (queryMatcher.find()){
            log.info("{}",queryMatcher.group());
        }
        log.info("================={}=====================", "姓名脱敏");
        // 姓名脱敏
        List<String> nameList2 = Arrays.asList("张三", "张三三", "张三三三");
        for (String s : nameList2) {
            log.info(chineseNameDesensitization(s));
        }
    }

    private String chineseNameDesensitization(String name) {
        if (name == null || "".equals(name)) {
            return name;
        }

        if (name.length() == 2) {
            name = name.replaceAll("(.)(.)", "*$2");
        } else {
            name = name.replaceAll("(.).*(.)", "$1" + String.join("", Collections.nCopies(name.length() - 2, "*")) + "$2");
        }

        return name;

    }
    }`
        }
      ],
    };
  },
};
</script>