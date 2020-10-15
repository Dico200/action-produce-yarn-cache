// see https://github.com/actions/github-script
// for info on arguments.

module.exports = async function ({ github, context, io, core }) {
    return { value: ["a", "b/c"] };
};
