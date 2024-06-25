import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <>
      <div className="container">
        <header>
          <div className="pull-right flush-right">
            <p>
              Guest User | <a href="/login.php">Sign In</a>
            </p>
          </div>
          <a className="logo" href="/index.php" title="Support Center">
            <img src="/logo.php" alt="FOS Technologies" />
          </a>
        </header>
        <nav className="nav flush-left">
          <ul>
            <li><a href="/index.php">Support Center Home</a></li>
            <li><a className="active" href="/open.php">Open a New Ticket</a></li>
            <li><a href="/view.php">Check Ticket Status</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1>Open a New Ticket</h1>
          <p>Please fill in the form below to open a new ticket.</p>
          <form className="ticket-form" method="post" action="open.php" encType="multipart/form-data">
            <input type="hidden" name="__CSRFToken__" value="577abff6fd216564c92762ea5f17ba4d89b4fd22" />
            <input type="hidden" name="a" value="open" />
            <div className="form-section">
              <h3>Contact Information</h3>
              <label htmlFor="email">
                <span className="required">Email Address<span className="error">*</span></span>
                <input type="email" id="email" name="email" placeholder="" required />
              </label>
              <label htmlFor="company">
                <span>Company</span>
                <input type="text" id="company" name="company" placeholder="" />
              </label>
              <label htmlFor="fullName">
                <span className="required">Full Name<span className="error">*</span></span>
                <input type="text" id="fullName" name="fullName" placeholder="" required />
              </label>
              <label htmlFor="customerId">
                <span>Customer ID</span>
                <input type="text" id="customerId" name="customerId" placeholder="" />
              </label>
            </div>
            <div className="form-section">
              <h3>Help Topic</h3>
              <select id="topicId" name="topicId" required>
                <option value="">— Select a Help Topic —</option>
                <option value="18">Support</option>
              </select>
              <span className="error">*</span>
            </div>
            <div className="form-section">
              <h3>Ticket Details</h3>
              <label htmlFor="issueSummary">
                <span className="required">Issue Summary<span className="error">*</span></span>
                <input type="text" id="issueSummary" name="issueSummary" placeholder="" required />
              </label>
              <div className="rich-text-editor" contentEditable="true" placeholder="Details on the reason(s) for opening the ticket."></div>
            </div>
            <div className="form-buttons">
              <input type="submit" value="Create Ticket" />
              <input type="reset" name="reset" value="Reset" />
              <input type="button" name="cancel" value="Cancel" />
            </div>
          </form>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 FOS Technologies - All rights reserved.</p>
        <a href="http://supportsystem.com" target="_blank" rel="noopener noreferrer">Helpdesk software - powered by SupportSystem</a>
      </footer>
    </>
  );
}

export default Support;
