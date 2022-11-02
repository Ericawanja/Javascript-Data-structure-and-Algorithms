let pharmacist_role ={prescribe: 'Write prescriptions'}
let collect_role = {collect:'collect cash'}
let returnCash = {returnCash:'return cash'}
let manage_role = {manage: ()=>console.log('manage employees')}

function Mixin (...args){
    return Object.assign({}, ...args)
}
let cashier = Mixin(collect_role, returnCash)
let manager=Mixin(manage_role, cashier_role, pharmacist_role)
let pharmacist= Mixin(pharmacist_role)

console.log(pharmacist);