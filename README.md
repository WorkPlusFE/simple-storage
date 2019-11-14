# workplus-simple-storage

> Base on localStorage and sessionStorage.

## Install

```bash
npm install --save @w6s/simple-storage
```

## Usage

```js
import { localStorage, sessionStorage } from '@w6s/simple-storage';

localStorage.add('test', 1);
localStorage.has('test');
localStorage.get('test');
localStorage.del('test');
localStorage.clear();

sessionStorage.add('test', 1);
sessionStorage.has('test');
sessionStorage.get('test');
sessionStorage.del('test');
sessionStorage.clear();
```

## API

#### add(key, value, [parse])

添加一个存储，如果 parse 为 true，则进行 JSON.stringify 处理。

#### get(key, [parse])

根据 key 获取存储的值，如果 parse 为 true， 则进行 JSON.stringify 处理。

#### has(key)

检测是否存在某个存储值。

#### del(key)

删除存储。

#### clear()

清空存储。

## License

MIT
