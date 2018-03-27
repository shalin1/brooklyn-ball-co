**BROOKLYN BALL CO**

LIVE at https://brooklyn-ball-co.firebaseapp.com/

A test of basic user tracking and reportingin vanilla JS, with Firebase and manually set cookies.

**Features**

-Random a-b testing of red vs. blue balls-- visitors will see only one version of the page, and will see the same thing every time.

-Modification of copy and imagery based on React state, persisted between visits via cookie.

-Hand-crafted cookie setter/getter library in vanilla JS, with default persistence to end of 32 bit epoch time, tested for cross-browser compatibility.

-Pseudo-random GUID setter (as random at Math.random())

-User activity and statistics persisted in Firebase DB.

-Minimal cart implementation, clickthrough rate tracking

-Report page broken out by user and aggregate, with conversion rates and total view stats

-Minimal yet functional styling for the modern era

-Logo for Brooklyn Ball Co™ is animated and subtly references Pokeball for enhanced appeal to millennials

**Todos**

-Add testing suite to facilitate future development

-Refactor firebase transaction logic in to helper library for a more DRY and readable codebase

-Refactor DB state shape to update meta info in a different section than user tracking to facilitate cleaner lookups

-Add timestamp and IP info by user visit, associate individual users with individual clickthroughs.

-Associate GUID's with FB/Google tracking pixels to circumvent paranoid users with "privacy concerns" who've disabled cookies

-Tidy up CSS, refactor design for mobile-first with @media queries.

-Add information about ball color to cart state

-Stripe integration, Facebook ad campaign to widen sales funnel and increase profitability

**THANK YOU** 


-Shalin Scupham / shalinscupham.com
