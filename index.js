function openiframe(index) {
  const c = document.getElementsByClassName('show-classdemo')[0];

  switch (index) {
    case 1:
      c.innerHTML = '<iframe src="w02/W01.html" frameborder="1"></iframe>';
      break;

    case 2:
      c.innerHTML = '<iframe src="w03/blogL.html" frameborder="1"></iframe>';
      break;

    case 3:
      c.innerHTML = '<iframe src="w03/cardL.html" frameborder="1"></iframe>';
      break;

    case 4:
      c.innerHTML = '<iframe src="w06/W06.html" frameborder="1"></iframe>';
      break;
  }
  console.log(index);
}
