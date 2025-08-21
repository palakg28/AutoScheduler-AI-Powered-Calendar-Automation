flowchart LR
T[Sheets Trigger (new row)] --> I[Add Index]
I --> N[Normalize + detect needsAPI]
N -->|needsAPI=true| ENC[Encode address] --> GEO[Geocode (Maps)]
N -->|needsAPI=false| PASS[Pass-through]
GEO --> M1[Merge geocoded+original]
PASS --> M1
M1 --> S[Sort by Index]

S --> CF[Filter Confirmed ≥ 2025-07-01]
S --> PD[Filter Pending ≥ 2025-07-01]

CF --> ST[Read Staff Sheet] --> A2[Aggregate Staff]
CF --> A1[Aggregate Confirmed]
CF --> RFC1[Build RFC 3339 (confirmed)] --> CAL1[Create Mock Calendar Events]

PD --> M2[Merge Pending × Confirmed] --> M3[+ Staff List]
M3 --> ASSIGN[Assign Staff (cap/rest/proximity)]
ASSIGN --> CLEAN[Drop large arrays]
CLEAN --> RFC2[Build RFC 3339 (assigned)] --> CAL2[Create Final Calendar Events]
CAL2 --> WB[Write back Status=Confirmed (+eventId) to Sheet]
