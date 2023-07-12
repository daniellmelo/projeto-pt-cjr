// MOCKUP DE DADOS DOS POSTS

const posts = [
  {
    id: "1",
    postMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
    user: {
      username: "Icaro Rodrigues",
      image: "Alguma coisa"
    }
  },
  {
    id: "2",
    postMessage: "Não tenho muito oq dizer",
    user: {
      username: "Daniel",
      image: "Alguma coisa2"
    }
  },
  {
    id: "3",
    postMessage: "Esse é meu post",
    user: {
      username: "Emanuel",
      image: "Alguma coisa"
    }
  },
  {
    id: "1",
    postMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
    user: {
      username: "Icaro Rodrigues",
      image: "Alguma coisa"
    }
  },
  {
    id: "1",
    postMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
    user: {
      username: "Icaro Rodrigues",
      image: "Alguma coisa"
    }
  },
  {
    id: "1",
    postMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
    user: {
      username: "Icaro Rodrigues",
      image: "Alguma coisa"
    }
  },
  {
    id: "1",
    postMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
    user: {
      username: "Icaro Rodrigues",
      image: "Alguma coisa"
    }
  },
]

// FUNÇÃO PARA EXIBIR DADOS

function getUserList() {
  const postList = document.getElementById("usersPosts")

  posts.forEach(post => {

    const image = document.createElement("img")
    image.src = "../../../Assets/feedComPostAberto/foto.png"

    const commentImage = document.createElement("img")
    commentImage.src = "../../../Assets/feedComPostAberto/Vector (1).svg"

    const postDiv = document.createElement("div")
    postDiv.classList.add("postContainer")

    const postContainer = document.createElement("div")
    postContainer.classList.add("post")

    const postUserInfo = document.createElement("div")
    postUserInfo.classList.add("postUserInfo")

    const userName = document.createElement("p")
    userName.classList.add("userName")
    userName.textContent = post.user.username

    const divisor = document.createElement("span")
    divisor.classList.add("divisor")
    divisor.textContent = " · "

    const span = document.createElement("span")
    span.textContent = "17 de mar"

    const userPost = document.createElement("p")
    userPost.classList.add("userPost")
    userPost.textContent = post.postMessage

    postList.appendChild(postDiv)

    postDiv.appendChild(image)
    postDiv.appendChild(postContainer)

    postContainer.appendChild(postUserInfo)

    postUserInfo.appendChild(userName)
    postUserInfo.appendChild(divisor)
    postUserInfo.appendChild(span)

    postContainer.appendChild(userPost)
    postContainer.appendChild(commentImage)

    commentImage.addEventListener("click", () => {
      window.location.href = "../Login/index.html"
    })

  })
}

getUserList()