# Skool LinkedIn Extractor

The **Skool LinkedIn Extractor** is a Node.js-based tool designed to automate the extraction of LinkedIn profile data. Utilizing Puppeteer and Cheerio, it navigates LinkedIn profiles to gather information such as names, job titles, and company details, storing the data in a structured format for further analysis.

## Features

- **Automated Data Extraction**: Seamlessly navigates LinkedIn profiles to collect pertinent information.
- **Data Storage**: Saves extracted data in a structured format, facilitating easy analysis.
- **Customizable Scraping Logic**: Allows users to modify scraping parameters to suit specific needs.

## Prerequisites

- Node.js (version 14.x or higher)
- Google Chrome browser
- LinkedIn account credentials

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/artsmc/Skool-linkedIn-extractor.git
   ```

2. **Install Required Packages**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the project directory and add your LinkedIn email and password:

   ```
   LINKEDIN_USER=your_email@example.com
   LINKEDIN_PASSWORD=your_password
   ```

## Usage

1. **Prepare Input Data**:

   Ensure that `output.json` contains an array of LinkedIn profile URLs you wish to extract data from.

2. **Run the Extractor**:

   ```bash
   node index.js
   ```

3. **Access Extracted Data**:

   The extracted data will be saved in a JSON file named `profiles.json` within the project directory.

## Customization

To modify the scraping logic or the data fields being extracted, edit the `linkedIn.service.js` file. Adjust the selectors and parsing logic as needed to capture additional information.

## Legal and Ethical Considerations

Please be aware that scraping LinkedIn data may violate LinkedIn's [Terms of Service](https://www.linkedin.com/legal/user-agreement). Use this tool responsibly and ensure compliance with all applicable laws and regulations.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance the functionality of this tool.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

_Note: This README is a general template. Please customize it to accurately reflect the specifics of your project._
