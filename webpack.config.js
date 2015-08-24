module.exports = {
    context: __dirname,
    entry: {
        index: './index.jsx'
    },
    output: {
        library: 'ReactBootstrapAlert',
        libraryTarget: 'umd',
        filename: 'index.js',
        chunkFilename: 'index.js'
    },

    externals: {
        react: 'react',
        'react-bootstrap': 'react-bootstrap',
        alt: 'alt',
        'es6-react-mixins': 'es6-react-mixins',
        'alt-connect': 'alt-connect'
    },

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
