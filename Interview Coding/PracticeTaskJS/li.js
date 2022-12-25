var errorFree = 0;


function code(output) {
    debug(output);
    if (output == errorFree) {
        return sleep;
    } else {
        return code(output);
    }
}



function edit(code) {
    // .....
    code = debug(code);
    if (code == errorFree) {
        return toSleep;
    } else {
        return edit(code);
    }
}


// Typescript code is in PracticeRouting->homeComponent->ts.file


// while (!(errorfree = debug()))