// see https://github.com/actions/github-script
// for info on arguments.

module.exports = async function ({github, context, io, core}) {
    console.dir(context.payload, { depth: 5 });

    // console.log("::set-output name=enabled::true");
    // console.log(`::set-output name=matrix::${JSON.stringify({value: ["a", "b/c"]})}`)

    return {value: ["a", "b/c"]};
};
