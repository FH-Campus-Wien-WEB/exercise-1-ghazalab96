
window.onload = function () {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        const bodyElement = document.querySelector("body")
        if (xhr.status == 200) {
            /* Part 2: Build the HTML elements here and append them to the body */
            const mainTitle = document.createElement("h1")
            mainTitle.textContent = "Movies"
            bodyElement.append(mainTitle)

            const movies = JSON.parse(xhr.responseText)
            for (const movie of movies) {
                //working on each movie info here
                const articleElement = document.createElement("article")

                const posterElement = document.createElement("img")
                posterElement.src = movie.Poster
                posterElement.alt = movie.Title
                articleElement.append(posterElement)

                const titleElement = document.createElement("h2")
                titleElement.textContent = movie.Title
                articleElement.append(titleElement)

                const releasedElement = document.createElement("p")
                releasedElement.textContent = "Released: " + movie.Released
                articleElement.append(releasedElement)

                const runtimeElement = document.createElement("p")
                runtimeElement.textContent = "Runtime: " + movie.Runtime + " min"
                articleElement.append(runtimeElement)

                const genresElement = document.createElement("p")
                genresElement.textContent = "Genres: "
                for (const genre of movie.Genres) {
                    const genreElement = document.createElement("span")
                    genreElement.textContent = genre
                    genreElement.className = "genre"
                    genresElement.append(genreElement)
                }
                articleElement.append(genresElement)

                const directorsTitleElement = document.createElement("h3")
                directorsTitleElement.textContent = "Directors"
                articleElement.append(directorsTitleElement)

                const directorsListElement = document.createElement("ul")
                for (const director of movie.Directors) {
                    const directorItemElement = document.createElement("li")
                    directorItemElement.textContent = director
                    directorsListElement.append(directorItemElement)
                }
                articleElement.append(directorsListElement)

                const writersTitleElement = document.createElement("h3")
                writersTitleElement.textContent = "Writers"
                articleElement.append(writersTitleElement)

                const writersListElement = document.createElement("ul")
                for (const writer of movie.Writers) {
                    const writerItemElement = document.createElement("li")
                    writerItemElement.textContent = writer
                    writersListElement.append(writerItemElement)
                }
                articleElement.append(writersListElement)

                const actorsTitleElement = document.createElement("h3")
                actorsTitleElement.textContent = "Actors"
                articleElement.append(actorsTitleElement)

                const actorsListElement = document.createElement("ul")
                for (const actor of movie.Actors) {
                    const actorItemElement = document.createElement("li")
                    actorItemElement.textContent = actor
                    actorsListElement.append(actorItemElement)
                }
                articleElement.append(actorsListElement)

                const metascoreElement = document.createElement("p")
                metascoreElement.textContent = "Metascore: " + movie.Metascore
                articleElement.append(metascoreElement)

                const imdbRatingElement = document.createElement("p")
                imdbRatingElement.textContent = "IMDb rating: " + movie.imdbRating
                articleElement.append(imdbRatingElement)

                const plotElement = document.createElement("p")
                plotElement.textContent = "Plot: " + movie.Plot
                articleElement.append(plotElement)

                bodyElement.append(articleElement)
            }

        } else {
            bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
        }
    }
    xhr.open("GET", "/movies")
    xhr.send()
}