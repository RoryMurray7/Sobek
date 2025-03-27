import FadeContent from "./components/FadeContent/FadeContent";
function Capabilities() {
  return (
    <div className="sectionContainer" id="capabilitiesContainer">
      <div
        className="leftHeader large"
        style={{ width: "50vw", marginTop: "5vw" }}
      >
        <h1>Our Capabilities</h1>
      </div>

      <div className="capabilitiesColumnContainer">
        <div className="capabilitiesColumn column1">
          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Internal Reconnaissance</p>
              <p className="cardContent">
                We work closely with the most tallented investigators to gather
                key information for our counterintelligence assesments and
                covert intelligence. Alongside this we house our own specialy
                trained investigators to work on our deep Reconnaissance and
                threat analysis.
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Radar</p>
              <p className="cardContent">
                We use our own custom designed mobile radar systems to assist in
                our data collection procedures for our intelligence reports.
                Alongside this we use these radar systems to assist in producing
                our real-time intelligence and strategic breifings.
              </p>
            </div>
          </FadeContent>
        </div>

        <div className="capabilitiesColumn column2">
          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Aerial Reconnaissance</p>
              <p className="cardContent">
                At Sobek, we strive to provide the most accurate intelligence to
                our customers. We work sith AI assisted sattelite imaging as
                part of our refined intelligence reports and work with remotley
                controlled surveilance drones to provide our risk mittigation
                reports and real-time intelligence.
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Digital Signal Monitoring</p>
              <p className="cardContent">
                We have a wide range of wirless interception systems that allow
                us to monitor the traffic and digital activity of any subject
                you see fit.
              </p>
            </div>
          </FadeContent>
        </div>

        <div className="capabilitiesColumn column3">
          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Sattelite Imaging</p>
              <p className="cardContent">
                We work sith AI assisted sattelite imaging as part of our
                refined intelligence reports using publicly available satelite
                images. we then use privately developed and trained Artificial
                Intelligence software to peice images together and pair these
                images with the rest of the data we provide.
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={false}
            duration={2500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="capabilitiesCard">
              <p className="imageTitle">Social Data Extraction</p>
              <p className="cardContent">
                We actively monitor all public online interactions, Error deserunt iusto omnis est dicta. Quia eius consequatur consequuntur perferendis quia illo amet sed. Dolorem accusamus sequi quo accusamus aut debitis temporibus
              </p>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
