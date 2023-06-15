import Product from "../Products/Product";
import { MachineSpec } from "./MachineSpec";


// klasa instancji maszyny, jest podstawą całej aplikacji dzidziczy po specyfikacji
export default class MachineInstance extends MachineSpec {
  // eslint-disable-next-line // domyślnie pusta tablica produktów
  private product_objects: Product[][] = [];

  // prywatny konstruktor synchroniczny wywoływany przez konstruktor asynchroniczny
  private constructor(data: MachineSpec) {
    super(data);
    this.generate_products()
  }

  // konstruktor asynchroniczny
  static async init() {
    let data = await MachineSpec.init();
    return data ? new MachineInstance(data) : null;
  }

  get_id(): number {
    return this.id;
  }

  get_payment() {
    return this.payment;
  }

  get_products() {
    return this.product_objects;
  }

  // generator produktów który na bazie odebranych danych tworzy tablicę produktów
  generate_products() {
    for (let i = 0; i < this.slots.content.length; i++) {
      let products: Product[] = [];
      for (let j = 0; j < this.slots.content[i].length; j++) {
        products.push( new Product(this.slots.content[i][j].product, this.slots.content[i][j].amount, ""+j+i))
      }
      this.product_objects.push(products);
    }
  }
}
