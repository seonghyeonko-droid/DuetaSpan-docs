# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Sophie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "emergency",
#       "text": "User's emergency contact is Ava."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "dislike",
#       "text": "User can't stand anchovies."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-04-12",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please refund twenty-five dollars  | S2 Yeah, but I’m not sure when to go— | S3 That sounds…warm. | S4 I’m at the Grand Hyatt hotel.

     0.00s  user  발화 시작: Please refund twenty-five dollars and fifty cents for captur
    14.47s  <ret> 발화 (turn1 첫 프레임)
    14.66s  user  발화 끝
    14.68s  agent 발화 시작: <ret> Okay, I’ve created a refund request for twenty-five do
    15.75s  ⚡SPAN 주입 [d'=1.28s / d_lead=18.38s]: (tool result) Refund created: ID R-4567890123, amount $25.50, status p
    21.02s  user  발화 시작: Mhm.
    21.83s  user  발화 끝
    32.88s  user  발화 시작: That’s great, thanks. Uh, I’m thinking about a trip, actuall
    33.05s  agent 발화 끝
    38.35s  user  발화 끝
    38.78s  agent 발화 시작: [happy] Oh, Seoul is a fantastic choice! It's such a vibrant
    43.65s  agent 발화 끝
    44.04s  user  발화 시작: Yeah, but I’m not sure when to go—I was thinking maybe next 
    50.12s  <ret> 발화 (turn6 첫 프레임)
    50.52s  agent 발화 시작: <ret> So, today is July tenth, two thousand twenty-six, whic
    50.71s  user  발화 끝
    51.01s  ⚡SPAN 주입 [d'=0.89s / d_lead=12.06s]: It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul right now.
    59.23s  user  발화 시작: Mhm.
    59.95s  user  발화 끝
    62.40s  agent 발화 시작: It’s a popular tourist season, though, so expect more crowds
    62.59s  agent 발화 끝
    64.50s  user  발화 시작: Yeah.
    64.95s  user  발화 끝
    66.70s  agent 발화 끝
    67.07s  user  발화 시작: Crowds are…okay, I guess. What’s the weather usually like in
    72.47s  <ret> 발화 (turn11 첫 프레임)
    73.44s  agent 발화 시작: <ret> On August fifteenth, two thousand twenty-six, the weat
    73.70s  user  발화 끝
    73.77s  ⚡SPAN 주입 [d'=1.30s / d_lead=14.98s]: (tool result) Seoul, August 15, 2026: 28.5°C, humidity 78%, wind 6.2 k
    88.30s  user  발화 시작: That sounds…warm.
    88.42s  agent 발화 끝
    90.52s  user  발화 끝
    90.71s  agent 발화 시작: [curious] It is! But it's a manageable warmth, especially wi
   100.63s  agent 발화 끝
   101.79s  user  발화 시작: Actually, I need to book a taxi to the airport. My flight is
   107.38s  <ret> 발화 (turn15 첫 프레임)
   107.72s  user  발화 끝
   107.76s  agent 발화 시작: <ret> Next Tuesday is July twenty-first, two thousand twenty
   108.68s  ⚡SPAN 주입 [d'=1.31s / d_lead=8.53s]: It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul right now.
   116.29s  agent 발화 끝
   116.86s  user  발화 시작: I’m at the Grand Hyatt hotel.
   118.58s  <ret> 발화 (turn17 첫 프레임)
   119.07s  agent 발화 시작: <ret> Perfect! A taxi is booked for you, ID TX-seven-eight-n
   119.21s  user  발화 끝
   119.32s  ⚡SPAN 주입 [d'=0.74s / d_lead=21.11s]: (tool result) Taxi booked: ID TX-7890123456, pickup 7:00 PM July 21, G
   140.18s  agent 발화 끝
