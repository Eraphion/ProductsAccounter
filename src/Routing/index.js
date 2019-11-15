export const URLs = {
    PRODUCT_TABLE: "/",
    ADD_PRODUCT: "/addProduct",
    EDIT_PRODUCT: "/editProduct/:id"
}

export const getNavigation = (history) => ({
    toProductTable: () => history.push(URLs.PRODUCT_TABLE),
    toAddProduct:() => history.push(URLs.ADD_PRODUCT),
    toEditProduct: (id) => history.push(URLs.EDIT_PRODUCT.replace(/:id/, id))
})