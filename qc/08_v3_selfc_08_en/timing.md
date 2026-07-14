# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Andrea",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Vietnamese."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "diet",
#       "text": "User is kosher."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "medication",
#       "text": "User takes a statin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-03-30",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to build a better morni | S2 Actually… I'm going to Seoul next  | S3 Sounds pleasant. I also need to bo | S4 I mean, a restaurant with a view o

     0.00s  user  발화 시작: I’m trying to build a better morning routine…
     3.18s  user  발화 시작: …and I keep forgetting to check the weather.
     3.18s  user  발화 끝
     6.35s  agent 발화 시작: Yeah.
     6.35s  user  발화 끝
     6.75s  agent 발화 시작: I can certainly help with that! A consistent morning sets a 
     6.75s  agent 발화 끝
    11.91s  user  발화 시작: Mm-hmm.
    11.91s  agent 발화 끝
    12.31s  user  발화 시작: That’s true. I was thinking, maybe a quick weather update as
    12.31s  user  발화 끝
    18.13s  <ret> 발화 (turn7 첫 프레임)
    18.26s  agent 발화 시작: Yeah.
    18.26s  user  발화 끝
    18.66s  agent 발화 시작: <ret> Busan’s looking lovely this morning, with a temperatur
    18.66s  agent 발화 끝
    18.95s  ⚡SPAN 주입 [d'=0.82s / d_lead=5.96s]: The current weather in Busan is 26.0°C, with humidity at 78% and a gen
    24.62s  user  발화 시작: Right.
    24.62s  agent 발화 끝
    25.01s  user  발화 시작: Actually… I'm going to Seoul next week, not Busan.
    25.01s  user  발화 끝
    28.42s  <ret> 발화 (turn10 첫 프레임)
    28.59s  agent 발화 시작: <ret> My apologies! You’re heading to Seoul next week, so le
    28.59s  user  발화 끝
    28.72s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.75s]: The current weather in Seoul is 24.0°C, with humidity at 65% and a mod
    35.34s  user  발화 시작: Yeah.
    35.34s  agent 발화 끝
    35.73s  user  발화 시작: That’s better. Can you remind me of the forecast for next Tu
    35.73s  user  발화 끝
    40.49s  <ret> 발화 (turn13 첫 프레임)
    40.50s  agent 발화 시작: <ret> Next Tuesday in Seoul will be 27.5°C, partly cloudy, w
    40.50s  user  발화 끝
    41.63s  ⚡SPAN 주입 [d'=1.48s / d_lead=5.16s]: (tool result) {"city": "Seoul", "date": "2026-07-15", "temperature": "
    45.66s  user  발화 시작: Mm-hmm.
    45.66s  agent 발화 끝
    46.06s  user  발화 시작: Sounds pleasant. I also need to book a restaurant for dinner
    46.06s  user  발화 끝
    51.22s  agent 발화 시작: Right.
    51.22s  user  발화 끝
    51.61s  agent 발화 시작: —something that fits easily into your schedule, right? I can
    51.61s  agent 발화 끝
    57.17s  user  발화 시작: Yes! Somewhere near Myeongdong. I’m thinking Korean BBQ.
    57.17s  agent 발화 끝
    60.16s  <ret> 발화 (turn19 첫 프레임)
    60.29s  ⚡SPAN 주입 [d'=0.94s / d_lead=6.35s]: {"city": "Seoul", "cuisine": "Korean BBQ", "area": "Myeongdong", "resu
    60.35s  agent 발화 시작: <ret> Wangbijib Myeongdong Main Store has a 4.5-star rating 
    60.35s  user  발화 끝
    66.70s  user  발화 시작: Yeah, yeah.
    66.70s  agent 발화 끝
    67.50s  user  발화 시작: …Actually, is there anything with a view?
    67.50s  user  발화 끝
    70.28s  agent 발화 시작: That’s a great idea!—
    70.28s  user  발화 끝
    71.86s  user  발화 시작: I mean, a restaurant with a view of the city.
    71.86s  agent 발화 끝
    75.83s  agent 발화 시작: Yeah.
    75.83s  user  발화 끝
    75.99s  <ret> 발화 (turn25 첫 프레임)
    76.17s  ⚡SPAN 주입 [d'=1.18s / d_lead=5.96s]: {"city": "Seoul", "cuisine": "Korean BBQ", "area": "Myeongdong", "view
    76.23s  agent 발화 시작: <ret> Skyline Korean BBQ, rated 4.2 stars, offers a city vie
    76.23s  agent 발화 끝
    82.19s  user  발화 시작: Yeah.
    82.19s  agent 발화 끝
    82.58s  user  발화 시작: Perfect! Let’s book a table for two at 7 PM.
    82.58s  user  발화 끝
    86.55s  agent 발화 시작: Yeah.
    86.55s  user  발화 끝
    86.91s  <ret> 발화 (turn29 첫 프레임)
    86.95s  agent 발화 시작: <ret> Excellent! Your table for two at Skyline Korean BBQ is
    86.95s  agent 발화 끝
    87.74s  ⚡SPAN 주입 [d'=0.83s / d_lead=7.94s]: (tool result) {"restaurant": "Skyline Korean BBQ", "date": "2026-07-15
    94.89s  agent 발화 시작: That should make for a lovely evening. Building routines is 
    94.89s  agent 발화 끝
   101.64s  agent 발화 끝
