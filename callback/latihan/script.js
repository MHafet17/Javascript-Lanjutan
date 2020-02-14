$.ajax({
  url: "http://www.omdbapi.com/?apikey=76c5078b&s=naruto",
  success: results => {
    const movies = results.Search;

    let cards = "";
    movies.forEach(m => {
      cards += /*html*/ `<div class="col-md-4 my-3">
           <div class="card">
               <img class="card-img-top" src="${m.Poster}" alt="">
               <div class="card-body">
                   <h5 class="card-title">${m.Title}</h5>
                   <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                   <a href="#" class="btn btn-primary modal-detail-btn" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">Show Details</a>
               </div>
           </div>
           </div>`;
    });
    $(".movie-container").html(cards);

    // ! ketika tombol detail di klik
    $(".modal-detail-btn").on("click", function() {
      $.ajax({
        url: ("http://www.omdbapi.com/?apikey=76c5078b&i" += $(this).data(
          "imdbid"
        )),
        success: m => {
          const movieDetail = /*html*/ `<div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid" src="${m.Poster}" alt="">
                        </div>
                        <div class="col-md">
                            <ul class="list-group">
                                <li class="list-group-item">${m.Title} (${m.Year})</li>
                                <li class="list-group-item"><strong> Director : </strong> ${m.Director}
                                </li>
                                <li class="list-group-item"><strong> Actors : </strong> ${m.Actors}</li>
                                <li class="list-group-item"><strong> Writers : </strong> ${m.Writer}</li>
                                <li class="list-group-item"><strong> Plot : </strong> ${m.Plot}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            `;

          $(".modal-body").html(movieDetail);
        },
        error: e => {
          console.log(e.responseText);
        }
      });
    });
  },
  error: e => {
    console.log(e.responseText);
  }
});
