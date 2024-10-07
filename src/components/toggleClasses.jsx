function toggleClasses(targetElementSelector, ...tokens) {
    for (let i = 0; i < tokens.length; i++) {
        document.querySelector(targetElementSelector).classList.toggle(tokens[i]);
    }
}

export default toggleClasses