import React from "react";
import { Container, Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const TermsConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="py-5 bg-light mt-4">
      <Container>
        <Card className="shadow border-0">
          <Card.Body className="p-5">
            <h1 className="text-center mb-4">Terms & Conditions</h1>
            <h4 className="fw-bold">1. Acceptance of Terms</h4>
<p>
  By accessing or using our platform, you agree to comply with
  these Terms & Conditions. If you do not agree, please do not use
  our services.
</p>

<h4 className="fw-bold">2. Eligibility</h4>
<p>
  You must be at least 18 years old or use the platform under the
  supervision of a parent or legal guardian.
</p>

<h4 className="fw-bold">3. Account Registration</h4>
<p>
  Users are responsible for maintaining the confidentiality of
  their account credentials and all activities under their account.
</p>

<h4 className="fw-bold">4. Orders</h4>
<p>
  All orders are subject to availability and confirmation. We
  reserve the right to refuse or cancel any order due to pricing
  errors, suspected fraud, or product unavailability.
</p>

<h4 className="fw-bold">5. Payments</h4>
<p>
  Payments can be made through the available payment methods on our
  platform. Orders will only be processed after successful payment
  confirmation.
</p>

<h4 className="fw-bold">6. Delivery</h4>
<p>
  Estimated delivery times are provided for convenience and may vary
  due to weather, traffic, restaurant preparation time, or other
  unforeseen circumstances.
</p>

<h4 className="fw-bold">7. Cancellation & Refund</h4>
<p>
  Orders can only be cancelled before the restaurant begins
  preparing them. Refunds will be processed according to our Refund
  Policy.
</p>

<h4 className="fw-bold">8. User Responsibilities</h4>
<ul>
  <li>Provide accurate delivery information.</li>
  <li>Do not misuse the platform.</li>
  <li>Respect delivery partners and restaurant staff.</li>
  <li>Do not engage in fraudulent activities.</li>
</ul>

<h4 className="fw-bold">9. Prohibited Activities</h4>
<ul>
  <li>Using fake identities.</li>
  <li>Attempting unauthorized access.</li>
  <li>Posting harmful or illegal content.</li>
  <li>Interfering with website operations.</li>
</ul>

<h4 className="fw-bold">10. Intellectual Property</h4>
<p>
  All website content, logos, graphics, and trademarks are the
  property of the company and may not be copied without permission.
</p>

<h4 className="fw-bold">11. Limitation of Liability</h4>
<p>
  We are not liable for delays, interruptions, or damages caused by
  circumstances beyond our reasonable control.
</p>

<h4 className="fw-bold">12. Privacy</h4>
<p>
  Your personal information is handled according to our Privacy
  Policy.
</p>

<h4 className="fw-bold">13. Changes to Terms</h4>
<p>
  We reserve the right to update these Terms & Conditions at any
  time. Continued use of the platform indicates acceptance of the
  updated terms.
</p>

<h4 className="fw-bold">14. Contact Us</h4>
<p>
  If you have any questions regarding these Terms & Conditions,
  please contact us through our support page or email.
</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
<Footer/>
    </>
  );
};

export default TermsConditions;