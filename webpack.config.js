var path = require('path');

module.exports = {
    entry: "./js/main.js", // string | object | array
    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "fianaldist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "bundle.js", // string
        // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    }
    // resolve: {
    //     alias: {
    //         jquery: path.resolve(__dirname, 'js/lib/jquery.js')
    //     }
    // }
}