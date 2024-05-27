// @ts-check

import * as Types from "@chriscodesthings/basic-color-types";

/**
 * Expands a CSS hex colour code to it's longest form
 * @param {Types.cssHexCode} col CSS hex colour code to expand
 * @returns {Types.cssHexCode}
 */
export default function expandCSSHexColorCode(col) {
    col = col.slice(1);

    if (col.length == 3 || col.length == 4) {
        let expandedColour = "";

        for (let c of col) {
            expandedColour += c + c;
        }

        col = expandedColour;
    }

    return ("#" + col + "ff").slice(0, 9).toLowerCase();
}
