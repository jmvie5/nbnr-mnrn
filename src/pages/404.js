    import * as React from "react"
    import { useIntl, Link } from "gatsby-plugin-intl"
    import Layout from "../components/Layout"


    const NotFoundPage = () => {
    const intl = useIntl()

    let mainTxt = <div className="space-y-4"><p>Page not found.</p><p>Return to <Link to="/" className="underline text-blue-700">Home Page</Link>.</p></div>;

    if (intl.locale === "fr") {
        mainTxt = <div className="space-y-4"><p>Page introuvable.</p><p>Retournez à la page d'<Link to="/" className="underline text-blue-700">accueil</Link>.</p></div>;
    }

    return (
        <Layout pageTitle="Error 404" description="Page not found.">
        {mainTxt}
        </Layout>
    )
    }

    export default NotFoundPage
