export type EnumItem = {
  id: number;
  name: string;
  key: string;
};

export type EnumOption = {
  value: number;
  label: string;
} & EnumItem;

class EnumObject {
  __list: EnumItem[];

  constructor(list: EnumItem[]) {
    this.__list = list;
  }

  getList() {
    return this.__list;
  }

  getId(name: string): number | undefined {
    const find = this.getList().find(item => item.name === name);
    if (find) {
      return find.id;
    }
    return undefined;
  }

  getName(id: number): string | undefined {
    const find = this.getList().find(item => item.id === id);
    if (find) {
      return find.name;
    }
    return undefined;
  }

  getIdList(names: string[]): number[] {
    let list = this.getList();
    if (names && Array.isArray(names)) {
      list = list.filter(item => names.includes(item.name));
    }
    return list.map(item => item.id);
  }

  getNameList(ids: number[]): string[] {
    let list = this.getList();
    if (ids && Array.isArray(ids)) {
      list = list.filter(item => ids.includes(item.id));
    }
    return list.map(item => item.name);
  }

  getListById(ids: number[]): EnumItem[] {
    return this.getList().filter(item => ids.includes(item.id));
  }

  getListByName(names: string[]): EnumItem[] {
    return this.getList().filter(item => names.includes(item.name));
  }

  getOptions(): EnumOption[] {
    const list = this.getList();
    return list.map(item => ({ ...item, label: item.name, value: item.id }));
  }

  getFirst(): EnumItem | undefined {
    const list = this.getList();
    return list ? list[0] : undefined;
  }

  getFirstId(): number | undefined {
    const first = this.getFirst();
    return first ? first.id : undefined;
  }

  getLast(): EnumItem | undefined {
    const list = this.getList();
    return list ? list[list.length - 1] : undefined;
  }

  getLastId(): number | undefined {
    const last = this.getLast();
    return last ? last.id : undefined;
  }
}

/**
 * Define an enum object.
 *
 * @since 3.0.0
 * @category Utils
 * @param {Array<EnumItem>}} The enum list.
 * @returns {EnumObject} Return the enum object.
 * @example
 *
 * const ORDER_STATE = jeselvmo.defineEnum([
 *    { id: 1, name: '待支付', key: 'paying' },
 *    { id: 4, name: '订单取消', key: 'cancel' },
 *    { id: 7, name: '支付成功', key: 'success' },
 * ]);
 *
 * ORDER_STATE
 * // => {...}
 *
 * ORDER_STATE[1]
 * // => { id: 1, name: '待支付' }
 *
 * ORDER_STATE.getName(1)
 * // => '待支付'
 *
 * ORDER_STATE.getId('待支付')
 * // => 1
 *
 * ORDER_STATE.getIdList()
 * // => [1, 4, 7]
 *
 * ORDER_STATE.getNameList()
 * // => ['待支付', '订单取消', '支付成功']
 *
 */
function defineEnum(list: EnumItem[]): EnumObject {
  return new EnumObject(list);
}

export default defineEnum;
