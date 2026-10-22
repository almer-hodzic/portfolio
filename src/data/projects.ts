export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  status: string;
  stack: string[];
  overview: string;
  features: string[];
  engineering: string[];
  evidence: { value: string; label: string }[];
  evidenceNote: string;
  limitations: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  githubUrl: string;
  docsUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "hoopslab",
    name: "HoopsLab",
    year: "2026",
    summary: "Historical NBA analytics, player comparison, all-time rosters, and an uncertainty-aware simulation API.",
    category: "Historical NBA analytics",
    description: "Explore NBA history, compare player-seasons, build all-time rosters, and study matchups through an uncertainty-aware simulation API.",
    status: "V1 application & simulation API",
    stack: ["C# / .NET 9", "JavaScript", "Python", "pandas", "scikit-learn", "NumPy / SciPy"],
    overview: "HoopsLab connects historical basketball data with interactive analysis. The application brings player exploration, season comparison, roster construction, and calibrated shot analysis together. A separate single-game API simulates historical matchups and returns probabilities, score intervals, and explicit uncertainty diagnostics.",
    features: [
      "Search historical players and select seasons from 1979–80 through 2025–26; inspect raw, per-75, advanced, and era-relative statistics.",
      "Compare two player-seasons side by side across scoring, efficiency, playmaking, rebounding, and era context.",
      "Build an all-time roster with five starters and up to seven bench players; save locally and import or export validated roster JSON.",
      "Use Shot Lab for calibrated shot probabilities and TAKE / REVIEW / DEFER recommendations.",
      "Simulate matchups through a versioned API with target-era and venue selection, seeded Monte Carlo draws, overtime, and score distributions.",
    ],
    engineering: [
      "Built canonical player-season data with separate traded-player splits, season-relative metrics, missing-value handling, and validation checks.",
      "Kept the ASP.NET Core API as a thin proxy while dedicated Python services own shot inference and simulation rules.",
      "Exported frozen simulation coefficients and residuals with data fingerprints, startup verification, seed replay, and parity checks against research reference cases.",
      "Evaluated models with temporal splits and documented calibration limits instead of presenting synthetic matchups as historical truth.",
    ],
    evidence: [
      { value: "47", label: "NBA seasons" },
      { value: "20,526", label: "canonical player-seasons" },
      { value: "3,818", label: "players" },
    ],
    evidenceNote: "The production simulator report records 96 simulation tests and a local median response time of 253.5 ms across 30 warm requests at 10,000 draws. These are recorded development results, not a hosted performance guarantee.",
    limitations: "Simulation is a statistical counterfactual, not a claim of historical certainty. Custom rosters carry HIGH uncertainty; central-interval coverage, home bias, and overtime calibration have documented limits. This case study covers the V1 application and simulation API.",
    cover: {
      src: "/projects/hoopslab/shot-lab.png",
      alt: "Shot Lab with Stephen Curry selected, an interactive half court, and a TAKE recommendation showing 44.2% make probability and 1.32 xPPS.",
      caption: "Shot Lab · court interaction, calibrated probability, and decision recommendation.",
      width: 1870, height: 976,
    },
    gallery: [
      {
        src: "/projects/hoopslab/player-explorer.png",
        alt: "HoopsLab Historical Player Explorer showing John Stockton’s 2002–03 season, season selection, per-75 statistics, and shooting efficiency.",
        caption: "Historical Player Explorer · select a season and inspect player production.",
        width: 1885, height: 1000,
      },
      {
        src: "/projects/hoopslab/player-comparison.png",
        alt: "Historical comparison controls with Jordan Clarkson’s 2021–22 season and Devin Booker’s 2018–19 season selected side by side.",
        caption: "Player comparison · select two historical player-seasons.",
        width: 1881, height: 949,
      },
      {
        src: "/projects/hoopslab/comparison-metrics.png",
        alt: "HoopsLab comparison tables for Jordan Clarkson and Devin Booker, showing scoring production, shooting efficiency, relative true shooting, and attempt rates.",
        caption: "Comparison results · scoring and efficiency in historical context.",
        width: 1878, height: 883,
      },
      {
        src: "/projects/hoopslab/shot-context.png",
        alt: "Shot Lab game-context inputs for period, clock, score difference, and venue alongside replacement value, decision margin, and historical shooting profiles.",
        caption: "Shot analysis · game context, replacement benchmark, and player shooting profiles.",
        width: 1879, height: 859,
      },
    ],
    githubUrl: "https://github.com/almer-hodzic/hoops-lab",
    docsUrl: "https://github.com/almer-hodzic/hoops-lab/blob/main/reports/simulation/PRODUCTION_SIMULATOR.md",
  },
  {
    slug: "movieshop",
    name: "MovieShop",
    year: "2025–2026",
    summary: "A full-stack movie catalog with account management, persistent carts, administration, and PayPal Sandbox checkout.",
    category: "Full-stack catalog & commerce",
    description: "A movie catalog and shopping application with account management, role-protected administration, persistent carts, and PayPal Sandbox checkout.",
    status: "Completed showcase application",
    stack: ["Angular 21", "TypeScript", "ASP.NET Core 8", "EF Core", "SQL Server", "MediatR"],
    overview: "MovieShop covers the customer journey from browsing and filtering a movie catalog to saving favourites, managing a cart, and checking out in PayPal Sandbox. A modular Angular frontend connects to a layered .NET API, with separate administration workflows for the catalog, reviews, settings, and notifications.",
    features: [
      "Browse movie details, trailers, cast, and ratings; search by title and filter by category or price, with sorting and pagination.",
      "Register and sign in with email or username; confirm email, reset passwords, and complete two-factor verification.",
      "Write reviews, save favourites, and manage a persistent cart with quantity changes and save-for-later items excluded from the active total.",
      "Create and capture PayPal Sandbox checkout orders for the current user’s cart.",
      "Manage movies, categories, actors, directors, reviews, settings, and per-user notifications through protected administration workflows.",
    ],
    engineering: [
      "Separated Domain, Application, Infrastructure, and API layers; controllers dispatch CQRS commands and queries through MediatR.",
      "Applied FluentValidation in the request pipeline and Reactive Forms validation in Angular, including asynchronous username availability checks.",
      "Implemented JWT access and refresh tokens, account recovery, two-factor verification, and an admin authorization policy.",
      "Modeled catalog relationships, carts, favourites, and per-user notification state with EF Core and SQL Server; integration tests cover authentication, authorization, checkout, and saved items.",
      "Automated tests cover authentication/2FA flows, notification isolation, PayPal checkout and authorization rules.",
    ],
    evidence: [
      { value: "4", label: "core backend layers" },
      { value: "JWT", label: "access & refresh tokens" },
      { value: "CQRS", label: "commands & queries" },
    ],
    evidenceNote: "The audited source contains 11 integration-test cases spanning authentication, username validation, admin access, notifications, checkout, and save-for-later behavior.",
    limitations: "Checkout uses PayPal Sandbox. Persisted order history is not implemented, checkout sessions are held in API memory, and notifications update on refresh. Email and payment flows require provider configuration.",
    cover: {
      src: "/images/movieshop/catalog.png",
      alt: "MovieShop movie catalog with title search, category and price filters, and movie cards with details and trailer actions.",
      caption: "Movie catalog · search, filters, movie details, and trailers.",
      width: 1440, height: 900,
    },
    gallery: [
      {
        src: "/images/movieshop/admin-dashboard.png",
        alt: "MovieShop admin dashboard with catalog and user counts, plus shortcuts to movies, categories, reviews, actors, directors, and settings.",
        caption: "Administration · dashboard and catalog management.",
        width: 1440, height: 900,
      },
      {
        src: "/images/movieshop/saved-cart.png",
        alt: "MovieShop cart with a five-dollar active total and a separate saved-for-later movie with a move-to-cart action.",
        caption: "Shopping cart · saved items stay separate from the active total.",
        width: 1418, height: 802,
      },
      {
        src: "/images/movieshop/movie-management.png",
        alt: "MovieShop administration screen with a title search, add-movie control, and movie cards offering edit and delete actions.",
        caption: "Catalog management · search, edit, and remove movies.",
        width: 1440, height: 900,
      },
      {
        src: "/images/movieshop/movie-edit.png",
        alt: "Populated MovieShop edit form showing title, release date, duration, director, category, and an editable actor list.",
        caption: "Movie editing · catalog relationships in a populated Reactive Form.",
        width: 1440, height: 864,
      },
    ],
    githubUrl: "https://github.com/almer-hodzic/MovieShop",
    docsUrl: "https://github.com/almer-hodzic/MovieShop/blob/main/dokumenti/README-architecture.md",
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
