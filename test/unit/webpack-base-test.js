const assert = require('assert');

// mocha + chai 单元测试

// instanbul 测试覆盖率
// 覆盖了多少 行/函数/语句/分支

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    // 如果在 travis 服务器上，路径无需全等，包含即可
    assert.strictEqual(baseConfig.entry.index.indexOf('ry-builder-webpack/test/smoke/template/src/index/index.js') > -1, true);
    assert.strictEqual(baseConfig.entry.search.indexOf('ry-builder-webpack/test/smoke/template/src/search/index.js') > -1, true);
  })
})