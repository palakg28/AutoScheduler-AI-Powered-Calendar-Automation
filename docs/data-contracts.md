# Data Contracts

## Bookings (input)
**Required**: `Service`, `Name`, `Date`, `Time`, `Address`, `Status`  
**Derived**: `Index`, `postal_code`, `ward_district`, `Hours` (default 2)

| Field            | Type   | Notes                                               |
|------------------|--------|-----------------------------------------------------|
| Service          | text   | e.g., Express Cleaning                             |
| Name             | text   | client name                                        |
| Date             | date   | `yyyy-mm-dd` or `m/d/yyyy`                         |
| Time             | time   | `HH:MM(:SS)`                                       |
| Address          | text   | full address                                       |
| Status           | enum   | `pending` or `confirmed`                           |
| Hours            | number | optional; defaults to `2`                          |
| postal_code      | text   | regex `###-####` or from geocode                   |
| ward_district    | text   | matched ward name or from geocode                  |
| Index            | int    | stable row index for sorting/write-back            |

## Staff (roster)
| Field     | Type | Notes                  |
|-----------|------|------------------------|
| ID        | int  | unique staff id        |
| FullName  | text | worker name            |
| calendarId| text | Google Calendar id     |

## Write-back (bookings)
- Set `Status = Confirmed`
- **Recommended**: store `calendarEventId`, `calendarEventLink` for idempotency.
