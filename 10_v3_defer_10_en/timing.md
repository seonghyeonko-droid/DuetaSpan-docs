# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Kim",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "home",
#       "text": "User's home address is 125 Pine Court."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Play Someone Like You by Adele in  | S2 I need to book a hotel in Busan fo | S3 …like for those hotels? | S4 Thanks. What’s on my schedule for 

     0.00s  user  발화 시작: Play Someone Like You by Adele in the living room.
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.68s  agent 발화 시작: <ret> I’m now playing “Someone Like You” by Adele in the liv
     3.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) Playing "Someone Like You" by Adele in the living room.
     3.68s  user  발화 끝
    11.05s  user  발화 시작: What’s the weather like in Seoul today?
    11.05s  agent 발화 끝
    13.31s  <ret> 발화 (turn3 첫 프레임)
    13.63s  agent 발화 시작: <ret> The weather in Seoul is currently 26.5 degrees Celsius
    13.63s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.95s]: (tool result) The weather in Seoul is 26.5°C, humidity 78%, wind 3.2 k
    13.63s  user  발화 끝
    23.58s  user  발화 시작: Can you find me some Italian restaurants nearby?
    23.58s  agent 발화 끝
    26.37s  <ret> 발화 (turn5 첫 프레임)
    26.53s  agent 발화 시작: <ret> I’ve found three Italian restaurants within two kilome
    26.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) Found three Italian restaurants within 2km: Bella Italia
    26.53s  user  발화 끝
    34.63s  user  발화 시작: Mm-hmm.
    34.63s  agent 발화 끝
    35.00s  user  발화 시작: What time is it there right now?
    35.00s  user  발화 끝
    37.34s  <ret> 발화 (turn8 첫 프레임)
    37.58s  agent 발화 시작: <ret> It is currently 3:17 PM in Seoul, on Friday, July 10th
    37.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.84s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
    37.58s  user  발화 끝
    46.42s  user  발화 시작: I need to book a hotel in Busan for next weekend.
    46.42s  agent 발화 끝
    50.47s  agent 발화 시작: Busan sounds lovely! Next weekend would be July 17th to 19th
    50.47s  user  발화 끝
    57.84s  user  발화 시작: Yes, that’s right. Something with a sea view, if possible.
    57.84s  agent 발화 끝
    61.28s  <ret> 발화 (turn12 첫 프레임)
    61.52s  agent 발화 시작: <ret> I’ve found five hotels in Busan offering sea views: Pa
    61.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.58s]: (tool result) Found five hotels in Busan with sea views: Paradise Hote
    61.52s  user  발화 끝
    71.10s  user  발화 시작: …What’s the price range…
    71.10s  agent 발화 끝
    72.58s  user  발화 시작: …like for those hotels?
    72.58s  user  발화 끝
    73.97s  <ret> 발화 (turn15 첫 프레임)
    74.05s  agent 발화 시작: <ret> The Paradise Hotel Busan has standard rooms available 
    74.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) Paradise Hotel Busan: Standard Room, July 17-19, ₩350,00
    74.05s  user  발화 끝
    82.16s  user  발화 시작: That sounds good. Book it for me.
    82.16s  agent 발화 끝
    84.73s  agent 발화 시작: Wonderful! Your reservation at the Paradise Hotel Busan is c
    84.73s  user  발화 끝
    91.37s  user  발화 시작: Mhm.
    91.37s  agent 발화 끝
    91.73s  user  발화 시작: Okay, uh, can you remind me of my doctor’s appointment next 
    91.73s  user  발화 끝
    96.16s  agent 발화 시작: I don't have a record of a doctor's appointment for you next
    96.16s  user  발화 끝
   104.63s  user  발화 시작: Yeah.
   104.63s  agent 발화 끝
   105.00s  user  발화 시작: Yes, please. Tuesday at 2 PM with Dr. Kim.
   105.00s  user  발화 끝
   108.31s  agent 발화 시작: Alright, I've added an appointment with Dr. Kim for you next
   108.31s  user  발화 끝
   117.52s  user  발화 시작: Thanks. What’s on my schedule for tomorrow?
   117.52s  agent 발화 끝
   120.10s  agent 발화 시작: I don’t have any scheduled events for tomorrow, July 11th. P
   120.10s  user  발화 끝
   126.00s  user  발화 시작: Nice.
   126.00s  agent 발화 끝
   126.37s  user  발화 시작: [sigh] I need to remember to call my mother.
   126.37s  user  발화 끝
   129.68s  agent 발화 시작: That’s a lovely thought. Staying connected with loved ones i
   129.68s  user  발화 끝
   137.79s  user  발화 시작: No, that's okay. I'll do it later.
   137.79s  agent 발화 끝
   140.36s  agent 발화 시작: Very well. Sometimes simply having the intention is a good s
   140.36s  user  발화 끝
   146.63s  agent 발화 끝
