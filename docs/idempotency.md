# Idempotency & Safe Re-runs

- **Store the created event’s** `calendarEventId` and `calendarEventLink` back into the sheet.
- On retries:
  - If `calendarEventId` exists, **update** the event instead of creating a new one.
  - If status is already `Confirmed` with a valid event link, **skip** creation.
- Keep `Index` stable so write-backs target the correct source row.
