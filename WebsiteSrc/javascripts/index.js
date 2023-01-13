let url = "https://raw.githubusercontent.com/MoonLGH/TcukawiWa/cmd/cmd.json"

async function dofetch(url) {
    let fetching = await fetch(url)
    let data = await fetching.json()
    return data
}
function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

dofetch(url).then(tree => {
    document.getElementById("command").innerText = `${tree.length} Commands Loaded`
    console.log(tree)
})


