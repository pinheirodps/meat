import {CartItem} from "./cart-item.model"
import {MenuItem} from "../menu-item/menu-item.model"

export class ShoppingCartService {
  items: CartItem[]

  clear(){
    this.items = []
  }


  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
  }

  removeItem(item: MenuItem){
  }
  total(): number{
    return 0;
  }
}
