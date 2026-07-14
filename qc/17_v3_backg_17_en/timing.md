# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Hugo",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "anniversary",
#       "text": "User's anniversary is December 9."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "learning",
#       "text": "User is taking an online data-science course."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "dish",
#       "text": "User's go-to comfort dish is grilled salmon."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "pet",
#       "text": "User has a Border Collie named Ziggy."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "partner",
#       "text": "User's partner is named Ava."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-03-17",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Bear, do you know about the fea | S2 Lepanto… wasn't that a naval battl | S3 Not really, just curious about the | S4 Oh wow, September 28th… close to t

     0.00s  user  발화 시작: Hi Bear, do you know about the feast day for Mary's most hol
     4.64s  <ret> 발화 (turn1 첫 프레임)
     4.94s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.34s]: The feast of the Most Holy Name of Mary is celebrated annually on Sept
     5.22s  agent 발화 시작: <ret> Hello! Yes, the feast day commemorating the Most Holy 
     5.22s  user  발화 끝
    11.56s  user  발화 시작: Oh, September twelfth? That's interesting.
    11.56s  agent 발화 끝
    13.42s  agent 발화 시작: It is a lovely day to remember her, and a relatively recent 
    13.42s  user  발화 끝
    19.39s  user  발화 시작: Yeah.
    19.39s  agent 발화 끝
    19.76s  user  발화 시작: What's the history behind it?
    19.76s  user  발화 끝
    21.48s  <ret> 발화 (turn6 첫 프레임)
    21.58s  ⚡SPAN 주입 [d'=0.77s / d_lead=8.20s]: The feast was formally instituted by Pope Gregory XIII in 1587, initia
    21.62s  agent 발화 시작: <ret> The feast was formally established by Pope Gregory XII
    21.62s  user  발화 끝
    29.83s  user  발화 시작: Lepanto… wasn't that a naval battle?
    29.83s  agent 발화 끝
    32.06s  agent 발화 시작: That’s right! It was a major naval battle, a significant vic
    32.06s  user  발화 끝
    39.15s  user  발화 시작: Yeah, yeah.
    39.15s  agent 발화 끝
    39.89s  agent 발화 시작: It was believed the victory was due to prayers to Mary, henc
    39.89s  user  발화 끝
    45.49s  user  발화 시작: Yeah.
    45.49s  agent 발화 끝
    45.86s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    45.86s  user  발화 끝
    49.96s  agent 발화 시작: [curious] Speaking of remembrance, are you planning any spec
    49.96s  user  발화 끝
    54.43s  user  발화 시작: Not really, just curious about the date. I’m thinking of goi
    54.43s  agent 발화 끝
    60.77s  agent 발화 시작: Yeah.
    60.77s  user  발화 끝
    61.14s  agent 발화 시작: That sounds fun! What kind of music do you enjoy?
    61.14s  agent 발화 끝
    64.87s  user  발화 시작: Yeah, yeah.
    64.87s  agent 발화 끝
    65.62s  user  발화 시작: I like jazz, especially Miles Davis.
    65.62s  user  발화 끝
    67.41s  <ret> 발화 (turn19 첫 프레임)
    67.80s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.95s]: Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an Ameri
    67.86s  agent 발화 시작: <ret> Miles Dewey Davis the Third, born May twenty-sixth, ni
    67.86s  user  발화 끝
    76.80s  user  발화 시작: Yeah, totally.
    76.80s  agent 발화 끝
    77.55s  user  발화 시작: Oh wow, September 28th… close to the feast day!
    77.55s  user  발화 끝
    80.90s  agent 발화 시작: [laugh] It certainly is! Perhaps a musical tribute to Mary, 
    80.90s  user  발화 끝
    85.75s  user  발화 시작: Yeah.
    85.75s  agent 발화 끝
    86.12s  user  발화 시작: Maybe! Do you have any advice on sticking to a budget when y
    86.12s  user  발화 끝
    93.95s  agent 발화 시작: The 50/30/20 rule can be helpful – 50% needs, 30% wants, and
    93.95s  user  발화 끝
   100.29s  agent 발화 끝
