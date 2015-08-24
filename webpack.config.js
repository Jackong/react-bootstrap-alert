module.exports = {
    context: __dirname,
    entry: {
        index: './index.jsx'
    },
    output: {
            filename: 'index.js',
            chunkFilename: 'index.js'
    },

    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }, {
        'react-bootstrap': {
            root: 'ReactBootstrap',
            commonjs2: 'react-bootstrap',
            commonjs: 'react-bootstrap',
            amd: 'react-bootstrap'
        }
    }, {
        'alt': {
            root: 'Alt',
            commonjs2: 'alt',
            commonjs: 'alt',
            amd: 'alt'
        }
    }, {
        'es6-react-mixins': {
            commonjs2: 'es6-react-mixins',
            commonjs: 'es6-react-mixins',
            amd: 'es6-react-mixins'
        }
    }, {
        'alt-connect': {
            commonjs2: 'alt-connect',
            commonjs: 'alt-connect',
            amd: 'alt-connect'
        }
    }],

    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.json', '.node', '.js', '.jsx']
    },
    node: {
        Buffer: false
    }
};
