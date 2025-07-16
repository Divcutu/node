# 自定义脚手架

## 知识点

1. `bin` 字段，在 `package.json` 中配置 `bin` 字段，指定可执行文件的位置。一般配置模式为对象，`key` 为命令名称，value为可执行文件路径。若缩写，则命令名称为 `package.json` 中的 `name` 字段。
    ```json
    // 写法1
    {
        "bin": {
            "my-cli": "bin/my-cli.js"
        }
    }
    // 写法2-简写
    {
        "name": "my-cli",
        "bin": "bin/my-cli.js"
    }

    ```

2. `shebang` 或 `hashbang` ，在可执行文件中添加 `shebang`，指定文件运行环境。例如：`#!/usr/bin/env node`，表示使用 `node` 运行环境。
    + `#!` 是 shebang 的标志，表示接下来的内容是解释器的路径。
    + `/usr/bin/env` 是一个在 Unix 和类 Unix 系统（如 Linux 和 macOS）中用于查找并执行解释器的命令。
    + `node` 是要使用的解释器的名称。

3. `commandar` 工具包负责将参数解析为选项和命令参数。
4. `inquire` 提供用户基于控制台交互的能力的npm包
5. `download-git-repo` 提供下载远程仓库能力的npm包
6. `chalk` 提供颜色输出的npm包