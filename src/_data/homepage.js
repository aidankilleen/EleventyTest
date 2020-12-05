module.exports = {
    sections: [
        { 
            title:"section 1.0", 
            type: "masthead", 
            heading:"Gramenor", 
            subheading: "Consultancy & Training Services", 
            cta:"Find out more", 
            image:"/img/hungryhill.jpeg", 
            ctaTarget:"/about"
        }, 
        { title:"section 1.0", type: "text", content:"this is section 1" }, 
        { title:"section 2.0", type: "panel", content: "this is section 2" }, 
        { title:"section 3.0", type: "image", image:"/img/hungryhill.jpeg"}, 
        { title:"section 4.0", type: "circlelist", list:[
            { name: "Alice", title: "Software Engineer", image: "/img/staff/alice.png" }, 
            { name: "Bob", title: "Project Manager", image: "/img/staff/dan.png" }, 
            { name: "Carol", title: "Intern", image: "/img/staff/don.png" }, 
            { name: "Dan", title: "Intern", image: "/img/staff/don.png" }, 
        ]}
    ]
}