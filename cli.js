const npmPkgVersions = require('npm-pkg-versions')
const listPackageVersions = npmPkgVersions.default
const versionDiff = require('version-diff')
const pkgInfo = require('./package.json')
const fs = require('fs')

async function main() {
    const versions = await listPackageVersions(pkgInfo.name)
    if (versions && versions.length) {
        const lastVersion = versions[versions.length - 1]
        const currentVersion = pkgInfo.version
        const result = versionDiff.main(lastVersion, currentVersion)
        console.log(lastVersion, currentVersion, result)
    }

    fs.readFile('./template/ok.text', function (err, data) {
        console.log(data.toString())
    })
}

main().catch(err => console.error(err))
