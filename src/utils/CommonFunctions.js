const createSqlQueryusingParams = (query, params) => {
    let sqlQueryWithParams = query;
    params.forEach((param, index) => {
       const placeholder = `{${index}}`;
       sqlQueryWithParams = sqlQueryWithParams.replace(placeholder, param);
    });
    return sqlQueryWithParams;
};

module.exports = { 
    createSqlQueryusingParams 
};
 