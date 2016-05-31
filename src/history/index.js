let _navigate, _back, _start;

// Define the navigation functions depending on backbone or react-router
export const setNavigationFunctions = (navigate, back, start) => {
    _navigate = navigate;
    _back = back;
    _start = start;
}

export const navigate = (...args) => {
    if(!_navigate) {
        throw new Error('react-router or backbone URL Navigation was badly given in the setNavigationFunctions()')
    }
    _navigate(...args);
}

export const back = (...args) => {
    if(!_back){
        throw new Error('react-router or backbone Previous Page Navigation was badly given in the setNavigationFunctions()')
    }
    _back(...args);
}
