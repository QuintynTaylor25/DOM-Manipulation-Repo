// Names: Madeline Caruso, Quintyn Taylor-mcnutt
// Student IDs: 100756743, 100828225
// Date of Completion: 2023-02-12
class Contact{

    //Constructor
    constructor(name, contactNumber, emailAddress){
        this.Name = name
        this.ContactNumber = contactNumber
        this.EmailAddress = emailAddress
    }

    //Getters and Setters
    get Name(){
        return this.m_name
    }
    set Name(name){
        this.m_name = name
    }

    get ContactNumber(){
        return this.m_contactNumber
    }
    set ContactNumber(contactNumber){
        this.m_contactNumber = contactNumber
    }

    get EmailAddress(){
        return this.m_emailAddress
    }
    set EmailAddress(emailAddress){
        this.m_emailAddress = emailAddress
    }

    // Serialize Method
    serialize() {
        if (this.Name !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            return `${ this.Name }, ${ this.ContactNumber }, ${ this.EmailAddress }`
        console.error("One or more properties or fields of the Contact Object are missing or invalid!")
        return null
    }

    // Deserialize Method
    deserialize(data) {
        let propertyArray = data.split(",")
        this.Name = propertyArray[0]
        this.ContactNumber = propertyArray[1]
        this.EmailAddress = propertyArray[2]
    }
    
    // Public Override Method
    toString(){
        return`Full Name is ${this.Name} \nContact Information is ${this.ContactNumber} \nEmail Address is ${this.EmailAddress}`
    }
}

(function(){ 
    function DisplayHome() {
        console.log("Home Page")
        
        
    }
    function DisplayProducts() {
        console.log("Products Page")
        
    }
    function DisplayContacts() {
        console.log("Contact Us Page")
        
    
        $('#submitButton').on("click", function(event) {
            event.preventDefault()
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value)
            console.log(`${contact.toString()}`)
            setTimeout(function(){
                location.href="index.html"
            },3000)
           
        })

        
    }
    function DisplayServices() {
        console.log("Services Page")
        
    }
    function DisplayAbout() {
        console.log("About Us Page")
        
    }
    function Start(){
        console.log("App started!")
        
        switch(document.title){
            case"Home":
                DisplayHome()
                break
            case"Products":
                DisplayProducts()
                break
            case"Contact Us":
                DisplayContacts()
                break
            case"Services":
                DisplayServices()
                break
            case"About Us":
                DisplayAbout()
                break

            }
        }
        
        window.addEventListener("load", Start)
})()
