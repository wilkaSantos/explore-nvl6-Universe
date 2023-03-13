
export class Router {

    routes = {}

    add(name, page){
        this.routes[name] = page;
    }

    route(event){
        event = event || window.event;
        event.preventDefault();

        window.history.pushState( {}, "", event.target.href );
        this.changeRoute();
    }

    changeRoute(){
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];

        fetch(route)
        .then(routeData => routeData.text())
        .then(html => document.querySelector('.app').innerHTML = html);
    }
}