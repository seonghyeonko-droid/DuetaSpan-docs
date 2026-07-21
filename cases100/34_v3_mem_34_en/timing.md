# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Nina",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "skill",
#       "text": "User is quite experienced with film photography."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "sibling",
#       "text": "User has a younger sibling named Sofia."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "child",
#       "text": "User has a child named Daniel, age 6."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Thunalo, nice to meet you. I'm  | S2 I drive, a Hyundai Tucson. It’s ju | S3 Hmm, maybe. But my boss is pretty  | S4 …Wait, do you know if there’s park

     0.00s  agent 발화 시작: Hi Nina, I'm Thunalo!
     2.44s  agent 발화 끝
     2.57s  user  발화 시작: Hi Thunalo, nice to meet you. I'm feeling really stressed ab
     8.04s  agent 발화 시작: Commutes can be tough, absolutely. Do you drive, take public
     8.07s  user  발화 끝
    14.72s  agent 발화 끝
    14.78s  user  발화 시작: I drive, a Hyundai Tucson. It’s just… so much traffic.
    18.86s  <ret> 발화 (turn4 첫 프레임)
    19.33s  agent 발화 시작: <ret> You’re a morning person, waking up at 5:30 AM for a ru
    19.42s  user  발화 끝
    20.15s  ⚡SPAN 주입 [d'=1.29s / d_lead=9.18s]: [2026-02-11] User usually wakes up at 5:30am for a run.
    24.13s  user  발화 시작: Yeah.
    24.63s  user  발화 끝
    28.51s  agent 발화 끝
    29.03s  user  발화 시작: Hmm, maybe. But my boss is pretty strict about start times.
    31.14s  agent 발화 시작: Uh-huh.
    31.96s  agent 발화 끝
    33.39s  agent 발화 시작: [sigh] That sounds frustrating, Nina. It’s tough when you ca
    33.52s  user  발화 끝
    37.18s  user  발화 시작: Yeah.
    37.81s  user  발화 끝
    38.76s  <ret> 발화 (turn10 첫 프레임)
    39.13s  agent 발화 시작: <ret> I wonder if exploring alternative routes might help? W
    39.36s  agent 발화 끝
    39.95s  ⚡SPAN 주입 [d'=1.19s / d_lead=6.30s]: (tool result) Traffic from 123 Main St, San Francisco to 456 Market St
    45.26s  agent 발화 시작: Currently, the drive is looking at fifty-five minutes, but t
    45.43s  agent 발화 끝
    52.99s  user  발화 시작: …Wait, do you know if there’s parking near my office? It’s g
    53.64s  agent 발화 끝
    56.60s  agent 발화 시작: Mhm.
    57.32s  agent 발화 끝
    58.19s  <ret> 발화 (turn14 첫 프레임)
    58.27s  user  발화 끝
    58.55s  agent 발화 시작: <ret> There are spaces at 5th & Market for thirty-five dolla
    59.01s  ⚡SPAN 주입 [d'=0.81s / d_lead=8.44s]: (tool result) Parking at 5th & Market Garage: $35/day, 20 spaces avail
    66.99s  agent 발화 끝
