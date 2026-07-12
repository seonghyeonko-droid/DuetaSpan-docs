# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Lukas",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "home",
#       "text": "User's home address is 65 Pine Court."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Giaen, how are you doing today? | S2 Wow, that's… a lot. | S3 Oh, the YMCA. That’s good. | S4 [laugh] That sounds messy!

     0.00s  user  발화 시작: Hi Giaen, how are you doing today?
     2.69s  agent 발화 시작: I’m doing very well, thank you for asking. It’s a lovely day
     2.69s  user  발화 끝
    10.37s  user  발화 시작: That sounds nice. Uh, who pays for Medicaid?
    10.37s  agent 발화 끝
    13.20s  <ret> 발화 (turn3 첫 프레임)
    13.44s  agent 발화 시작: <ret> The costs of Medicaid are shared by states and the fed
    13.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: States and the federal government share the costs of Medicaid, with st
    13.44s  user  발화 끝
    21.50s  user  발화 시작: Yeah.
    21.50s  agent 발화 끝
    21.89s  user  발화 시작: Oh, okay. And what about childcare costs these days?
    21.89s  user  발화 끝
    25.34s  agent 발화 시작: Childcare costs can certainly be a worry for families. Are y
    25.34s  user  발화 끝
    33.41s  user  발화 시작: Just generally, how much does it cost on average?
    33.41s  agent 발화 끝
    36.54s  <ret> 발화 (turn8 첫 프레임)
    36.86s  agent 발화 시작: <ret> According to Child Care Aware of America in 2023, the 
    36.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.30s]: The average annual cost of center-based infant care is $10,810, accord
    36.86s  user  발화 끝
    44.16s  user  발화 시작: Wow, that's… a lot.
    44.16s  agent 발화 끝
    45.69s  agent 발화 시작: It is a significant expense, yes. Many families find it help
    45.69s  user  발화 끝
    52.60s  user  발화 시작: Uh-huh.
    52.60s  agent 발화 끝
    52.99s  user  발화 시작: Do you know about summer camps?
    52.99s  user  발화 끝
    55.29s  agent 발화 시작: Summer camps can be a wonderful experience for children! I c
    55.29s  user  발화 끝
    62.20s  user  발화 시작: Yeah, could you search for camps near me?
    62.20s  agent 발화 끝
    64.88s  <ret> 발화 (turn15 첫 프레임)
    65.28s  agent 발화 시작: <ret> YMCA of the USA offers a wide variety of summer camps 
    65.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) YMCA of the USA offers a wide variety of summer camps ac
    65.28s  user  발화 끝
    71.80s  user  발화 시작: Oh, the YMCA. That’s good.
    71.80s  agent 발화 끝
    73.72s  agent 발화 시작: They often have programs tailored to different age groups an
    73.72s  user  발화 끝
    80.64s  user  발화 시작: What about, um, activities we can do at home?
    80.64s  agent 발화 끝
    84.09s  agent 발화 시작: There are so many fun and engaging activities you can do at 
    84.09s  user  발화 끝
    92.54s  user  발화 시작: Yeah.
    92.54s  agent 발화 끝
    92.92s  user  발화 시작: My daughter is six.
    92.92s  user  발화 끝
    94.38s  <ret> 발화 (turn22 첫 프레임)
    94.46s  agent 발화 시작: <ret> At six, she’s at a wonderful age for imaginative play 
    94.46s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.91s]: The current price of Bitcoin is $62,843.78 USD, as of July 10, 2026, 2
    94.46s  user  발화 끝
   101.37s  agent 발화 시작: Building a fort can foster creativity and problem-solving sk
   101.37s  agent 발화 끝
   107.13s  user  발화 시작: Yeah.
   107.13s  agent 발화 끝
   107.51s  user  발화 시작: That's a good idea! Is there anything educational we could d
   107.51s  user  발화 끝
   111.74s  agent 발화 시작: You could try simple science experiments, like making a volc
   111.74s  user  발화 끝
   117.50s  user  발화 시작: Yeah, totally.
   117.50s  agent 발화 끝
   118.26s  user  발화 시작: [laugh] That sounds messy!
   118.26s  user  발화 끝
   119.80s  agent 발화 시작: It can be, but that’s part of the fun! Learning through hand
   119.80s  user  발화 끝
   126.33s  user  발화 시작: Okay.
   126.33s  agent 발화 끝
   126.71s  user  발화 시작: What's the weather like in Seattle?
   126.71s  user  발화 끝
   128.94s  <ret> 발화 (turn32 첫 프레임)
   129.02s  agent 발화 시작: <ret> In Seattle, Washington, it’s currently 21.1°C, with hu
   129.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.68s]: (tool result) Seattle, WA: 21.1°C, humidity 68%, wind 3.1 km/h, clear 
   129.02s  user  발화 끝
   136.70s  user  발화 시작: Wow.
   136.70s  agent 발화 끝
   137.08s  user  발화 시작: Oh, that’s nice.
   137.08s  user  발화 끝
   138.23s  agent 발화 시작: A pleasant day for a picnic, perhaps? It’s lovely when the w
   138.23s  user  발화 끝
   144.38s  agent 발화 끝
