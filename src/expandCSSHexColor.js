import isCSSHexColor from "@chriscodesthings/is-css-hex-color";

function canBeExpanded(col) {
    return col.length == 4 || col.length == 5;
}

function expandColor(col) {
    let expandedColor = "#";

    for (let c of col.slice(1)) {
        expandedColor += c + c;
    }

    return expandedColor;
}

export default function (col) {
    if (!isCSSHexColor(col)) {
        return;
    }

    if (!canBeExpanded(col)) {
        return col;
    }

    return expandColor(col);
}
