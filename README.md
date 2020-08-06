# Firestore Model Library
ActiveRecord implemenation in JS for Firestore.

## Overview
### Quick Start
```javascript
jsActiveModel.configure({ db })
const Model = jsActiveModel.Model
const tenantModel = new Model('tenants')
const first = tenantModel.findFirst(documentId)
const complexQuery = tenantModel.where("id", "==", "learnt")
           .where("teams", ">", 1000)
           .order("updatedAt", "DESC")
           .limit(100)
           .offset(0)
const inClause = tenantModel.where("id", "in", ['learnt',
'munro'])
const count = tenantModel.where("teams", ">", 10).count()
first.findFirst().exists
first.findFirst().doc
complexQuery.findAll().size
complexQuery.findAll().docs
first.update({})
// delete fields
first.delete([])
complexQuery.update({})
// it returns the created doc
tenantModel.set({})
// delete all the documents in a collection
tenantModel.deleteAll()
```
## Chaining
```javascript
complexQuery.update({}).update({}).run()
```
## Transactions

## Multi-tenancy
It generates methods to set foreign keys if there are foreign keys with
nameId format.
```javascript
// set your tenants once in the model
const courseModel = new Model('courses')
courseModel.tenant = 'learnt'
// returns all courses in a learnt tenant
courseModel.findAll() 

const userCourseModel = new Model('userCourses')
userCourses.setTenantId('learnt')
userCourses.SetUserId('aminkrj')
// returns all courses for aminkrj in learnt tenant
userCourseModel.findAll()
```
## Schema
You need to create a doc with the id of `schema-collection_name` it
automatically read the document and build a schema.
```javascript
const tenantModel = new Model('tenants')
const newDoc = tenantModel.newDoc({}) // without an id
const newDocWithId = tenantModel.newDoc("new-id", {}) // with an id
```


