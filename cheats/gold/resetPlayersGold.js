(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        let player = prompt("Who's gold would you like to reset?");
        let { stateNode: { props, state } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            if (players && Object.keys(players).map(x=>x.toLowerCase()).includes(player.toLowerCase())) props.liveGameController.setVal({
                path: "c/".concat(props.client.name),
                val: {
                    b: props.client.blook,
                    g: state.gold,
                    tat: `${player}:swap:0`
                }
            });
        })
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Daweno95/Blooket-Cheats/main/autoupdate/timestamps/gold/resetPlayersGold.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947465 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();
