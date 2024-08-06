describe('Agregar usuario', () => {

    it('Nuevo usuario', () => {

        cy.fixture('user_information').then((data)=>{

            const requestBody=data;

            cy.api({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/user',
                body: requestBody
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.code).to.eq(200)
                expect(response.body.type).to.eq("unknown")
                expect(response.body.message).to.eq("12")
            });
        
        })

    });

});


describe('Buscar usuario agregado', () => {

    it('Consultar usuario', () => {
    cy.wait(15000); 
    cy.fixture('user_information').then((data)=>{
        cy.api({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/' + data.username,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.username).to.eq(data.user_name)
            //expect(response.firstName).to.equal(data.firstName)
        });
    })

    });

});


describe('Actualizar usuario', () => {

    it('Actualizacion usuario', () => {

        cy.readFile("cypress/fixtures/user_information.json", (err, data) => {
            if (err) {
                return console.error(err);
            };
        }).then((data) => {
            
            data.email = "andreszapata@mail.com";
            const requestBody=data;

            cy.api({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/user/' + data.username,
                body: requestBody
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.code).to.eq(200)
                expect(response.body.type).to.eq("unknown")
                expect(response.body.message).to.eq("12")
            });


            cy.writeFile("cypress/fixtures/user_information.json", JSON.stringify(data))
        })

    });

});


describe('Eliminar usuario', () => {

    it('Eliminacion de usuario', () => {

    cy.fixture('user_information').then((data)=>{
        cy.api({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/' + data.username
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.type).to.eq("unknown")
            expect(response.body.message).to.eq(data.username)
        });
    })

    });

});