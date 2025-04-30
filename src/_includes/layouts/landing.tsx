export default ({ title, children, comp }: Lume.Data, helpers: Lume.Helpers) => (
    <html lang="{{ lang || metas.lang }}">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="color-scheme" content="light dark" />
            <link rel="stylesheet" href="/style.css" />
            <link rel="canonical" href="{{ url |> url(true) }}" />
        </head>
        <body>
            <div className="">
                <div className="sm:p-5 sm:h-screen sm:w-1/4 bg-white dark:bg-blue-500">
                    <comp.Navigation></comp.Navigation>
                </div>
                <main className="p-5 w-2/3">{children}</main>
            </div>
        </body>
    </html>
);

// <!doctype html>
// <html lang="{{ lang || metas.lang }}">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>{{ metas.site }}</title>
//     <meta name="color-scheme" content="light dark">
//     <link rel="stylesheet" href="/style.css">
//     <link rel="canonical" href="{{ url |> url(true) }}">
//   </head>
//   <body>
// <div className="">
//   <div className="sm:p-5 sm:h-screen sm:w-1/4 bg-white dark:bg-blue-500">
//   {{ include "../partials/navigation.tsx" }}
//   </div>
//   <main className="p-5 w-2/3">
//     {{# {{ include "../partials/hero.vto" }} #}}
//   </main>
// </div>
//     <script src="/script.js"></script>
//   </body>
// </html>
