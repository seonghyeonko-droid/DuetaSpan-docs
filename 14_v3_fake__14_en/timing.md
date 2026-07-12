# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Freya",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "home",
#       "text": "User's home address is 68 Elm Street."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Nono, I’m thinking about gettin | S2 The seventies… okay. Were there ot | S3 That sounds cool. Is roots reggae  | S4 …is there a good documentary about

     0.00s  user  발화 시작: Hi Nono, I’m thinking about getting into reggae music.
     3.67s  agent 발화 시작: Hello! That’s wonderful – reggae is such a vibrant genre. Wh
     3.67s  user  발화 끝
    10.19s  user  발화 시작: Well, I was wondering who really popularized it?
    10.19s  agent 발화 끝
    13.13s  <ret> 발화 (turn3 첫 프레임)
    13.45s  agent 발화 시작: <ret> Bob Marley is widely credited with popularizing reggae
    13.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.34s]: Bob Marley is widely credited with popularizing reggae music internati
    13.45s  user  발화 끝
    20.78s  user  발화 시작: Oh, interesting. What kind of reggae did he play mostly?
    20.78s  agent 발화 끝
    24.70s  <ret> 발화 (turn5 첫 프레임)
    24.86s  agent 발화 시작: <ret> He primarily performed and popularized roots reggae, a
    24.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.15s]: Marley primarily performed and popularized roots reggae, a subgenre kn
    24.86s  user  발화 끝
    33.01s  user  발화 시작: Roots reggae, huh? Never heard of that subgenre.
    33.01s  agent 발화 끝
    36.27s  agent 발화 시작: It’s a core part of reggae’s history, often focusing on spir
    36.27s  user  발화 끝
    41.57s  user  발화 시작: Mm-hmm.
    41.57s  agent 발화 끝
    41.98s  user  발화 시작: Sounds heavy! Was it popular right away?
    41.98s  user  발화 끝
    44.59s  <ret> 발화 (turn10 첫 프레임)
    44.83s  agent 발화 시작: <ret> Roots reggae gained significant popularity in the 1970
    44.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Roots reggae gained significant popularity in the 1970s, coinciding wi
    44.83s  user  발화 끝
    52.57s  user  발화 시작: The seventies… okay. Were there other artists doing roots re
    52.57s  agent 발화 끝
    56.90s  <ret> 발화 (turn12 첫 프레임)
    57.06s  agent 발화 시작: <ret> Artists like Burning Spear, Peter Tosh, and Bunny Wail
    57.06s  ⚡SPAN 주입 [d'=0.96s / d_lead=8.56s]: Artists like Burning Spear, Peter Tosh, and Bunny Wailer were also pro
    57.06s  user  발화 끝
    65.61s  user  발화 시작: Yeah, yeah.
    65.61s  agent 발화 끝
    66.43s  user  발화 시작: So it wasn’t *just* Bob Marley?
    66.43s  user  발화 끝
    68.87s  agent 발화 시작: Not at all! He was incredibly influential, but he was part o
    68.87s  user  발화 끝
    76.21s  user  발화 시작: Right.
    76.21s  agent 발화 끝
    76.62s  user  발화 시작: I see. What kind of instruments are used in roots reggae?
    76.62s  user  발화 끝
    80.94s  <ret> 발화 (turn18 첫 프레임)
    81.10s  agent 발화 시작: <ret> Roots reggae typically features instruments like the b
    81.10s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.15s]: Roots reggae typically features instruments like the bass guitar, drum
    81.10s  user  발화 끝
    89.25s  user  발화 시작: What makes the bass so important?
    89.25s  agent 발화 끝
    91.70s  agent 발화 시작: It provides the rhythmic foundation, a really deep and groun
    91.70s  user  발화 끝
    98.22s  user  발화 시작: Yeah, yeah.
    98.22s  agent 발화 끝
    99.03s  user  발화 시작: That sounds cool. Is roots reggae still around today?
    99.03s  user  발화 끝
   102.38s  <ret> 발화 (turn23 첫 프레임)
   102.70s  agent 발화 시작: <ret> While its peak was in the 1970s, roots reggae continue
   102.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.37s]: While its peak was in the 1970s, roots reggae continues to influence c
   102.70s  user  발화 끝
   112.07s  user  발화 시작: So it’s had a lasting impact?
   112.07s  agent 발화 끝
   114.52s  agent 발화 시작: It’s the foundation for a lot of the reggae you hear now, ev
   114.52s  user  발화 끝
   121.04s  user  발화 시작: I might check out some of those other artists you mentioned.
   121.04s  agent 발화 끝
   125.52s  agent 발화 시작: That’s a fantastic idea! You’ll find a lot to enjoy explorin
   125.52s  user  발화 끝
   130.82s  user  발화 시작: Do you have any recommendations for where to start?.
   130.82s  agent 발화 끝
   134.49s  agent 발화 시작: I do! Burning Spear’s “Marcus Garvey” is a classic, and Pete
   134.49s  user  발화 끝
   141.01s  user  발화 시작: …is there a good documentary about Bob Marley I could watch?
   141.01s  agent 발화 끝
   145.25s  <ret> 발화 (turn31 첫 프레임)
   145.49s  agent 발화 시작: <ret> "Bob Marley: One Love" is a 2024 documentary film abou
   145.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.41s]: (tool result) "Bob Marley: One Love" is a 2024 documentary film about 
   145.49s  user  발화 끝
   156.90s  user  발화 시작: 2024? That’s really recent!
   156.90s  agent 발화 끝
   158.13s  <ret> 발화 (turn33 첫 프레임)
   158.53s  agent 발화 시작: <ret> It is! It came out earlier this year, so it’s a very c
   158.53s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.74s]: The current temperature in Reykjavik, Iceland is 8.2°C, with a humidit
   158.53s  user  발화 끝
   166.28s  agent 발화 시작: Sometimes a little research can reveal hidden gems, just lik
   166.28s  agent 발화 끝
   171.98s  user  발화 시작: I think I’ll add that to my list. Is it streaming anywhere?
   171.98s  agent 발화 끝
   176.71s  <ret> 발화 (turn36 첫 프레임)
   176.87s  agent 발화 시작: <ret> "Bob Marley: One Love" is currently available to strea
   176.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.19s]: (tool result) "Bob Marley: One Love" is currently available to stream 
   176.87s  user  발화 끝
   187.06s  user  발화 시작: Right.
   187.06s  agent 발화 끝
   187.47s  user  발화 시작: Perfect! Thanks for all the info, Nono.
   187.47s  user  발화 끝
   190.32s  agent 발화 시작: You’re very welcome! I’m happy to help you on your reggae jo
   190.32s  user  발화 끝
   198.47s  agent 발화 끝
