# Overview

**Tokyo Cleaner Calendar Agent** automates the path from spreadsheet bookings to
Google Calendar events. It standardizes addresses, enforces scheduling constraints,
and writes status back to keep one source of truth.

**Why it matters**
- Removes manual scheduling and eliminates human overlap errors.
- Applies **consistent proximity logic** (ward/postal) to reduce travel.
- Creates **auditable** calendar artifacts and keeps the sheet in sync.

**Key components**
- **Trigger**: Google Sheets row-added.
- **Normalize**: rename columns, extract `postal_code` and `ward_district`, mark `needsAPI`.
- **Enrich**: Google Maps Geocoding (only when needed).
- **Prepare**: merge enriched + pass-through; sort deterministically by Index.
- **Two paths**:
  - **Confirmed ≥ 2025-07-01** → mock calendar for visualization.
  - **Pending ≥ 2025-07-01** → attach staff & confirmed context → assign → final calendar.
- **Write-back**: set `Status=Confirmed`; optionally persist `calendarEventId`, `calendarEventLink`.
