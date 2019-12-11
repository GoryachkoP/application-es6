// уст плагін html plugin для маніпуляції хтмл сторінки
// будемо автоматично додавати назву скрипта
// 1. підключаємо клас і з require ми підключаємо як абсолютний шлях із папки node_modules плагін
// html-webpack-plugin
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    // вхідна точка
    entry: ['@babel/polyfill', './src/index.js'],
    // куди ми будемо складувати, глобальна змінна __dirname яка відповідає за поточний шлях папки
    // збірник усіх скриптів прийнято називати bundle.js
    output: {
        // місце де лежатите вихіний файл
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    //конфіг сервера для розробки - об'єкт
    devServer: {
        //вказуємо де будемо запускати сервер
        contentBase: __dirname + '/dist'
    },

    plugins: [
        /* 2. створюємо екземпляр класу хтмл плагін і в конструктор даного класу передаємо об'єкт
        */
        new HTMLPlugin({
            //вихідний файл який буде в dist
            filename: 'index.html',
            // наший файл який буде вибраний і оброблений
            template: './src/index.html'
        })
    ],

    // ми будемо використовувати модулі (js files), і щоб не писати кожен раз розширення
    // при підключення їх
    resolve: {
        // розширення які вебпак повен автоматично розуміти
        extensions: ['.js']
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}