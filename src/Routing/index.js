export const URLs = {
    PRODUCT_TABLE: "/",
    ADD_PRODUCT: "/addProduct"
}

export const getNavigation = (history) => ({
    toProductTable: () => history.push(URLs.PRODUCT_TABLE),
    toAddProduct:() => history.push(URLs.ADD_PRODUCT)
})