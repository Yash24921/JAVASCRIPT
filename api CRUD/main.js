const apistart = "https://jsonplaceholder.typicode.com/posts";

//select button

const getbtn = document.querySelector("#get");
const createbtn = document.querySelector("#create");
const putbtn = document.querySelector("#put");
const patchbtn = document.querySelector("#patch");
const deletebtn = document.querySelector("#delete");


async function getpost() {
    const response = await fetch(apistart);
    if (response.status != 200) {
        throw new Error(`some Error :${response.status}`);
    }
    const post = await response.json();
    return post;
};

const createPost = async (newpost) => {
    const response = await fetch(apistart, {
        method: "POST",
        body: JSON.stringify(newpost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    if (response.status != 201) {
        throw new Error(`some Error :${response.status}`);
    }

    const post = await response.json();
    return post;
}

const updatePost = async (newpost, id) => {
    const response = await fetch(`${apistart}/${id}`, {
        method: "PUT",
        body: JSON.stringify(newpost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    if (response.status != 200) {
        throw new Error(`some Error :${response.status}`);
    }

    const post = await response.json();
    return post;
}

const patchPost = async (newpost, id) => {
    const response = await fetch(`${apistart}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newpost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    if (response.status != 200) {
        throw new Error(`some Error :${response.status}`);
    }

    const post = await response.json();
    return post;
}


const deletePost = async (newpost, id) => {
    const response = await fetch(`${apistart}/${id}`, {
        method: "DELETE",

    })
    if (response.status != 200) {
        throw new Error(`some Error :${response.status}`);
    }

    const post = await response.json();
    return post;
}



getbtn.addEventListener('click', async () => {
    const posts = await getpost();
    if (posts) {

        const table = `<table class="table mt-4 w-75 m-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>


      </tr>
    </thead>
    <tbody>
    ${posts.map((post) =>
            `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.title}</td>
        <td>${post.body}</td>


       
      </tr>`).join("\n")
            }
    </tbody>
  </table>`;

        document.getElementById("table").innerHTML = table;
    }
});


createbtn.addEventListener('click', async () => {
    const newpost = {
        title: "new post",
        body: "new post kfjokgmodjgofmgoek kofgofjgoldf,v ",
        userId: 1
    };
    const createdpost = await createPost(newpost);
    console.log(createdpost);
})

putbtn.addEventListener('click', async () => {
    const newpost = {
        id: 2,
        title: "updated post",
        body: "updated post kfjokgmodjgofmgoek kofgofjgoldf,v ",
        userId: 1
    };
    const putdpost = await updatePost(newpost, 2);
    console.log(putdpost);
});

patchbtn.addEventListener('click', async () => {
    const newpost = {
        title: "updated post",

    };
    const patchedpost = await patchPost(newpost, 2);
    console.log(patchedpost);
})

deletebtn.addEventListener('click', async () => {

    const deletedpost = await deletePost(2);
    console.log(deletedpost);
})