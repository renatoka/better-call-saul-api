function App() {
    return (<>
        <header
            className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
            <div className="flex items-center flex-grow basis-0">
                <h1 href="" className="text-lg font-semibold tracking-tight text-slate-900">
                    Better Call Saul API
                </h1>
            </div>
            <div className="items-center justify-end flex-grow hidden basis-0 md:flex gap-3">
                <div>
                    <a href="https://github.com/renatoka/better-call-saul-api" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Repository"
                            className="w-8 h-8 rounded-full" />
                    </a>
                </div>
                <a href="https://better-call-saul-api.onrender.com/characters"
                    className="px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-slate-50 transition ease-in-out delay-75 hover:scale-105 duration-200">
                    Go Explore API
                </a>
            </div>
        </header>

        <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
            <label for="navigation"
                className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>
            </label>

            <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
            <div
                className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
                <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>
                <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
                    <ul role="list" className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
                        <li>
                            <h3 className="font-semibold tracking-tight text-xl text-slate-900">
                                Characters
                            </h3>

                            <ul role="list" className="pl-3 mt-3 space-y-2">
                                <li>
                                    <a href="#get-all-characters" className="text-slate-900 hover:text-slate-800">
                                        Get All Characters
                                    </a>
                                </li>
                                <li>
                                    <a href="#get-random-character" className="text-slate-900 hover:text-slate-800">
                                        Get Random Character
                                    </a>
                                </li>
                                <li>
                                    <a href="#get-character-name" className="text-slate-600 hover:text-slate-800">
                                        Get Character By Name
                                    </a>
                                </li>
                                <li>
                                    <a href="#get-character-id" className="text-slate-600 hover:text-slate-800">
                                        Get Character by ID
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3 className="font-semibold tracking-tight text-xl text-slate-900">
                                Episodes
                            </h3>

                            <ul role="list" className="pl-3 mt-3 space-y-2">
                                <li>
                                    <a href="#get-all-episodes" className="text-slate-600 hover:text-slate-800">
                                        Get All Episodes
                                    </a>
                                </li>

                                <li>
                                    <a href="#get-random-episode" className="text-slate-600 hover:text-slate-800">
                                        Get Random Episode
                                    </a>
                                </li>

                                <li>
                                    <a href="#get-episode-title" className="text-slate-600 hover:text-slate-800">
                                        Get Episode by Title
                                    </a>
                                </li>

                                <li>
                                    <a href="#get-episode-id" className="text-slate-600 hover:text-slate-800">
                                        Get Episode by ID
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3 className="font-semibold tracking-tight text-xl text-slate-900">
                                Quotes
                            </h3>

                            <ul role="list" className="pl-3 mt-3 space-y-2">
                                <li>
                                    <a href="#get-all-episodes" className="text-slate-600 hover:text-slate-800">
                                        Get All Quotes
                                    </a>
                                </li>

                                <li>
                                    <a href="#get-random-episode" className="text-slate-600 hover:text-slate-800">
                                        Get Random Quote
                                    </a>
                                </li>

                                <li>
                                    <a href="#get-episode-id" className="text-slate-600 hover:text-slate-800">
                                        Get Quote by ID
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 ">
                <article className="">
                    <header className="">
                        <p className="text-base font-medium text-slate-500">
                            Getting started
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Documentation
                        </h1>
                    </header>

                    <p className="mt-2 text-xl text-slate-600">
                        Welcome to the Better Call Saul API documentation. Here you will find all the information
                        you need to get started with the API. Give our documentation a read and start building your
                        own applications.
                    </p>

                    <div className="mt-8">
                        <div className="border-b border-slate-300" id="get-all-characters">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get All Characters
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns all the characters from the Better Call Saul universe.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/characters
                                    </code>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Response
                                </h3>

                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        {'{'} <br />
                                        "char_id": 1, <br />
                                        "name": "Jimmy McGill", <br />
                                        "birthday": "November 12, 1960", <br />
                                        "occupation": "Mailroom clerk at Hamlin, Hamlin & McGill" <br />
                                        "img":
                                        "https://static.wikia.nocookie.net/breakingbad/images/8/8e/BCS_S6_Portrait_Jimmy.jpg/revision/latest?cb=20220802210840", <br />
                                        "status": "Alive", <br />
                                        "nickname": "Saul Goodman", <br />
                                        "appearance": [1, 2, 3, 4, 5, 6], <br />
                                        "portrayed": "Bob Odenkirk", <br />
                                        {'},'}
                                        <br />
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-random-character">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Random Character
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a random character from the Better Call Saul universe by name.
                            </p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/characters/random
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-character-name">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Character By Name or Status
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a character from the Better Call Saul by query searching name and/or status.
                            </p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/characters?name=:name&status=:status
                                    </code>

                                    <p className="mt-2 text-base text-slate-600">
                                        Example: <code className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/characters?name=Jimmy McGill&status=Alive</code>
                                    </p>

                                    <p className="mt-2 text-base text-slate-600">
                                        Note: The name of the character must be in the same format as the one in the
                                        database. If you are not sure what the name of the character is, you can use the
                                        <code className="text-base font-mono text-slate-600">/characters</code> endpoint
                                        to get all the characters. You can use both name and status as query parameters, but you can also use only one of them. If you use only one of them, you can leave the other one empty.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-character-id">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Character By ID
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a character from the Better Call Saul universe by ID.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code
                                        className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/characters/:char_id</code>
                                    <p className="mt-2 text-base text-slate-600">Example: <code
                                        className="text-base font-mono text-slate-600">https://www.bettercallsaul-api.com/characters/1</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Episodes Section */}
                    <div className="mt-8">
                        <div className="border-b border-slate-300" id="get-all-episodes">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">Get All Episodes</h2>
                            <p className="mt-2 text-xl text-slate-600">This endpoint returns all the episodes from the
                                Better Call Saul universe.</p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">Endpoint</h3>
                                <div className="mt-2 mb-1">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/episodes
                                    </code>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">Response</h3>
                                <div className="mt-2 mb-2">
                                    <code className="text-base font-mono text-slate-600">
                                        {'{'} <br />
                                        "episode_id": 3, <br />
                                        "title": "Nacho", <br />
                                        "season": 1, <br />
                                        "episode": 3, <br />
                                        "air_date": "February 16, 2015", <br />
                                        "characters": [
                                        "Jimmy McGill",
                                        "Mike Ehrmantraut",
                                        "Kim Wexler",
                                        "Howard Hamlin",
                                        "Nacho Varga",
                                        "Chuck McGill",
                                        "Tuco Salamanca",
                                        "Mrs. Nguyen",
                                        "Nancy",
                                        "Cal Lindholm",
                                        "Lars Lindholm"
                                        ], <br />
                                        "directed_by": "Terry McDonough", <br />
                                        "written_by": "Thomas Schnauz" <br />
                                        {'}'}
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div id="get-random-episode" className="border-b border-slate-300">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Random Episode</h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a random episode from the Better Call Saul universe.</p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">Endpoint</h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/episodes/random
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div id="get-episode-title" className="border-b border-slate-300">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Episode by Title and/or Season</h2>
                            <p className="mt-2 text-xl text-slate-600">This endpoint returns the episode from the Better
                                Call Saul universe by it's title and/or season.</p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">Endpoint</h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/episodes?title=:title&season=:season
                                    </code>
                                </div>
                                <div className="mt-2">
                                    <p className="mt-2 text-base text-slate-600">
                                        Example: <code className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/episodes?title="Uno"&season=1&</code>
                                    </p>
                                    <p className="mt-2 text-base text-slate-600">
                                        Example: <code className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/episodes?season=3</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="get-episode-id" className="border-b border-slate-300">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">Get Episode By ID</h2>
                            <p className="mt-2 text-xl text-slate-600">This endpoint returns a episode from the Better
                                Call Saul universe by ID.</p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">Endpoint</h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/episodes/:episode_id
                                    </code>
                                    <p className="mt-2 text-base text-slate-600">Example: <code
                                        className="text-base font-mono text-slate-60">https://better-call-saul-api.onrender.com/episodes/1</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="border-b border-slate-300" id="get-all-characters">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get All Quotes
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns all the quotes from the Better Call Saul universe.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/quotes
                                    </code>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Response
                                </h3>

                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        {'{'} <br />
                                        "qoute_id" : 1, <br />
                                        "qoute" : "You don’t have to make up with me. We don’t have to understand each other. Things are fine the way they are.", <br />
                                        "author" : "Jimmy McGill"<br />
                                        {'},'}
                                        <br />
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-random-character">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Random Quote
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a random quote from the Better Call Saul universe.
                            </p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/quotes/random
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-character-name">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Quote by Author
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a quote from the Better Call Saul by query searching it's author.
                            </p>
                            <div className="mt-4 ">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code className="text-base font-mono text-slate-600">
                                        https://better-call-saul-api.onrender.com/quotes?author=:author
                                    </code>

                                    <p className="mt-2 text-base text-slate-600">
                                        Example: <code className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/quotes?author=Kim Wexler</code>
                                    </p>

                                    <p className="mt-2 text-base text-slate-600">
                                        Note: The name of the character must be in the same format as the one in the
                                        database. If you are not sure what the name of the character is, you can use the
                                        <code className="text-base font-mono text-slate-600">/characters</code> endpoint
                                        to get all the characters.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-slate-300" id="get-character-id">
                            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
                                Get Quote By ID
                            </h2>
                            <p className="mt-2 text-xl text-slate-600">
                                This endpoint returns a quote from the Better Call Saul universe by ID.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                    Endpoint
                                </h3>
                                <div className="mt-2">
                                    <code
                                        className="text-base font-mono text-slate-600">https://better-call-saul-api.onrender.com/quotes/:qoute_id</code>
                                    <p className="mt-2 text-base text-slate-600">Example: <code
                                        className="text-base font-mono text-slate-600">https://www.bettercallsaul-api.com/quotes/1</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-8 text-base font-bold tracking-tight text-slate-900">Have questions?</h3>
                    <p className="text-slate-900">
                        Still have questions? <a href="mailto:rkauric@vvg.hr" className="underline hover:no-underline">Contact
                            me</a>.
                    </p>
                </article>
            </div>
        </main>
        <div>
            <footer className="flex flex-col items-center justify-center w-full h-24 mt-8 border-t border-slate-300">
                <p className="text-sm text-slate-600">
                    Made with ❤️ by <a href="https://github.com/renatoka"
                        className="underline hover:no-underline">@renatoka</a>
                </p>
            </footer>
        </div>
    </>)
}

export default App
