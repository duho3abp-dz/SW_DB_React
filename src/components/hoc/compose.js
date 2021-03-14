const compose = (...funcs) => (View) => {
    return funcs.reduceRight((res, func) => func(res), View);
};

export default compose;