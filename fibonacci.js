function fibs(n) {
    const seq = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) seq.push(i);
        else seq.push(seq[i - 2] + seq[i - 1]);
    }

    return seq;
}

function fibsRec(n) {
    if (n <= 2) return [0, 1].slice(0, n);
    
    const seq = fibsRec(n - 1);

    const newNum = seq[(n - 1) - 2] + seq[(n - 1) - 1];
    seq.push(newNum);
    return seq;
}