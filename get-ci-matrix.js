// see https://github.com/actions/github-script/blob/main/action.yml
// for info on arguments.

module.exports = async function ({ github, context, io, core }) {
    return { value: ["a", "b"] };
};
