let markdown = require("markdown-it")({
    html: true
});

module.exports = function(config) {


    config.addFilter("makeSection", function(section) {

        let html;

        switch (section.type) {
            case "text":
                html = `<section class="section_text"><h1>${section.title}</h1><p>${section.content}</p></section>`;
                break;
            
            case "image":
                html = `<section class="section_image"><img src="${config.getFilter("url")(section.image)}"></section>`;
                break;

            case "panel":
                html = `<section class="section_panel"><h1>${section.title}</h1><p>${section.content}</p></section>`;
                break;

            case "circlelist":
                html = `<section class="section_circlelist"> CIRCLE LIST`;

                for (let i=0; i<section.list.length; i++) {

                    html += `<div class="section_circlelist_item">
                        ${ section.list[i].name }
                        ${ section.list[i].title }
                        ${ section.list[i].image }
                    </div>`;
                }

                html += `</section>`;
                break;
            default: 
                html = `<section class="section_text"><div>${JSON.stringify(section)}</div></section>`;
                break;
        }


        return html;

    });

    


    config.addPassthroughCopy({
        './src/_includes/style.css': 'style.css', 
        './src/img': 'img'
    });

    return {
        dir: {
            input: './src', 
            output: './build'
        }, 
        pathPrefix: "/EleventyTest/"
    }
}