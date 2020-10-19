const ActiveRecord = require('../ActiveRecord')

const Tenant = (name) => {
  this.name = name
}

it("object's own property", () => {
  const T = ActiveRecord(Tenant)
  const tenant = new T('test')
  expect(tenant.name).toBe('test')
})
