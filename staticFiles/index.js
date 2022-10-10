const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path:'/', view:()=>console.log("home")},
        { path:'/settings', view:()=>console.log('settings')},
        { path:'/posts', view:()=>console.log("posts")},
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
    
    console.log(match.route.view())
}


document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})