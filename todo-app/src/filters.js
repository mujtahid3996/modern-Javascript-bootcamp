const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({searchText,hideCompleted}) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }