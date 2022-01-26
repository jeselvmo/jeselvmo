function getList() {
  return Object.values(this);
}

function getId(name) {
  const find = this.getList().find((item) => item.name === name);
  if (find) {
    return find.id;
  }
  return null;
}

function getName(id) {
  const find = this.getList().find((item) => item.id === id);
  if (find) {
    return find.name;
  }
  return null;
}

function getIdList(names) {
  let list = this.getList();
  if (names && Array.isArray(names)) {
    list = list.filter((item) => names.includes(item.name));
  }
  return list.map((item) => item.id);
}

function getNameList(ids) {
  let list = this.getList();
  if (ids && Array.isArray(ids)) {
    list = list.filter((item) => ids.includes(item.id));
  }
  return list.map((item) => item.name);
}

function getListById(ids) {
  return this.getList().filter((item) => ids.includes(item.id));
}

function getListByName(names) {
  return this.getList().filter((item) => names.includes(item.name));
}

function getOptions(showAll) {
  const list = this.getList();
  if (showAll) {
    list.unshift({ id: 0, name: '全部' });
  }
  return list.map((item) => ({ ...item, label: item.name, value: item.id }));
}

function getFirst() {
  const list = this.getList();
  return list.length > 0 ? list[0] : null;
}

function getFirstId() {
  const first = this.getFirst();
  return first ? first.id : null;
}

function defineProperties(obj, extraProps) {
  const properties = {
    getList: { value: getList },
    getId: { value: getId },
    getName: { value: getName },
    getIdList: { value: getIdList },
    getNameList: { value: getNameList },
    getListById: { value: getListById },
    getListByName: { value: getListByName },
    getOptions: { value: getOptions },
    getFirst: { value: getFirst },
    getFirstId: { value: getFirstId },
    ...extraProps,
  };

  Object.defineProperties(obj, properties);
}

/**
 * 定义一个枚举对象。
 * @param {Array}} list 列表，格式：[{id:1, name:'name'},...]
 * @param {Object} extraProps 扩展属性
 * @returns {boolean} 返回枚举对象。
 *
 * @example
 *
 * const ORDER_STATE = jeselvmo.defineEnum([{ id: 1, name: '待支付' }, { id: 4, name: '订单取消' }, { id: 7, name: '支付成功' }]);
 *
 * ORDER_STATE
 * //=> {...}
 *
 * ORDER_STATE[1]
 * //=> { id: 1, name: '待支付' }
 *
 * ORDER_STATE.getName(1)
 * //=> '待支付'
 *
 * ORDER_STATE.getId('待支付')
 * //=> 1
 *
 * ORDER_STATE.getIdList()
 * //=> [1, 4, 7]
 *
 * ORDER_STATE.getNameList()
 * //=> ['待支付', '订单取消', '支付成功']
 *
 */
function defineEnum(list, extraProps) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    obj[item.id] = item;
  }
  defineProperties(obj, extraProps || {});
  return obj;
}

export default defineEnum;
