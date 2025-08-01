import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import TableMasjids from '@/app/(profile)/masjid-detail/search/components/TableMajids'
// Ensure this import path is correct for your project structure

// Define the props for a page using dynamic routes in Next.js
interface PageProps {
  params: {
    search: string // 'search' must match the folder name [search]
  }
}

export default function MasjidSearchPage({ params }: PageProps) {
  // Decode the search term from the URL to handle spaces and special characters
  const decodedSearchTerm = decodeURIComponent(params.search)

  return (
    <>
      <Layout
        headerLayout={1}
        logo="logo"
        verticalLine={true}
      >
        <section className="page-header -base -">
          <div className="page-header__bg">
            <Image width="0" height="0" sizes="200vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
          </div>
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-lg-9 col-md-10">
                <div>
                  <h1 className="page-header__title lh-14">Search Results</h1>
                  <p className="page-header__text pt-10">
                    Showing results for: <strong>{decodedSearchTerm}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-md px-4">
            <div className="container">
                {/* Pass the decoded search term as a prop to the table component */}
                <TableMasjids initialSearchTerm={decodedSearchTerm} />
            </div>
        </section>
      </Layout>
    </>
  )
}