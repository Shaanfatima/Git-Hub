const searchForm = document.getElementById("searchForm");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const handle = document.getElementById("handle");
const userLocation = document.getElementById("userLocation");
const following = document.getElementById("following");
const followers = document.getElementById("followers");
const gists = document.getElementById("gists");
const repos = document.getElementById("repos");
const blog = document.getElementById("blog");
const profileImage = document.getElementById("profileImage");
const placeholderText = document.getElementById("placeholderText");
const userData = document.getElementById("userData");
const spinner = document.getElementById("spinner");

searchForm.onsubmit = function (e) {
    e.preventDefault();
    const fData = new FormData(searchForm);

    spinner.style.visibility = "visible"
    fetch("https://api.github.com/users/" + fData.get("searchInput"))
        .then(function (response) {

            response.json()
                .then(function (data) {
                  
                    spinner.style.visibility = "hidden"
                    placeholderText.style.visibility = "hidden";
                    userData.style.visibility = "visible"
                    username.innerText = data.name ? data.name : "N/A"
                    bio.innerText = data.bio ? data.bio : "N/A"
                    handle.innerText = data.login ? data.login : "N/A"
                    userLocation.innerText = data.location ? data.location : "N/A"
                    following.innerText = data.following ? data.following : "N/A"
                    followers.innerText = data.followers ? data.followers : "N/A"
                    gists.innerText = data.public_gists ? data.public_gists : "N/A"
                    repos.innerText = data.public_repos ? data.public_repos : "N/A"
                    profileImage.src = data.avatar_url ? data.avatar_url : "N/A"
                    blog.innerText = data.blog ? data.blog : "N/A"
                    blog.href = data.blog ? data.blog : "N/A"
                })
                .catch(function (error) {
                    spinner.style.visibility = "hidden"
                    console.log(error);
                })

        })
        .catch(function (error) {
            spinner.style.visibility = "hidden"
            console.log(error);
        })
}