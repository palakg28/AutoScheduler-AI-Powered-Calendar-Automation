# Assignment Rules

- **DAILY_CAP = 3** jobs/staff/day.
- **REST_MINUTES = 60** (buffer both sides of a job).
- **No overlaps** allowed after applying buffers.
- **Proximity**:
  - prefer **same ward** (normalized names: strip “City”/“-ku”),
  - else prefer **same postal prefix** (first 3 digits).
- **Tie-breakers**: lowest current load → random.
- **Temporary restriction**: only staff IDs `{7, 32, 38}` (John, Marjorie, Teresa).
- **Fallback**: if no candidate meets constraints, pick least-loaded under cap and set `assignment_conflict=true`.
