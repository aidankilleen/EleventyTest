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
            case "masthead":
                html = `<header class="masthead" style="background-image:url(${ config.getFilter("url")(section.image)})">
                            <div class="container">
                                <div class="masthead-subheading">${ section.subheading }</div>
                                <div class="masthead-heading text-uppercase">${ section.heading }</div>
                                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="${config.getFilter("url")(section.ctaTarget)}#services">${ section.cta }</a>
                            </div>
                        </header>`;

                break;
            default: 
                html = `<section class="section_text"><div>${JSON.stringify(section)}</div></section>`;
                break;
        }


        return html;

    });

    


    config.addPassthroughCopy({
        './src/_includes/style.css': 'style.css', 
        './src/_includes/scrollerstyles.css': 'scrollerstyles.css',
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