/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let ans = 0;
    let i = 0;

    while (i < chars.length) {
        let letter = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === letter) {
            count++;
            i++;
        }

        chars[ans] = letter;
        ans++;

        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[ans] = c;
                ans++;
            }
        }
    }

    return ans;
};