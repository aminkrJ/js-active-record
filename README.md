# Firestore Model Library
ActiveRecord implemenation in JS for Firestore inspired by RoR ActiveRecord and associations.

## Overview
## Inistallation
```sh
$ npm install js-active-record
```
## Initialization
```javascript
jsActiveRecord.configure({ db, tenant })
```
## FindBy
Find all records by [schema](#schema) fields.
```javascript
model.findBy('schemaField', value)
// support firestore API 
model
  .where("id", "in", ['learnt', 'munro'])
  .where("teams", ">", 1000)
  .order("updatedAt", "DESC")
snap.get().docs
```
## Associations
### One-to-Many
#### One-to-Billions
This relationship is implemented using two collections with a foreign key. Suppose, we have tenant with billions of members. We dedicate two collections one for tenants and one for members with tenantId as a foreign key.
```javascript
// models/Tenant.js
function Tenant() {
  this.members = this.HasMany(Member)
  this.collection = 'tenants'
}
module.exports = jsActiveRecord.Model(Tenant)

// models/Member.js
function Member() {
  this.tenant = this.BelongsTo(Tenant)
  this.collection = 'members'
}
module.exports = jsActiveRecord.Model(Tenant)

const tenantModel = new Tenant()
const sampleTenant = tenantModel.findBy('title', 'sample')
sampleTenant.members.get() // returns all the members for a tenant with the title of sample
```

## Multi-tenancy
configure your queries to just get records from a specific tenant.
```javascript
jsActiveRecord.configure({ db, tenant })
```
## <a name="schema"></a> Schema
We need to reserve a doc with the id of `SCHEMA-collection_name`. When
creating a new instance of a model, it initialise the instance with the
schema.
```javascript
const tenantModel = new Model('tenants')
const docs = tenantModel.docs
docs.new({
  id: 'new-id' // override the default value
}) 
```


