# Skool LinkedIn Extractor

The **Skool LinkedIn Extractor** is a Python-based tool designed to automate the extraction of LinkedIn profile data. Leveraging Selenium and BeautifulSoup, it navigates LinkedIn profiles to gather information such as names, job titles, and company details, storing the data in a structured format for further analysis.

## Features

- **Automated Data Extraction**: Seamlessly navigates LinkedIn profiles to collect pertinent information.
- **Data Storage**: Saves extracted data in a structured format, facilitating easy analysis.
- **Customizable Scraping Logic**: Allows users to modify scraping parameters to suit specific needs.

## Prerequisites

- Python 3.x
- Selenium
- BeautifulSoup
- Google Chrome browser
- ChromeDriver compatible with your Chrome version

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/artsmc/Skool-linkedIn-extractor.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Skool-linkedIn-extractor
   ```

3. **Install Required Packages**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Download ChromeDriver**:

   Ensure that the ChromeDriver version matches your installed Chrome browser version. Download it from the [official ChromeDriver site](https://sites.google.com/chromium.org/driver/).

## Usage

1. **Configure LinkedIn Credentials**:

   Create a `.env` file in the project directory and add your LinkedIn email and password:

   ```
   LINKEDIN_EMAIL=your_email@example.com
   LINKEDIN_PASSWORD=your_password
   ```

2. **Run the Extractor**:

   ```bash
   python linkedin_extractor.py
   ```

3. **Access Extracted Data**:

   The extracted data will be saved in a CSV file named `linkedin_data.csv` within the project directory.

## Customization

To modify the scraping logic or the data fields being extracted, edit the `linkedin_extractor.py` file. Adjust the selectors and parsing logic as needed to capture additional information.

## Legal and Ethical Considerations

Please be aware that scraping LinkedIn data may violate LinkedIn's [Terms of Service](https://www.linkedin.com/legal/user-agreement). Use this tool responsibly and ensure compliance with all applicable laws and regulations.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance the functionality of this tool.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

_Note: This README is a general template. Please customize it to accurately reflect the specifics of your project._
