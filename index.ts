import { readFile, writeFile } from "fs-extra";
import {
  parse,
  compileScript,
  rewriteDefault,
  compileTemplate,
} from "@vue/compiler-sfc";
import { rollup } from "rollup";

async function start() {
  // 相对于 npm script 的运行目录
  const file = await readFile("./src/main.vue", "utf8");

  // 用 @vue/compiler-sfc 进行解析，解析出 SFC 的每个块
  const { descriptor } = parse(file);
  // console.log(descriptor);

  // 这个 id 是 scopeId，用于 css scope
  const id = "my-test-component";

  // 编译 script，因为可能有 script setup，还要进行 css 变量注入
  const script = compileScript(descriptor, { id });

  // 用于存放代码，最后 join('\n') 合并成一份完整代码
  const codeList = [];

  // 重写 default
  codeList.push(rewriteDefault(script.content, "__sfc_main__"));

  // 编译模板，变成 render 函数
  const template = compileTemplate({
    source: descriptor.template.content,
    filename: "main.vue",
    id,
  });

  // 重写 default
  codeList.push(rewriteDefault(template.code, "renderModule"));

  codeList.push(`__sfc_main__.render=render`);
  codeList.push(`export default __sfc_main__`);

  // 合成代码
  const code = codeList.join("\n");
  // console.log(code);
  await writeFile("main.temp.js", code);

  // 打包代码
  const bundle = await rollup({
    input: "main.temp.js",
    external: ["vue"],
  });
  const { output } = await bundle.generate({
    format: "umd",
    // file: "main.js",
    name: "MyBundle",
    globals: {
      vue: "Vue",
    },
  });
  console.log(output[0].code);

  // await build({
  //   entryPoints: ["main.temp.js"],
  //   format: "iife",
  //   outfile: "main.js",
  //   // platform: "browser",
  //   plugins: [
  //     externalGlobalPlugin({
  //       vue: "window.Vue",
  //     }),
  //   ],
  // });

  writeFile("main.js", output[0].code);
}

start();
