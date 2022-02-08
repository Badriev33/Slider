fetch('bec.php')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const a = (data)
    console.log(a)
    const img = a.slice(0, 56)
    const imgtwo = a.slice(58, 126)
    const imgthree = a.slice(128, 198)

    document.getElementById("user-avatar").src = img;
    document.getElementById("usertwo-avatar").src = imgtwo;
    document.getElementById("userthree-avatar").src = imgthree;

  });