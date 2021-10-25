
class UserES {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

    getFullName() { 
		return `${this.firstName} ${this.lastName}`
    }
  

}


class CustomerES extends UserES {
	constructor(firstName, lastName, membership) {
		super(firstName, lastName)
		this.membership = membership
	}

	getFullName() {
		console.log('new get full name method');
		console.log(super.getFullName());
	}
}

const customerEs = new CustomerES('Ivan', 'Ivanov', 'Basic')

console.log(customerEs);