const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let timeline = document.getElementById("timeline")

for (let i = 0; i < posts.length; i++) {
    timeline.appendChild(createPost(posts[i]))
}

function createPost(post) {
    let postEl = document.createElement("section")
    postEl.classList.add("post")
    //post header
    let postHeader = document.createElement("div")
    postHeader.classList.add("post-header")
    postHeader.classList.add("side-padding")

    //create post text
    let name = document.createElement("h1")
    name.classList.add("post-postername")
    name.textContent = post.name
    let location = document.createElement("h2")
    location.classList.add("post-location")
    location.textContent = post.location
    let postText = document.createElement("div")
    postText.appendChild(name)
    postText.appendChild(location)

    //create post avatar
    let avatar = document.createElement("img")
    avatar.src = post.avatar
    avatar.alt = "user avatar"
    avatar.classList.add("user-avatar")

    // avatar and post to header
    postHeader.appendChild(avatar)
    postHeader.appendChild(postText)

    // create post image
    let postImage = document.createElement("img")
    postImage.src = post.post
    postImage.alt = "post image"
    postImage.classList.add("post-img")

    // create icons
    let icons = []
    for (let i = 0; i < 3; i++) {
        let icon = document.createElement("img")
        icon.role = "button"
        icon.classList.add("icon")
        icons.push(icon)
    }
    icons[0].src = "images/icon-heart.png"
    icons[1].src = "images/icon-comment.png"
    icons[2].src = "images/icon-dm.png"

    // add icons to icons container
    let iconsContainer = document.createElement("div")
    iconsContainer.classList.add("post-icons-container", "side-padding")
    for (let i = 0; i < 3; i++) {
        iconsContainer.appendChild(icons[i])
    }

    // likes
    let likes = document.createElement("h3")
    likes.classList.add("post-likes", "side-padding")
    likes.textContent = post.likes + " likes"

    // username
    let username = document.createElement("span")
    username.classList.add("username")
    username.textContent = post.username

    // description
    let comment = document.createElement("p")
    comment.classList.add("post-description", "side-padding")
    comment.appendChild(username)
    comment.appendChild(document.createTextNode(" " + post.comment))

    // add everything to the post
    postEl.appendChild(postHeader)
    postEl.appendChild(postImage)
    postEl.appendChild(iconsContainer)
    postEl.appendChild(likes)
    postEl.appendChild(comment)

    // return post
    return postEl
}



