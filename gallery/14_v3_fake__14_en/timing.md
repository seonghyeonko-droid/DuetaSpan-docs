# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Sky",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "home",
#       "text": "User's home address is 812 Maple Drive."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Nura, I'm planning a trip to In | S2 Maybe. Um, what about finding hote | S3 Hmm, Sea Breeze sounds good. | S4 Welll… I’m trying to remember when

     0.00s  user  발화 시작: Hi Nura, I'm planning a trip to India.
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.02s  <ret> 발화 (turn7 첫 프레임)
     0.03s  agent 발화 시작: Hello! India is wonderful.
     0.03s  user  발화 끝
     0.04s  <ret> 발화 (turn13 첫 프레임)
     0.05s  user  발화 시작: I was wondering about the railway network there.
     0.05s  agent 발화 끝
     0.08s  agent 발화 시작: <ret> The Indian railway network is quite extensive.
     0.08s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: The Indian railway network connects about 7,349 stations across the co
     0.08s  user  발화 끝
     0.09s  <ret> 발화 (turn17 첫 프레임)
     0.10s  agent 발화 시작: It connects approximately seven thousand three hundred and f
     0.10s  agent 발화 끝
     0.15s  user  발화 시작: Yeah.
     0.15s  agent 발화 끝
     0.16s  user  발화 시작: Wow, that’s a lot of stations.
     0.16s  user  발화 끝
     0.18s  agent 발화 시작: <ret> It really is—a vast system to explore.
     0.18s  ⚡SPAN 주입(IRRELEVANT) [d'=0.03s / d_lead=0.03s]: The current price of Apple stock is 173.25 USD, up 0.89% from yesterda
     0.18s  user  발화 끝
     0.21s  agent 발화 시작: Perhaps we could discuss potential routes later?
     0.21s  agent 발화 끝
     0.23s  user  발화 시작: Uh-huh.
     0.23s  agent 발화 끝
     0.24s  user  발화 시작: Maybe. Um, what about finding hotels near the stations?
     0.24s  user  발화 끝
     0.27s  agent 발화 시작: I can certainly help you find hotels. Do you have a station 
     0.27s  user  발화 끝
     0.33s  user  발화 시작: Not yet, but I’ll be arriving in Mumbai.
     0.33s  agent 발화 끝
     0.36s  agent 발화 시작: <ret> I found one hundred and twenty-three hotels in Mumbai,
     0.36s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 123 hotels found in Mumbai, starting from ₹1,500 per nig
     0.36s  user  발화 끝
     0.37s  <ret> 발화 (turn22 첫 프레임)
     0.43s  user  발화 시작: Yeah.
     0.43s  agent 발화 끝
     0.43s  agent 발화 시작: Would you like me to filter those by price or rating?
     0.43s  user  발화 끝
     0.47s  user  발화 시작: Price, please. Lowest first.
     0.47s  agent 발화 끝
     0.49s  agent 발화 시작: <ret> Hotel Sea Breeze is available for one thousand five hu
     0.49s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Hotel Sea Breeze: ₹1,500, rating 3.8. Hotel City View: ₹
     0.49s  user  발화 끝
     0.61s  user  발화 시작: Mm-hmm.
     0.61s  agent 발화 끝
     0.61s  user  발화 시작: Hmm, Sea Breeze sounds good.
     0.61s  user  발화 끝
     0.63s  agent 발화 시작: It’s a popular choice for visitors.
     0.63s  user  발화 끝
     0.65s  user  발화 시작: Is it possible to book that one through you?
     0.65s  agent 발화 끝
     0.69s  agent 발화 시작: <ret> Your room at Hotel Sea Breeze is booked. Your confirma
     0.69s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Hotel Sea Breeze booked. Confirmation ID: HB7492. Check-
     0.69s  user  발화 끝
     0.76s  user  발화 시작: Great! That’s really helpful.
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: I’m glad I could assist you.
     0.77s  user  발화 끝
     0.80s  user  발화 시작: Yeah.
     0.80s  agent 발화 끝
     0.80s  user  발화 시작: Welll… I’m trying to remember when I booked my flights.
     0.80s  user  발화 끝
     0.84s  agent 발화 시작: [sigh] I do not have that information stored.
     0.84s  user  발화 끝
     0.87s  user  발화 시작: Uh-huh.
     0.87s  agent 발화 끝
     0.87s  user  발화 시작: Oh right. I didn't tell you.
     0.87s  user  발화 끝
     0.90s  agent 발화 시작: Perhaps I could help you search for flight information?
     0.90s  user  발화 끝
     0.93s  user  발화 시작: Right.
     0.93s  agent 발화 끝
     0.93s  user  발화 시작: No, that’s okay. I found it. Thanks again, Nura.
     0.93s  user  발화 끝
     0.97s  agent 발화 시작: You’re very welcome. Enjoy your trip to India!
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
