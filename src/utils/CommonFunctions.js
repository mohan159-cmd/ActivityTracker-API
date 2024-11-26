const createSqlQueryusingParams = (query, params) => {
    let sqlQueryWithParams = query;
    params.forEach((param, index) => {
        const placeholder = new RegExp(`\\{${index}\\}`, 'g'); // Match all occurrences of `{index}`
        sqlQueryWithParams = sqlQueryWithParams.replace(placeholder, param);
    });
    return sqlQueryWithParams;
};

module.exports = { 
    createSqlQueryusingParams 
};
 