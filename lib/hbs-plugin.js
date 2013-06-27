/**
 *
 */
define([
    'js!lib/handlebars/handlebars.js!exports=Handlebars'
], function(Handlebars) {
    var buildMap = {},
        templateExtension = '.html';

    return {
        load: function(name, parentRequire, onLoad, config) {
            var ext = (typeof config.templateExtension == "string" ? config.templateExtension : templateExtension);

            if(config.isBuild) {
                var fs = nodeRequire('fs');
                var fsPath = config.dirBaseUrl + "/" + name + ext;
                buildMap[name] = fs.readFileSync(fsPath).toString();
                onLoad();
            } else {
                parentRequire(['text!' + name + ext], function(raw) {
                    onLoad(Handlebars.compile(raw));
                }, onLoad['error'] || onLoad);
            }
        },

        write: function(pluginName, name, write) {
            var compiled = Handlebars.precompile(buildMap[name]);
            write(
                "define('hbs!" + name + "', ['handlebars'], function(Handlebars) {\n" +
                    "return Handlebars.template(" + compiled.toString() + ");\n" +
                    "});\n"
            );
        }
    };

});