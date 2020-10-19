//constructor functions
function Tenant(id) {
  this.id = id
  this.teams = this.HasMany(Team)
}

function Team(id) {
  this.id = id
}

function Member(id) {
  this.id = id
}

function HasMany(foreign) {
  this.foreign = foreign
  this.query = db.collection(foreign.collection)
  this.query = this.query.where(this.originForeignKey, '==', this.origin.name)
}

HasMany.prototype.where = async function (field, operator, value) {
  this.query = this.query.where(field, operator, value)
  return self
}

HasMany.prototype.get = async function () {
  return await this.query.get()
}

function Model(name) {
  this.name = name
}

Model.prototype.findBy = async function(schemaField, val) {
  return snap
}

function ActiveRecord(Model, options) {
  return (name) => Object.assign({}, new Model(name), options, { HasMany, Schema, Model, origin: options.collection, originForeignKey: options.foreignKey } )
}

const Tenant = ActiveRecord(Tenant, {
  collection: 'tenants',
  foreignKey: 'tenantId'
})

let tenant = new Tenant("learnt")
let teams = tenant.teams.where('members_count', '<', 1000)
teams.get()

let teamModel = Team.Model
const team = teamModel.findById('id')
const member = team.members.get()
console.log(member.doc)


