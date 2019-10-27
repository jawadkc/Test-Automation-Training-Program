module.exports = {
    exit: true,
    bail: true,
    diff: true,
    check_leaks: true,
    color: true,
    recursive: true,
    extension: ['.spec.js'],
    package: './package.json',
    reporter: 'mocha-multi',
    timeout: 120000,
    ui: 'bdd'
}
