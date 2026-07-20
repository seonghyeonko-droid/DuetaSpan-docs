# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Taylor",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "mid 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "phone",
#       "text": "User uses a Galaxy S24."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Frona, I'm trying to plan some  | S2 That sounds good… | S3 …but I'm also trying to increase m | S4 Okay, great. And can you quickly c

     0.00s  user  발화 시작: Hi Frona, I'm trying to plan some healthy meals for the week
     7.13s  <ret> 발화 (turn1 첫 프레임)
     7.19s  user  발화 끝
     7.20s  agent 발화 시작: <ret> A really good way to get started is baking a six-ounce
     8.00s  ⚡SPAN 주입 [d'=0.86s / d_lead=17.35s]: Roasted salmon with vegetables is a healthy and delicious meal. A simp
    24.55s  agent 발화 끝
    24.65s  user  발화 시작: That sounds good…
    25.98s  user  발화 끝
    28.05s  user  발화 시작: …but I'm also trying to increase my water intake. How much w
    29.98s  agent 발화 시작: Yeah.
    30.61s  agent 발화 끝
    32.97s  <ret> 발화 (turn5 첫 프레임)
    33.44s  ⚡SPAN 주입 [d'=1.50s / d_lead=11.59s]: (tool result) The general recommendation for daily water intake is aro
    33.50s  agent 발화 시작: <ret> The general recommendation is around eight glasses, or
    33.65s  user  발화 끝
    45.09s  agent 발화 끝
    45.23s  user  발화 시작: Okay, great. And can you quickly check the weather in Busan 
    47.32s  agent 발화 시작: Yeah.
    47.95s  agent 발화 끝
    49.02s  agent 발화 시작: Give me a moment while I check the forecast for Busan.
    49.12s  user  발화 끝
    51.04s  ⚡지연 SPAN 주입(선제발표 직전): Busan: Tomorrow: 26.5°C, humidity 78%, wind 4.2 km/h, chance of rain 1
    52.15s  agent 발화 시작: <ret> Just got the forecast for you! Tomorrow in Busan it wi
    52.21s  agent 발화 끝
    65.41s  agent 발화 끝
