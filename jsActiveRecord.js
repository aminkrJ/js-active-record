const HasMany = require('./HasMany')

let jsActiveRecord = {
  configure: function (config) {
    const { db, tenant } = config
    this.db = db
    this.tenant = tenant
  },
  Model: function (Model) {
    return (...args) => {
      model.prototype.HasMany = HasMany
      const model = new Model(args)
      const collection = model.collection
      const query = await this.db.collection(collection)
      model.query = query
      return model
    }
  },
}

module.exports = jsActiveRecord
