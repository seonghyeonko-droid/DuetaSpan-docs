# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Noa",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "dislike",
#       "text": "User can't stand bell peppers."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "sibling",
#       "text": "User has a younger sibling named Daniel."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Frella, do you know when someon | S2 Oh, nineteen ninety-nine… that’s e | S3 Did you remember to take the recyc | S4 Sorry, what were we talking about?

     0.00s  user  발화 시작: Hi Frella, do you know when someone first came up with the t
     7.02s  <ret> 발화 (turn1 첫 프레임)
     7.35s  agent 발화 시작: <ret> Well, that’s a great question! The phrase “Internet of
     7.50s  user  발화 끝
     7.68s  ⚡SPAN 주입 [d'=0.66s / d_lead=11.92s]: Kevin Ashton coined the phrase “Internet of Things” in 1999 while work
    19.27s  agent 발화 끝
    19.38s  user  발화 시작: Oh, nineteen ninety-nine… that’s earlier than I thought.
    22.92s  agent 발화 시작: [curious] It often surprises people! It’s interesting to thi
    23.03s  user  발화 끝
    28.64s  user  발화 시작: Yeah.
    29.13s  user  발화 끝
    31.12s  agent 발화 끝
    31.19s  user  발화 시작: Did you remember to take the recycling out?
    33.89s  user  발화 시작: Sorry, what were we talking about? Oh right, the internet of
    34.10s  user  발화 끝
    37.72s  user  발화 끝
    38.21s  agent 발화 시작: No worries at all. It’s easy to get distracted. Sometimes, l
    46.23s  user  발화 시작: Okay.
    47.20s  user  발화 끝
    49.07s  <ret> 발화 (turn9 첫 프레임)
    49.14s  agent 발화 시작: <ret> It’s good to acknowledge those little shifts in focus.
    49.28s  agent 발화 끝
    49.37s  ⚡SPAN 주입 [d'=0.30s / d_lead=3.42s]: Ashton used the term in a presentation for Procter & Gamble executives
    65.10s  agent 발화 끝
