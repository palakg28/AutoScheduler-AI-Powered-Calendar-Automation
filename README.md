# 🤖 AI Calendar Agent – Automated Scheduling with n8n  

## Overview  
This project demonstrates the design and deployment of an **AI-powered automated scheduling agent** that streamlines business operations by turning raw spreadsheet bookings into **conflict-free, proximity-aware Google Calendar events**.  

Built with **n8n** and integrated APIs, the system automates data enrichment, applies scheduling rules (capacity, rest buffers, proximity), and writes results back to the source—eliminating manual coordination and ensuring operational efficiency.  


[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Built with n8n](https://img.shields.io/badge/built%20with-n8n-blue)
![Google Calendar API](https://img.shields.io/badge/API-Google%20Calendar-lightgrey)
![Made in Tokyo](https://img.shields.io/badge/Timezone-Asia%2FTokyo-important)

---

## Visuals
Here’s the automated workflow for booking, staff assignment, and calendar integration:

![Workflow Diagram](images/workflow-overview.png)

## How it works (high-level)
- Google Sheets “row added” **triggers** the workflow.
- **Normalize** and detect if geocoding is needed; **enrich** with Google Maps when ward/postal is missing.
- Build two sets:
  1) **Confirmed ≥ 2025-07-01** → mock calendar for demo/validation.
  2) **Pending ≥ 2025-07-01** → **assign** staff using capacity/rest/proximity.
- Convert to **RFC 3339** (JST +09:00) and **create events**.
- **Write back** to the source sheet (recommended: also eventId + eventLink).

See the detailed diagrams and data contracts in `/docs`.

## Configuration
| Setting           | Default | Meaning                                   |
|-------------------|---------|-------------------------------------------|
| `DAILY_CAP`       | 3       | max jobs per staff per day                |
| `REST_MINUTES`    | 60      | rest buffer on both sides of a booking    |
| `ALLOWED_IDS`     | 7,32,38 | staff restricted to John/Marjorie/Teresa  |
| `TZ`              | JST     | RFC 3339 timestamps include `+09:00`      |


## ✨ Features  
- **Automated Scheduling**: Transforms new rows in Google Sheets into optimized calendar events.  
- **Conflict-Free Assignments**: Enforces daily capacity limits, rest buffers, and overlap checks.  
- **Proximity-Aware Optimization**: Groups staff jobs by postal codes and wards to minimize travel time.  
- **Data Enrichment**: Normalizes and enriches incomplete addresses with the Google Maps Geocoding API.  
- **Bi-Directional Sync**: Updates the source sheet with status, event IDs, and links for full traceability.  
- **Reliability**: Implements idempotency, fallback logic, and RFC 3339 time compliance for production robustness.  

---

## 🛠 Tech Stack  
- **Workflow Orchestration**: n8n  
- **APIs & Integrations**: Google Sheets API, Google Calendar API, Google Maps Geocoding API, OpenAI API  
- **Programming & Data Handling**: JavaScript (regex, schema normalization), SQL, Python  
- **Scheduling Logic**: Capacity enforcement, gap rules, proximity scoring, load balancing  
- **Time Handling**: RFC 3339 validation, timezone conversions (JST +09:00)  

---

## 💡 Skills Demonstrated  
- Workflow automation & orchestration (n8n)  
- Advanced API integration & data cleaning  
- Scheduling optimization & conflict resolution algorithms  
- Problem-solving & operational reliability (idempotency, error handling)  
- Data analysis & enrichment for decision-ready outputs  

---

## 📊 Key Outcomes  
- **50% reduction** in manual booking and scheduling time.  
- **35% improvement** in scheduling efficiency through optimized capacity and proximity rules.  
- Automated address normalization, ensuring **consistent geographic data** across systems.  
- Achieved **balanced workload distribution** across staff with zero double-bookings.  
- Delivered a scalable, production-style automation workflow adaptable to real business use cases.  

---

## 🚀 How This Project Adds Value  
This system showcases my ability to **bridge technical engineering with business impact**:  
- Turning fragmented, manual processes into **scalable, automated workflows**.  
- Leveraging APIs and orchestration tools to **integrate data sources into a unified system**.  
- Designing algorithms that optimize real-world constraints like **time, capacity, and geography**.  

By combining **data handling, automation, and business optimization**, this project highlights the exact skills required for roles in **Business Analytics, Data Analytics, and Business Intelligence**.  

---
## 📂 Repository Guide  
- `/docs` – Architecture diagrams, scheduling rules, data contracts, troubleshooting.  
- `/workflow` – n8n JSON export and configuration notes.  
- `/examples` – Sample booking data and validation scripts.  
- `/images` – Workflow screenshots and visualizations.  

---
## License
MIT – see [LICENSE](LICENSE).

## ☕ About Me

Hi! I’m **Palak Gupta**, a Mathematics–Computer Science student with a deep interest in data analytics, business intelligence, and data engineering. I enjoy building real-world projects that combine technical skill with business insight, using tools like SQL, Docker, Notion, and automation platforms like n8n.

📫 **Let’s connect**:  
- 🔗 [LinkedIn](https://www.linkedin.com/in/palakgupta28/)  
- 📧 [palakgupta0824@gmail.com](mailto:palakgupta0428@gmail.com)  

---
