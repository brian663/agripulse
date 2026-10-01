import { Routes, Route } from "react-router-dom";

function Page({ title, description }) {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{title}</h1>

          <p className="section-description">{description}</p>
        </div>
      </section>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page
            title="Welcome to AgriPulse"
            description="Better Prices. Bigger Harvests."
          />
        }
      />

      <Route
        path="/prices"
        element={
          <Page
            title="Crop Prices"
            description="View and compare agricultural market prices."
          />
        }
      />

      <Route
        path="/markets"
        element={
          <Page
            title="Markets"
            description="Explore agricultural markets and available crops."
          />
        }
      />

      <Route
        path="/crops"
        element={
          <Page
            title="Crops"
            description="Explore crops and their market information."
          />
        }
      />

      <Route
        path="/crops/:id"
        element={
          <Page
            title="Crop Details"
            description="Detailed crop information will appear here."
          />
        }
      />

      <Route
        path="/trends"
        element={
          <Page
            title="Price Trends"
            description="Analyze agricultural price trends across different markets."
          />
        }
      />

      <Route
        path="/calculator"
        element={
          <Page
            title="Revenue Calculator"
            description="Estimate your potential crop revenue."
          />
        }
      />

      <Route
        path="/subscribe"
        element={
          <Page
            title="Subscribe"
            description="Subscribe for future agricultural market updates."
          />
        }
      />

      <Route
        path="/dashboard"
        element={
          <Page
            title="Farmer Dashboard"
            description="Your selected crops, markets and price information will appear here."
          />
        }
      />

      <Route
        path="/about"
        element={
          <Page
            title="About AgriPulse"
            description="Learn more about the AgriPulse platform."
          />
        }
      />

      <Route
        path="/contact"
        element={
          <Page
            title="Contact AgriPulse"
            description="Get in touch with the AgriPulse team."
          />
        }
      />

      <Route
        path="*"
        element={
          <Page
            title="Page Not Found"
            description="The page you are looking for does not exist."
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
