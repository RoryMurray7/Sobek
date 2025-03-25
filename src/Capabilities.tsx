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
					<div className="capabilitiesCard">
						<p className="imageTitle">Internal Reconnaissance</p>
						<p className="cardContent">
							We work closely with the most tallented
							investigators to gather key information for our
							counterintelligence assesments and covert
							intelligence. Alongside this we house our own
							specialy trained investigators to work on our deep
							Reconnaissance and threat analysis.
						</p>
					</div>

					<div className="capabilitiesCard">
						<p className="imageTitle">Radar</p>
						<p className="cardContent">
							We use our own custom designed mobile radar systems
							to assist in our data collection procedures for our
							intelligence reports. Alongside this we use these
							radar systems to assist in producing our real-time
							intelligence and strategic breifings.
						</p>
					</div>
				</div>

				<div className="capabilitiesColumn column2">
					<div className="capabilitiesCard">
						<p className="imageTitle">Aerial Reconnaissance</p>
						<p className="cardContent">
							At Sobek, we strive to provide the most accurate
							intelligence to our customers. We work sith AI
							assisted sattelite imaging as part of our refined
							intelligence reports and work with remotley
							controlled surveilance drones to provide our risk
							mittigation reports and real-time intelligence.
						</p>
					</div>

					<div className="capabilitiesCard">
						<p className="imageTitle">Digital Signal Monitoring</p>
						<p className="cardContent">
							We have a wide range of wirless interception systems
							that allow us to monitor the traffic and digital
							activity of any subject you see fit.
						</p>
					</div>
				</div>

				<div className="capabilitiesColumn column3">
					<div className="capabilitiesCard">
						<p className="imageTitle">Sattelite Imaging</p>
						<p className="cardContent">
							We work sith AI assisted sattelite imaging as part
							of our refined intelligence reports using publicly
							available satelite images. we then use privately
							developed and trained Artificial Intelligence
							software to peice images together and pair these
							images with the rest of the data we provide.
						</p>
					</div>

					<div className="capabilitiesCard">
						<p className="imageTitle">Social Data Extraction</p>
						<p className="cardContent">
							We actively monitor all public online interactions,
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Capabilities;
