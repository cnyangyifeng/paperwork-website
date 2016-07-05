module.exports = function () {
    var src = 'src',
        dist = 'dist';

    return {
        src: src,
        dist: dist,
        allToClean: [
            dist,
            "node_modules",
            src + "/bower_components",
            ".DS_Store",
            "npm-debug.log"
        ]
    };
};
