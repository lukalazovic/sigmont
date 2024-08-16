export const trimQuery = (query: string, enabled = true) => {
    if (!enabled) {
        return query;
    }

    return query.replaceAll('\n', '').replaceAll(' ', '');
};