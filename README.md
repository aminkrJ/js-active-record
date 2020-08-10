# Firestore Model Library
ActiveRecord implemenation in JS for Firestore inspired by RoR ActiveRecord.

## Overview
## Inistallation
```sh
$ npm install js-active-record
```
## Initialization
```javascript
jsActiveModel.configure({ db })
const Model = jsActiveModel.Model
const tenantModel = new Model('tenants')
```
## FindBy
Find all records by [schema](#schema) fields.
```javascript
const tenant = tenantModel.findById(documentId)
const activeTenants = tenantModel.findByStatus('active')
// support firestore API 
const snap = tenantModel
           .where("id", "in", ['learnt', 'munro'])
           .where("teams", ">", 1000)
           .order("updatedAt", "DESC")
snap.get().size
snap.get().docs
// distributed counter
tenantModel.teams.count()
```
## Has-many relationship
```javascript
// set your tenants once in the model
const tenant = tenantModel.findById('document-id')
tenant.teams.get()
tenant.teams.findById('team-id').users.get()
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


