// flow-typed signature: fc02f401db96fdd95628f3731afdb582
// flow-typed version: <<STUB>>/dependency-cruiser_v^6.0.0/flow_v0.114.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'dependency-cruiser'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'dependency-cruiser' {
  declare module.exports: any;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'dependency-cruiser/bin/depcruise-fmt' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/bin/dependency-cruise' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/recommended-strict' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/recommended-warn-only' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/recommended' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/no-circular' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/no-deprecated-core' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/no-duplicate-dependency-types' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/no-non-package-json' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/no-orphans' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/not-to-deprecated' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/configs/rules/not-to-unresolvable' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/compileConfig' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/compileConfig/mergeConfigs' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/compileConfig/readConfig' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/format' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/formatMetaInfo' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/getResolveConfig' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig/config.js.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig/config.json.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig/createConfigFile' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig/getUserInput' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig/helpers' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/initConfig' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/normalizeOptions' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/parseTSConfig' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/utl/io' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/utl/makeAbsolute' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/utl/validateFileExistence' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/cli/validateNodeEnv' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/addValidations' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/ast-extractors/estree-helpers' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/ast-extractors/extract-AMD-deps' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/ast-extractors/extract-commonJS-deps' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/ast-extractors/extract-ES6-deps' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/ast-extractors/extract-typescript-deps' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/clearCaches' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/circular/getCycle' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/circular' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/orphan' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/orphan/isOrphan' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/reachable' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/derive/reachable/isReachable' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/extract' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/gatherInitialSources' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/parse/toJavascriptAST' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/parse/toTypescriptAST' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/determineDependencyTypes' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/isCore' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/isFollowable' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/isRelativeModuleName' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/localNpmHelpers' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/readPackageDeps' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/readPackageDeps/mergePackages' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/resolve-AMD' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/resolve-commonJS' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/resolve-helpers' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/resolve/resolve' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/summarize' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/coffeeWrap' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/javaScriptWrap' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/liveScriptWrap' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/meta' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/typeScriptWrap' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/transpile/vueWrap' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/dependencyIsEqual' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/detectPreCompilationNess' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/getExtension' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/order' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/pathToPosix' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/extract/utl/stripQueryParams' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/filesAndDirs/normalize' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/options/normalize' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/options/validate' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/resolveOptions/normalize' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/ruleSet/normalize' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/main/ruleSet/validate' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/anonymous/anonymizePath' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/anonymous/anonymizePathElement' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/anonymous' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/anonymous/randomString' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/csv/csv.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/csv' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/common/coloring' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/common/compareOnSource' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/common/folderify' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/folderLevel/consolidateModuleDependencies' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/folderLevel/consolidateModules' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/folderLevel/ddot.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/folderLevel' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/moduleLevel/dot.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/dot/moduleLevel' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err-html/err-html.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err-html' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err-html/utl' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err/err-long' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err/err-short' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/err/err' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/html/html.template' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/html' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/identity' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/json' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/teamcity' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/report/utl/dependencyToIncidenceTransformer' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/utl/arrayUtil' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/utl/findRuleByName' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/utl/safe-regex' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/validate' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/validate/isModuleOnlyRule' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/validate/matchDependencyRule' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/validate/matches' {
  declare module.exports: any;
}

declare module 'dependency-cruiser/src/validate/matchModuleRule' {
  declare module.exports: any;
}

// Filename aliases
declare module 'dependency-cruiser/bin/depcruise-fmt.js' {
  declare module.exports: $Exports<'dependency-cruiser/bin/depcruise-fmt'>;
}
declare module 'dependency-cruiser/bin/dependency-cruise.js' {
  declare module.exports: $Exports<'dependency-cruiser/bin/dependency-cruise'>;
}
declare module 'dependency-cruiser/configs/recommended-strict.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/recommended-strict'
  >;
}
declare module 'dependency-cruiser/configs/recommended-warn-only.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/recommended-warn-only'
  >;
}
declare module 'dependency-cruiser/configs/recommended.js' {
  declare module.exports: $Exports<'dependency-cruiser/configs/recommended'>;
}
declare module 'dependency-cruiser/configs/rules/no-circular.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/no-circular'
  >;
}
declare module 'dependency-cruiser/configs/rules/no-deprecated-core.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/no-deprecated-core'
  >;
}
declare module 'dependency-cruiser/configs/rules/no-duplicate-dependency-types.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/no-duplicate-dependency-types'
  >;
}
declare module 'dependency-cruiser/configs/rules/no-non-package-json.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/no-non-package-json'
  >;
}
declare module 'dependency-cruiser/configs/rules/no-orphans.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/no-orphans'
  >;
}
declare module 'dependency-cruiser/configs/rules/not-to-deprecated.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/not-to-deprecated'
  >;
}
declare module 'dependency-cruiser/configs/rules/not-to-unresolvable.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/configs/rules/not-to-unresolvable'
  >;
}
declare module 'dependency-cruiser/src/cli/compileConfig/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/compileConfig'>;
}
declare module 'dependency-cruiser/src/cli/compileConfig/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/compileConfig'>;
}
declare module 'dependency-cruiser/src/cli/compileConfig/mergeConfigs.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/compileConfig/mergeConfigs'
  >;
}
declare module 'dependency-cruiser/src/cli/compileConfig/readConfig.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/compileConfig/readConfig'
  >;
}
declare module 'dependency-cruiser/src/cli/format.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/format'>;
}
declare module 'dependency-cruiser/src/cli/formatMetaInfo.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/formatMetaInfo'>;
}
declare module 'dependency-cruiser/src/cli/getResolveConfig.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/getResolveConfig'
  >;
}
declare module 'dependency-cruiser/src/cli/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli'>;
}
declare module 'dependency-cruiser/src/cli/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli'>;
}
declare module 'dependency-cruiser/src/cli/initConfig/config.js.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/initConfig/config.js.template'
  >;
}
declare module 'dependency-cruiser/src/cli/initConfig/config.json.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/initConfig/config.json.template'
  >;
}
declare module 'dependency-cruiser/src/cli/initConfig/createConfigFile.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/initConfig/createConfigFile'
  >;
}
declare module 'dependency-cruiser/src/cli/initConfig/getUserInput.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/initConfig/getUserInput'
  >;
}
declare module 'dependency-cruiser/src/cli/initConfig/helpers.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/initConfig/helpers'
  >;
}
declare module 'dependency-cruiser/src/cli/initConfig/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/initConfig'>;
}
declare module 'dependency-cruiser/src/cli/initConfig/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/initConfig'>;
}
declare module 'dependency-cruiser/src/cli/normalizeOptions.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/normalizeOptions'
  >;
}
declare module 'dependency-cruiser/src/cli/parseTSConfig.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/parseTSConfig'>;
}
declare module 'dependency-cruiser/src/cli/utl/io.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/cli/utl/io'>;
}
declare module 'dependency-cruiser/src/cli/utl/makeAbsolute.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/utl/makeAbsolute'
  >;
}
declare module 'dependency-cruiser/src/cli/utl/validateFileExistence.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/utl/validateFileExistence'
  >;
}
declare module 'dependency-cruiser/src/cli/validateNodeEnv.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/cli/validateNodeEnv'
  >;
}
declare module 'dependency-cruiser/src/extract/addValidations.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/addValidations'
  >;
}
declare module 'dependency-cruiser/src/extract/ast-extractors/estree-helpers.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/ast-extractors/estree-helpers'
  >;
}
declare module 'dependency-cruiser/src/extract/ast-extractors/extract-AMD-deps.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/ast-extractors/extract-AMD-deps'
  >;
}
declare module 'dependency-cruiser/src/extract/ast-extractors/extract-commonJS-deps.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/ast-extractors/extract-commonJS-deps'
  >;
}
declare module 'dependency-cruiser/src/extract/ast-extractors/extract-ES6-deps.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/ast-extractors/extract-ES6-deps'
  >;
}
declare module 'dependency-cruiser/src/extract/ast-extractors/extract-typescript-deps.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/ast-extractors/extract-typescript-deps'
  >;
}
declare module 'dependency-cruiser/src/extract/clearCaches.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/clearCaches'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/circular/getCycle.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/circular/getCycle'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/circular/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/circular'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/circular/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/circular'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/orphan/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/orphan'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/orphan/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/orphan'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/orphan/isOrphan.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/orphan/isOrphan'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/reachable/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/reachable'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/reachable/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/reachable'
  >;
}
declare module 'dependency-cruiser/src/extract/derive/reachable/isReachable.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/derive/reachable/isReachable'
  >;
}
declare module 'dependency-cruiser/src/extract/extract.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/extract'>;
}
declare module 'dependency-cruiser/src/extract/gatherInitialSources.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/gatherInitialSources'
  >;
}
declare module 'dependency-cruiser/src/extract/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract'>;
}
declare module 'dependency-cruiser/src/extract/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract'>;
}
declare module 'dependency-cruiser/src/extract/parse/toJavascriptAST.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/parse/toJavascriptAST'
  >;
}
declare module 'dependency-cruiser/src/extract/parse/toTypescriptAST.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/parse/toTypescriptAST'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/determineDependencyTypes.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/determineDependencyTypes'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/resolve'>;
}
declare module 'dependency-cruiser/src/extract/resolve/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/resolve'>;
}
declare module 'dependency-cruiser/src/extract/resolve/isCore.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/isCore'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/isFollowable.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/isFollowable'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/isRelativeModuleName.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/isRelativeModuleName'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/localNpmHelpers.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/localNpmHelpers'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/readPackageDeps/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/readPackageDeps'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/readPackageDeps/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/readPackageDeps'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/readPackageDeps/mergePackages.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/readPackageDeps/mergePackages'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/resolve-AMD.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/resolve-AMD'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/resolve-commonJS.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/resolve-commonJS'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/resolve-helpers.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/resolve-helpers'
  >;
}
declare module 'dependency-cruiser/src/extract/resolve/resolve.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/resolve/resolve'
  >;
}
declare module 'dependency-cruiser/src/extract/summarize.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/summarize'>;
}
declare module 'dependency-cruiser/src/extract/transpile/coffeeWrap.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/coffeeWrap'
  >;
}
declare module 'dependency-cruiser/src/extract/transpile/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/transpile'>;
}
declare module 'dependency-cruiser/src/extract/transpile/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/transpile'>;
}
declare module 'dependency-cruiser/src/extract/transpile/javaScriptWrap.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/javaScriptWrap'
  >;
}
declare module 'dependency-cruiser/src/extract/transpile/liveScriptWrap.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/liveScriptWrap'
  >;
}
declare module 'dependency-cruiser/src/extract/transpile/meta.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/meta'
  >;
}
declare module 'dependency-cruiser/src/extract/transpile/typeScriptWrap.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/typeScriptWrap'
  >;
}
declare module 'dependency-cruiser/src/extract/transpile/vueWrap.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/transpile/vueWrap'
  >;
}
declare module 'dependency-cruiser/src/extract/utl/dependencyIsEqual.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/utl/dependencyIsEqual'
  >;
}
declare module 'dependency-cruiser/src/extract/utl/detectPreCompilationNess.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/utl/detectPreCompilationNess'
  >;
}
declare module 'dependency-cruiser/src/extract/utl/getExtension.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/utl/getExtension'
  >;
}
declare module 'dependency-cruiser/src/extract/utl/order.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/extract/utl/order'>;
}
declare module 'dependency-cruiser/src/extract/utl/pathToPosix.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/utl/pathToPosix'
  >;
}
declare module 'dependency-cruiser/src/extract/utl/stripQueryParams.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/extract/utl/stripQueryParams'
  >;
}
declare module 'dependency-cruiser/src/main/filesAndDirs/normalize.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/filesAndDirs/normalize'
  >;
}
declare module 'dependency-cruiser/src/main/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/main'>;
}
declare module 'dependency-cruiser/src/main/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/main'>;
}
declare module 'dependency-cruiser/src/main/options/normalize.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/options/normalize'
  >;
}
declare module 'dependency-cruiser/src/main/options/validate.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/options/validate'
  >;
}
declare module 'dependency-cruiser/src/main/resolveOptions/normalize.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/resolveOptions/normalize'
  >;
}
declare module 'dependency-cruiser/src/main/ruleSet/normalize.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/ruleSet/normalize'
  >;
}
declare module 'dependency-cruiser/src/main/ruleSet/validate.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/main/ruleSet/validate'
  >;
}
declare module 'dependency-cruiser/src/report/anonymous/anonymizePath.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/anonymous/anonymizePath'
  >;
}
declare module 'dependency-cruiser/src/report/anonymous/anonymizePathElement.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/anonymous/anonymizePathElement'
  >;
}
declare module 'dependency-cruiser/src/report/anonymous/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/anonymous'>;
}
declare module 'dependency-cruiser/src/report/anonymous/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/anonymous'>;
}
declare module 'dependency-cruiser/src/report/anonymous/randomString.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/anonymous/randomString'
  >;
}
declare module 'dependency-cruiser/src/report/csv/csv.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/csv/csv.template'
  >;
}
declare module 'dependency-cruiser/src/report/csv/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/csv'>;
}
declare module 'dependency-cruiser/src/report/csv/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/csv'>;
}
declare module 'dependency-cruiser/src/report/dot/common/coloring.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/common/coloring'
  >;
}
declare module 'dependency-cruiser/src/report/dot/common/compareOnSource.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/common/compareOnSource'
  >;
}
declare module 'dependency-cruiser/src/report/dot/common/folderify.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/common/folderify'
  >;
}
declare module 'dependency-cruiser/src/report/dot/folderLevel/consolidateModuleDependencies.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/folderLevel/consolidateModuleDependencies'
  >;
}
declare module 'dependency-cruiser/src/report/dot/folderLevel/consolidateModules.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/folderLevel/consolidateModules'
  >;
}
declare module 'dependency-cruiser/src/report/dot/folderLevel/ddot.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/folderLevel/ddot.template'
  >;
}
declare module 'dependency-cruiser/src/report/dot/folderLevel/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/folderLevel'
  >;
}
declare module 'dependency-cruiser/src/report/dot/folderLevel/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/folderLevel'
  >;
}
declare module 'dependency-cruiser/src/report/dot/moduleLevel/dot.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/moduleLevel/dot.template'
  >;
}
declare module 'dependency-cruiser/src/report/dot/moduleLevel/index' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/moduleLevel'
  >;
}
declare module 'dependency-cruiser/src/report/dot/moduleLevel/index.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/dot/moduleLevel'
  >;
}
declare module 'dependency-cruiser/src/report/err-html/err-html.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/err-html/err-html.template'
  >;
}
declare module 'dependency-cruiser/src/report/err-html/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/err-html'>;
}
declare module 'dependency-cruiser/src/report/err-html/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/err-html'>;
}
declare module 'dependency-cruiser/src/report/err-html/utl.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/err-html/utl'
  >;
}
declare module 'dependency-cruiser/src/report/err/err-long.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/err/err-long'
  >;
}
declare module 'dependency-cruiser/src/report/err/err-short.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/err/err-short'
  >;
}
declare module 'dependency-cruiser/src/report/err/err.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/err/err'>;
}
declare module 'dependency-cruiser/src/report/html/html.template.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/html/html.template'
  >;
}
declare module 'dependency-cruiser/src/report/html/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/html'>;
}
declare module 'dependency-cruiser/src/report/html/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/html'>;
}
declare module 'dependency-cruiser/src/report/identity.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/identity'>;
}
declare module 'dependency-cruiser/src/report/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/report'>;
}
declare module 'dependency-cruiser/src/report/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report'>;
}
declare module 'dependency-cruiser/src/report/json.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/json'>;
}
declare module 'dependency-cruiser/src/report/teamcity.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/report/teamcity'>;
}
declare module 'dependency-cruiser/src/report/utl/dependencyToIncidenceTransformer.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/report/utl/dependencyToIncidenceTransformer'
  >;
}
declare module 'dependency-cruiser/src/utl/arrayUtil.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/utl/arrayUtil'>;
}
declare module 'dependency-cruiser/src/utl/findRuleByName.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/utl/findRuleByName'>;
}
declare module 'dependency-cruiser/src/utl/safe-regex.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/utl/safe-regex'>;
}
declare module 'dependency-cruiser/src/validate/index' {
  declare module.exports: $Exports<'dependency-cruiser/src/validate'>;
}
declare module 'dependency-cruiser/src/validate/index.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/validate'>;
}
declare module 'dependency-cruiser/src/validate/isModuleOnlyRule.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/validate/isModuleOnlyRule'
  >;
}
declare module 'dependency-cruiser/src/validate/matchDependencyRule.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/validate/matchDependencyRule'
  >;
}
declare module 'dependency-cruiser/src/validate/matches.js' {
  declare module.exports: $Exports<'dependency-cruiser/src/validate/matches'>;
}
declare module 'dependency-cruiser/src/validate/matchModuleRule.js' {
  declare module.exports: $Exports<
    'dependency-cruiser/src/validate/matchModuleRule'
  >;
}
