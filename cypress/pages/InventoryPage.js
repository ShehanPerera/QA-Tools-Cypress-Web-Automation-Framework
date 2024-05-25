class InventoryPage {


    shoppingCartCount = '.shopping_cart_link';
    productTitle = '.title';
    cartIcon = '.shopping_cart_link';
    sauceLabsBacKPackItem = "a[id='item_4_title_link'] div[class='inventory_item_name ']";
    sauceLabsBoltTshirt = "a[id='item_1_title_link'] div[class='inventory_item_name ']";
    sauceLabsBikeLight = "a[id='item_0_title_link'] div[class='inventory_item_name ']";

    constructor() {
        this.items = {
            "Sauce Labs Backpack": {
                addToCartButton: '#add-to-cart-sauce-labs-backpack',
                removeFromCartButton: '#remove-sauce-labs-backpack'
            },
            "Sauce Labs Bolt T-Shirt": {
                addToCartButton: '#add-to-cart-sauce-labs-bolt-t-shirt',
                removeFromCartButton: '#remove-sauce-labs-bolt-t-shirt'
            }
        };
    }

    verifyProductTitle() {
        cy.get(this.productTitle).contains("Products");
    }

    verifyCartIcon() {
        cy.get(this.cartIcon).should('be.visible');
    }

    getItem(item) {
        const itemDetails = this.items[item];
        return itemDetails;
    }

    verifyItemStatus(item, status) {
        const itemDetails = this.getItem(item);
        if (itemDetails) {
            this.verifyStatus(itemDetails, status);
        } else {
            throw new Error(`Item "${item}" is not recognized.`);
        }
    }

    verifyStatus(itemDetails, status) {
        let itemButton;

        switch (status) {
            case 'Add to cart':
                itemButton = itemDetails.addToCartButton;
                break;
            case 'Remove':
                itemButton = itemDetails.removeFromCartButton;
                break;
            default:
                throw new Error(`Status "${status}" is not recognized.`);
        }

        cy.get(itemButton).contains(status);
    }

    clickAddtoCart(item) {
        const itemDetails = this.getItem(item);
        if (itemDetails) {
            cy.get(itemDetails.addToCartButton).click();
        } else {
            throw new Error(`Item "${item}" is not recognized.`);
        }
    }

    clickRemovefromCart(item) {
        const itemDetails = this.getItem(item);
        if (itemDetails) {
            cy.get(itemDetails.removeFromCartButton).click();
        } else {
            throw new Error(`Item "${item}" is not recognized.`);
        }
    }

    verifySauceLabsBacpack() {
        cy.get(this.sauceLabsBacKPackItem).contains("Sauce Labs Backpack")
    }

    verifySauceLabsBoltTshirt() {
        cy.get(this.sauceLabsBoltTshirt).contains("Sauce Labs Bolt T-Shirt")
    }

    verifySauceLabsBikeLight() {
        cy.get(this.sauceLabsBikeLight).contains("Sauce Labs Bike Light")
    }

    verifyItems() {
        this.verifySauceLabsBacpack();
        this.verifySauceLabsBikeLight();
        this.verifySauceLabsBoltTshirt();
    }

    verifyCartItemCount(count) {
        cy.get(this.shoppingCartCount).contains(count)
    }
}

export default InventoryPage;