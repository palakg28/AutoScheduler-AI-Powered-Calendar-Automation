# Architecture

- **n8n nodes** orchestrate control flow:
  - Sheets Trigger → Prep Index → Normalize → (If `needsAPI`) Encode → HTTP Geocode → Merge → Finalize → Merge with pass-through → Sort.
  - Split into **Confirmed** and **Pending** branches (cutoff `2025-07-01`).
  - Confirmed → Staff sheet → Aggregate → Build RFC 3339 → Create Mock Calendar events.
  - Pending → Merge confirmed context → Merge staff list → **Assign** → Clean payload → Build RFC 3339 → Create Final Calendar events → (optional) Write-back.

- **Data movement**
  - **Bookings** (input): `Service, Name, Date, Time, Address, Status`, derived: `Index, postal_code, ward_district, Hours`.
  - **Staff**: `ID, FullName, calendarId`.
  - **Output**: RFC 3339 `startRFC/endRFC`, `summary`, `location`, `description`, and updated status.

- **Reliability**
  - Deterministic ordering via `Index`.
  - Optional **idempotency** by storing `calendarEventId`/`calendarEventLink` in the sheet.
  - `assignment_conflict=true` marks any fallback assignment.
