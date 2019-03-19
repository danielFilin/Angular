import { Product } from "./product.model";
import { Subject } from "rxjs/Subject";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";


export class ProductsService{
    productsChanged = new Subject<Product[]>()
    products: Product[] = [
        new Product ("Computer Chair", "Very comfortable and perfectly adjastable computer seat, that will make your work pleasent!", "https://i.ebayimg.com/images/g/PWoAAOSwZJBYBen4/s-l300.jpg", 199.99),
        new Product ("Table", "Wooden table, practical, elegant and well suited for work", 'https://s7d4.scene7.com/is/image/roomandboard/?layer=0&size=498,300&scl=1&src=996120_wood_W&layer=comp&$prodzoom0$', 119.19)
    ]

    shoppingCart: Product[] = [];

    setProducts(products: Product[]){
        this.products = products;
        this.productsChanged.next(this.products);
    }

    getProducts(){
        return this.products;
    }

    getProduct(index: number){
        return this.products[index];
    }

    addItem(product: Product){
        this.products.push(product);
        console.log(this.products)
    }

    toShoppingCart(index: number, product: Product){
        this.shoppingCart.push(product);
        
        this.productsChanged.next(this.shoppingCart);
       
    }

    getCart(){
        return this.shoppingCart;
    }

    editItem(index: number, item: Product){
        this.products[index] = item;
    }
    
    deleteItem(index: number){
        this.products.splice(index,1);
    }

}