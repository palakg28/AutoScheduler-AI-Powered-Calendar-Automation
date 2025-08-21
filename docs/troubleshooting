# Troubleshooting

**No events created**
- Check OAuth credentials for Sheets/Calendar.
- Verify `startRFC/endRFC` are valid RFC 3339 strings with timezone (`+09:00`).

**Wrong or missing wards/postals**
- Ensure Maps Geocoding API key is set.
- Confirm the address is URL-encoded before the HTTP request.

**Overlaps still occur**
- Confirm `REST_MINUTES` is applied to both existing jobs and the candidate slot.
- Verify staff IDs are normalized (e.g., `"7.0"` → `"7"`).

**Write-back not happening**
- Ensure the Google Sheets node uses `row_number = Index`.
- Check sheet permissions and matching column config.
