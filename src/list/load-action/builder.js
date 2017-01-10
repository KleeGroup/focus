import { isArray } from 'lodash';

/**
 * Build sort infotmation.
 * @param  {object} sortConf - The sort configuration.
 * @return {object} - The builded sort configuration.
 */
function _buildOrderAndSort(sortConf) {
    return {
        sortFieldName: sortConf.sortBy,
        sortDesc: sortConf.sortAsc === undefined ? false : !sortConf.sortAsc
    };
}


/**
 * Build the pagination configuration given the options.
 * @param  {object} opts - The pagination options should be :
 *   isScroll (:bool) - Are we in a scroll context.
 *   totalCount (:number) - The total number of element. (intresting only in the scroll case)
 *   nbSearchElement (:number) - The number of elements you want to get back from the search.
 * @return {object} - An object with {top, skip}.
 */
function _buildPagination(opts) {
    let {isScroll, dataList, totalCount, nbElement} = opts;
    if (isScroll) {
        if (!isArray(dataList)) {
            throw new Error('The data list options sould exist and be an array')
        }
        if (dataList.length < totalCount) {
            return { top: nbElement, skip: dataList.length };
        }
    }
    return {
        top: nbElement,
        skip: 0
    }
}

export default {
    pagination: _buildPagination,
    orderAndSort: _buildOrderAndSort
}

export {
    _buildPagination as pagination,
    _buildOrderAndSort as orderAndSort
}