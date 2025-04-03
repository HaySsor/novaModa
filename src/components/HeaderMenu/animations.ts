export const firstBar = {
    close: {
        rotate: 0,
        transition: {duration: 0.2}
    },
    open: {
        rotate: 45,
        y: '9px',
        transition: {duration: 0.2}
    },
};

export const secondBar = {
    close: {
        rotate: 0,
        transition: {duration: 0.2}
    },
    open: {
        rotate: -45,
        y: '1px',
        transition: {duration: 0.2}
    },
};

export const thirdBar = {
    close: {
        opacity: 1,
        y: '0px',
    },
    open: {opacity: 0, y: '10px', transition: {opacity: {delay: 0.2}}}
};