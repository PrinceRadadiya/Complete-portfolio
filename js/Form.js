const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})


// email and password script


function myfunction() {
    var email = document.getElementById('Email1').value;
    var password = document.getElementById('password').value;
    var maxlength = document.getElementById('password').value.length;

    if (email == '') {
      alert("Please ! Enter Email");
      return false;
    }
    if (username == '') {
      alert("Please! Enter username !!");
      return false;
    }
    if (password == '') {
      alert("please! Enter password !!");
      return false;
    }
    if(maxlength < 8)
    {
      alert("please! Enter Valid password !!");
      return false; 
    }
  }

  $(document).ready(function () {
    $("#password").keyup(function () {
      document.getElementById("password").maxLength = "8";
      var n1 = $(this).val().length;
      var max = 8;
      n1 = max - n1;
      if (n1 > 0) {
        $('#div1').text(n1 + " Digits Remianing");
      }
      else {
        $('#div1').text("DONE !!");
      }
    });
});

