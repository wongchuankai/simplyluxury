const LocalStorageService = () => {
    
    function _setCart(cart) {
        localStorage.setItem('mycart', JSON.stringify(cart))
    }

    function _getCart() {
        return localStorage.getItem('mycart')
    }

    function _addToCart(id) {
        // console.log(id)
        var cartLocalStorageData = _getCart()
        if(cartLocalStorageData === "") {
            _clearCart()
            cartLocalStorageData = "[]"
        }
        var storageParsed = JSON.parse(cartLocalStorageData)
        if(storageParsed !== null) {
            storageParsed.push(id)
        } else {
            storageParsed = [id]
        }
        _setCart(storageParsed)
    }
    
    function _clearCart() {
        localStorage.removeItem('mycart');
    }

    return {
        SetCart : _setCart,
        clearCart : _clearCart,
        getCart: _getCart,
        AddToCart: _addToCart
    }
}

export default LocalStorageService()