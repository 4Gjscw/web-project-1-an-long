
const centerdiv = document.querySelectorAll('center');
centerdiv.forEach(function(item) {

    //get the td div for each center
    //there r 2 td div in each center
    const td = item.querySelectorAll('td');
   //td will be an array that contains only 2 items (for each center)
     td.forEach(function(item) {
        //the first td div contains img src attribute
        //the second td div contains the text we need
        const imgDiv = item.querySelector('img');

        let show = '';
        if (imgDiv !== null) {
            show = imgDiv.getAttribute('src');
            show = `{ img: './draw/${show}',`
        } else {
            show = item.textContent;
            show = show.replaceAll('\n', '');
            show = `content: '${show}'},`
        };
        item.innerHTML = show;
        item.style.display = 'block';
        item.style.width = '60vw';


        });

    });
