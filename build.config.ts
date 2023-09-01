import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['src/index'],
    clean: true,
    rollup: {
        inlineDependencies: true,
        esbuild: {
            target: 'node18',
            minify: true,
        },
    },
    alias: {
        prompts: 'prompts/lib/index.js',
    },
    outDir: 'build/dist/',
    hooks: {
        'rollup:options': function (ctx, options) {
            options.plugins = [
                options.plugins,
            ]
        },
    },

})
