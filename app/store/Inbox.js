Ext.define('EmailClient.store.Inbox', {
    extend: 'Ext.data.Store',

    alias: 'store.inbox',

    model: 'EmailClientApp.model.Inbox',

    data: { items: [
        { 
            name: 'Jean Luc', 
            email: "jeanluc.picard@enterprise.com", 
            title: "Sit et aute incididunt deserunt voluptate.", 
            body: "Dolor velit culpa ea officia excepteur cillum pariatur mollit ut culpa excepteur. Elit cillum voluptate eiusmod nulla fugiat enim in nulla incididunt adipisicing Lorem do labore sit. Adipisicing velit ea fugiat ex. Incididunt id occaecat nulla ad ipsum culpa culpa. Incididunt veniam commodo enim ullamco anim fugiat consequat commodo. Sunt magna sunt duis velit magna est qui.\r\n", 
            attachment:false, 
            dateReceived: "2021-07-12 09:09:53"
        },
        { 
            name: 'Worf',     
            email: "worf.moghsson@enterprise.com",  
            title: "Non nisi id adipisicing ipsum mollit excepteur occaecat nisi exercitation cillum do elit aute.", 
            body: "Sit minim id ea ex deserunt. Eu est dolor ipsum esse elit labore enim irure adipisicing velit exercitation est deserunt elit. Enim quis qui ullamco quis culpa quis cupidatat eu ut labore.\r\n", 
            attachment:true, 
            dateReceived: "2021-07-12 09:09:53"
        },
        { 
            name: 'Deanna',   
            email: "deanna.troi@enterprise.com",    
            title: "In quis cillum velit enim officia fugiat nisi voluptate incididunt.", 
            body: "Sint ipsum fugiat est nostrud ea sunt. Pariatur in in ipsum nisi ad proident deserunt ut aute eu esse nisi. Mollit aliquip irure ullamco aliquip laborum aute nulla fugiat. Fugiat in cillum fugiat anim enim cillum eu sint aliquip reprehenderit et id dolore. Esse amet ipsum dolor nisi consequat qui mollit nulla occaecat laborum proident ut.\r\n",
            attachment:false, 
            dateReceived: "2021-07-12 09:09:53"
        },
        { 
            name: 'Data',     
            email: "mr.data@enterprise.com",        
            title: "Ex sit officia laboris eu aliquip consectetur veniam aute aute pariatur Lorem tempor adipisicing." , 
            body:"Tempor elit est eu voluptate exercitation occaecat mollit. Consectetur fugiat voluptate nostrud consectetur reprehenderit labore aute. Nostrud nulla pariatur culpa nostrud officia amet sit deserunt enim.\r\n",
            attachment:true, 
            dateReceived: "2021-07-12 09:09:53"
        },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
