// see https://github.com/actions/github-script
// for info on arguments.

module.exports = async function ({github, context, io, core}) {
    console.log("::set-output name=enabled::true");
    console.log(`::set-output name=matrix::${JSON.stringify({value: ["a", "b/c"]})}`)

    return {
        enabled: true,
        matrix: {value: ["a", "b/c"]}
    };
};
