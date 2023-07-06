import "./Footer.css";
import Products from "./footer_data";
const data1 = [
  "Mandideep (IN) to Le Havre",
  "Mandideep (IN) to Puerto Quetzal",
  "Mandideep (IN) to Constanta",
  "Mandideep (IN) to Dar es Salaam",
  "Mandideep (IN) to Tema",
  "Mandideep (IN) to Ambarli",
  "Mandideep (IN) to Beira",
  "Mandideep (IN) to Valencia",
  "Mandideep (IN) to Antwerp Churchill Terminal (BE)",
  "Mandideep (IN) to Altamira",
];
const data2 = [
  "Mandideep (IN) to Banjul",
  "Mandideep (IN) to Jeddah",
  "Mandideep (IN) to Manzanillo, MX",
  "Mandideep (IN) to Bilbao",
  "Mandideep (IN) to Aden",
  "Mandideep (IN) to Cork",
  "Mandideep (IN) to LUANDA",
  "Mandideep (IN) to London gateway port",
  "Mandideep (IN) to Hamad",
  "Mandideep (IN) to Novorossiysk",
];
const data3 = [
  "Mandideep (IN) to Vigo",
  "Mandideep (IN) to Savannah, Georgia",
  "Mandideep (IN) to Rotterdam",
  "Mandideep (IN) to Livorno (Leghorn)",
  "Mandideep (IN) to Monrovia",
  "Mandideep (IN) to Alexandria",
  "Mandideep (IN) to New York",
  "Mandideep (IN) to Bremerhaven",
  "Mandideep (IN) to Zanzibar",
  "Mandideep (IN) to Conakry",
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top-section">
        <div>
          <p className="footer-header">Products</p>
          <p>Global Trade Plafrom</p>
          <h4>Cross-border Logistic</h4>
          <p>Ocean: FCL</p>
          <p>Ocean: LCL</p>
          <p>International Air</p>
          <p>Customs, CFS, and Handling</p>
          <h4>Domestic Logistics</h4>
          <p>Surface: FTL, PTL, Rail</p>
          <p>Trailer & Rail Container Haulage</p>
          <h4>Trade Management Solutions</h4>
          <p>Freight Rates & Schedules</p>
          <p>Quick Premium Quotations</p>
          <p>Duties & Taxes Calculator</p>
          <p>Tracking & Visibility</p>
          <h4>CogoMaps</h4>
          <p>Shipment Planner</p>
          <p>Trade Info</p>
          <p>Global Routes</p>
          <p>Live Congestion</p>
        </div>
        <div>
        {/* <p> </p> */}
          <p>Supply Chain Solutions</p>
          <h4>CogoAssured</h4>
          <p>Fulfilment Logistics</p>
          <p>Door to Door Shipments</p>
          <p>Cargo Insurance</p>
          <p>Financial Services</p>
          <p>Pay Later</p>
          <p>Export Factoring</p>
          <p>CogoFx</p>
        </div>
        <div>
          <p className="footer-header">Partners</p>
          <p> Global Partner Network</p>
          <h4>Our Logistics Providers</h4>
          <p> Freight Forwarders</p>
          <p> Transporters</p>
          <p> Custom Agents</p>
          <h4> Partnership Program</h4>
          <p> Channel Partners</p>
          <p> Overseas Agents</p>
        </div>
        <div>
          <p className="footer-header">Tools</p>
          <p> Rate Discovery</p>
          <p>Freight Rate Trends</p>
          <p> Tracking</p>
          <p> HS Code Finder</p>
          <p> Personal Trade Assistant</p>
        </div>
        <div>
          <p className="footer-header">Company</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Newsroom</p>
          <p>Leadership</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
        <div>
          <p className="footer-header">Knowledge Center</p>
          <p>Blogs</p>
          <p>News & Updates</p>
          <p>Events</p>
          <p>Reports</p>
          <p>Notifications</p>
        </div>
      </div>

      <div className="footer-div">
        <div>
          {data1.map((port) => {
            return <p>{port}</p>;
          })}
        </div>
        <div>
          {data2.map((port) => {
            return <p>{port}</p>;
          })}
        </div>
        <div className="port-3">
          {data3.map((port) => {
            return <p>{port}</p>;
          })}
        </div>
      </div>
      <div>
        <p> 2023 Cogo Universe PTE. ALl rights reserved.</p>
        <p>Terms and Conditions | Cookie policy | Privacy and Data Protection Policy</p>
        <p>English(IN)</p>
      </div>
    </div>
  );
};

export default Footer;
