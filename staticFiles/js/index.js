import Home from "./views/Home.js"
import About from "./views/About.js"
import Settings from './views/Settings.js'

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path:'/', view: Home},
        { path:'/settings', view:Settings},
        { path:'/About', view:About},
    ]

    const potentialMatches = routes.map(route => {
        return {
            isMatch: location.pathname === route.path,
            route
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // 404 route
    if (!match) {
        match = {
            route: routes[0],
            isMatch:true
        }
    }
    

    const view =  new match.route.view()

    document.querySelector('#app').innerHTML= await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})