var nagbar = document.createElement('div');
nagbar.id = 'nagbar';
nagbar.className = 'nagbar content';
var p1 = document.createElement('p');
p1.appendChild(document.createTextNode(' If you like this book, please donate to support me!'));
p1.insertAdjacentHTML('afterbegin', '<a href="https://www.patreon.com/bePatron?u=74811028"><button class="patreon-button-small">Patreon</button></a>');
p1.insertAdjacentHTML('afterbegin', '<a class="github-button" href="https://github.com/sponsors/inodentry" data-icon="octicon-heart" data-size="small" aria-label="Sponsor @inodentry on GitHub">GitHub Sponsors</a>');
nagbar.appendChild(p1);
var p2 = document.createElement('p');
p2.insertAdjacentHTML('afterbegin', 'I also offer professional tutoring / private lessons for Bevy and Rust. <a href="/contact.html">Contact me</a> if interested!');
nagbar.appendChild(p2);
document.getElementById('page-wrapper').appendChild(nagbar);
